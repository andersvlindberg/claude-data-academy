# Setup guides

Exact console steps change; treat these as checklists and confirm against current docs.

## BigQuery + dbt
1. Create a Google Cloud project; enable the BigQuery API; set a billing budget alert.
2. Create datasets in one location (e.g. EU): `raw_shop`, `dbt_dev_<name>`, `prod`.
3. Create a service account for dbt with BigQuery Job User (project) and Data Editor on the dbt datasets, Data Viewer on raw.
4. Authenticate dbt: in dbt Cloud upload the key in the connection settings; locally prefer `gcloud auth application-default login` (OAuth) for development instead of key files.
5. `profiles.yml` (local): method `oauth` for dev, `service-account` for CI/prod via environment variables.
6. Test: `dbt debug`.
7. Link GA4: GA4 Admin → BigQuery links → choose project and EU location → daily (and optionally streaming) export.

## Snowflake + dbt
1. Create roles: `TRANSFORMER`, `REPORTER`, `LOADER`. Grant `TRANSFORMER` usage on a warehouse `TRANSFORMING` (XS, auto-suspend 60 s).
2. Databases: `RAW` (LOADER writes), `ANALYTICS` (TRANSFORMER writes; schemas per developer and `PROD`).
3. Create a service user `DBT_USER` with default role `TRANSFORMER`.
4. Key pair auth: generate an RSA key pair locally (`openssl genrsa ...`, `openssl rsa -pubout ...`), set `RSA_PUBLIC_KEY` on the user, store the private key securely, reference it in dbt.
5. Grants on future objects so new tables are readable by `REPORTER`.
6. Resource monitor on the account or warehouse.
7. Test: `dbt debug`.

## DuckDB local
1. `pip install duckdb dbt-duckdb`.
2. `profiles.yml`: type `duckdb`, `path: webshop.duckdb`.
3. Load CSVs with seeds or `read_csv_auto` in a source-like staging model.
4. Ideal for exercises without cloud costs.

## Never commit
`profiles.yml` with secrets, `*.json` key files, `*.p8` / `*.pem` private keys, `.env`. Put them in `.gitignore` before the first commit.
