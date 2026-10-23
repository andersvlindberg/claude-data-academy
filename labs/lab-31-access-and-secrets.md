# Lab 31: Access, secrets and least privilege audit

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L2–L3 | 2 h | Snowflake or BigQuery, GitHub | Trial / free |

**Goal:** Review who can do what, rotate keys and remove standing access.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-31
mkdir -p my-work/lab-31-access-and-secrets && cd my-work/lab-31-access-and-secrets
claude
```
Type `LAB 31`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. List all roles, users and grants
2. Find and remove excessive privileges
3. Rotate a key pair and update CI secrets
4. Document the access model

## Done when
- [ ] Every user has a role with a reason
- [ ] Key rotated without downtime

## Save it to your portfolio
```bash
git add .
git commit -m "lab 31: <what you built>"
git push -u origin lab-31
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Access model diagram.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
