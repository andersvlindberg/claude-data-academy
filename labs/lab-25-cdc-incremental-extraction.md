# Lab 25: Change data capture and incremental extraction

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L3 | 2–3 h | Postgres, dlt or Python | Free |

**Goal:** Compare cursor-based incremental loads with log-based CDC, and handle deletes.

## Run it with Claude Code
```bash
mkdir lab-25-cdc-incremental-extraction && cd lab-25-cdc-incremental-extraction
git init
claude
```
Type `LAB 25`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Load incrementally on updated_at and find the case it misses (hard deletes)
2. Add soft-delete handling
3. Read about log-based CDC (logical replication) and sketch how Fivetran does it
4. Write the trade-offs in a decision record

## Done when
- [ ] Deletes are handled
- [ ] Decision record written

## Portfolio
An ADR on extraction strategy.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
