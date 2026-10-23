---
name: ae-warehouses
description: Cloud data warehouses for the Analytics Engineering Academy. Use for questions about BigQuery, Snowflake, DuckDB and Postgres - architecture, OLTP versus OLAP, columnar storage, projects, datasets, databases and schemas, virtual warehouses, cost models and cost control, partitioning and clustering, roles and access control, service accounts, key pair authentication, time travel, cloning, loading data, query performance, and environment setup for dev and prod.
---

# Module 06: Warehouses

The warehouse is where the chain meets: everything is loaded into it, modeled in it and served from it. Knowing how it bills and how it secures data is part of being trusted with it.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, setup/build → BUILD, graded work → LEARN only.

BUILD mode safety rules:
- Never paste private keys, passwords or service account JSON into chat or commit them to Git. Use environment variables, secret managers or the tool's credential store.
- Confirm before anything destructive (`drop`, `truncate`, `create or replace` on shared objects) or anything that grants access.
- Estimate cost before running large queries (BigQuery dry run; Snowflake: warehouse size × expected time).
- Product limits, prices and features change: verify in current docs before stating numbers.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains OLTP versus OLAP, columnar storage, separation of storage and compute |
| L2 | Sets up a project/database with dev and prod schemas and loads a table |
| L3 | Configures roles and service users with least privilege, partitions/clusters a large table, estimates and controls cost |
| L4 | Compares BigQuery and Snowflake for a company's workload, cost and governance needs |

## Core knowledge

### OLTP versus OLAP
| | OLTP (Postgres, MySQL) | OLAP (BigQuery, Snowflake, DuckDB) |
|---|---|---|
| Workload | Many small reads/writes | Few large scans and aggregations |
| Storage | Row-oriented | Column-oriented |
| Schema | Normalised | Denormalised for analytics |
| Example | Placing an order | Revenue by month by channel |

Columnar storage reads only the columns a query uses and compresses well, which is why `select *` is wasteful in warehouses.

### BigQuery
- Hierarchy: **project → dataset → table/view**. Datasets have a location (EU/US); queries cannot join across locations.
- Serverless: no clusters to size. Compute is **slots**.
- Pricing: **on-demand** (per bytes scanned) or **capacity** (reserved slots via editions). Storage billed separately. Verify current prices.
- Cost control: select only needed columns, filter on partition columns, use **dry run** to see bytes, set **maximum bytes billed**, use partitioned and clustered tables, avoid repeatedly querying raw GA4 `events_*`.
- **Partitioning** by date/timestamp or integer range; **clustering** sorts within partitions by up to four columns.
- Access: IAM roles (e.g. Data Viewer, Data Editor, Job User), service accounts for tools like dbt. Authorized views and row/column-level security for sensitive data.
- Extras: scheduled queries, BigQuery ML (`create model` in SQL), `INFORMATION_SCHEMA` for metadata and job costs.

### Snowflake
- Hierarchy: **account → database → schema → table/view**.
- Compute is **virtual warehouses** (XS, S, M...), billed in credits while running. Set **auto-suspend** short and **auto-resume** on. Storage billed separately.
- Access: **role-based access control**. System roles include ACCOUNTADMIN (use rarely), SECURITYADMIN, SYSADMIN; create custom roles such as `TRANSFORMER` (dbt) and `REPORTER` (BI) with least privilege. Users get roles; roles get privileges.
- **Key pair authentication** for service users (dbt, pipelines): private key stays with the client, public key is set on the Snowflake user.
- Features: **time travel** (query or restore past data within a retention window), **zero-copy cloning** (instant dev copies of prod), stages + `COPY INTO` for loading, Snowpipe for continuous loading, streams and tasks, dynamic tables, `VARIANT` + `FLATTEN` for JSON.
- **Resource monitors** cap credit usage.

### DuckDB
- In-process analytical database: a library, no server. Reads CSV, Parquet and JSON directly (`select * from 'orders.parquet'`).
- Perfect for learning, local development and small pipelines. dbt adapter: `dbt-duckdb`. MotherDuck offers a hosted version.

### Postgres
The default open-source OLTP database and a common source system. Also fine as a small analytics database.

### Cloud data platforms (overview)
| Cloud | Warehouse / analytics | Storage | Orchestration / integration |
|---|---|---|---|
| Google Cloud | BigQuery | Cloud Storage | Cloud Composer (Airflow), Dataflow, Pub/Sub |
| Microsoft Azure | Microsoft Fabric, Azure Synapse | Azure Data Lake Storage (OneLake in Fabric) | Data Factory |
| AWS | Redshift, Athena | S3 | Glue, Step Functions, MWAA |
| Cross-cloud | Snowflake, Databricks (lakehouse) | — | — |
Swedish companies with Microsoft-heavy IT often choose Fabric/Power BI; digital-native companies often choose BigQuery or Snowflake with dbt. Concepts transfer; learn one deeply. Verify current product names, as cloud vendors rename often.

### Environment design (any warehouse)
```
raw         ← loaded by ingestion, read-only for everyone else
dev_<name>  ← each developer's dbt builds
ci          ← temporary builds per pull request
prod        ← scheduled dbt builds; BI reads from here
```
Separate service identities: one for ingestion (write raw), one for dbt (read raw, write dev/prod), one for BI (read prod marts only).

## On the reference stack

Snowflake is the default: databases `RAW`, `IDENTITY`, `ANALYTICS`; roles `LOADER`, `TRANSFORMER`, `REPORTER`; an XS warehouse with short auto-suspend for development; key pair auth for dbt and Dagster. DuckDB for free local practice. Using another stack? Tell the coach once and it adapts (see STACK.md).

## Common misconceptions

- "LIMIT 10 makes a BigQuery query cheap." It still scans the columns; bytes billed are the same.
- "A bigger Snowflake warehouse always costs more." A larger warehouse can finish faster and cost about the same; it depends on the query.
- "Everyone can just use ACCOUNTADMIN." Least privilege is a security and GDPR requirement.
- "Partitioning and clustering are the same." Partitioning prunes whole segments; clustering sorts data within them.

## Connects to

`ae-dbt` (adapters, profiles), `ae-data-engineering` (loading), `ae-governance-gdpr` (access control, PII), `ae-mcp-tooling` (connecting Claude safely).

## References

- [references/privacy-architecture.md](references/privacy-architecture.md): zones in one warehouse (raw, identity vault, pseudonymised, marts, aggregated), roles, masking, PII tests.
- [references/setup-guides.md](references/setup-guides.md): step lists for BigQuery and Snowflake projects with dbt, and DuckDB locally.
- [references/exercises.md](references/exercises.md)
