# Lab 33: Jinja and macros in dbt

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer | L2–L3 | 2–3 h | dbt | Free |

**Goal:** Remove repetition with Jinja loops and write your own macros.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-33
mkdir -p my-work/lab-33-dbt-jinja-macros && cd my-work/lab-33-dbt-jinja-macros
claude
```
Type `LAB 33`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Pivot payment methods into columns with a Jinja loop
2. Write a macro (e.g. cents_to_sek) and use it in two models
3. Use target to vary behaviour between dev and prod
4. Read compiled SQL to check what Jinja produced

## Done when
- [ ] No copy-pasted logic left
- [ ] You can read compiled SQL

## Save it to your portfolio
```bash
git add .
git commit -m "lab 33: <what you built>"
git push -u origin lab-33
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A macros/ folder with docs.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
