# Lab 27: Data observability: freshness, volume and schema alerts

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer · Analytics engineer | L3 | 2 h | dbt, Dagster or Elementary | Free |

**Goal:** Detect broken data before stakeholders do.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-27
mkdir -p my-work/lab-27-data-observability && cd my-work/lab-27-data-observability
claude
```
Type `LAB 27`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Add source freshness and row-count checks
2. Detect a schema change (a dropped column) automatically
3. Send an alert to a channel or email (or a log file in practice)
4. Write a runbook entry for each alert

## Done when
- [ ] Three alert types fire on test data
- [ ] Runbook exists

## Save it to your portfolio
```bash
git add .
git commit -m "lab 27: <what you built>"
git push -u origin lab-27
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Runbook in your repo.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
