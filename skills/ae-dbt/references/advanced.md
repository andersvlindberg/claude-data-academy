# dbt advanced topics

## Incremental models
```sql
{{ config(
    materialized='incremental',
    unique_key='event_id',
    incremental_strategy='merge',
    on_schema_change='append_new_columns'
) }}

select * from {{ ref('stg_ga4__events') }}

{% if is_incremental() %}
  where event_at > (select max(event_at) from {{ this }}) - interval 3 day
{% endif %}
```
- `{{ this }}` is the existing target table.
- The lookback window handles late-arriving data; `unique_key` + merge prevents duplicates.
- Strategies vary by adapter: `merge`, `insert_overwrite` (BigQuery, partition-based, often cheapest), `delete+insert`, `append`, `microbatch` (newer; check docs).
- `dbt build --full-refresh -s model` rebuilds from scratch when logic changes.

## Snapshots (SCD type 2)
Snapshots record how a mutable source row changed over time, adding `dbt_valid_from` and `dbt_valid_to`. Use the `timestamp` strategy when a reliable `updated_at` exists, otherwise `check` on listed columns. Newer dbt versions configure snapshots in YAML; older ones in a SQL block. Check the version in use.

## Jinja and macros
```sql
-- macros/cents_to_currency.sql
{% macro cents_to_currency(column_name, decimals=2) %}
    round({{ column_name }} / 100.0, {{ decimals }})
{% endmacro %}
```
Use: `{{ cents_to_currency('amount_cents') }} as amount`.
Rules: macros for repeated logic, not for hiding simple SQL. Always check the compiled output.

## Packages
`packages.yml`:
```yaml
packages:
  - package: dbt-labs/dbt_utils
    version: [">=1.0.0", "<2.0.0"]
```
Useful: `dbt_utils.generate_surrogate_key`, `dbt_utils.date_spine`, `dbt_utils.star`, `dbt_utils.expression_is_true`, `dbt_utils.unique_combination_of_columns`. Also `dbt_expectations`, `codegen`, `audit_helper` (compare old and new model outputs during refactors).

## Seeds
Small static CSVs (country codes, channel mappings) loaded with `dbt seed`. Not for large or changing data.

## Exposures
Declare dashboards and apps that depend on models, so lineage shows downstream impact.

## Model contracts and versions
- `contract: {enforced: true}` with column names and `data_type` makes the build fail if output shape changes.
- Model versions let you publish `v2` of a mart while consumers migrate.
- Together with access modifiers (public/protected/private) and groups, they support "data mesh" style ownership.

## Environments
- **Development:** each developer builds into their own schema (`dbt_<name>`).
- **Production:** scheduled jobs build into prod schemas.
- **CI:** builds changed models into a temporary schema on each pull request.
- `target.name` in Jinja lets logic differ per environment (e.g. limit data in dev).

## Slim CI
```
dbt build -s state:modified+ --defer --state ./prod-artifacts
```
Builds only changed models and their children, reading unchanged parents from production. dbt Cloud does this automatically in CI jobs.

## Semantic layer
Metrics defined once in YAML (semantic models with entities, dimensions and measures, plus metrics on top) and queried consistently by BI tools through dbt Cloud's semantic layer (MetricFlow). See `ae-bi-metrics`.

## Performance and cost
- Partition and cluster large tables (BigQuery `partition_by`, `cluster_by`; Snowflake `cluster_by` only for very large tables).
- Prefer views for staging; tables or incremental for heavy marts.
- Limit data in development with `{% if target.name == 'dev' %} where ... {% endif %}`.
