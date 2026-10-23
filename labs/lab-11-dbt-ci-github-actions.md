# Lab 11: dbt CI with GitHub Actions and Slim CI

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Analytics engineer · Data engineer | L3 | 2–3 h | dbt, GitHub Actions | Free | Lab 08 |

**Goal:** Run `dbt build` automatically on every pull request so broken models never reach main.

## What you'll learn
- Branches, pull requests and code review
- GitHub Actions workflows and secrets
- Slim CI: `state:modified+` and `--defer`

## Setup
- Your dbt project in a GitHub repo
- Warehouse credentials stored as GitHub Actions secrets

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-11
mkdir -p my-work/lab-11-dbt-ci-github-actions && cd my-work/lab-11-dbt-ci-github-actions
claude
```
Type `LAB 11`. The coach walks you through the steps below one at a time; you write the code and it reviews.

## Steps
1. Write `.github/workflows/dbt-ci.yml` that installs dbt and runs `dbt build` against a CI schema.
2. Store credentials as repository secrets; reference them as env vars in `profiles.yml`.
3. Open a PR with a deliberately failing test and watch CI block it.
4. Add Slim CI: build only modified models and their children using production state.
5. Protect `main` so merges require passing CI.
6. Add a PR template with a checklist (tests added, docs updated).

## Done when
- [ ] A failing model blocks the PR
- [ ] No credentials in the repo
- [ ] CI time drops with Slim CI

## Stretch
- Add sqlfluff linting to CI
- Post a comment with changed models

## Ask the coach
- *"LEARN: how GitHub Actions works"*
- *"BUILD: my CI cannot find profiles.yml"*

## Save it to your portfolio
```bash
git add .
git commit -m "lab 11: <what you built>"
git push -u origin lab-11
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
Green CI badge on your capstone README.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
