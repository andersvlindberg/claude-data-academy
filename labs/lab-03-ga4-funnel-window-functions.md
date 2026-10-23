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

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-03
mkdir -p my-work/lab-03-ga4-funnel-window-functions && cd my-work/lab-03-ga4-funnel-window-functions
claude
```
Type `LAB 03`. The coach walks you through the steps below one at a time; you write the code and it reviews.

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

## Save it to your portfolio
```bash
git add .
git commit -m "lab 03: <what you built>"
git push -u origin lab-03
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
`ga4-funnel` repo with SQL and a one-page insight summary.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
