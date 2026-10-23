# Lab 53: Write a tracking plan for a webshop

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Business / MarTech · Data engineer | L1–L2 | 2 h | Sheets | Free |

**Goal:** Define which events and properties to track, why, and who owns them.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-53
mkdir -p my-work/lab-53-tracking-plan && cd my-work/lab-53-tracking-plan
claude
```
Type `LAB 53`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. List business questions first
2. Map them to GA4 recommended e-commerce events
3. Define properties, types and example values
4. Add consent category and owner per event

## Done when
- [ ] Every event answers a question
- [ ] Consent category set

## Save it to your portfolio
```bash
git add .
git commit -m "lab 53: <what you built>"
git push -u origin lab-53
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A tracking plan sheet (reused in Lab 04).

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
