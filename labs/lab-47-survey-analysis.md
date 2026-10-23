# Lab 47: Customer survey: design and analysis (GDPR-safe)

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst · Business / MarTech | L2 | 2–3 h | Google Forms, Sheets or Python | Free |

**Goal:** Design a short survey, collect data lawfully and analyse it.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-47
mkdir -p my-work/lab-47-survey-analysis && cd my-work/lab-47-survey-analysis
claude
```
Type `LAB 47`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Write 8 unbiased questions and the purpose
2. Add a privacy notice and avoid unnecessary personal data
3. Collect test responses
4. Analyse with crosstabs and one significance check

## Done when
- [ ] Privacy notice states purpose and retention
- [ ] Insights tied to questions

## Save it to your portfolio
```bash
git add .
git commit -m "lab 47: <what you built>"
git push -u origin lab-47
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Survey + findings deck.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
