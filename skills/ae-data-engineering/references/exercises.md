# Exercises: Data engineering

## Set A (practitioner)

1. Classify each source by best load pattern: GA4 events, a customer table that gets updated, an exchange-rate API with one value per day, a product catalogue of 500 rows.
2. Write a Python script that reads a CSV of orders and loads it into DuckDB. Run it twice. Did you get duplicates? Fix it.
3. Explain idempotency with the example of a daily orders load.
4. Start Postgres with Docker Compose, connect with DBeaver, create a table.

## Set B (independent)

1. Build an incremental load from a paginated API (see `ae-apis`) into a warehouse table with a 3-day lookback and deduplication. Prove idempotency by running twice and comparing counts.
2. Add a `--start` and `--end` argument for backfills.
3. Design the orchestration for: ingest Shopify (managed connector) at 04:00, ingest a custom API, then run dbt only after both succeed, and alert on failure. Draw the DAG.
4. A daily row count dropped 70% yesterday. Write your investigation plan using the failure checklist.

## Quiz bank

1. Why do incremental loads miss deletes?
2. What makes Parquet better than CSV for analytics?
3. When is streaming worth the complexity?
4. What is a backfill?
5. Name four things to monitor in a pipeline. *(freshness, volume, schema, quality; also lineage/run status)*

## Interview questions

1. "How do you make a pipeline idempotent?"
2. "Fivetran or custom Python for a new source: how do you decide?"
3. "Tell me about a time data arrived late or wrong. How did you detect it?"
