# Lab 19: Activate segments in a CRM (reverse ETL)

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Analytics engineer · Business / MarTech | L3 | 2–3 h | HubSpot (free CRM), Python or a reverse ETL tool | Free | Lab 17 |

**Goal:** Sync a warehouse segment to CRM properties so marketing can use it in automation.

## What you'll learn
- Reverse ETL and the composable CDP
- CRM object model: contacts, companies, deals, properties
- Consent and lawful basis before activation (GDPR, Swedish marketing law)

## Setup
- HubSpot free account with fake contacts only
- A private app token stored in an env var

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-19-reverse-etl-crm && cd lab-19-reverse-etl-crm
git init
claude
```
Then type: `LAB 19`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Create a custom contact property `rfm_segment`.
2. Write a script (or use a reverse ETL tool's free tier) that upserts segment values by email from your mart.
3. Only sync contacts with recorded marketing consent; document the rule.
4. Build a HubSpot list or workflow triggered by `rfm_segment = At risk`.
5. Log what was synced and make the job idempotent (running twice changes nothing).

## Done when
- [ ] Segment visible on contacts
- [ ] Consent filter in place
- [ ] Re-runs are safe

## Stretch
- Orchestrate the sync in Dagster after dbt

## Ask the coach
- *"LEARN: reverse ETL"*
- *"REVIEW my consent logic"*

## Portfolio
Architecture diagram: warehouse → CRM → automation.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
