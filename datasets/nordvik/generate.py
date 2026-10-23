"""Generate the Nordvik Outdoor dataset: a fictional Swedish outdoor-gear webshop.

Every lab in Claude Data Academy can use it. All people and companies are invented;
no real personal data. Uses only the Python standard library.

    python datasets/nordvik/generate.py            # writes CSVs to datasets/nordvik/data/
    python datasets/nordvik/generate.py --small    # a tenth of the size, for quick tests
"""
import csv, os, random, sys, uuid
from datetime import datetime, timedelta

SEED = 42
SMALL = "--small" in sys.argv
SCALE = 0.1 if SMALL else 1.0
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")
START = datetime(2024, 1, 1)
END = datetime(2025, 12, 31)
rng = random.Random(SEED)

FIRST = ["Alva", "Elsa", "Maja", "Ella", "Wilma", "Saga", "Astrid", "Nora", "Ebba", "Freja",
         "Oscar", "William", "Liam", "Hugo", "Lucas", "Elias", "Noah", "Adam", "Axel", "Leo",
         "Sara", "Johan", "Erik", "Karin", "Lars", "Anna", "Nils", "Ingrid", "Per", "Emma"]
LAST = ["Andersson", "Johansson", "Karlsson", "Nilsson", "Eriksson", "Larsson", "Olsson",
        "Persson", "Svensson", "Gustafsson", "Pettersson", "Jonsson", "Lindqvist", "Berg",
        "Lundgren", "Holm", "Sjöberg", "Ek", "Strand", "Dahl"]
CITIES = [("Stockholm", 0.30), ("Göteborg", 0.16), ("Malmö", 0.10), ("Uppsala", 0.07),
          ("Umeå", 0.05), ("Linköping", 0.05), ("Örebro", 0.05), ("Luleå", 0.04),
          ("Östersund", 0.04), ("Västerås", 0.05), ("Helsingborg", 0.04), ("Kiruna", 0.02), ("Jönköping", 0.03)]
CATEGORIES = {
    "Jackets": (899, 3499), "Footwear": (699, 2499), "Backpacks": (499, 2199), "Tents": (1499, 6999),
    "Sleeping bags": (799, 3299), "Base layers": (299, 999), "Accessories": (99, 599), "Cooking": (149, 1299),
}
ADJ = ["Fjäll", "Tundra", "Kebne", "Sarek", "Norr", "Vinter", "Skog", "Lappland", "Kust", "Glaciär"]
CHANNELS = [("organic_search", "google", "organic", 0.30), ("paid_search", "google", "cpc", 0.20),
            ("paid_social", "meta", "paid_social", 0.15), ("email", "newsletter", "email", 0.12),
            ("direct", "(direct)", "(none)", 0.15), ("referral", "outdoorforum.se", "referral", 0.05),
            ("affiliate", "partner", "affiliate", 0.03)]
DEVICES = [("mobile", 0.62), ("desktop", 0.31), ("tablet", 0.07)]

def pick(weighted):
    r, acc = rng.random(), 0.0
    for item in weighted:
        acc += item[-1]
        if r <= acc:
            return item
    return weighted[-1]

def ts(d):
    return d.strftime("%Y-%m-%d %H:%M:%S")

def season_weight(d):
    # Outdoor retail: peaks before winter and in spring, Black Friday spike
    m = d.month
    base = {1: 0.8, 2: 0.7, 3: 0.9, 4: 1.1, 5: 1.2, 6: 1.1, 7: 0.9, 8: 1.0, 9: 1.1, 10: 1.3, 11: 1.7, 12: 1.5}[m]
    if m == 11 and 22 <= d.day <= 30:
        base *= 2.2
    return base

def write(name, rows, fields):
    with open(os.path.join(OUT, name + ".csv"), "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(rows)
    print(f"  {name}.csv  {len(rows):>7} rows")

def main():
    os.makedirs(OUT, exist_ok=True)
    print("Generating Nordvik Outdoor" + (" (small)" if SMALL else "") + " ->", OUT)

    products = []
    pid = 1
    for cat, (lo, hi) in CATEGORIES.items():
        for _ in range(8):
            price = round(rng.uniform(lo, hi) / 10) * 10 - 1
            products.append({"product_id": f"P{pid:04d}", "sku": f"NV-{pid:04d}", "product_name": f"{rng.choice(ADJ)} {cat[:-1] if cat.endswith('s') else cat}",
                             "category": cat, "price_sek": price, "cost_sek": round(price * rng.uniform(0.38, 0.55)),
                             "launched_at": (START - timedelta(days=rng.randint(0, 700))).strftime("%Y-%m-%d"), "is_active": rng.random() > 0.08})
            pid += 1
    write("products", products, list(products[0]))

    customers, contacts = [], []
    n_customers = int(4000 * SCALE)
    for i in range(1, n_customers + 1):
        fn, ln = rng.choice(FIRST), rng.choice(LAST)
        created = START + timedelta(days=rng.randint(0, (END - START).days - 30), seconds=rng.randint(0, 86399))
        city = pick([(c, w) for c, w in CITIES])[0]
        consent = rng.random() < 0.58
        cid = f"C{i:06d}"
        customers.append({"customer_id": cid, "first_name": fn, "last_name": ln,
                          "email": f"{fn.lower()}.{ln.lower()}{i}@example.com".replace("ö", "o").replace("ä", "a").replace("å", "a"),
                          "city": city, "country": "SE", "created_at": ts(created), "marketing_consent": consent})
        contacts.append({"contact_id": f"HS{i:06d}", "customer_id": cid, "email": customers[-1]["email"],
                         "lifecycle_stage": rng.choice(["subscriber", "lead", "customer", "customer", "customer"]),
                         "lead_source": pick(CHANNELS)[0], "email_opt_in": consent,
                         "created_at": ts(created), "last_email_open_at": ts(created + timedelta(days=rng.randint(1, 300))) if consent and rng.random() < 0.7 else ""})
    write("customers", customers, list(customers[0]))
    write("crm_contacts", contacts, list(contacts[0]))

    campaigns = []
    for i, d in enumerate([START + timedelta(days=30 * k) for k in range(24)], 1):
        ch = rng.choice(["paid_search", "paid_social", "email", "affiliate"])
        name = f"{d.strftime('%Y-%m')}_{rng.choice(['vinterrea', 'varkampanj', 'fjallsasong', 'black_friday' if d.month == 11 else 'nyheter'])}"
        campaigns.append({"campaign_id": f"CMP{i:03d}", "campaign_name": name, "channel": ch,
                          "start_date": d.strftime("%Y-%m-%d"), "end_date": (d + timedelta(days=rng.randint(7, 28))).strftime("%Y-%m-%d"),
                          "spend_sek": 0 if ch == "email" else rng.randint(15000, 120000)})
    write("marketing_campaigns", campaigns, list(campaigns[0]))

    orders, items, refunds, events = [], [], [], []
    oid, eid = 1, 1
    n_sessions = int(60000 * SCALE)
    days = (END - START).days
    weights = [season_weight(START + timedelta(days=k)) for k in range(days + 1)]
    total_w = sum(weights)
    returning = {}
    for s in range(n_sessions):
        r, acc, k = rng.random() * total_w, 0.0, 0
        for k, w in enumerate(weights):
            acc += w
            if acc >= r:
                break
        t = START + timedelta(days=k, seconds=rng.randint(6 * 3600, 23 * 3600))
        ch = pick(CHANNELS)
        device = pick(DEVICES)[0]
        cust = rng.choice(customers) if rng.random() < 0.45 else None
        user_pseudo_id = (cust["customer_id"] if cust else "") + str(uuid.UUID(int=rng.getrandbits(128)))[:13]
        if cust:
            user_pseudo_id = returning.setdefault(cust["customer_id"], str(uuid.UUID(int=rng.getrandbits(128)))[:18])
        session_id = 1000000000 + s
        camp = rng.choice(campaigns)["campaign_name"] if ch[0] in ("paid_search", "paid_social", "email", "affiliate") else ""
        landing = rng.choice(["/", "/jackor", "/skor", "/talt", "/rea", "/produkt/" + rng.choice(products)["sku"].lower()])
        def ev(name, extra=None, dt=0):
            nonlocal eid
            row = {"event_id": eid, "event_timestamp": ts(t + timedelta(seconds=dt)), "event_name": name,
                   "user_pseudo_id": user_pseudo_id, "ga_session_id": session_id, "device_category": device,
                   "traffic_source": ch[1], "traffic_medium": ch[2], "campaign": camp, "page_location": landing,
                   "item_id": "", "value_sek": "", "transaction_id": "", "consent_analytics": rng.random() > 0.12}
            if extra:
                row.update(extra)
            events.append(row)
            eid += 1
        ev("session_start"); ev("page_view", dt=1)
        prod = rng.choice(products)
        if rng.random() < 0.55:
            ev("view_item", {"item_id": prod["product_id"], "value_sek": prod["price_sek"]}, 20)
            if rng.random() < 0.28:
                ev("add_to_cart", {"item_id": prod["product_id"], "value_sek": prod["price_sek"]}, 60)
                if rng.random() < 0.55:
                    ev("begin_checkout", dt=120)
                    conv = 0.62 if cust else 0.35
                    if rng.random() < conv:
                        buyer = cust or rng.choice(customers)
                        order_id = f"O{oid:07d}"
                        n_items = 1 if rng.random() < 0.6 else rng.randint(2, 4)
                        chosen = [prod] + rng.sample(products, n_items - 1)
                        subtotal = 0
                        for li, p in enumerate(chosen, 1):
                            qty = 1 if rng.random() < 0.85 else 2
                            disc = 0.2 if (t.month == 11 and t.day >= 22) else (0.1 if rng.random() < 0.1 else 0)
                            unit = round(p["price_sek"] * (1 - disc))
                            subtotal += unit * qty
                            items.append({"order_item_id": f"{order_id}-{li}", "order_id": order_id, "product_id": p["product_id"],
                                          "quantity": qty, "unit_price_sek": unit, "discount_pct": int(disc * 100)})
                        shipping = 0 if subtotal >= 999 else 59
                        status = rng.choices(["completed", "cancelled", "returned"], [0.9, 0.03, 0.07])[0]
                        # raw amounts in öre, like many shop APIs
                        orders.append({"order_id": order_id, "customer_id": buyer["customer_id"], "created_at": ts(t + timedelta(seconds=180)),
                                       "status": status, "subtotal_ore": subtotal * 100, "shipping_ore": shipping * 100,
                                       "vat_ore": round((subtotal + shipping) * 0.2) * 100, "currency": "SEK",
                                       "payment_method": rng.choice(["card", "card", "klarna", "swish"]), "ga_session_id": session_id})
                        ev("purchase", {"transaction_id": order_id, "value_sek": subtotal}, 180)
                        if status == "returned":
                            refunds.append({"refund_id": f"R{len(refunds) + 1:06d}", "order_id": order_id,
                                            "refunded_at": ts(t + timedelta(days=rng.randint(3, 25))),
                                            "amount_ore": round(subtotal * rng.uniform(0.3, 1.0)) * 100,
                                            "reason": rng.choice(["wrong_size", "damaged", "changed_mind", "late_delivery"])})
                        oid += 1
    # a few deliberate data quality issues for testing labs
    if orders:
        orders.append(dict(orders[5]))                       # duplicate order row
        orders[10]["customer_id"] = "C999999"                # orphan customer id
    write("orders", orders, list(orders[0]))
    write("order_items", items, list(items[0]))
    write("refunds", refunds, list(refunds[0]))
    write("web_events", events, list(events[0]))
    print("Done. Fictional data only. Planted issues: one duplicate order, one orphan customer_id.")

if __name__ == "__main__":
    main()
