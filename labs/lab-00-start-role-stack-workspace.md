# Lab 00: Start here: the role, the stack and your workspace

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Data engineer · Analytics engineer · Data analyst · Business / MarTech | L1 | 1–2 h | GitHub, Git, Claude Code, Python, DuckDB | Free | Nothing |

**Goal:** Understand what your role does, see the whole stack, and set up the workspace you will use for every lab: your fork, Git and Claude Code.

## What you'll learn
- What the role does day to day and where it sits in the data chain
- The academy stack: GA4 + GTM, Fivetran and dlt, Snowflake (BigQuery sandbox and DuckDB to start), dbt, Dagster, Looker Studio and Tableau, Git and GitHub Actions
- The Git loop you will repeat in every lab: branch, commit, push, pull request, merge

## Setup
- A GitHub account (apply for the Student Developer Pack)
- Git, Python 3.12+, VS Code and Claude Code installed (see START-HERE.md)

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-00
mkdir -p my-work/lab-00-start-role-stack-workspace && cd my-work/lab-00-start-role-stack-workspace
claude
```
Type `LAB 00`. The coach walks you through the steps below one at a time; you write the code and it reviews.

## Steps
1. Take the lecture first: in your study hub, press *Lecture* on step 1. It covers the role, a day in the job and the stack.
2. Fork `andersvlindberg/claude-data-academy` on GitHub. Your fork is your portfolio: everything you build goes in `my-work/`.
3. Clone your fork (GitHub Desktop or `git clone`), open the folder in a terminal and run `claude`.
4. Ask Claude to create a tiny fictional dataset for your first practice project (or use the ready-made example: `python datasets/nordvik/generate.py`). Open one table and say in one sentence what a row is.
5. Run your first query in DuckDB (for example orders per month). Save it as `first-query.sql` in your lab folder.
6. Write `my-work/README.md`: who you are, which track you chose and why (three sentences).
7. Create a branch `lab-00`, commit, push, open a pull request in your fork and merge it. This is the loop for every lab.

## Done when
- [ ] Your fork has `my-work/README.md` and your lab-00 folder on main
- [ ] You merged your first pull request
- [ ] You can name every layer of the stack and the tool used there

## Stretch
- Pin your fork on your GitHub profile
- Turn on GitHub Actions in your fork so the skill validator runs

## Ask the coach
- *"LAB 00"*
- *"LEARN: what does an analytics engineer actually do?"*

## Save it to your portfolio
```bash
git add .
git commit -m "lab 00: <what you built>"
git push -u origin lab-00
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Your fork is the portfolio. Recruiters will see the commit history from day one.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
