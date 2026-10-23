# Lab 06: Set up Snowflake like a team would

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data engineer · Analytics engineer | L2 | 2 h | Snowflake | Trial (30 days) | Lab 01 |

**Goal:** Create databases, warehouses and roles for a dev/prod analytics setup with key-pair authentication.

## What you'll learn
- Databases, schemas, virtual warehouses and credits
- Role-based access: LOADER, TRANSFORMER, REPORTER
- Key-pair auth instead of passwords
- Auto-suspend and resource monitors to protect credits

## Setup
- Start the Snowflake trial only when you are ready (the clock starts at sign-up)

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-06-snowflake-setup && cd lab-06-snowflake-setup
git init
claude
```
Then type: `LAB 06`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

## Steps
1. Create `RAW`, `ANALYTICS_DEV` and `ANALYTICS` databases.
2. Create an XS warehouse with `AUTO_SUSPEND = 60` and a resource monitor that suspends at your limit.
3. Create roles LOADER (write RAW), TRANSFORMER (read RAW, write ANALYTICS*), REPORTER (read ANALYTICS marts) and grant them.
4. Generate an RSA key pair locally and attach it: `ALTER USER dbt_user SET RSA_PUBLIC_KEY='...';`
5. Connect from Python or the Snowflake CLI with the private key; never commit it.
6. Test each role: try a forbidden action and confirm it fails.

## Done when
- [ ] Each role can do exactly its job
- [ ] Warehouse auto-suspends
- [ ] No passwords or keys in Git

## Stretch
- Zero-copy clone `ANALYTICS` into a dev database
- Write the setup as a versioned SQL script

## Ask the coach
- *"LEARN: Snowflake roles and grants"*
- *"REVIEW my grants script"*

## Portfolio
`snowflake-setup.sql` with comments explaining each choice.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
