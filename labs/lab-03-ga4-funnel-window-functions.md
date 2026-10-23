# Lab 03: Sessions and a purchase funnel with window functions

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Analytics engineer · Data analyst | L2 | 2–3 h | BigQuery sandbox | Free | Lab 02 |

**Goal:** Build a session table and a four-step e-commerce funnel from raw GA4 events.

## What you'll learn
- ROW_NUMBER, LAG/LEAD, FIRST_VALUE
- Sessionisation with window functions
- Funnel conversion and drop-off

## Setup
- Same dataset as Lab 02

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-03-ga4-funnel-window-functions && cd lab-03-ga4-funnel-window-functions
git init
claude
```
Then type: `LAB 03`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Build `sessions`: one row per user + session id, with start time, landing page (FIRST_VALUE), event count and whether a purchase happened.
2. Order events within a session and compute time between events with LAG.
3. Define the funnel: `view_item` → `add_to_cart` → `begin_checkout` → `purchase`, counted per session.
4. Compute step-to-step and overall conversion; find the biggest drop-off.
5. Split the funnel by device category and by landing page group.
6. Sanity check: purchases in your funnel vs a plain count of `purchase` events. Explain any gap.

## Done when
- [ ] Funnel numbers reconcile with raw counts (or the gap is explained)
- [ ] You can explain PARTITION BY vs GROUP BY

## Stretch
- Add a 30-minute inactivity rule to split sessions yourself
- Build the same funnel in dbt later (Lab 09)

## Ask the coach
- *"LEARN: window functions, I know GROUP BY"*
- *"REVIEW my sessionisation logic"*

## Portfolio
`ga4-funnel` repo with SQL and a one-page insight summary.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
