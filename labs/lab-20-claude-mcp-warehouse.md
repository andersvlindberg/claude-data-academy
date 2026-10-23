# Lab 20: Safe AI on your marts: Claude + MCP, read-only

| Role | Level | Time | Tools | Cost | Builds on |
|---|---|---|---|---|---|
| Analytics engineer · Data analyst | L3 | 2 h | Claude Code, an MCP server for your warehouse or dbt | Free / trial | Lab 09 |

**Goal:** Let Claude answer business questions from documented marts without write access or personal data.

## What you'll learn
- What MCP is and how tools are exposed
- Least privilege: a read-only role on marts only
- Why documentation quality decides AI answer quality

## Setup
- A REPORTER-style read-only role (Lab 06)
- The dbt MCP server or your warehouse's MCP server configured in Claude Code

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-20
mkdir -p my-work/lab-20-claude-mcp-warehouse && cd my-work/lab-20-claude-mcp-warehouse
claude
```
Type `LAB 20`. The coach walks you through the steps below one at a time; you write the code and it reviews.

## Steps
1. Create a read-only user that can see only marts (no RAW, no identity vault).
2. Configure the MCP server in Claude Code with that user.
3. Ask three business questions; check each answer against your own SQL.
4. Improve column descriptions in dbt and ask again; note the difference.
5. Try to make it write or read PII and confirm it cannot.

## Done when
- [ ] Answers reconcile with SQL
- [ ] Write and PII access is impossible, not just discouraged

## Stretch
- Add a semantic layer so metrics are defined once

## Ask the coach
- *"LEARN: MCP basics"*
- *"REVIEW my MCP permission setup"*

## Save it to your portfolio
```bash
git add .
git commit -m "lab 20: <what you built>"
git push -u origin lab-20
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A demo GIF of Claude answering from your marts, with the safety design explained.

> Safety: use fictional or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
