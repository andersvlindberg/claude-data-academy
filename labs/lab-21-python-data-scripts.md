# Lab 21: Python scripts that fetch data reliably

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L1–L2 | 2 h | Python, requests | Free |

**Goal:** Write a small, well-behaved extractor: pagination, retries, rate limits and logging.

## Run it with Claude Code
```bash
mkdir lab-21-python-data-scripts && cd lab-21-python-data-scripts
git init
claude
```
Type `LAB 21`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Call a public API and save raw JSON with a timestamped file name
2. Handle pagination and HTTP errors with retries and backoff
3. Add logging and a config file; keep tokens in .env
4. Write one test for the parsing function

## Done when
- [ ] Re-running does not duplicate files
- [ ] A failed request is retried and logged

## Portfolio
A tidy extractor script; the base for Lab 05.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
