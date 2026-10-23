# Lab 22: CSV, JSON and Parquet: formats and partitioning

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L1–L2 | 1–2 h | DuckDB, Python | Free |

**Goal:** Understand why columnar formats and partitions make analytics cheap and fast.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-22
mkdir -p my-work/lab-22-file-formats-parquet && cd my-work/lab-22-file-formats-parquet
claude
```
Type `LAB 22`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Convert the same dataset to CSV, JSON and Parquet and compare size
2. Query each with DuckDB and compare speed
3. Write Parquet partitioned by date and query one partition
4. Explain schema-on-read vs schema-on-write

## Done when
- [ ] Size and speed table filled in
- [ ] You can explain partition pruning

## Save it to your portfolio
```bash
git add .
git commit -m "lab 22: <what you built>"
git push -u origin lab-22
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
A short benchmark write-up.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
