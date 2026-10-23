---
name: ae-data-engineering
description: Data engineering for the Analytics Engineering Academy. Use for questions about building pipelines, ingestion, extract and load, ETL and ELT in practice, batch versus streaming, change data capture, incremental loads, idempotency, backfills, file formats like CSV, JSON and Parquet, data lakes and lakehouses, orchestration with Airflow, Dagster or cron, managed connectors like Fivetran, Airbyte or dlt, Docker, monitoring, and the Data Technology Stack course.
---

# Module 04: Data engineering

Data engineering gets data from where it is born to where it can be used, reliably, repeatably and cheaply. An analytics engineer does not need to run a Kafka cluster, but must understand what feeds the warehouse and why it sometimes fails.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, build → BUILD, graded work → LEARN only.

In BUILD mode, every pipeline must answer five questions before code is written:
1. **Source:** what system, what access method, what volume, how often does it change?
2. **Load pattern:** full refresh, incremental (by timestamp or id), or CDC?
3. **Idempotency:** what happens if this runs twice? (Must give the same result.)
4. **Failure:** how do we know it failed, and how do we rerun or backfill?
5. **Destination contract:** schema, partitioning, and who consumes it?

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains ingestion, ELT, batch versus streaming, orchestration |
| L2 | Loads a CSV or API extract into DuckDB/BigQuery with a Python script; schedules it |
| L3 | Builds an idempotent incremental load with backfill support and failure alerting |
| L4 | Chooses between managed connectors, custom code and streaming for a scenario, with cost and reliability trade-offs |

## Core knowledge

### ELT is the default
In this academy (and in the modern analytics stack) pipelines are **ELT**: extract and load raw data as-is (Fivetran, dlt, native exports), then transform in the warehouse with dbt. Classic ETL, transforming before loading, is reserved for special cases such as removing personal data before it lands or legacy systems.

### Load patterns
| Pattern | How | Pros | Cons |
|---|---|---|---|
| Full refresh | Reload everything each run | Simple, self-healing | Slow and expensive at scale |
| Incremental (watermark) | Load rows where `updated_at > last_max` | Efficient | Misses hard deletes; late-arriving data needs a lookback window |
| Append-only | Insert new events | Natural for events/logs | Duplicates on retry unless deduplicated |
| CDC (change data capture) | Read the database change log | Captures updates and deletes, low impact on source | More infrastructure |

**Idempotency** is the property that rerunning gives the same result. Achieve it with `MERGE`/upsert on a key, by overwriting whole partitions (e.g. one day), or by deduplicating downstream.

**Backfill:** reprocessing a historical range. Pipelines should accept a date range parameter so a backfill is the same code with different inputs.

### Batch versus streaming
- **Batch:** runs on a schedule (hourly, nightly). Cheaper, simpler, enough for most analytics.
- **Streaming:** processes events continuously (Pub/Sub, Kafka, Kinesis). Needed for real-time use cases such as fraud detection or live personalisation. Adds complexity: ordering, exactly-once semantics, late events.
- Ask: *what decision needs fresher data than hourly?* If none, batch.

### File formats
| Format | Type | Use |
|---|---|---|
| CSV | Row, text, no schema | Exchange, small data. Watch delimiters, encodings, quoting |
| JSON / NDJSON | Semi-structured | APIs, events |
| Parquet | Columnar, compressed, typed | Analytics storage; read only the columns you need |
| Avro | Row, schema-embedded | Streaming, schema evolution |

### Storage
- **Warehouse:** structured, SQL, managed (BigQuery, Snowflake).
- **Data lake:** files in object storage (GCS, S3, ADLS). Cheap, flexible, needs governance.
- **Lakehouse:** table formats (Apache Iceberg, Delta Lake) adding transactions and schemas to lake files, queryable by warehouses and engines.

### Orchestration
Orchestrators run tasks in dependency order on a schedule, retry failures and show status.
- **cron / scheduled queries:** fine for one or two independent jobs.
- **dbt Cloud jobs:** schedules dbt runs; enough when ingestion is managed elsewhere.
- **Airflow (Cloud Composer, MWAA, Astronomer):** DAGs of tasks in Python; industry standard.
- **Dagster:** asset-based (you declare the tables, it figures out runs); strong dbt integration.
- **Prefect:** Python-first flows.

### Ingestion tools
- **Native exports:** GA4 → BigQuery, Shopify/Stripe → warehouse integrations.
- **Managed connectors:** Fivetran, Airbyte (also open source), Stitch. Fast to set up, priced by volume.
- **Code-first:** dlt (data load tool, Python), custom scripts with `requests`.
- Rule of thumb: buy connectors for standard SaaS sources, build only for niche sources or special requirements.

### Data migration
Moving data between systems (old CRM to new, on-premise to cloud): scope → field mapping → cleanse → test loads → reconcile counts, sums and samples → cutover with rollback plan → decommission and archive. Details in `ae-systems-processes`. Migrations fail most often on unmapped fields, duplicates and unclear ownership, not on technology.

### Docker
Containers package an application with everything it needs. Use them to run Postgres, Airflow or a pipeline locally exactly as in production, then throw them away: `docker run`, `docker compose up`.

### Observability
- **Freshness:** when did data last arrive? (dbt `source freshness`.)
- **Volume:** did today's row count drop by 80%?
- **Schema:** did a column disappear or change type?
- **Quality:** tests on values (see `ae-governance-gdpr`).
- **Lineage:** what breaks downstream if this fails?

## On the reference stack

Fivetran loads standard sources (shop, CRM, ad platforms) and dlt/Python custom APIs into the `RAW` database in Snowflake, untouched (ELT). Dagster orchestrates: it triggers Fivetran syncs, waits for completion, then runs dbt, with retries and alerts. GA4 arrives through its native BigQuery export. Using another stack? Tell the coach once and it adapts (see STACK.md).

## Common misconceptions

- "Real-time is always better." It is more expensive; most decisions are daily.
- "If it ran successfully, the data is right." Success means no error, not correct data.
- "Incremental loads are always correct." They miss deletes and late data without extra handling.
- "We should build our own connector for Salesforce." Usually buy.

## Connects to

`ae-apis` (extracting from APIs), `ae-warehouses` (destination), `ae-dbt` (transformation and sources), `ae-python` (pipeline code), `ae-git-devops` (deploying pipelines).

## References

- [references/pipeline-patterns.md](references/pipeline-patterns.md): code skeletons for idempotent loads, merge, partition overwrite, an Airflow DAG and a Docker Compose setup.
- [references/exercises.md](references/exercises.md)
