# Lab 29: Cost control: sizing, profiling and budgets

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer · Analytics engineer | L2–L3 | 2 h | Snowflake or BigQuery | Trial / free |

**Goal:** Make queries cheaper and keep spend predictable.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-29
mkdir -p my-work/lab-29-warehouse-cost-control && cd my-work/lab-29-warehouse-cost-control
claude
```
Type `LAB 29`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Find the most expensive queries in query history
2. Profile one and fix it (pruning, clustering, fewer columns)
3. Set auto-suspend, a resource monitor or BigQuery quotas
4. Estimate monthly cost of your capstone

## Done when
- [ ] One query measurably cheaper
- [ ] Budget guard in place

## Save it to your portfolio
```bash
git add .
git commit -m "lab 29: <what you built>"
git push -u origin lab-29
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Before/after cost note.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
