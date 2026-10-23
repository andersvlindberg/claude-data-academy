# Lab 34: SQL style and refactoring

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer · Data analyst | L1–L2 | 2 h | SQL, sqlfluff | Free |

**Goal:** Turn a messy query into readable, reviewable SQL.

## Run it with Claude Code
```bash
mkdir lab-34-sql-style-refactoring && cd lab-34-sql-style-refactoring
git init
claude
```
Type `LAB 34`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Rewrite a nested query as named CTEs
2. Apply a naming and formatting convention
3. Run sqlfluff and fix the findings
4. Explain each CTE in one comment line

## Done when
- [ ] Same result before and after
- [ ] Lint passes

## Portfolio
Before/after gist.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
