# Lab 10: Incremental models and snapshots (SCD type 2)

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Analytics engineer | L3 | 3 h | dbt | Free | Lab 09 |

**Goal:** Make large models cheap to rebuild and keep history of changing dimensions.

## What you'll learn
- `materialized='incremental'`, `is_incremental()`, `unique_key`
- Incremental strategies (merge, append, delete+insert, microbatch)
- Snapshots for slowly changing dimensions
- Full refresh and late-arriving data

## Setup
- Lab 09 project with an event or order table that grows

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-10
mkdir -p my-work/lab-10-dbt-incremental-snapshots && cd my-work/lab-10-dbt-incremental-snapshots
claude
```
Type `LAB 10`. The coach walks you through the steps below one at a time; you write the code and it reviews.

## Steps
1. Convert your largest model to incremental with a `unique_key` and a lookback window for late data.
2. Run twice and compare rows processed in the logs.
3. Simulate late-arriving data and check your lookback catches it.
4. Create a snapshot on customers (timestamp or check strategy).
5. Change a customer attribute in the source, run `dbt snapshot`, and query `dbt_valid_from` / `dbt_valid_to`.
6. Write down when you would run `--full-refresh`.

## Done when
- [ ] Second run processes only new data
- [ ] Snapshot shows the change history
- [ ] You can explain the trade-off of incremental models

## Stretch
- Try the microbatch strategy on an event table

## Ask the coach
- *"LEARN: incremental models, I understand basic dbt"*
- *"QUIZ me on incremental strategies"*

## Save it to your portfolio
```bash
git add .
git commit -m "lab 10: <what you built>"
git push -u origin lab-10
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A short ADR (architecture decision record) on why you chose each strategy.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
