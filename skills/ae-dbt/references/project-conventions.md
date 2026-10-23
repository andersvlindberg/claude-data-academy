# dbt project conventions

## Structure
```
models/
  staging/
    shop/
      _shop__sources.yml
      _shop__models.yml
      stg_shop__customers.sql
      stg_shop__orders.sql
    ga4/
      _ga4__sources.yml
      stg_ga4__events.sql
  intermediate/
    sessions/
      int_sessions_attributed.sql
  marts/
    commerce/
      _commerce__models.yml
      fct_orders.sql
      dim_customers.sql
    marketing/
      fct_sessions.sql
macros/
seeds/
snapshots/
tests/
analyses/
dbt_project.yml
packages.yml
```

## Naming
- Columns: snake_case. Keys end in `_id`. Timestamps end in `_at` (UTC), dates in `_date`. Booleans start with `is_` / `has_`. Money columns state currency or are documented.
- Models: `stg_<source>__<entity>` (double underscore), `int_<entity>_<verb>`, `fct_<process>`, `dim_<entity>`.
- Plural entity names (`customers`, `orders`).

## Model SQL pattern
```sql
with

orders as (
    select * from {{ ref('stg_shop__orders') }}
),

customers as (
    select * from {{ ref('stg_shop__customers') }}
),

final as (
    select
        orders.order_id,
        orders.customer_id,
        customers.city as customer_city,
        orders.order_total,
        orders.ordered_at
    from orders
    left join customers
        on orders.customer_id = customers.customer_id
)

select * from final
```

## Staging pattern
```sql
with source as (
    select * from {{ source('shop', 'orders') }}
),

renamed as (
    select
        id                                  as order_id,
        customer                            as customer_id,
        cast(total as numeric)              as order_total,
        lower(status)                       as order_status,
        cast(created as timestamp)          as ordered_at
    from source
)

select * from renamed
```

## Sources YAML
```yaml
version: 2

sources:
  - name: shop
    database: raw            # project in BigQuery
    schema: shop
    loaded_at_field: _loaded_at
    freshness:
      warn_after: {count: 12, period: hour}
      error_after: {count: 24, period: hour}
    tables:
      - name: orders
      - name: customers
```
(Freshness config placement has moved between versions; check the docs for the version in use.)

## Models YAML
```yaml
version: 2

models:
  - name: fct_orders
    description: "One row per order. Answers: how much revenue, from whom and through which channel?"
    columns:
      - name: order_id
        description: "Primary key."
        data_tests:
          - unique
          - not_null
      - name: customer_id
        data_tests:
          - relationships:
              to: ref('dim_customers')
              field: customer_id
      - name: order_status
        data_tests:
          - accepted_values:
              values: ['completed', 'refunded', 'cancelled']
      - name: customer_email
        meta:
          contains_pii: true
```

## dbt_project.yml defaults
```yaml
models:
  my_project:
    staging:
      +materialized: view
    intermediate:
      +materialized: view
    marts:
      +materialized: table
```

## README for a portfolio dbt project
1. The business question(s) the project answers.
2. Architecture: lineage screenshot or layer diagram.
3. Sources and how they are loaded.
4. Models per layer with grain sentences.
5. Testing strategy and data quality results.
6. How to run it.
7. Decisions and trade-offs (What / Why / Result / Verification).
8. What I would do next.
