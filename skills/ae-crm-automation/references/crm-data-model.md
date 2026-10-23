# CRM data model in the warehouse

## Target marts
| Model | Grain | Purpose |
|---|---|---|
| `int_customer_identities` | one row per source identifier | Cross-reference of every id (email hash, customer_id, member_id, support requester id) to a `customer_key` |
| `dim_customers` (golden record) | one row per customer_key | Best-known attributes with survivorship rules |
| `fct_customer_lifecycle_daily` | one row per customer per day (or snapshot) | Lifecycle stage history |
| `mart_crm_sync` | one row per customer_key | The exact fields synced to CRM/automation (ids, stage, scores, consent, suppression) |
| `fct_tickets` | one row per ticket | Service analytics, suppression on open tickets |

## Deduplication (deterministic, email-based)
```sql
with contacts as (
    select
        source_system,
        source_id,
        lower(trim(email))          as email_normalised,
        first_name,
        last_name,
        phone,
        updated_at
    from {{ ref('int_contacts_unioned') }}
    where email is not null
),

keyed as (
    select
        *,
        {{ dbt_utils.generate_surrogate_key(['email_normalised']) }} as customer_key
    from contacts
),

ranked as (
    select
        *,
        row_number() over (partition by customer_key order by updated_at desc) as recency_rank
    from keyed
)

select
    customer_key,
    email_normalised,
    -- survivorship: newest non-null value per field
    max(case when recency_rank = 1 then first_name end) as first_name,
    max(case when recency_rank = 1 then last_name end)  as last_name,
    max(phone)                                          as any_phone,   -- replace with a rule per field
    count(*)                                            as source_records
from ranked
group by customer_key, email_normalised
```
Real projects combine several matching rules (customer id, email, phone) and keep the `int_customer_identities` cross-reference so every source record can be traced. Probabilistic matching (fuzzy name + address) needs review thresholds; wrong merges are worse than duplicates.

## Lifecycle stage (B2C example)
```sql
select
    customer_key,
    case
        when orders_total = 0 and is_opted_in            then 'known_prospect'
        when orders_total = 1 and days_since_last_order <= 90 then 'first_time_buyer'
        when orders_total >= 2 and days_since_last_order <= expected_interval_days * 1.5 then 'repeat_buyer'
        when days_since_last_order > expected_interval_days * 3 then 'lapsed'
        when days_since_last_order > expected_interval_days * 1.5 then 'at_risk'
        else 'active'
    end as lifecycle_stage
from {{ ref('int_customer_order_stats') }}
```
`expected_interval_days` = the customer's own median days between orders (or a category default), so "at risk" follows each customer's rhythm.

## Suppression flags
```sql
select
    c.customer_key,
    coalesce(t.has_open_ticket, false)                       as suppress_open_ticket,
    coalesce(o.ordered_last_3_days, false)                   as suppress_recent_purchase,
    not c.email_marketing_consent                            as suppress_no_consent,
    coalesce(m.messages_last_7_days, 0) >= 3                 as suppress_frequency_cap
from {{ ref('dim_customers') }} c
left join {{ ref('int_customer_open_tickets') }} t using (customer_key)
left join {{ ref('int_customer_recent_orders') }} o using (customer_key)
left join {{ ref('int_customer_message_counts') }} m using (customer_key)
```

## Lead score (B2B sketch)
```sql
select
    lead_id,
    fit_score,
    -- engagement with 30-day half-life decay
    sum(event_points * power(0.5, date_diff(current_date(), event_date, day) / 30.0)) as engagement_score
from {{ ref('int_lead_events_scored') }}
group by lead_id, fit_score
```

## Tests worth having
- `unique` + `not_null` on `customer_key` in `dim_customers`.
- Every source id appears exactly once in `int_customer_identities`.
- `accepted_values` on `lifecycle_stage`.
- Singular test: no customer with `suppress_no_consent = true` exists in the email audience export.
