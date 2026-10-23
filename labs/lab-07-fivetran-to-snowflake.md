# Lab 07: Managed ingestion with Fivetran

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data engineer | L2 | 1–2 h | Fivetran, Snowflake, Google Sheets | Fivetran free plan / trial | Lab 06 |

**Goal:** Sync a source into Snowflake RAW with Fivetran and understand what a managed connector does for you.

## What you'll learn
- Connectors, sync frequency, MAR (monthly active rows)
- Fivetran system columns (`_fivetran_synced`, `_fivetran_deleted`)
- When to buy vs build (Fivetran vs dlt)

## Setup
- A Google Sheet with Nordvik `marketing_campaigns` pasted in
- Snowflake LOADER role from Lab 06

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-07
mkdir -p my-work/lab-07-fivetran-to-snowflake && cd my-work/lab-07-fivetran-to-snowflake
claude
```
Type `LAB 07`. The coach walks you through the steps below one at a time; you write the code and it reviews.

## Steps
1. Connect Snowflake as the destination using the LOADER role.
2. Add the Google Sheets connector and run the first sync.
3. Inspect the table and the Fivetran columns.
4. Edit, add and delete rows in the sheet; sync again and observe what changes.
5. Check MAR usage in the dashboard and estimate cost at 10x volume.
6. Write a half-page comparison: Fivetran vs your dlt pipeline from Lab 05.

## Done when
- [ ] Data lands in RAW with the right role
- [ ] You can explain soft deletes
- [ ] Your buy-vs-build note is concrete

## Stretch
- Add a second connector (e.g. a free CRM like HubSpot)

## Ask the coach
- *"LEARN: what MAR means for cost"*
- *"QUIZ me on ELT vs ETL"*

## Save it to your portfolio
```bash
git add .
git commit -m "lab 07: <what you built>"
git push -u origin lab-07
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Short write-up with screenshots; it shows you understand tool trade-offs.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
