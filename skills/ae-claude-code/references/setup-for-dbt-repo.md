# Starter setup: Claude Code in a dbt + Snowflake repository

Verify syntax against the current docs (https://code.claude.com/docs); keys and formats evolve.

## Folder layout
```
my-dbt-project/
├── CLAUDE.md                       # project rules (template in ae-mcp-tooling)
├── .mcp.json                       # project MCP servers (no secrets inside)
└── .claude/
    ├── settings.json               # shared permissions and hooks
    ├── settings.local.json         # personal overrides (gitignored)
    ├── skills/                     # copy academy skills here: ae-coach, ae-dbt, ae-sql ...
    ├── commands/
    │   └── new-staging-model.md    # /new-staging-model <source> <table>
    └── agents/
        └── dbt-reviewer.md         # reviews models against conventions
```

## settings.json (permissions sketch)
```json
{
  "permissions": {
    "allow": ["Bash(dbt build:*)", "Bash(dbt compile:*)", "Bash(dbt test:*)", "Bash(sqlfluff lint:*)", "Bash(git status)", "Bash(git diff:*)"],
    "ask":   ["Bash(git commit:*)", "Bash(git push:*)"],
    "deny":  ["Bash(dbt run --target prod:*)", "Read(./.env)", "Read(./**/*.p8)"]
  }
}
```

## Slash command: new-staging-model.md
```markdown
Create a staging model for source $1, table $2, following CLAUDE.md:
1. Add the table to models/staging/$1/_$1__sources.yml if missing.
2. Create stg_$1__$2.sql (rename, cast, no joins).
3. Add primary key tests and descriptions in _$1__models.yml.
4. Run `dbt build -s stg_$1__$2` and report results.
Ask before changing anything outside models/staging/$1/.
```

## Subagent: dbt-reviewer.md
```markdown
---
name: dbt-reviewer
description: Reviews changed dbt models against project conventions. Use after creating or editing models.
tools: Read, Grep, Glob, Bash
---
Check every changed model for: correct layer and naming, grain sentence in the description,
unique + not_null on the primary key, relationship tests on foreign keys, no select * in marts,
PII columns tagged in meta and absent from BI marts. Report findings; do not edit files.
```

## Hook idea
Run `sqlfluff lint` on changed SQL files after each edit, and block any Bash command containing `--target prod`.

## MCP
Add a read-only Snowflake role for AI (see `ae-mcp-tooling`) and connect a Snowflake or dbt MCP server with that role. Keep credentials in environment variables, not in `.mcp.json`.
