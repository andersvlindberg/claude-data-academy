# Lab 30: Streaming basics: events in micro-batches

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L3 | 2–3 h | Python, DuckDB (simulated queue) | Free |

**Goal:** Understand streaming vs batch by simulating an event stream into the warehouse.

## Run it with Claude Code
```bash
mkdir lab-30-streaming-intro && cd lab-30-streaming-intro
git init
claude
```
Type `LAB 30`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Generate a stream of fake click events to files or a local queue
2. Consume in micro-batches and load
3. Handle late and duplicate events
4. Compare latency and complexity with daily batch

## Done when
- [ ] Duplicates removed
- [ ] You can explain when streaming is worth it

## Portfolio
A short comparison write-up.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
