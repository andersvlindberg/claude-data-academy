# Lab 40: Spreadsheets for analysts: pivots, XLOOKUP and validation

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst · Business / MarTech | L1 | 2 h | Google Sheets or Excel | Free |

**Goal:** Answer business questions fast in a spreadsheet, the tool every stakeholder knows.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-40
mkdir -p my-work/lab-40-sheets-for-analysts && cd my-work/lab-40-sheets-for-analysts
claude
```
Type `LAB 40`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Clean an export (types, duplicates, trims)
2. Build a pivot of revenue by month and category
3. Join two tables with XLOOKUP
4. Add data validation and a simple chart

## Done when
- [ ] Numbers match a SQL check
- [ ] The sheet is readable by someone else

## Save it to your portfolio
```bash
git add .
git commit -m "lab 40: <what you built>"
git push -u origin lab-40
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A clean analysis sheet.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
