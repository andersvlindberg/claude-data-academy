# Lab 49: Product analytics: feature adoption and funnels

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst | L2–L3 | 2–3 h | SQL, GA4 data | Free |

**Goal:** Measure whether a feature is used and whether it helps conversion.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-49
mkdir -p my-work/lab-49-product-analytics && cd my-work/lab-49-product-analytics
claude
```
Type `LAB 49`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Define the feature event and adoption metric
2. Compare users who used it vs not (beware selection bias)
3. Build a funnel with and without the feature
4. Recommend next steps or an experiment

## Done when
- [ ] Bias discussed
- [ ] Clear recommendation

## Save it to your portfolio
```bash
git add .
git commit -m "lab 49: <what you built>"
git push -u origin lab-49
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Feature report.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
