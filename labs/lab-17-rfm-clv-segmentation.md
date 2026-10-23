# Lab 17: Customer segmentation: RFM and lifetime value

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data analyst · Business / MarTech | L2–L3 | 3 h | SQL (any warehouse), optional Python | Free | Lab 09 |

**Goal:** Segment customers by recency, frequency and monetary value and estimate CLV to guide marketing.

## What you'll learn
- RFM scoring with NTILE
- Simple historic CLV vs predictive CLV
- Turning segments into actions (CRM, automation)

## Setup
- `fct_orders` and `dim_customers` from Lab 09, built on Nordvik

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-17
mkdir -p my-work/lab-17-rfm-clv-segmentation && cd my-work/lab-17-rfm-clv-segmentation
claude
```
Type `LAB 17`. The coach walks you through the steps below one at a time; you write the code and it reviews.

## Steps
1. Compute recency, frequency and monetary per customer.
2. Score each 1–5 with NTILE and combine into segments (Champions, At risk, Hibernating...).
3. Compute historic CLV and average order value per segment.
4. Build `mart_customer_segments` as a dbt model.
5. Write one marketing action per segment and how you'd measure it.

## Done when
- [ ] Segments are reproducible from SQL
- [ ] Each segment has an action and a KPI

## Stretch
- Predictive CLV with the `lifetimes` or a simple regression in Python

## Ask the coach
- *"LEARN: RFM segmentation"*
- *"INTERVIEW: case question on customer value"*

## Save it to your portfolio
```bash
git add .
git commit -m "lab 17: <what you built>"
git push -u origin lab-17
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
One-page segment brief: the kind of thing hiring managers love.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
