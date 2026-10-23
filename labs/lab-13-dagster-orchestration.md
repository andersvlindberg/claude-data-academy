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

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-13
mkdir -p my-work/lab-13-dagster-orchestration && cd my-work/lab-13-dagster-orchestration
claude
```
Type `LAB 13`. The coach walks you through the steps below one at a time; you write the code and it reviews.

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

## Save it to your portfolio
```bash
git add .
git commit -m "lab 13: <what you built>"
git push -u origin lab-13
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Screenshot of the asset graph in your capstone README.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
