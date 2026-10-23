# Lab 43: Cohort retention analysis in SQL

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst | L2–L3 | 2–3 h | SQL | Free |

**Goal:** Measure how many customers come back, by first-purchase month.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-43
mkdir -p my-work/lab-43-cohort-retention && cd my-work/lab-43-cohort-retention
claude
```
Type `LAB 43`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Assign each customer a cohort month
2. Compute activity by months since first purchase
3. Pivot into a retention triangle
4. Visualise and explain the pattern

## Done when
- [ ] Triangle reconciles with customer counts
- [ ] One clear insight

## Save it to your portfolio
```bash
git add .
git commit -m "lab 43: <what you built>"
git push -u origin lab-43
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Retention chart + note.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
