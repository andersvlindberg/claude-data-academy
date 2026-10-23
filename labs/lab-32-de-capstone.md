# Lab 32: DE capstone: an end-to-end pipeline with a runbook

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L3–L4 | 8–12 h | dlt or Fivetran, Snowflake, Dagster | Free + trials |

**Goal:** Ship a production-style pipeline: sources to warehouse, scheduled, monitored and documented.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-32
mkdir -p my-work/lab-32-de-capstone && cd my-work/lab-32-de-capstone
claude
```
Type `LAB 32`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Two sources (an API and a database) into RAW
2. Orchestrated, partitioned and idempotent
3. Freshness and volume alerts
4. README, architecture diagram and runbook

## Done when
- [ ] A new person can run it from the README
- [ ] Alerts and backfills demonstrated

## Save it to your portfolio
```bash
git add .
git commit -m "lab 32: <what you built>"
git push -u origin lab-32
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Your headline DE portfolio project.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
