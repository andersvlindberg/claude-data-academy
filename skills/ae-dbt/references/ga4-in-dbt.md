# Modeling the GA4 BigQuery export in dbt

## The raw export (recap, see `ae-web-tracking`)
- Daily tables `events_YYYYMMDD`, plus `events_intraday_YYYYMMDD` when streaming export is on.
- One row per event. `event_params` and `user_properties` are repeated key/value records; `items` is an array for ecommerce.
- `event_timestamp` is microseconds since epoch, UTC.
- `user_pseudo_id` identifies the browser/app instance; `ga_session_id` is an event parameter.

## Source declaration
```yaml
sources:
  - name: ga4
    database: my-gcp-project
    schema: analytics_123456789
    tables:
      - name: events
        identifier: events_*
```

## Staging: flatten what you need
```sql
with source as (
    select * from {{ source('ga4', 'events') }}
    {% if target.name == 'dev' %}
    where _table_suffix >= format_date('%Y%m%d', date_sub(current_date(), interval 7 day))
    {% endif %}
),

flattened as (
    select
        parse_date('%Y%m%d', event_date)                                         as event_date,
        timestamp_micros(event_timestamp)                                         as event_at,
        event_name,
        user_pseudo_id,
        user_id,
        (select value.int_value    from unnest(event_params) where key = 'ga_session_id') as ga_session_id,
        (select value.string_value from unnest(event_params) where key = 'page_location') as page_location,
        traffic_source.source                                                     as first_user_source,
        ecommerce.transaction_id,
        ecommerce.purchase_revenue,
        items
    from source
)

select
    *,
    {{ dbt_utils.generate_surrogate_key(['user_pseudo_id', 'ga_session_id']) }} as session_key
from flattened
```
Note: `traffic_source` holds the user's *first* acquisition source, not the session's. Newer export fields exist for session-level source; check the current GA4 export schema and choose deliberately.

## Downstream models
- `int_ga4__sessions`: one row per `session_key` with start/end time, landing page, session source, engaged flag, event counts.
- `fct_sessions`: sessions with channel grouping and conversion flag.
- `fct_ga4_purchases`: one row per `transaction_id`, deduplicated (GA4 can send duplicates).
- `int_ga4__items`: `unnest(items)` for one row per item per purchase.

## Reconciliation
Compare `fct_ga4_purchases` with the order system per day. A stable gap is expected (consent, ad blockers); a sudden change is an incident. Document the expected gap.
