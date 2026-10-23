# Lab 24: Docker and a Postgres source database

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Data engineer | L2 | 2 h | Docker, Postgres, dlt | Free |

**Goal:** Run an application database locally and ingest from it like a real company source.

## Run it with Claude Code
```bash
mkdir lab-24-docker-postgres-source && cd lab-24-docker-postgres-source
git init
claude
```
Type `LAB 24`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Start Postgres with docker compose and load fake shop data
2. Connect with a SQL client and explore the schema
3. Ingest tables with dlt's SQL source into DuckDB
4. Change rows in Postgres and re-run incrementally

## Done when
- [ ] Compose file starts everything with one command
- [ ] Incremental run picks up changes

## Portfolio
docker-compose.yml + README in your repo.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
