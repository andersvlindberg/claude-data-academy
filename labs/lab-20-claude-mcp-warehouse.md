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

## Run it with Claude Code
Labs are hands-on, so do them in Claude Code inside your own repo, where Claude can see your files and errors:
```bash
mkdir lab-20-claude-mcp-warehouse && cd lab-20-claude-mcp-warehouse
git init
claude
```
Then type: `LAB 20`. The coach walks you through the steps below one at a time, you type the code, and it reviews.

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

## Portfolio
A demo GIF of Claude answering from your marts, with the safety design explained.

> Safety: use fake or public data, keep secrets in `.env` or the tool's secrets file (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
