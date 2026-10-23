# Lab 29: Cost control: sizing, profiling and budgets

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer · Analytics engineer | L2–L3 | 2 h | Snowflake or BigQuery | Trial / free |

**Goal:** Make queries cheaper and keep spend predictable.

## Run it with Claude Code
```bash
mkdir lab-29-warehouse-cost-control && cd lab-29-warehouse-cost-control
git init
claude
```
Type `LAB 29`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Find the most expensive queries in query history
2. Profile one and fix it (pruning, clustering, fewer columns)
3. Set auto-suspend, a resource monitor or BigQuery quotas
4. Estimate monthly cost of your capstone

## Done when
- [ ] One query measurably cheaper
- [ ] Budget guard in place

## Portfolio
Before/after cost note.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
