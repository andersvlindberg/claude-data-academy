# Lab 37: Semantic layer and metrics with MetricFlow

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer | L3 | 2–3 h | dbt Semantic Layer / MetricFlow | Free (local) |

**Goal:** Define revenue and conversion once so every tool uses the same logic.

## Run it with Claude Code
```bash
mkdir lab-37-semantic-layer-metrics && cd lab-37-semantic-layer-metrics
git init
claude
```
Type `LAB 37`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Create a semantic model on fct_orders
2. Define simple, ratio and cumulative metrics
3. Query metrics by time and dimension
4. Document who owns each metric

## Done when
- [ ] Metrics return the same numbers as your SQL
- [ ] Owners documented

## Portfolio
A metrics.yml worth showing in interviews.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
