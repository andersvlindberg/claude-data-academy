# Lab 33: Jinja and macros in dbt

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer | L2–L3 | 2–3 h | dbt | Free |

**Goal:** Remove repetition with Jinja loops and write your own macros.

## Run it with Claude Code
```bash
mkdir lab-33-dbt-jinja-macros && cd lab-33-dbt-jinja-macros
git init
claude
```
Type `LAB 33`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Pivot payment methods into columns with a Jinja loop
2. Write a macro (e.g. cents_to_sek) and use it in two models
3. Use target to vary behaviour between dev and prod
4. Read compiled SQL to check what Jinja produced

## Done when
- [ ] No copy-pasted logic left
- [ ] You can read compiled SQL

## Portfolio
A macros/ folder with docs.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
