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

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-11-dbt-ci-github-actions && cd lab-11-dbt-ci-github-actions
git init
claude
```
Then type: `LAB 11`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

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

## Portfolio
Green CI badge on your capstone README.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
