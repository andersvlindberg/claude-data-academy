# Lab 30: Streaming basics: events in micro-batches

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L3 | 2–3 h | Python, DuckDB (simulated queue) | Free |

**Goal:** Understand streaming vs batch by simulating an event stream into the warehouse.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-30
mkdir -p my-work/lab-30-streaming-intro && cd my-work/lab-30-streaming-intro
claude
```
Type `LAB 30`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Generate a stream of fake click events to files or a local queue
2. Consume in micro-batches and load
3. Handle late and duplicate events
4. Compare latency and complexity with daily batch

## Done when
- [ ] Duplicates removed
- [ ] You can explain when streaming is worth it

## Save it to your portfolio
```bash
git add .
git commit -m "lab 30: <what you built>"
git push -u origin lab-30
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A short comparison write-up.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
