# Lab 19: Activate segments in a CRM (reverse ETL)

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Analytics engineer · Business & MarTech | L3 | 2–3 h | HubSpot (free CRM), Python or a reverse ETL tool | Free | Lab 17 |

**Goal:** Sync a warehouse segment to CRM properties so marketing can use it in automation.

## What you'll learn
- Reverse ETL and the composable CDP
- CRM object model: contacts, companies, deals, properties
- Consent and lawful basis before activation (GDPR, Swedish marketing law)

## Setup
- HubSpot free account; import a sample of Nordvik `crm_contacts` (fictional)
- A private app token stored in an env var

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-19
mkdir -p my-work/lab-19-reverse-etl-crm && cd my-work/lab-19-reverse-etl-crm
claude
```
Type `LAB 19`. The coach walks you through the steps below one at a time; you write the code and it reviews.

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

## Save it to your portfolio
```bash
git add .
git commit -m "lab 19: <what you built>"
git push -u origin lab-19
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Architecture diagram: warehouse → CRM → automation.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
