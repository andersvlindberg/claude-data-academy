# Lab 44: Marketing attribution and channel ROI

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst · Business & MarTech | L2–L3 | 3 h | SQL, GA4 data | Free |

**Goal:** Compare attribution models and what they mean for budget decisions.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-44
mkdir -p my-work/lab-44-marketing-attribution && cd my-work/lab-44-marketing-attribution
claude
```
Type `LAB 44`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Build last-click and first-click attribution from session data
2. Add a linear multi-touch model
3. Compare channel credit across models
4. Calculate ROI with (fake) spend and recommend a budget shift

## Done when
- [ ] Models sum to total conversions
- [ ] Recommendation states its uncertainty

## Save it to your portfolio
```bash
git add .
git commit -m "lab 44: <what you built>"
git push -u origin lab-44
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Attribution comparison memo.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
