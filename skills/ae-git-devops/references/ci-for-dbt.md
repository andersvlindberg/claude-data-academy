# CI for dbt with GitHub Actions

Check action versions and adapter versions against current releases before using.

```yaml
# .github/workflows/dbt-ci.yml
name: dbt CI

on:
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      DBT_PROFILES_DIR: ./ci
      SNOWFLAKE_ACCOUNT: ${{ secrets.SNOWFLAKE_ACCOUNT }}
      SNOWFLAKE_USER: ${{ secrets.SNOWFLAKE_CI_USER }}
      SNOWFLAKE_PRIVATE_KEY: ${{ secrets.SNOWFLAKE_CI_PRIVATE_KEY }}
      CI_SCHEMA: ci_pr_${{ github.event.number }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - run: pip install dbt-snowflake sqlfluff sqlfluff-templater-dbt
      - run: dbt deps
      - run: sqlfluff lint models --dialect snowflake
      - run: dbt build --target ci
```

`ci/profiles.yml` reads every credential from environment variables (`{{ env_var('SNOWFLAKE_USER') }}`) and builds into `CI_SCHEMA`. Add a cleanup step or scheduled job that drops old CI schemas.

**Slim CI:** download the production `manifest.json` (artifact from the prod job) and run `dbt build -s state:modified+ --defer --state prod-artifacts` so only changed models are built. dbt Cloud CI jobs do this for you.

## SQLFluff config
```ini
# .sqlfluff
[sqlfluff]
templater = dbt
dialect = bigquery
max_line_length = 100

[sqlfluff:rules:capitalisation.keywords]
capitalisation_policy = lower
```

## pre-commit
```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: v0.6.9
    hooks:
      - id: ruff
      - id: ruff-format
  - repo: https://github.com/sqlfluff/sqlfluff
    rev: 3.2.0
    hooks:
      - id: sqlfluff-lint
        additional_dependencies: [dbt-bigquery, sqlfluff-templater-dbt]
```
Run `pre-commit install` once; hooks then run on every commit. Update `rev` values with `pre-commit autoupdate`.
