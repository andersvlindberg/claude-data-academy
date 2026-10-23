# Lab 38: Refactor a legacy SQL report into dbt

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer | L3 | 3 h | dbt, audit_helper | Free |

**Goal:** Migrate a long stored query into layered models without changing the numbers.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-38
mkdir -p my-work/lab-38-legacy-sql-to-dbt && cd my-work/lab-38-legacy-sql-to-dbt
claude
```
Type `LAB 38`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Run the legacy query and save the output
2. Split it into staging, intermediate and mart models
3. Compare old vs new with audit_helper until they match
4. Write what changed and why

## Done when
- [ ] 100% row match or every difference explained
- [ ] Models tested

## Save it to your portfolio
```bash
git add .
git commit -m "lab 38: <what you built>"
git push -u origin lab-38
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A migration case study.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
