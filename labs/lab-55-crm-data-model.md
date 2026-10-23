# Lab 55: CRM data model in HubSpot

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Business & MarTech | L1–L2 | 2 h | HubSpot free CRM | Free |

**Goal:** Set up contacts, companies, deals and lifecycle stages that reporting can rely on.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-55
mkdir -p my-work/lab-55-crm-data-model && cd my-work/lab-55-crm-data-model
claude
```
Type `LAB 55`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Create custom properties with clear definitions
2. Define lifecycle stages and deal pipeline
3. Import fake contacts and companies with associations
4. Build a simple report and spot data quality issues

## Done when
- [ ] Definitions documented
- [ ] Report numbers make sense

## Save it to your portfolio
```bash
git add .
git commit -m "lab 55: <what you built>"
git push -u origin lab-55
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
CRM model diagram.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
