# Exercises: Claude Code

## Set A (practitioner)
1. Install Claude Code, open your capstone repo and ask it to explain the project structure; check its answer.
2. Write a CLAUDE.md with stack, layers, naming and commands.
3. Use plan mode for a small change, review the diff, then undo it with a checkpoint.

## Set B (independent)
1. Add the academy skills to `.claude/skills/`, a `/new-staging-model` command and a `dbt-reviewer` subagent; build one model end to end with them.
2. Configure permissions that allow dbt dev commands, ask before commits and deny prod runs; prove the deny rule works.
3. Run Claude headless in GitHub Actions to review a pull request against your conventions.

## Quiz bank
1. What belongs in CLAUDE.md?
2. Plan mode versus normal mode?
3. Where do project skills live?
4. Why read-only warehouse access for AI?
5. What does `claude -p` do?
