# Lab 25: Change data capture and incremental extraction

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L3 | 2–3 h | Postgres, dlt or Python | Free |

**Goal:** Compare cursor-based incremental loads with log-based CDC, and handle deletes.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-25
mkdir -p my-work/lab-25-cdc-incremental-extraction && cd my-work/lab-25-cdc-incremental-extraction
claude
```
Type `LAB 25`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Load incrementally on updated_at and find the case it misses (hard deletes)
2. Add soft-delete handling
3. Read about log-based CDC (logical replication) and sketch how Fivetran does it
4. Write the trade-offs in a decision record

## Done when
- [ ] Deletes are handled
- [ ] Decision record written

## Save it to your portfolio
```bash
git add .
git commit -m "lab 25: <what you built>"
git push -u origin lab-25
```
Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
An ADR on extraction strategy.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
