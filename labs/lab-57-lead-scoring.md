# Lab 57: Lead scoring: from rules to data

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Business / MarTech · Data analyst | L2–L3 | 2–3 h | Sheets or Python, CRM data | Free |

**Goal:** Score leads so sales calls the right people first.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-57
mkdir -p my-work/lab-57-lead-scoring && cd my-work/lab-57-lead-scoring
claude
```
Type `LAB 57`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Build a rule-based score with sales
2. Check it against historic conversions
3. Fit a simple model and compare
4. Agree thresholds and a review cadence

## Done when
- [ ] Score beats random on history
- [ ] Thresholds agreed

## Save it to your portfolio
```bash
git add .
git commit -m "lab 57: <what you built>"
git push -u origin lab-57
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Scoring model + memo.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
