# Lab 64: Build a small AI analysis helper safely

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst · Analytics engineer | L3 | 3 h | Claude, MCP, read-only warehouse | Free / trial |

**Goal:** Let Claude draft analyses from your marts while you verify every number.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-64
mkdir -p my-work/lab-64-claude-analysis-agent && cd my-work/lab-64-claude-analysis-agent
claude
```
Type `LAB 64`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Give read-only access to documented marts
2. Write a prompt template for a weekly summary
3. Verify every number against SQL
4. Write rules for what the helper may never do

## Done when
- [ ] All numbers verified
- [ ] Rules written

## Save it to your portfolio
```bash
git add .
git commit -m "lab 64: <what you built>"
git push -u origin lab-64
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A demo plus your safety rules.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
