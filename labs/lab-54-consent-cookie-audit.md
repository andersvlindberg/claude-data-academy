# Lab 54: Cookie and consent audit of a real site

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Business / MarTech · Data engineer | L2 | 2 h | Chrome DevTools | Free |

**Goal:** Check what a site sets and sends before and after consent.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-54
mkdir -p my-work/lab-54-consent-cookie-audit && cd my-work/lab-54-consent-cookie-audit
claude
```
Type `LAB 54`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Open a site in a clean profile and record cookies and requests before consent
2. Reject all and check again
3. Accept all and compare
4. Write findings against Swedish rules (LEK, IMY guidance)

## Done when
- [ ] Before/after table complete
- [ ] Findings cite the rule

## Save it to your portfolio
```bash
git add .
git commit -m "lab 54: <what you built>"
git push -u origin lab-54
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
An audit report (use a public site, report findings neutrally).

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
