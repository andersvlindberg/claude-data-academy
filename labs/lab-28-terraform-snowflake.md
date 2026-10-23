# Lab 28: Infrastructure as code: Snowflake with Terraform

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L3 | 3 h | Terraform, Snowflake | Trial |

**Goal:** Create warehouses, databases and roles from code instead of clicking.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-28
mkdir -p my-work/lab-28-terraform-snowflake && cd my-work/lab-28-terraform-snowflake
claude
```
Type `LAB 28`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Install Terraform and the Snowflake provider
2. Define a database, warehouse and two roles
3. Plan and apply; then change a setting and re-plan
4. Keep state and credentials out of Git

## Done when
- [ ] terraform plan shows no drift
- [ ] No secrets committed

## Save it to your portfolio
```bash
git add .
git commit -m "lab 28: <what you built>"
git push -u origin lab-28
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
An infra/ folder in your capstone.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
