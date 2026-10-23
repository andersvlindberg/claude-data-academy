# Lab 64: Build a small AI analysis helper safely

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data analyst · Analytics engineer | L3 | 3 h | Claude, MCP, read-only warehouse | Free / trial |

**Goal:** Let Claude draft analyses from your marts while you verify every number.

## Run it with Claude Code
```bash
mkdir lab-64-claude-analysis-agent && cd lab-64-claude-analysis-agent
git init
claude
```
Type `LAB 64`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Give read-only access to documented marts
2. Write a prompt template for a weekly summary
3. Verify every number against SQL
4. Write rules for what the helper may never do

## Done when
- [ ] All numbers verified
- [ ] Rules written

## Portfolio
A demo plus your safety rules.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
