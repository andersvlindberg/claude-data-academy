# Dialect cheat sheet

Verify syntax in current docs when precision matters; the core below is stable.

| Task | BigQuery | Snowflake | DuckDB | Postgres | SQLite |
|---|---|---|---|---|---|
| Filter window results | `QUALIFY` | `QUALIFY` | `QUALIFY` | CTE + WHERE | CTE + WHERE |
| Safe division | `SAFE_DIVIDE(a,b)` | `DIV0(a,b)` / `a / NULLIF(b,0)` | `a / NULLIF(b,0)` | `a / NULLIF(b,0)` | `a * 1.0 / NULLIF(b,0)` |
| Safe cast | `SAFE_CAST(x AS INT64)` | `TRY_CAST(x AS INT)` | `TRY_CAST(x AS INTEGER)` | none (use regex/case) | `CAST` (lenient) |
| Truncate date | `DATE_TRUNC(d, MONTH)` | `DATE_TRUNC('month', d)` | `DATE_TRUNC('month', d)` | `DATE_TRUNC('month', d)` | `strftime('%Y-%m-01', d)` |
| Add interval | `TIMESTAMP_ADD(t, INTERVAL 30 MINUTE)` | `DATEADD(minute, 30, t)` | `t + INTERVAL 30 MINUTE` | `t + INTERVAL '30 minutes'` | `datetime(t, '+30 minutes')` |
| Date difference | `DATE_DIFF(a, b, DAY)` | `DATEDIFF(day, b, a)` | `DATE_DIFF('day', b, a)` | `a - b` | `julianday(a) - julianday(b)` |
| Arrays | `UNNEST(arr)` | `LATERAL FLATTEN(input => arr)` | `UNNEST(arr)` | `UNNEST(arr)` | `json_each` |
| JSON access | `JSON_VALUE(j, '$.a')` | `j:a::string` | `j->>'a'` | `j->>'a'` | `json_extract(j,'$.a')` |
| String concat | `CONCAT(a,b)` or `\|\|` | `\|\|` / `CONCAT` | `\|\|` | `\|\|` | `\|\|` |
| Integer division | `DIV(a,b)` | `FLOOR(a/b)` | `a // b` | `a / b` (ints) | `a / b` (ints) |

Key behavioural differences:
- **Integer division:** Postgres and SQLite return integers for int/int (`3/2 = 1`). Multiply by `1.0` for decimals.
- **Case sensitivity:** Snowflake uppercases unquoted identifiers; quoted identifiers are case-sensitive. BigQuery column names are case-insensitive, table names case-sensitive.
- **Timezones:** BigQuery `TIMESTAMP` is UTC; `DATETIME` has no timezone. Snowflake has `TIMESTAMP_NTZ`, `_LTZ`, `_TZ`. Always decide the business timezone for daily reporting.
- **Cost model:** BigQuery on-demand bills by bytes scanned, so `SELECT *` is expensive. Snowflake bills by warehouse running time.
