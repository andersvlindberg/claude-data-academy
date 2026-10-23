# Lab 31: Access, secrets and least privilege audit

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L2–L3 | 2 h | Snowflake or BigQuery, GitHub | Trial / free |

**Goal:** Review who can do what, rotate keys and remove standing access.

## Run it with Claude Code
```bash
mkdir lab-31-access-and-secrets && cd lab-31-access-and-secrets
git init
claude
```
Type `LAB 31`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. List all roles, users and grants
2. Find and remove excessive privileges
3. Rotate a key pair and update CI secrets
4. Document the access model

## Done when
- [ ] Every user has a role with a reason
- [ ] Key rotated without downtime

## Portfolio
Access model diagram.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
