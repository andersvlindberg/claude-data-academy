# Lab 35: dbt packages: dbt_utils, codegen and audit_helper

| Role | Level | Time | Tools | Cost |
|---|---|---|---|---|
| Analytics engineer | L2 | 2 h | dbt | Free |

**Goal:** Use community packages instead of reinventing them.

## Run it with Claude Code
```bash
mkdir lab-35-dbt-packages && cd lab-35-dbt-packages
git init
claude
```
Type `LAB 35`. This is a brief lab: the coach turns the milestones below into steps that fit your level and stack, and you write the code.

## Milestones
1. Install packages and run dbt deps
2. Generate source YAML and base models with codegen
3. Use dbt_utils tests (unique_combination_of_columns, expression_is_true)
4. Compare two relations with audit_helper

## Done when
- [ ] Generated YAML committed
- [ ] audit_helper comparison explained

## Portfolio
Package usage notes in your capstone.

> Safety: use fake or public data, keep secrets in `.env` (in `.gitignore`), and Claude asks before anything destructive.

[← All labs](README.md)
