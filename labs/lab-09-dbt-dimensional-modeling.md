# Lab 09: Dimensional modelling in dbt: facts and dimensions

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Analytics engineer | L2–L3 | 3–4 h | dbt | Free | Lab 08 |

**Goal:** Build a star schema (`fct_orders`, `dim_customers`, `dim_products`) that BI tools can use directly.

## What you'll learn
- Kimball: grain, facts, dimensions, conformed dimensions
- Surrogate keys (`dbt_utils.generate_surrogate_key`)
- Intermediate models for reusable logic

## Setup
- Lab 08 project
- `packages.yml` with dbt_utils, then `dbt deps`

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-09-dbt-dimensional-modeling && cd lab-09-dbt-dimensional-modeling
git init
claude
```
Then type: `LAB 09`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Write the grain of each table in one sentence before writing SQL.
2. Build `int_` models for joins and reusable logic.
3. Build `dim_customers` (first order date, lifetime orders) and `dim_products`.
4. Build `fct_orders` at order-line grain with foreign keys to the dimensions.
5. Add `relationships` tests between fact and dimensions.
6. Document every column used by BI in YAML.

## Done when
- [ ] Grain is documented and tested (unique key)
- [ ] Relationships tests pass
- [ ] A teammate could answer revenue questions from the marts alone

## Stretch
- Add a date dimension
- Add a semantic model and metrics with MetricFlow

## Ask the coach
- *"LEARN: how to choose the grain of a fact table"*
- *"REVIEW my star schema"*

## Portfolio
Lineage graph screenshot + model docs in your capstone.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
