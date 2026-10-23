# Lab 28: Infrastructure as code: Snowflake with Terraform

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L3 | 3 h | Terraform, Snowflake | Trial |

**Goal:** Create warehouses, databases and roles from code instead of clicking.

## Run it with Claude Code
```bash
mkdir lab-28-terraform-snowflake && cd lab-28-terraform-snowflake
git init
claude
```
Type `LAB 28`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Install Terraform and the Snowflake provider
2. Define a database, warehouse and two roles
3. Plan and apply; then change a setting and re-plan
4. Keep state and credentials out of Git

## Done when
- [ ] terraform plan shows no drift
- [ ] No secrets committed

## Portfolio
An infra/ folder in your capstone.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
