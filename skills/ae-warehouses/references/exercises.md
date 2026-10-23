# Exercises: Warehouses

## Set A (practitioner)

1. Explain why a columnar database is faster for `sum(revenue) by month` than a row database.
2. In BigQuery, dry run `select *` and `select order_id, order_total` on the same table. Compare bytes.
3. Create a partitioned table by `order_date` and query one day. Compare bytes with the unpartitioned table.
4. In DuckDB, query a Parquet file directly without loading it.

## Set B (independent)

1. Design roles and grants for a company with ingestion, dbt, BI and one analyst who may not see PII columns. Implement it in Snowflake or BigQuery.
2. Set up key pair auth for a dbt service user and prove it works with `dbt debug`, without the private key ever entering Git.
3. A BigQuery bill doubled this month. Use `INFORMATION_SCHEMA.JOBS` to find the most expensive queries and propose three fixes.
4. Use Snowflake zero-copy cloning to create a dev copy of prod and explain what it costs.

## Quiz bank

1. What is billed in BigQuery on-demand pricing?
2. What does auto-suspend do and why does it matter?
3. Name the BigQuery hierarchy and the Snowflake hierarchy.
4. Does `LIMIT` reduce BigQuery bytes scanned? *(No, for normal tables.)*
5. What is time travel?

## Interview questions

1. "How would you keep warehouse costs under control in a growing team?"
2. "How do you give a BI tool access without exposing personal data?"
3. "BigQuery or Snowflake: what would you consider?"
