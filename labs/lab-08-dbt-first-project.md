# Lab 08: Your first dbt project: sources, staging and tests

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Analytics engineer | L2 | 3 h | dbt (Core or platform), BigQuery or Snowflake or DuckDB | Free | Lab 02 or 05 |

**Goal:** Turn raw tables into clean, tested staging models with dbt.

## What you'll learn
- Project structure: sources, staging, intermediate, marts
- `source()` and `ref()`, the DAG
- Generic tests: unique, not_null, accepted_values, relationships
- Naming conventions (`stg_<source>__<entity>`)

## Setup
- `pip install dbt-duckdb` (or dbt-bigquery / dbt-snowflake), or a dbt platform Developer account
- `dbt init` a new project and configure `profiles.yml`

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-08-dbt-first-project && cd lab-08-dbt-first-project
git init
claude
```
Then type: `LAB 08`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Declare your raw tables in `models/staging/<source>/_sources.yml`.
2. Write one staging model per source table: rename, cast, no business logic.
3. Add `unique` and `not_null` tests on primary keys; run `dbt build`.
4. Break a test on purpose (duplicate a row) and read the failure.
5. Add source freshness with `loaded_at_field` and run `dbt source freshness`.
6. Run `dbt docs generate` and look at the lineage graph.

## Done when
- [ ] `dbt build` passes from a clean run
- [ ] Every staging model has a tested primary key
- [ ] You can explain ref vs source

## Stretch
- Add a custom singular test
- Add sqlfluff or a pre-commit hook

## Ask the coach
- *"LEARN: ref and source in dbt"*
- *"BUILD: my profiles.yml does not connect (error without password)"*

## Portfolio
The start of your capstone repo.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
