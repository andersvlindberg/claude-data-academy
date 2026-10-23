# Lab 22: CSV, JSON and Parquet: formats and partitioning

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L1–L2 | 1–2 h | DuckDB, Python | Free |

**Goal:** Understand why columnar formats and partitions make analytics cheap and fast.

## Run it with Claude Code
```bash
mkdir lab-22-file-formats-parquet && cd lab-22-file-formats-parquet
git init
claude
```
Type `LAB 22`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Convert the same dataset to CSV, JSON and Parquet and compare size
2. Query each with DuckDB and compare speed
3. Write Parquet partitioned by date and query one partition
4. Explain schema-on-read vs schema-on-write

## Done when
- [ ] Size and speed table filled in
- [ ] You can explain partition pruning

## Portfolio
A short benchmark write-up.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
