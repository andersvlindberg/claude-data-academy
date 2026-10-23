# Lab 39: AE capstone: the Nordvik analytics platform

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer | L3–L4 | 10–15 h | Fivetran or dlt, Snowflake, dbt, Dagster, Looker Studio | Free + trials |

**Goal:** Build the full reference stack for a fictional retailer and defend every design decision.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-39
mkdir -p my-work/lab-39-ae-capstone && cd my-work/lab-39-ae-capstone
claude
```
Type `LAB 39`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Ingest shop, GA4 and CRM data
2. Staging, intermediate and marts with tests, contracts and docs
3. CI, orchestration and a privacy zone
4. A dashboard and a 5-minute walkthrough video

## Done when
- [ ] Everything runs from the README
- [ ] You can explain every model

## Save it to your portfolio
```bash
git add .
git commit -m "lab 39: <what you built>"
git push -u origin lab-39
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Your headline AE portfolio project.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
