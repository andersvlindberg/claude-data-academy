# Lab 56: Email automation: welcome and abandoned cart

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Business & MarTech | L2 | 2–3 h | HubSpot or another free tool | Free |

**Goal:** Design segmented flows and decide how to measure them.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-56
mkdir -p my-work/lab-56-email-automation-flow && cd my-work/lab-56-email-automation-flow
claude
```
Type `LAB 56`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Define triggers, wait steps and exits
2. Write two variants of the first email
3. Add segmentation by RFM segment
4. Define success metrics and a holdout group

## Done when
- [ ] Flow has exit criteria
- [ ] Holdout defined

## Save it to your portfolio
```bash
git add .
git commit -m "lab 56: <what you built>"
git push -u origin lab-56
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Flow diagram + measurement plan.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
