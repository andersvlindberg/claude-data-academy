# Lab 01: Your first local warehouse with DuckDB

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Analytics engineer · Data analyst | L1 | 1–2 h | DuckDB, VS Code | Free | Nothing |

**Goal:** Load a CSV into a local warehouse and answer business questions with SQL, without any cloud account.

## What you'll learn
- What a warehouse table is, and why columnar engines are fast
- SELECT, WHERE, GROUP BY, ORDER BY, JOIN
- Reading a query plan with EXPLAIN

## Setup
- Install DuckDB (`pip install duckdb` or the CLI from duckdb.org)
- Download any open e-commerce CSV (for example an online retail dataset) into `data/`

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-01-duckdb-sql-basics && cd lab-01-duckdb-sql-basics
git init
claude
```
Then type: `LAB 01`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Create `lab01.duckdb` and load the CSV: `CREATE TABLE orders AS SELECT * FROM read_csv_auto('data/orders.csv');`
2. Profile it: row count, distinct customers, min/max dates, NULLs per column (`SUMMARIZE orders;`).
3. Answer: revenue per month, top 10 products, share of revenue from returning customers.
4. Create a second table (customers or products) and JOIN it. Check the row count before and after the join.
5. Run `EXPLAIN` on your heaviest query and describe in one sentence what the engine does.
6. Save every query in `queries/` with a comment on the question it answers.

## Done when
- [ ] All queries run from a clean start
- [ ] You can explain why a JOIN can multiply rows
- [ ] Results are written down in a short README

## Stretch
- Rewrite one query with a CTE and compare readability
- Export a result to Parquet and read it back

## Ask the coach
- *"LEARN: how GROUP BY works, I'm new to SQL"*
- *"REVIEW my query for monthly revenue"*

## Portfolio
A small repo: `sql-practice-duckdb` with README, queries and findings.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
