# Lab 13: Orchestrate dlt and dbt with Dagster

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data engineer · Analytics engineer | L3 | 3–4 h | Dagster, dagster-dbt, dagster-dlt | Free (local) | Labs 05 and 08 |

**Goal:** Run ingestion and transformation as one asset graph with a schedule and retries.

## What you'll learn
- Software-defined assets vs tasks
- dbt models as Dagster assets
- Schedules, sensors, retries, backfills
- Why orchestration concepts transfer to Airflow

## Setup
- `pip install dagster dagster-webserver dagster-dbt dagster-dlt`
- Create a project with the `dg` CLI (see the Dagster docs for the current scaffold command)

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-13-dagster-orchestration && cd lab-13-dagster-orchestration
git init
claude
```
Then type: `LAB 13`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Load your dbt project as assets with dagster-dbt.
2. Load your dlt pipeline as assets with dagster-dlt and connect it upstream of dbt sources.
3. Run `dagster dev`, open the UI and materialise the full graph.
4. Add a daily schedule and a retry policy.
5. Break the API on purpose and watch the retry and failure handling.
6. Run a backfill for one partition (if you partition by day).

## Done when
- [ ] One click materialises raw to marts
- [ ] Lineage spans dlt and dbt
- [ ] Failures are visible and retried

## Stretch
- Add a freshness policy or asset check
- Deploy to Dagster+ during the trial

## Ask the coach
- *"LEARN: assets vs tasks in orchestration"*
- *"BUILD: Dagster does not find my dbt manifest"*

## Portfolio
Screenshot of the asset graph in your capstone README.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
