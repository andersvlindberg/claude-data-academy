# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this repo is

A training program packaged as Claude skills. `skills/` holds 30 skills (`ae-coach` plus 29 topic modules). `projects/capstone/` is the hands-on project that runs through the whole curriculum. `docs/` holds the course map, glossary and learning log template.

## Conventions

- Every skill lives in `skills/<name>/` with `SKILL.md` and a `references/` folder. The folder name equals the `name:` in the frontmatter.
- Frontmatter has exactly `name` and `description`. Descriptions are under 1024 characters, contain no angle brackets, and say when the skill should trigger.
- Every topic skill has: a mode section (LEARN/BUILD via `ae-coach`), a mastery ladder L1–L4, common misconceptions, and `references/exercises.md` with exercise sets A and B, a quiz bank and interview questions.
- Content is in English. The coach answers in the learner's language.
- Facts that change over time (tool versions, pricing, product features) are marked "verify in current docs" instead of stated as permanent truths.

## Before committing

```bash
python scripts/validate_skills.py
```

Fix every error it reports. Keep commits small and descriptive.
