# Lab 59: MarTech stack audit

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Business & MarTech | L2 | 2–3 h | Sheets or whiteboard, Wappalyzer | Free |

**Goal:** Map a company's marketing tools, data flows and overlaps.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-59
mkdir -p my-work/lab-59-martech-stack-audit && cd my-work/lab-59-martech-stack-audit
claude
```
Type `LAB 59`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. List tools per category (analytics, CRM, email, ads, CDP)
2. Draw data flows between them
3. Find overlaps, gaps and privacy risks
4. Recommend a target stack

## Done when
- [ ] Every flow has a direction and data type
- [ ] Recommendations prioritised

## Save it to your portfolio
```bash
git add .
git commit -m "lab 59: <what you built>"
git push -u origin lab-59
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A stack map.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
