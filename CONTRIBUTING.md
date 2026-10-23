# Contributing

Thanks for helping make Claude a better data mentor.

## What helps most
- **Corrections** with a source (tool behaviour changes fast).
- **Exercises** that are realistic and have a clear way to verify the answer.
- **Misconceptions** you have seen learners (or yourself) fall for.
- **New topics** that fit the chain: open an issue first so we can agree where it lives.

## Rules for skill content
1. Each skill lives in `skills/<name>/` with `SKILL.md` and `references/`. Folder name = `name:` in the frontmatter.
2. Frontmatter has only `name` and `description` (under 1024 characters, no angle brackets, says when the skill should trigger).
3. Topic skills keep the shared structure: how to use (modes via `ae-coach`), mastery ladder L1–L4, core knowledge, common misconceptions, connects to, references, and `references/exercises.md` with sets A and B, a quiz bank and interview questions.
4. Teach, don't just tell: prefer small worked examples and verification steps.
5. Mark facts that change over time (versions, prices, product features) with "verify in current docs".
6. No copyrighted course material, no personal data, no graded-assignment answers.

## Before opening a pull request
```bash
python scripts/validate_skills.py
```
CI runs the same check on every pull request.
