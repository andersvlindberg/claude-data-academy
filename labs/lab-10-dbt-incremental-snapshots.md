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

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-10-dbt-incremental-snapshots && cd lab-10-dbt-incremental-snapshots
git init
claude
```
Then type: `LAB 10`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

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

## Portfolio
A short ADR (architecture decision record) on why you chose each strategy.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
