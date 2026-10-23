# Lab 08: Your first dbt project: sources, staging and tests

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Analytics engineer | L2 | 3 h | dbt (Core or platform), BigQuery or Snowflake or DuckDB | Free | Lab 01 |

**Goal:** Turn raw tables into clean, tested staging models with dbt.

## What you'll learn
- Project structure: sources, staging, intermediate, marts
- `source()` and `ref()`, the DAG
- Generic tests: unique, not_null, accepted_values, relationships
- Naming conventions (`stg_<source>__<entity>`)

## Setup
- `pip install dbt-duckdb` (or dbt-bigquery / dbt-snowflake), or a dbt platform Developer account
- `dbt init nordvik` and point `profiles.yml` at your `nordvik.duckdb` from Lab 01 (raw Nordvik tables loaded)

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-08
mkdir -p my-work/lab-08-dbt-first-project && cd my-work/lab-08-dbt-first-project
claude
```
Type `LAB 08`. The coach walks you through the steps below one at a time; you write the code and it reviews.

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

## Save it to your portfolio
```bash
git add .
git commit -m "lab 08: <what you built>"
git push -u origin lab-08
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
The start of your capstone repo.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
