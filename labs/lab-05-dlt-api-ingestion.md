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

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-05
mkdir -p my-work/lab-05-dlt-api-ingestion && cd my-work/lab-05-dlt-api-ingestion
claude
```
Type `LAB 05`. The coach walks you through the steps below one at a time; you write the code and it reviews.

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

## Save it to your portfolio
```bash
git add .
git commit -m "lab 05: <what you built>"
git push -u origin lab-05
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
`api-ingestion-dlt` repo with a README diagram of the flow.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
