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
- `fct_orders` and `dim_customers` from Lab 09 (or a public retail dataset)

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-17-rfm-clv-segmentation && cd lab-17-rfm-clv-segmentation
git init
claude
```
Then type: `LAB 17`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

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

## Portfolio
One-page segment brief: the kind of thing hiring managers love.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
