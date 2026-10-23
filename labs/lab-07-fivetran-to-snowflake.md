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
- A Google Sheet with fake orders (no real personal data)
- Snowflake LOADER role from Lab 06

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-07-fivetran-to-snowflake && cd lab-07-fivetran-to-snowflake
git init
claude
```
Then type: `LAB 07`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

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

## Portfolio
Short write-up with screenshots; it shows you understand tool trade-offs.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
