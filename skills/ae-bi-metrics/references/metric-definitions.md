# Metric definitions

## Template
```yaml
metric: conversion_rate
question: "What share of sessions result in a completed order?"
formula: completed_orders / sessions
numerator: count of distinct order_id where order_status = 'completed', attributed to the session
denominator: count of distinct session_key
grain: session
time: by session start date, timezone Europe/Stockholm
dimensions_allowed: channel, device, country, new_vs_returning
source_model: fct_sessions
owner: Analytics engineering (definition), Head of E-commerce (business owner)
caveats: excludes sessions without analytics consent; GA4-based sessions differ from server logs
```

## Worked definitions
| Metric | Formula | Notes |
|---|---|---|
| Revenue | sum(order_total) of completed orders | State: incl./excl. VAT, shipping, refunds; currency |
| Orders | count(distinct order_id), completed | |
| AOV | revenue ÷ orders | Ratio: compute from totals |
| Sessions | count(distinct session_key) | Consent-dependent |
| Repurchase rate (90 d) | customers with 2nd order within 90 days of 1st ÷ customers with a 1st order ≥ 90 days ago | Exclude customers too new to qualify |
| Churn (subscriptions) | cancelled in period ÷ active at period start | |

## Semantic layer sketch (dbt MetricFlow style; verify current syntax)
```yaml
semantic_models:
  - name: sessions
    model: ref('fct_sessions')
    defaults:
      agg_time_dimension: session_started_at
    entities:
      - name: session
        type: primary
        expr: session_key
    dimensions:
      - name: session_started_at
        type: time
        type_params:
          time_granularity: day
      - name: channel
        type: categorical
    measures:
      - name: sessions
        agg: count_distinct
        expr: session_key
      - name: converted_sessions
        agg: sum
        expr: case when has_completed_order then 1 else 0 end

metrics:
  - name: conversion_rate
    type: ratio
    type_params:
      numerator: converted_sessions
      denominator: sessions
```

## DAX basics (Power BI)
```DAX
Revenue = SUM ( fct_orders[order_total] )
Orders = DISTINCTCOUNT ( fct_orders[order_id] )
AOV = DIVIDE ( [Revenue], [Orders] )
Revenue LY = CALCULATE ( [Revenue], SAMEPERIODLASTYEAR ( dim_date[date] ) )
Revenue YoY % = DIVIDE ( [Revenue] - [Revenue LY], [Revenue LY] )
```
Measures recalculate in the current filter context; that is why ratios stay correct at every level.
