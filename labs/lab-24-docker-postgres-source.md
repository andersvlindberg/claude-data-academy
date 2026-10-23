# Lab 24: Docker and a Postgres source database

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L2 | 2 h | Docker, Postgres, dlt | Free |

**Goal:** Run an application database locally and ingest from it like a real company source.

## How this lab works
1. **Hub:** open this step in your study hub and take the lecture (*Lecture*), or skip it if you know the theory.
2. **Claude Code:** the lecture ends with a practice project. Claude sets it up for you (a fictional scenario and generated data) and you build it in a real tool.
3. **GitHub:** commit as you go and merge it into your fork. Then tick it off in the hub.

```bash
cd claude-data-academy        # your fork
git checkout -b lab-24
mkdir -p my-work/lab-24-docker-postgres-source && cd my-work/lab-24-docker-postgres-source
claude
```
Type `LAB 24`. This is a brief lab: the coach turns the milestones below into steps for your level, and you write the code.

## Milestones
1. Start Postgres with docker compose and load fake shop data
2. Connect with a SQL client and explore the schema
3. Ingest tables with dlt's SQL source into DuckDB
4. Change rows in Postgres and re-run incrementally

## Done when
- [ ] Compose file starts everything with one command
- [ ] Incremental run picks up changes

## Save it to your portfolio
```bash
git add .
git commit -m "lab 24: <what you built>"
git push -u origin lab-24
```
Before the last commit, Claude updates `my-work/PROGRESS.md` (step, date, what you built, what to review). Open a pull request in your fork, read your own diff like a reviewer, merge it, and mark the lab *Done* in your hub. Add a short `README.md` in the lab folder: what you built, how to run it, what you learned.

## Portfolio
docker-compose.yml + README in your repo.

> Safety: use fictional or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
