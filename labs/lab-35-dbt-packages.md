# Lab 35: dbt packages: dbt_utils, codegen and audit_helper

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer | L2 | 2 h | dbt | Free |

**Goal:** Use community packages instead of reinventing them.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-35
mkdir -p my-work/lab-35-dbt-packages && cd my-work/lab-35-dbt-packages
claude
```
Type `LAB 35`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Install packages and run dbt deps
2. Generate source YAML and base models with codegen
3. Use dbt_utils tests (unique_combination_of_columns, expression_is_true)
4. Compare two relations with audit_helper

## Done when
- [ ] Generated YAML committed
- [ ] audit_helper comparison explained

## Save it to your portfolio
```bash
git add .
git commit -m "lab 35: <what you built>"
git push -u origin lab-35
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Package usage notes in your capstone.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
