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
- Ask Claude for a small fictional e-commerce dataset (or generate the example: `python datasets/nordvik/generate.py`)

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-01
mkdir -p my-work/lab-01-duckdb-sql-basics && cd my-work/lab-01-duckdb-sql-basics
claude
```
Type `LAB 01`. The coach walks you through the steps below one at a time; you write the code and it reviews.

## Steps
1. Create `nordvik.duckdb` and load orders: `CREATE TABLE orders AS SELECT * FROM read_csv_auto('../../datasets/nordvik/data/orders.csv');`
2. Profile it: row count, distinct customers, min/max dates, NULLs per column (`SUMMARIZE orders;`).
3. Answer: revenue per month, top 10 products, share of revenue from returning customers.
4. Load customers and order_items and JOIN them. Check the row count before and after each join. Can you find the planted duplicate order?
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

## Save it to your portfolio
```bash
git add .
git commit -m "lab 01: <what you built>"
git push -u origin lab-01
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A small repo: `sql-practice-duckdb` with README, queries and findings.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
