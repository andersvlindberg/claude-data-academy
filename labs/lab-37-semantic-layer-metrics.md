# Lab 37: Semantic layer and metrics with MetricFlow

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer | L3 | 2–3 h | dbt Semantic Layer / MetricFlow | Free (local) |

**Goal:** Define revenue and conversion once so every tool uses the same logic.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-37
mkdir -p my-work/lab-37-semantic-layer-metrics && cd my-work/lab-37-semantic-layer-metrics
claude
```
Type `LAB 37`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Create a semantic model on fct_orders
2. Define simple, ratio and cumulative metrics
3. Query metrics by time and dimension
4. Document who owns each metric

## Done when
- [ ] Metrics return the same numbers as your SQL
- [ ] Owners documented

## Save it to your portfolio
```bash
git add .
git commit -m "lab 37: <what you built>"
git push -u origin lab-37
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A metrics.yml worth showing in interviews.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
