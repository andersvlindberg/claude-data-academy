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

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-15-looker-studio-dashboard && cd lab-15-looker-studio-dashboard
git init
claude
```
Then type: `LAB 15`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

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

## Portfolio
Public link + screenshot.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
