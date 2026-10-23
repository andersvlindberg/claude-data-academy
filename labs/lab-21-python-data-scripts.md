# Lab 21: Python scripts that fetch data reliably

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L1–L2 | 2 h | Python, requests | Free |

**Goal:** Write a small, well-behaved extractor: pagination, retries, rate limits and logging.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-21
mkdir -p my-work/lab-21-python-data-scripts && cd my-work/lab-21-python-data-scripts
claude
```
Type `LAB 21`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Call a public API and save raw JSON with a timestamped file name
2. Handle pagination and HTTP errors with retries and backoff
3. Add logging and a config file; keep tokens in .env
4. Write one test for the parsing function

## Done when
- [ ] Re-running does not duplicate files
- [ ] A failed request is retried and logged

## Save it to your portfolio
```bash
git add .
git commit -m "lab 21: <what you built>"
git push -u origin lab-21
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A tidy extractor script; the base for Lab 05.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
