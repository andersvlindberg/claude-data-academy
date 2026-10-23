# Lab 27: Data observability: freshness, volume and schema alerts

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer · Analytics engineer | L3 | 2 h | dbt, Dagster or Elementary | Free |

**Goal:** Detect broken data before stakeholders do.

## Run it with Claude Code
```bash
mkdir lab-27-data-observability && cd lab-27-data-observability
git init
claude
```
Type `LAB 27`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Add source freshness and row-count checks
2. Detect a schema change (a dropped column) automatically
3. Send an alert to a channel or email (or a log file in practice)
4. Write a runbook entry for each alert

## Done when
- [ ] Three alert types fire on test data
- [ ] Runbook exists

## Portfolio
Runbook in your repo.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
