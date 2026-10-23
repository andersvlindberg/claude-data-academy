---
name: ae-claude-code
description: Claude Code for data work in the Analytics Engineering Academy. Use for questions about installing and using Claude Code, working in a dbt or Python repository with Claude Code, CLAUDE.md project memory, plan mode, permissions and settings, skills, slash commands, subagents, hooks, MCP servers, checkpoints and rewind, headless mode with claude -p, Claude Code in GitHub Actions, plugins, and building a safe, effective AI-assisted workflow for data engineering and analytics engineering.
---

# Module 29: Claude Code for data work

Claude Code is Claude in the terminal (and IDE): it reads your repository, edits files, runs commands like `dbt build` and `pytest`, and uses Git. For a data person it is the fastest way to build, refactor, document and debug, as long as you stay in control and verify everything.

Product details change fast. Always confirm commands and file paths in the official docs: https://code.claude.com/docs

## How to use this skill

Follow `ae-coach` for mode. LEARN mode: teach one feature at a time on the learner's own repo (ideally the capstone). BUILD mode: set up the feature, show the result, and explain how to undo it.

Golden rules for AI-assisted data work:
1. **Plan before editing** on anything bigger than a small fix.
2. **Small diffs, reviewed.** Read every diff before committing.
3. **Verify:** tests pass, `dbt build` succeeds, numbers reconcile. An AI answer is a hypothesis until verified.
4. **Least privilege:** read-only warehouse access for AI, no secrets in files or prompts, deny risky commands.
5. **You must be able to explain every line** that goes into your portfolio or a graded assignment.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Installs Claude Code, runs it in a repo, asks it to explain code and make a small change |
| L2 | Writes a CLAUDE.md, uses plan mode, reviews diffs, uses checkpoints to undo, commits with Git |
| L3 | Adds project skills, slash commands, a subagent and an MCP server; sets permissions; runs headless in CI |
| L4 | Designs a team setup: shared settings, hooks for quality gates, plugins, AI access policy and review process |

## Core knowledge

| Feature | What it is | Typical location / command |
|---|---|---|
| CLAUDE.md (memory) | Project instructions loaded every session: stack, conventions, commands, rules | `./CLAUDE.md` (project), `~/.claude/CLAUDE.md` (personal) |
| Plan mode | Claude proposes a plan without editing | Toggle with Shift+Tab |
| Permissions and settings | Allow, ask or deny rules for tools and commands | `.claude/settings.json` (shared), `.claude/settings.local.json` (personal), `~/.claude/settings.json` (user) |
| Skills | Folders of instructions loaded when relevant (like this academy) | `.claude/skills/<name>/SKILL.md`, `~/.claude/skills/<name>/SKILL.md` |
| Slash commands | Reusable prompts run with `/name` | `.claude/commands/<name>.md` |
| Subagents | Specialised agents with own context and tool limits (e.g. a reviewer) | `.claude/agents/<name>.md` |
| Hooks | Commands that run on events (e.g. lint after an edit, block dangerous commands) | `"hooks"` in a settings file |
| MCP servers | Connect Claude to warehouses, dbt, GitHub, docs | `claude mcp add ...`, project `.mcp.json` |
| Checkpoints | Roll back Claude's edits and the conversation | `/rewind` or Esc twice |
| Headless mode | Non-interactive runs for scripts and CI | `claude -p "..."` |
| GitHub Actions | Claude on PRs and issues (e.g. `@claude` reviews) | `anthropics/claude-code-action` in `.github/workflows/` |
| Plugins | Installable bundles of commands, skills, agents, hooks and MCP servers | `/plugin` |

## Workflows for this stack

| Task | How |
|---|---|
| Understand an unfamiliar dbt project | "Explain the lineage from sources to fct_orders and the grain of each model" in plan mode |
| Add a staging model | Plan → create SQL and YAML following CLAUDE.md conventions → `dbt build -s` → review diff → commit |
| Add tests and docs | Subagent or command that drafts YAML tests and descriptions; you correct what is untrue |
| Debug a failing test | Claude reads the error and compiled SQL, queries failing rows (read-only), proposes hypotheses; you confirm |
| Refactor SQL safely | Refactor plus `audit_helper` comparison of old and new output |
| Python ingestion | Write a dlt or requests extractor with tests; run pytest; never paste API keys |
| Quality gate | Hook that runs `sqlfluff lint` or `dbt parse` after edits |
| CI review | Claude GitHub Action reviewing pull requests against your conventions |

## Learning with Claude Code (not just shipping)
- Ask for the plan and the **why** before the code.
- Write the first version yourself, then ask Claude to review it.
- Use the academy skills inside the repo (`.claude/skills/`) so Claude coaches in LEARN mode when you ask to learn.
- Keep a learning log in the repo.

## Common misconceptions
- "It ran, so it's correct." Reconcile numbers and read the diff.
- "Give it full access to save time." Use permissions and read-only data access.
- "CLAUDE.md is optional." It is the cheapest way to get consistent, convention-following output.
- "It replaces learning Git and SQL." You still need to judge and explain the output.

## Connects to
`ae-mcp-tooling` (MCP and AI access policy), `ae-git-devops` (Git and CI), `ae-dbt` (project conventions), `ae-python` (tests), `ae-ai-ml` (agents).

## References
- [references/setup-for-dbt-repo.md](references/setup-for-dbt-repo.md): a complete starter setup for a dbt + Snowflake repository.
- [references/exercises.md](references/exercises.md)
