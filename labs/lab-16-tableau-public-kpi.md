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
- Export a mart to CSV (no personal data)

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-16-tableau-public-kpi && cd lab-16-tableau-public-kpi
git init
claude
```
Then type: `LAB 16`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

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

## Portfolio
Tableau Public profile link on your CV.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
