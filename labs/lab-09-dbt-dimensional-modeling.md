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

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-09
mkdir -p my-work/lab-09-dbt-dimensional-modeling && cd my-work/lab-09-dbt-dimensional-modeling
claude
```
Type `LAB 09`. The coach walks you through the steps below one at a time; you write the code and it reviews.

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

## Save it to your portfolio
```bash
git add .
git commit -m "lab 09: <what you built>"
git push -u origin lab-09
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Lineage graph screenshot + model docs in your capstone.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
