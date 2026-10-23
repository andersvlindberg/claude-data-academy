# API client patterns

## Robust extractor (Python, requests)

```python
import os
import time
import random
import requests

BASE_URL = "https://api.example.com/v1"
TOKEN = os.environ["EXAMPLE_API_TOKEN"]          # never hard-code

session = requests.Session()
session.headers.update({"Authorization": f"Bearer {TOKEN}", "Accept": "application/json"})

def get_with_retry(url, params=None, max_attempts=5):
    for attempt in range(1, max_attempts + 1):
        resp = session.get(url, params=params, timeout=30)
        if resp.status_code == 429 or resp.status_code >= 500:
            wait = float(resp.headers.get("Retry-After", 2 ** attempt)) + random.random()
            time.sleep(wait)
            continue
        resp.raise_for_status()                     # other 4xx: fail loudly
        return resp.json()
    raise RuntimeError(f"Gave up after {max_attempts} attempts: {url}")

def extract_orders(updated_since: str):
    """Cursor pagination + incremental parameter."""
    params = {"updated_since": updated_since, "limit": 100}
    url = f"{BASE_URL}/orders"
    while True:
        payload = get_with_retry(url, params)
        yield from payload["data"]
        cursor = payload.get("next_cursor")
        if not cursor:
            break
        params = {"cursor": cursor, "limit": 100}

if __name__ == "__main__":
    rows = list(extract_orders("2026-10-01T00:00:00Z"))
    print(f"extracted {len(rows)} orders")
```

## Webhook receiver sketch (FastAPI)

```python
import hmac, hashlib, os
from fastapi import FastAPI, Request, HTTPException

app = FastAPI()
SECRET = os.environ["WEBHOOK_SECRET"].encode()
seen_ids = set()   # use a database table in real life

@app.post("/webhooks/orders")
async def orders_webhook(request: Request):
    body = await request.body()
    signature = request.headers.get("X-Signature", "")
    expected = hmac.new(SECRET, body, hashlib.sha256).hexdigest()
    if not hmac.compare_digest(signature, expected):
        raise HTTPException(status_code=401)
    event = await request.json()
    if event["id"] in seen_ids:
        return {"status": "duplicate ignored"}
    seen_ids.add(event["id"])
    # enqueue for async processing, respond fast
    return {"status": "accepted"}
```
Header name and signing scheme differ per provider; follow their docs.

## Bruno workflow
1. Create a collection per API; environments `dev` and `prod` with variables (`baseUrl`, `token`) kept out of Git (use secret variables or `.env`).
2. One request per endpoint; save example responses.
3. Write assertions (status 200, field exists) so the collection doubles as a smoke test.
4. Translate the working request into Python once it behaves as expected.
