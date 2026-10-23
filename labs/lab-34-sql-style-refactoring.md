# Lab 34: SQL style and refactoring

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer · Data analyst | L1–L2 | 2 h | SQL, sqlfluff | Free |

**Goal:** Turn a messy query into readable, reviewable SQL.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-34
mkdir -p my-work/lab-34-sql-style-refactoring && cd my-work/lab-34-sql-style-refactoring
claude
```
Type `LAB 34`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Rewrite a nested query as named CTEs
2. Apply a naming and formatting convention
3. Run sqlfluff and fix the findings
4. Explain each CTE in one comment line

## Done when
- [ ] Same result before and after
- [ ] Lint passes

## Save it to your portfolio
```bash
git add .
git commit -m "lab 34: <what you built>"
git push -u origin lab-34
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Before/after gist.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
