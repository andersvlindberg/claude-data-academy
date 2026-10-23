# Exercises: Git and DevOps

## Set A (practitioner)

1. Create a repository, add a README and `.gitignore`, make three meaningful commits, push to GitHub.
2. Create a feature branch, change a model, open a PR with a description, merge it.
3. Break a file on purpose, then restore it with `git restore` (or Discard in GitHub Desktop).
4. Explain fetch versus pull versus push to a classmate.

## Set B (independent)

1. Create and resolve a merge conflict between two branches editing the same model.
2. Revert a pushed commit that introduced a bug, without rewriting history.
3. Add a GitHub Actions workflow that lints SQL and runs `dbt build` against DuckDB or a CI schema on every PR.
4. Simulate a leaked secret: describe and practise the correct response (rotate, remove, prevent).

## Quiz bank

1. What does `git add` do?
2. When is `git revert` better than `git reset`?
3. Why should `main` stay deployable?
4. What runs in CI versus CD for a dbt project?
5. What belongs in `.gitignore` for a dbt project?

## Interview questions

1. "Describe your Git workflow on a team."
2. "How do you stop broken dbt models from reaching production?"
3. "You pushed a secret to GitHub. What now?"
