---
name: ae-git-devops
description: Git, GitHub and DevOps for data in the Analytics Engineering Academy. Use for questions about version control, repositories, commits, staging, branches, merging, rebasing, remotes, fetch, pull and push, GitHub Desktop, forks, pull requests and code review, merge conflicts, undoing changes, gitignore and secrets, commit messages, branching strategies, GitHub Actions, CI/CD for dbt and Python, linting with SQLFluff and pre-commit, environments and deployment.
---

# Module 16: Git and DevOps for data

Analytics engineering is "software engineering practices applied to analytics". Git is the first of those practices: every model, test and pipeline is versioned, reviewed and deployed from a repository.

## How to use this skill

Follow `ae-coach` for mode. Without it: explain → LEARN, do → BUILD, graded work → LEARN only.

BUILD safety rules:
- Check `git status` before and after every operation.
- Confirm before anything that rewrites history or discards work: `reset --hard`, `push --force`, `clean -fd`, deleting branches.
- Never commit secrets. If one was committed, treat it as leaked: rotate it first, then remove it from history.
- Explain which tool the learner is using (GitHub Desktop, VS Code, command line) and map the action to it.

## Mastery ladder

| Level | Evidence |
|---|---|
| L1 | Explains repository, commit, branch, remote, and fetch versus pull versus push |
| L2 | Works on a feature branch, commits with clear messages, opens a pull request, resolves a simple conflict |
| L3 | Sets up CI that lints and runs `dbt build` on pull requests; manages secrets in CI; undoes mistakes safely |
| L4 | Designs a team workflow (branching, reviews, environments, deployments) and explains trade-offs |

## Core knowledge

### The model
```
working directory ──git add──► staging area ──git commit──► local repository ──git push──► remote (GitHub)
                 ◄─git restore─                                               ◄─git fetch / pull─
```
- **Commit:** a snapshot with a message and parent. Small and focused.
- **Branch:** a movable pointer to a line of commits. Work happens on branches; `main` stays deployable.
- **Fetch:** download remote changes without touching your files. **Pull:** fetch + merge into your branch. **Push:** upload your commits.
- **Merge** combines branches with a merge commit; **rebase** replays your commits on top of another branch (clean history, but never rebase shared commits).
- **Fork:** your own copy of someone else's repository on GitHub; sync it with "Sync fork" on GitHub, then pull locally.

### GitHub Desktop mapping
| Action | GitHub Desktop | CLI |
|---|---|---|
| Get remote info | Fetch origin | `git fetch` |
| Update local | Pull origin | `git pull` |
| Stage + commit | Tick files, summary, Commit | `git add`, `git commit -m` |
| Upload | Push origin | `git push` |
| New branch | Branch → New branch | `git switch -c feature/x` |
| Discard file changes | Right-click → Discard changes | `git restore <file>` |

### Commit messages
Imperative, specific, small: `Add stg_shop__orders with primary key tests`, `Fix fan-out in fct_orders revenue`. A public commit history over weeks is portfolio evidence.

### Pull requests and review
A PR proposes merging a branch. Good PRs: one purpose, a description (what, why, how tested), screenshots or query results for data changes, and passing CI. Reviewers check logic, naming, tests, performance and whether docs were updated.

### Undoing things
| Situation | Safe fix |
|---|---|
| Uncommitted change to one file | `git restore <file>` |
| Unstage a file | `git restore --staged <file>` |
| Bad commit already pushed | `git revert <sha>` (new commit that undoes it) |
| Last local commit, not pushed, fix message or content | `git commit --amend` |
| Want to look at an old version | `git switch --detach <sha>` (then switch back) |

### .gitignore for data projects
```
.venv/
__pycache__/
.env
*.pem
*.p8
*.json.key
target/
dbt_packages/
logs/
.user.yml
profiles.yml
*.duckdb
```

### CI/CD for data
- **CI (continuous integration):** on every PR, automatically lint SQL/Python, compile dbt, and build changed models into a temporary schema with tests.
- **CD (continuous deployment):** on merge to `main`, deploy to production (dbt Cloud job, or an orchestrator run).
- **Linting:** SQLFluff (dbt templater), ruff for Python, pre-commit hooks to run them before every commit.
- Secrets live in GitHub Actions secrets or the CI tool, injected as environment variables.

## Common misconceptions

- "Pull is the same as fetch." Pull also merges.
- "Git is a backup." It is history and collaboration; secrets and data do not belong in it.
- "Force push is fine on my branch." Only if nobody else uses it.
- "CI is for big teams." It is the cheapest way to stop broken models reaching production, even for one person.

## Connects to

`ae-dbt` (slim CI, environments), `ae-python-oop` (tests), `ae-project-method` (team workflow), `ae-career` (public portfolio), `ae-mcp-tooling` (GitHub MCP and Claude Code).

## References

- [references/ci-for-dbt.md](references/ci-for-dbt.md): GitHub Actions workflow for dbt, SQLFluff and pre-commit configs.
- [references/exercises.md](references/exercises.md)
