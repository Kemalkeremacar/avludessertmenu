#!/usr/bin/env python3
"""Parse price xlsx and compare with menu-data.ts"""
import json
import re
import unicodedata
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
MENU_FILE = ROOT / "src" / "data" / "menu-data.ts"

CATEGORY_MAP = {
    "SOĞUK MEŞRUBATLAR": "soft-drinks",
    "DÜNYA KAHVELERİ": "coffee",
    "AROMALI DÜNYA KAHVELERİ": "flavored-coffee",
    "FRAPPE": "frappe",
    "GELENEKSEL KAHVE ÇEŞİTLERİ": "turkish-coffee",
    "ÇAY ÇEŞİTLERİ": "tea",
    "ŞİFALI BİTKİ ÇAYLARI": "tea",
    "MİLKSAHKE DÜNYASI": "milkshake",
    "MILKSHAKE DÜNYASI": "milkshake",
    "FROZEN DÜNYASI": "frozen",
    "SMOOTHIES'YOĞURTLU-SÜTLÜ": "smoothie",
    "SMOOTHIES''YOĞURTLU-SÜTLÜ": "smoothie",
    "TAZE SIKILMIŞ VİTAMİN BAR": "fresh-juice",
    "MOCTAİL FRESH LEZZETLER": "mocktail",
    "MOCTAIL FRESH LEZZETLER": "mocktail",
    "LİMONATA DÜNYASI": "lemonade-bar",
    "AVLU JAPON MATCHA": "matcha",
    "UZUN DEMLEME COFFE": "cold",
    "UZUN DEMLEME COFFEE": "cold",
    "CHEFFİN ÖZEL REÇETELİ PASTLARI VE TATLILARI": "desserts",
    "TOST ÇEŞİTLERİ": "toast",
    "PİZZALAR": "pizza",
    "EFSANE MENÜLER": "menus",
    "ÇOCUK MENÜSÜ": "kids",
    "ÇITIRLAR": "crispy",
    "DONDURMALAR": "ice-cream",
}


def norm(s: str) -> str:
    s = unicodedata.normalize("NFKC", s or "")
    s = s.strip().upper()
    s = re.sub(r"\s+", " ", s)
    s = s.replace("İ", "I").replace("ı", "I")
    s = s.replace("Ş", "S").replace("ş", "S")
    s = s.replace("Ğ", "G").replace("ğ", "G")
    s = s.replace("Ü", "U").replace("ü", "U")
    s = s.replace("Ö", "O").replace("ö", "O")
    s = s.replace("Ç", "C").replace("ç", "C")
    s = re.sub(r"[^A-Z0-9 ]", "", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def parse_xlsx(path: Path):
    wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
    ws = wb.active
    current_cat = None
    items = []
    categories = []

    for row in ws.iter_rows(min_row=2, values_only=True):
        if not row or len(row) < 2:
            continue
        name = row[1]
        price = row[2] if len(row) > 2 else None
        if not name:
            continue
        name = str(name).strip()
        if not name:
            continue

        price_val = None
        if price is not None and str(price).strip() != "":
            try:
                price_val = int(float(price))
            except (TypeError, ValueError):
                pass

        name_norm = norm(name)
        if price_val is None:
            mapped = CATEGORY_MAP.get(name_norm) or CATEGORY_MAP.get(
                name.strip().upper().replace("İ", "I")
            )
            if mapped or name_norm in CATEGORY_MAP or any(
                k in name_norm for k in ["DUNYA", "KAHVE", "MEŞRUBAT", "MEŞRUBATLAR"]
            ):
                for key, cat_id in CATEGORY_MAP.items():
                    if norm(key) == name_norm:
                        current_cat = cat_id
                        categories.append({"xlsx_name": name, "id": cat_id})
                        break
                else:
                    # section header without map
                    current_cat = CATEGORY_MAP.get(name_norm)
                    if current_cat:
                        categories.append({"xlsx_name": name, "id": current_cat})
            continue

        items.append(
            {
                "name": name,
                "name_norm": name_norm,
                "price": price_val,
                "price_str": f"{price_val} TL",
                "category": current_cat,
            }
        )

    wb.close()
    return items


def parse_menu_ts():
    text = MENU_FILE.read_text(encoding="utf-8")
    items = []
    pattern = re.compile(
        r'id:\s*"([^"]+)"[\s\S]*?name:\s*\{\s*tr:\s*"([^"]+)"[\s\S]*?price:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"',
        re.MULTILINE,
    )
    for m in pattern.finditer(text):
        items.append(
            {
                "id": m.group(1),
                "name_tr": m.group(2),
                "name_norm": norm(m.group(2)),
                "price": m.group(3),
                "category": m.group(4),
            }
        )
    return text, items


def main():
    xlsx_path = next(ROOT.glob("*.xlsx"))
    xlsx_items = parse_xlsx(xlsx_path)
    menu_text, menu_items = parse_menu_ts()

    xlsx_by_norm = {}
    for item in xlsx_items:
        key = (item["category"], item["name_norm"])
        xlsx_by_norm[key] = item
        xlsx_by_norm[item["name_norm"]] = item

    changes = []
    matched_xlsx = set()

    for mi in menu_items:
        key_cat = (mi["category"], mi["name_norm"])
        xi = xlsx_by_norm.get(key_cat) or xlsx_by_norm.get(mi["name_norm"])
        if not xi:
            # fuzzy: same category, try partial
            candidates = [
                x
                for x in xlsx_items
                if x["category"] == mi["category"]
                and (
                    mi["name_norm"] in x["name_norm"]
                    or x["name_norm"] in mi["name_norm"]
                )
            ]
            if len(candidates) == 1:
                xi = candidates[0]

        if xi:
            matched_xlsx.add(id(xi))
            if xi["price_str"] != mi["price"]:
                changes.append(
                    {
                        "id": mi["id"],
                        "name": mi["name_tr"],
                        "old": mi["price"],
                        "new": xi["price_str"],
                        "category": mi["category"],
                    }
                )
        else:
            changes.append(
                {
                    "id": mi["id"],
                    "name": mi["name_tr"],
                    "old": mi["price"],
                    "new": None,
                    "category": mi["category"],
                    "status": "NOT_IN_XLSX",
                }
            )

    new_in_xlsx = []
    matched_ids = {c["id"] for c in changes if c.get("new")}
    for xi in xlsx_items:
        found = False
        for mi in menu_items:
            if mi["category"] == xi["category"] and (
                mi["name_norm"] == xi["name_norm"]
                or mi["name_norm"] in xi["name_norm"]
                or xi["name_norm"] in mi["name_norm"]
            ):
                found = True
                break
        if not found:
            new_in_xlsx.append(xi)

    print("=== PRICE CHANGES ===")
    for c in sorted(changes, key=lambda x: x["id"]):
        if c.get("status") == "NOT_IN_XLSX":
            print(f"MISSING: [{c['id']}] {c['name']} ({c['old']})")
        elif c.get("new"):
            print(f"UPDATE: [{c['id']}] {c['name']}: {c['old']} -> {c['new']}")

    print(f"\nTotal menu items: {len(menu_items)}")
    print(f"Total xlsx items: {len(xlsx_items)}")
    print(f"Price updates: {len([c for c in changes if c.get('new') and not c.get('status')])}")
    print(f"Not in xlsx: {len([c for c in changes if c.get('status') == 'NOT_IN_XLSX'])}")
    print(f"New in xlsx: {len(new_in_xlsx)}")

    print("\n=== NEW IN XLSX (sample) ===")
    for xi in new_in_xlsx[:30]:
        print(f"  [{xi['category']}] {xi['name']} -> {xi['price_str']}")

    out = ROOT / "scripts" / "price-sync-report.json"
    out.write_text(
        json.dumps(
            {"changes": changes, "new_in_xlsx": new_in_xlsx, "xlsx_items": xlsx_items},
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )
    print(f"\nReport: {out}")


if __name__ == "__main__":
    main()
