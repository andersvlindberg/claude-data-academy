# Lab 32: DE capstone: an end-to-end pipeline with a runbook

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L3–L4 | 8–12 h | dlt or Fivetran, Snowflake, Dagster | Free + trials |

**Goal:** Ship a production-style pipeline: sources to warehouse, scheduled, monitored and documented.

## Run it with Claude Code
```bash
mkdir lab-32-de-capstone && cd lab-32-de-capstone
git init
claude
```
Type `LAB 32`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Two sources (an API and a database) into RAW
2. Orchestrated, partitioned and idempotent
3. Freshness and volume alerts
4. README, architecture diagram and runbook

## Done when
- [ ] A new person can run it from the README
- [ ] Alerts and backfills demonstrated

## Portfolio
Your headline DE portfolio project.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
