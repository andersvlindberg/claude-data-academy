# Data quality

## Tests per dimension (dbt)

| Dimension | Question | Test |
|---|---|---|
| Uniqueness | One row per key? | `unique`, `dbt_utils.unique_combination_of_columns` |
| Completeness | Required values present? | `not_null`; row count thresholds |
| Validity | Values in allowed set/format/range? | `accepted_values`, `dbt_utils.expression_is_true`, regex tests |
| Consistency | Same fact agrees across tables? | Singular test comparing totals; `relationships` |
| Accuracy | Matches reality/source of truth? | Reconciliation against source system totals |
| Timeliness | Fresh enough? | `source freshness`, max timestamp checks |

Severity: `warn` for things to investigate, `error` for things that must stop downstream builds.

## Data contract template
```yaml
contract: orders
producer: Shop platform team
consumers: analytics engineering (fct_orders), finance
schema:
  order_id: string, unique, not null
  customer_id: string, not null
  order_total: numeric(12,2), >= 0
  status: one of [completed, refunded, cancelled]
  ordered_at: timestamp UTC
semantics:
  order_total: incl. VAT, excl. shipping, SEK
sla:
  freshness: loaded by 05:00 daily
  completeness: >= 99.9% of orders from source
change_process: breaking changes announced 2 weeks ahead in #data-contracts; versioned
quality_checks: dbt tests on stg_shop__orders; daily reconciliation with source count
owner: product owner shop platform
```
