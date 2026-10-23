# Lab 54: Cookie and consent audit of a real site

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Business / MarTech · Data engineer | L2 | 2 h | Chrome DevTools | Free |

**Goal:** Check what a site sets and sends before and after consent.

## Run it with Claude Code
```bash
mkdir lab-54-consent-cookie-audit && cd lab-54-consent-cookie-audit
git init
claude
```
Type `LAB 54`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Open a site in a clean profile and record cookies and requests before consent
2. Reject all and check again
3. Accept all and compare
4. Write findings against Swedish rules (LEK, IMY guidance)

## Done when
- [ ] Before/after table complete
- [ ] Findings cite the rule

## Portfolio
An audit report (use a public site, report findings neutrally).

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
