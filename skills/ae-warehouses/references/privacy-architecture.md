# Privacy by architecture: zones in one warehouse

The common pattern is **one warehouse split into zones with different access**, not many separate warehouses. Same protection, one system to run.

## Zones
| Zone | Contents | Access | GDPR status |
|---|---|---|---|
| **Raw / restricted** | Source data with direct identifiers (name, email, phone, address) | Pipelines and very few engineers | Personal data |
| **Identity vault** | Mapping real identifiers ↔ pseudonymous `customer_key` | Very few people, access logged; used for activation and GDPR requests | Personal data (the key) |
| **Pseudonymised** (staging, intermediate) | Same data with `customer_key` instead of identifiers | Analytics engineers | **Still personal data** (re-linkable) |
| **Marts** | Business-ready tables without direct identifiers | Analysts, BI, AI tools (read-only) | Usually personal data at row level |
| **Aggregated / anonymous** | Counts and sums with minimum group sizes | Broad, even external | Outside GDPR if truly anonymous |

## Reference implementation (Snowflake)
```sql
-- databases per zone
create database if not exists raw;          -- written by Fivetran/dlt
create database if not exists identity;     -- vault
create database if not exists analytics;    -- dbt: staging, intermediate, marts

-- roles
create role if not exists loader;           -- writes raw
create role if not exists transformer;      -- dbt: reads raw, writes analytics
create role if not exists reporter;         -- BI and AI: reads marts only
create role if not exists identity_admin;   -- vault and GDPR requests

grant usage on database analytics to role reporter;
grant usage on schema analytics.marts to role reporter;
grant select on future tables in schema analytics.marts to role reporter;

-- masking: only privileged roles see real emails
create masking policy if not exists mask_email as (val string) returns string ->
  case when current_role() in ('IDENTITY_ADMIN') then val
       else regexp_replace(val, '.+@', '****@') end;
alter table raw.shop.customers modify column email set masking policy mask_email;

-- row access: e.g. country managers see only their market
-- create row access policy ... (see Snowflake docs)
```
Masking, row access policies and object tagging are Enterprise-edition features in Snowflake; BigQuery offers policy tags, column-level security and authorized views. Verify current editions and syntax.

## In dbt
- Pseudonymise in staging: `{{ dbt_utils.generate_surrogate_key(['lower(trim(email))']) }} as customer_key` (add a secret salt via a macro or env var for real use) and drop the raw email.
- Tag PII: `meta: {contains_pii: true, pii_type: email}`.
- Singular test: no column tagged `contains_pii` exists in `marts`.
- Aggregated models enforce a minimum group size (`having count(distinct customer_key) >= 10`).

## Operating many zones without chaos
1. **One platform, schemas per zone;** dbt builds between them and `ref()` keeps lineage.
2. **Roles, not people,** get grants; people get roles.
3. **Catalog and lineage** (dbt docs or a data catalog) show where each column comes from and who uses it.
4. **Erasure happens centrally** in raw and the identity vault; downstream models rebuild, and pseudonyms stop pointing to anyone.
5. **Activation** (reverse ETL to email tools) joins marts back to the vault inside a restricted job, never in BI.

## When separate warehouses are justified
Legal data residency (a region requirement), extremely sensitive data (health), or group structures with separate companies. Connect them with governed data sharing (e.g. Snowflake data sharing) rather than copying data around.
