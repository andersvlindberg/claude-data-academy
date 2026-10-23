# Lab 05: Ingest a REST API with dlt

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data engineer | L2 | 2–3 h | Python, dlt, DuckDB | Free | Lab 01 |

**Goal:** Load data from a public API into DuckDB with schema inference and incremental loading.

## What you'll learn
- ELT: load raw, transform later
- dlt sources, resources, pipelines
- Pagination, incremental cursors, schema evolution
- Secrets in `.dlt/secrets.toml`, never in Git

## Setup
- `pip install "dlt[duckdb]"`
- Pick a public API (for example GitHub issues of a public repo, or an open data API)

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-05-dlt-api-ingestion && cd lab-05-dlt-api-ingestion
git init
claude
```
Then type: `LAB 05`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Scaffold: `dlt init rest_api duckdb` and read the generated files.
2. Configure the endpoint, pagination and a primary key.
3. Run the pipeline and inspect the loaded tables and dlt's `_dlt_loads` table.
4. Add incremental loading on an `updated_at` cursor and run twice: the second run should load only new rows.
5. Change the source shape (add a field) and see how dlt evolves the schema.
6. Add `.dlt/secrets.toml` to `.gitignore` before your first commit.

## Done when
- [ ] Second run is incremental
- [ ] No secrets in the repo
- [ ] You can explain merge vs append write dispositions

## Stretch
- Switch the destination to Snowflake or BigQuery
- Schedule it with Dagster (Lab 14)

## Ask the coach
- *"LEARN: incremental loading"*
- *"BUILD: my dlt pipeline loads duplicates"*

## Portfolio
`api-ingestion-dlt` repo with a README diagram of the flow.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
