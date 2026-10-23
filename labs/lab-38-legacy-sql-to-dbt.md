# Lab 38: Refactor a legacy SQL report into dbt

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer | L3 | 3 h | dbt, audit_helper | Free |

**Goal:** Migrate a long stored query into layered models without changing the numbers.

## Run it with Claude Code
```bash
mkdir lab-38-legacy-sql-to-dbt && cd lab-38-legacy-sql-to-dbt
git init
claude
```
Type `LAB 38`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Run the legacy query and save the output
2. Split it into staging, intermediate and mart models
3. Compare old vs new with audit_helper until they match
4. Write what changed and why

## Done when
- [ ] 100% row match or every difference explained
- [ ] Models tested

## Portfolio
A migration case study.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
