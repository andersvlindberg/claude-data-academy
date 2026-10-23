# Lab 16: KPI story in Tableau Public

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data analyst | L2 | 3 h | Tableau Public | Free (public) | Lab 09 |

**Goal:** Tell a short data story with LOD expressions and a dashboard published to your profile.

## What you'll learn
- Dimensions vs measures, discrete vs continuous
- LOD expressions (FIXED, INCLUDE, EXCLUDE)
- Dashboard actions and story points

## Setup
- Export a Nordvik mart to CSV (no personal data)

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-16
mkdir -p my-work/lab-16-tableau-public-kpi && cd my-work/lab-16-tableau-public-kpi
claude
```
Type `LAB 16`. The coach walks you through the steps below one at a time; you write the code and it reviews.

## Steps
1. Build a revenue trend and a customer cohort view.
2. Write a FIXED LOD for first purchase date per customer.
3. Build a dashboard with a filter action between views.
4. Add a three-point story: what happened, why, what to do.
5. Publish to Tableau Public.

## Done when
- [ ] Published and linked
- [ ] The story ends with a recommendation

## Stretch
- Rebuild the same view in Looker Studio and compare

## Ask the coach
- *"LEARN: LOD expressions"*
- *"REVIEW my data story"*

## Save it to your portfolio
```bash
git add .
git commit -m "lab 16: <what you built>"
git push -u origin lab-16
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Tableau Public profile link on your CV.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
