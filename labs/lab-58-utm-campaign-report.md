# Lab 58: UTM governance and a campaign report

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Business / MarTech · Data analyst | L1–L2 | 2 h | Sheets, GA4, Looker Studio | Free |

**Goal:** Make campaign data clean and report results per campaign.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-58
mkdir -p my-work/lab-58-utm-campaign-report && cd my-work/lab-58-utm-campaign-report
claude
```
Type `LAB 58`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Write UTM naming rules and a URL builder sheet
2. Find messy UTMs in GA4 data and map them
3. Build a campaign report in Looker Studio
4. Recommend which campaigns to scale

## Done when
- [ ] Naming rules documented
- [ ] Report reconciles with GA4

## Save it to your portfolio
```bash
git add .
git commit -m "lab 58: <what you built>"
git push -u origin lab-58
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
UTM builder + report.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
