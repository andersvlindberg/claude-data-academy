# Lab 26: Partitions, backfills and idempotent pipelines

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer · Analytics engineer | L3 | 2–3 h | Dagster, dbt or Python | Free |

**Goal:** Make pipelines safe to re-run for any day without duplicates.

## Run it with Claude Code
```bash
mkdir lab-26-partitions-backfills && cd lab-26-partitions-backfills
git init
claude
```
Type `LAB 26`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Partition a pipeline by day
2. Make the load idempotent (delete+insert or merge per partition)
3. Run a backfill for a past week
4. Prove a re-run changes nothing

## Done when
- [ ] Re-run of a partition is a no-op
- [ ] Backfill log shows each partition

## Portfolio
Screenshot of a backfill + explanation.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
