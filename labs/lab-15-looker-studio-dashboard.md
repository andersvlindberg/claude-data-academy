# Lab 15: A decision-ready dashboard in Looker Studio

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data analyst | L2 | 2–3 h | Looker Studio, BigQuery | Free | Lab 03 or 09 |

**Goal:** Build a one-page e-commerce performance dashboard that answers a real question.

## What you'll learn
- Start from the decision, not the chart
- Data sources, blended data and calculated fields
- Chart choice, filters and date comparisons
- Performance: query marts, not raw events

## Setup
- A mart or result table in BigQuery

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-15
mkdir -p my-work/lab-15-looker-studio-dashboard && cd my-work/lab-15-looker-studio-dashboard
claude
```
Type `LAB 15`. The coach walks you through the steps below one at a time; you write the code and it reviews.

## Steps
1. Write the one question the dashboard answers and who uses it.
2. Connect to your mart (not the raw GA4 export).
3. Build KPI scorecards with period-over-period comparison.
4. Add a trend line, a funnel or bar chart, and one breakdown table.
5. Add date and device filters; check every number against SQL.
6. Ask someone to use it for two minutes; fix what confused them.

## Done when
- [ ] Every number reconciles with SQL
- [ ] The question is answered above the fold
- [ ] No raw event table queried

## Stretch
- Add GA4 as a second live source and compare

## Ask the coach
- *"LEARN: how to choose the right chart"*
- *"REVIEW my dashboard as a stakeholder"*

## Save it to your portfolio
```bash
git add .
git commit -m "lab 15: <what you built>"
git push -u origin lab-15
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Public link + screenshot.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
