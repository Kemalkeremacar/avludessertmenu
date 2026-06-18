#!/usr/bin/env python3
"""Full audit: Excel price list vs menu-data.ts"""
import re
import unicodedata
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
MENU_FILE = ROOT / "src" / "data" / "menu-data.ts"

CATEGORY_HEADERS = {
    "SOĞUK MEŞRUBATLAR": "soft-drinks",
    "DÜNYA KAHVELERİ": "coffee",
    "AROMALI DÜNYA KAHVELERİ": "flavored-coffee",
    "FRAPPE": "frappe",
    "AROMALI VE MEYVELİ FRAPPE": "frappe",
    "GELENEKSEL KAHVE ÇEŞİTLERİ": "turkish-coffee",
    "ÇAY ÇEŞİTLERİ": "tea",
    "ŞİFALI BİTKİ ÇAYLARI": "tea",
    "MİLKSAHKE DÜNYASI": "milkshake",
    "FROZEN DÜNYASI": "frozen",
    "SMOOTHIES'YOĞURTLU-SÜTLÜ": "smoothie",
    "SMOOTHIES''YOĞURTLU-SÜTLÜ": "smoothie",
    "TAZE SIKILMIŞ VİTAMİN BAR": "fresh-juice",
    "MOCTAİL FRESH LEZZETLER": "mocktail",
    "LİMONATA DÜNYASI": "lemonade-bar",
    "AVLU JAPON MATCHA": "matcha",
    "UZUN DEMLEME COFFE": "cold",
    "CHEFFİN ÖZEL REÇETELİ PASTLARI VE TATLILARI": "desserts",
    "TOST ÇEŞİTLERİ": "toast",
    "PİZZALAR": "pizza",
    "EFSANE MENÜLER": "menus",
    "ÇOCUK MENÜSÜ": "kids",
    "ÇITIRLAR": "crispy",
    "DONDURMALAR": "ice-cream",
}

# Explicit mapping: menu item id -> exact Excel product name
ID_TO_XLSX = {
    "water": "DAMLA CAM SU",
    "water-pet": "DAMLA SU PET",
    "coca-cola": "COCO COLA CAM ŞİŞE",
    "coca-cola-zero": "COCOLA COLA ZERO CAM",
    "sprite": "SPRITE CAM ŞIŞE",
    "fanta": "FANTA CAM ŞIŞE",
    "cappy-visne": "CAPPY VIŞNE KUTU",
    "fusetea": "FUCEA TEA LIMONLU,ANANAS,MANGO ŞEFTALI,KARPUZ,KAVUN-ÇILEK",
    "sprite-teneke": "SPRITE KUTU",
    "fanta-teneke": "FANTA KUTU",
    "coca-cola-kutu": "COCO COLA KUTU",
    "coca-cola-zero-kutu": "COCO COLA ZERO KUTU",
    "cappy-portakal": "CAPPY PORTAKAL PARÇACIKLI",
    "espresso": "ESPRESSO",
    "affogato": "AFFOGATO",
    "americano": "AMERICANO SICAK",
    "americano-ice": "AMERICANO SOĞUK",
    "cortado": "CORTADO SICAK",
    "cappuccino": "CAPPUCCINO SICAK",
    "flat-white": "FLAT WHITE SICAK",
    "flat-white-ice": "FLAT WHITE SOĞUK",
    "filter-coffee": "FILTER COFFEE SICAK",
    "filter-coffee-ice": "FILTER COFFEE SOĞUK",
    "filter-sutlu": "FİLTER SÜTLÜ SICAK",
    "caramel-latte-ice": "CARAMEL COFFE LATTE SOĞUK",
    "caramel-latte": "CARAMEL COFFE LATTE SICAK",
    "coffee-latte": "COFFE LATTE SICAK",
    "coffee-latte-ice": "COFFE LATTE SOĞUK",
    "vanilla-latte": "VANİLLA COFFE LATTE SICAK",
    "vanilla-latte-ice": "VANİLLA COFFE LATTE SOĞUK",
    "pistachio-latte": "ANTEP FISTIKLI COFFE LATTE SICAK",
    "pistachio-latte-ice": "ANTEP FISTIKLI COFFE LATTE SOĞUK",
    "tahini-latte": "TAHİNİ COFFE LATTE SICAK",
    "tahini-latte-ice": "TAHİNİ COFFE LATTE SOĞUK",
    "recelli-latte": "SÜTLÜ REÇELLİ LATTE SICAK",
    "recelli-latte-ice": "SÜTLÜ REÇELLİ LATTE SOĞUK",
    "hurma-latte": "MEDJOOL HURMA COFFE LATTE SICAK",
    "hurma-latte-ice": "MEDJOOL HURMA LATTE COFFE SOĞUK",
    "mocha-ice": "COFFE MOCHA SOĞUK",
    "caramel-mocha-ice": "COFFE CARAMEL SOĞUK MOCHA",
    "caramel-mocha": "COFFE CARAMEL SICAK MOCHA",
    "white-mocha": "COFFE WHITE MOCHA SICAK",
    "white-mocha-ice": "COFFE WHITE MOCHA SOĞUK",
    "oreo-mocha": "OREO COFFE MOCHA SICAK",
    "oreo-mocha-ice": "OREO COFFE MOCHA SOĞUK",
    "lotus-mocha": "LOTUS COFFE MOCHA SICAK",
    "lotus-mocha-ice": "LOTUS COFFE MOCHA SOĞUK",
    "classic-frappe": "CLASSIC FRAPPE",
    "sutlu-frappe": "SÜTLÜ FRAPPE",
    "chocolate-frappe": "ÇIKOLATAA FRAPPE",
    "caramel-frappe": "KARAMELL FRAPPE",
    "vanilla-frappe": "VANILYAA FRAPPE",
    "oreo-frappe": "OREO FRAPPE",
    "lotus-frappe": "LOTUS FRAPPE",
    "turkish-coffee": "TÜRK KAHVESI",
    "suvari-turkish-coffee": "SÜVARI TÜRK KAHVESI",
    "mastic-turkish-coffee": "DAMLA SAKIZLI TÜRK KAHVESI",
    "osmanli-dibek": "OSMANLI DIBEK TÜRK KAHVESI",
    "hell-qahwa": "HELL -I QAHWA MENENGIÇ KAHVESI",
    "dag-cilekli": "DAĞ ÇILEKLI TÜRK KAHVESI",
    "kacak-cay": "KAÇAK ÇAY",
    "yerli-cay": "YERLİ ÇAY",
    "kupa-cay": "KUPA ÇAY",
    "fincan-cay": "FINCAN ÇAY",
    "atom-cay": "ATOM ÇAY ŞIFALI BITKI ÇAYLARI",
    "kis-cayi-ihlamur": "KIŞ ÇAYI IHLAMUR",
    "adacayi": "ADAÇAYI",
    "zencefil-cay": "ZENCEFIL",
    "tarcin-cay": "TARÇIN",
    "karanfin-cay": "KARANFIN",
    "anason-cay": "ANASON",
    "elma-parcali-cay": "ELMA PARÇALI",
    "enerji-cayi-mate": "ENERJI ÇAYI MATE",
    "karanfil-cay": "KARANFIL",
    "hindistan-cevizi-cay": "HINDISTAN CEVIZI",
    "dogal-mango-cay": "DOĞAL MANGO",
    "uyku-cayi-ihlamur": "UYKU ÇAYI IHLAMUR",
    "papatya-cay": "PAPATYA",
    "rezene-cay": "REZENE",
    "dogal-vanilya-cay": "DOĞAL VANILYA",
    "detox-yesil-cay": "DETOX ÇAYI YESIL ÇAY",
    "dogal-limon-cay": "DOĞAL LIMON PARÇALARI",
    "ice-matcha-latte": "İCE MATCHA LATTE",
    "ice-vanilla-matcha": "İCE MATCHA VANILLA LATTE",
    "ice-strawberry-matcha": "İCE STRAWBERRY MATCHA LATTE",
    "ice-coco-matcha": "İCE COCO MATCHA LATTE",
    "ice-caramel-banana-matcha": "İCE CARAMEL BANANA CREAM MATCHA",
    "cilek-dondurma-milkshake": "ÇILEK DONDURMALI MILKSHAKE",
    "chocolate-milkshake": "ÇIKOLATA DONDURMALI MILKSHAKE",
    "antep-fistik-dondurma": "ANTEP FISTIK DONDURMALI MILKSHAKE",
    "avlutella-milkshake": "AVLUTELLA NUTELLA ÇIKOLATA MİLKSHAKE",
    "limon-dondurma-milkshake": "LIMON DONDURMALI MILKSHAKE",
    "vanilya-dondurma-milkshake": "VANILYA DONDURMALI MILKSHAKE",
    "kendin-sec-milkshake": "DONDURMANI KENDIN SEÇ MILKSHAKE",
    "avlu-bob-milkshake": "AVLU BOB MILSHAKE",
    "lemon-frozen": "LİMON FROZEN",
    "seftali-frozen": "ŞEFTALİ FROZEN",
    "bogurtlen-frozen": "BÖGÜRTLEN FROZEN",
    "strawberry-frozen": "ÇİLEK FROZEN",
    "karadut-frozen": "KARADUT FROZEN",
    "berry-frozen": "KIRMIZI ORMAN MEYVELI FROZEN",
    "yaban-mersini-frozen": "YABAN MERSISI FROZEN",
    "sari-bahce-smoothie": "SARI BAHÇE MEYVELI SMOOTHIES",
    "berry-smoothie": "KIRMIZI ORMAN MEYVELI SMOOTHIES",
    "churchill": "CHURCHILL",
    "carrot-juice": "HAVUÇ SUYU",
    "apple-juice": "ELMA SUYU",
    "pancar-suyu": "PANCAR SUYU",
    "geberten-atom": "GEBERTEN ATOM( ALLAH NE VERDIYSE)",
    "detox-nane": "DETOX NANE",
    "berry-hibiscus": "BERRY HIBISCUS",
    "cool-lime": "COOL LIME",
    "bubble-tea-cilek": "BUBBLE TEA ÇILEK",
    "pink-mojito": "PİNK MOJITO",
    "white-mojito": "WHİTE MOJITO",
    "classic-mojito": "CLASSIC MOJITO",
    "avlu-sunset": "AVLU SUNSET KARAMEL SURUP",
    "kilis-bahcesi": "KILIS BAHÇASI EGZOTIK LIMON OTU",
    "iki-kuzu": "KUZU KULAĞI",
    "lemonade": "EVDE YAPTIK LIMONATA",
    "strawberry-lemonade": "ÇILEK LIMONATA",
    "rose-lemonade": "GÜL LIMONATA",
    "botanical-lemonade": "BOTANIK BAHÇE LIMONATA",
    "dondurma-sade": "SADE DONDURMA 1 TOP",
    "dondurma-meyveli": "MEYVELİ DONDURMALAR 1 TOP",
    "dondurma-fistikli": "FISTIKLI DONDURMALAR",
    "mersin-kruvasan": "MERSİN TOİ KRUVASAN",
    "trilece": "SÜTLÜ KARAMELLI TRİLİÇE",
    "san-sebastian-cheesecake": "SANSEBASTIAN QUEENCAKE (ERİTLMİŞ ÇİKOLOTA İLE)",
    "cheesecake": "ÇİLEKLİ CHEESCAKESS",
    "taze-frambuazli-cheesecake": "FRAMBUAZLI CHEESCAKE",
    "taze-limonlu-cheesecake": "LIMONLU CHEESCAKE",
    "tartolet-yummy": "TARTOLET YUMMY",
    "carema-eclair": "CAREMA ECLAIR EKLER",
    "profiterol": "PROFITERÖL PUDING",
    "tiramisu": "HMM TİRAMİSU",
    "brownie": "BROWNIE",
    "sufle": "SUFLE",
    "ahududu-nata": "AHUDUDU VE YER FISTIKLI NATA",
    "waffle": "WAFFLE",
    "klasik-nata": "KLASIK NATA",
    "sucuklu-toast": "SUCUKLU",
    "kasarli-toast": "KAŞARLI",
    "karisik-toast": "KARIŞIK",
    "thy-tostu": "THY TOSTU",
    "ayvalik-tostu": "AYVALIK TOSTU",
    "margherita-pizza": "MARGARITA",
    "sucuk-pizza": "SUCUKLU",
    "mantarli-zeytinli-pizza": "MANTARLI ZEYTINLI",
    "sosisli-misirli-pizza": "SOSISLI MISIRLI",
    "kumru-pizza": "KUMRU",
    "efsane-5li": "EFSANE 5LI (",
    "partiterra": "PARTITERRA",
    "meksikali-pizza": "MEKSIKALI",
    "vejetaryen-pizza": "VEJETARYEN",
    "barbeku-tavuklu-pizza": "BARBEKÜ ÇITIR TAVUKLU",
    "bol-bol-pizza": "BOL BOL",
    "cheddarli-karisik-pizza": "CHEDDARLI DEV KARIŞIK",
    "citir-tavuklu-pizza": "ÇITIR TAVUKLU",
    "bol-etli-pizza": "BOL ETLI",
    "sweet-chili-pizza": "SWEET CHILI SÜPER SUCUKLU",
    "bol-peynirli-pizza": "BOL PEYNIRLI",
    "pastirmali-sucuklu-pizza": "PASTIRMALI SUCUKLU",
    "kavurmali-pizza": "KAVURMALI",
    "fume-kaburgali-pizza": "FÜME KABURGALI",
    "pan-pizza-sucuklu": "PAN PIZZA SUCUKLU",
    "pan-pizza-karisik": "PAN PIZZA KARŞIK",
    "combo-menu": "COMBO MENÜ",
    "special-menu": "ÖZEL MENÜ",
    "champion-menu": "ŞAMPIYON MENÜ",
    "kids-chicken": "TAVUKLU MISIRLI(patates,çocuk pizza, ayran)",
    "kids-sausage": "SOSİSLİ MISIRLI(patates,çocuk pizza,ayran)",
    "french-fries": "PARMAK PATATES",
    "onion-rings": "10LU SOĞAN HALKASI",
    "citir-toplar": "10LU ÇITIR TOPLARI",
    "nuggets": "4 LÜ NUGGETS",
    "tavuk-gogus": "4LÜ TAVUK GÖĞÜS PARÇALARI",
    "chicken-fingers": "3LÜ CHICKEN FINGERS",
    "citir-peynir": "4LÜ ÇITIR PEYNIR ÇUBUKLARI",
    "citir-kutusu": "ÇITIR KUTUSU(425G) 1.5 porsiyon parmak patates,4'lü tavuk göğüs parçaları, 2'li chicken fingers, 4'lü soğan halkası",
    "patates-kovasi": "PATATES KOVASI(450 G)",
    "citir-kovasi": "ÇITIR KOVASI :1,5 PORSIYON PARMAK PATATES, 4LÜ TAVUK GÖĞÜS PARÇALARI, 2LI CHICKEN FINGERS, 4LÜ SOĞAN HALKASI",
    "tavuk-kovasi": "TAVUK KOVASI: CHICKEN FINGERS, 4LÜ TAVUK GÖĞÜS PARÇLARI",
}

# Toast vs pizza disambiguation for duplicate names in Excel
ID_CATEGORY = {
    "sucuklu-toast": "toast",
    "sucuk-pizza": "pizza",
}


def norm(s: str) -> str:
    s = unicodedata.normalize("NFKC", s or "").strip().upper()
    for a, b in [("İ", "I"), ("I", "I"), ("Ş", "S"), ("Ğ", "G"), ("Ü", "U"), ("Ö", "O"), ("Ç", "C")]:
        s = s.replace(a, b)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def parse_xlsx(path: Path):
    wb = openpyxl.load_workbook(path, data_only=True)
    ws = wb.active
    current_cat = None
    priced = []
    headers = []
    no_price = []

    for row in ws.iter_rows(min_row=2, values_only=True):
        if not row or len(row) < 2 or not row[1]:
            continue
        name = str(row[1]).strip()
        price = row[2] if len(row) > 2 else None

        if name in CATEGORY_HEADERS and (price is None or str(price).strip() == ""):
            current_cat = CATEGORY_HEADERS[name]
            headers.append(name)
            continue

        if price is None or str(price).strip() == "":
            no_price.append({"name": name, "category": current_cat})
            continue

        priced.append({
            "name": name,
            "name_norm": norm(name),
            "price": int(float(price)),
            "price_str": f"{int(float(price))} TL",
            "category": current_cat,
        })

    wb.close()
    return priced, no_price, headers


def parse_menu():
    text = MENU_FILE.read_text(encoding="utf-8")
    items = []
    for block in re.split(r"\n  \{\n", text):
        id_m = re.search(r'id:\s*"([^"]+)"', block)
        name_m = re.search(r'tr:\s*"([^"]+)"', block)
        price_m = re.search(r'price:\s*"([^"]+)"', block)
        cat_m = re.search(r'category:\s*"([^"]+)"', block)
        if not all([id_m, name_m, price_m, cat_m]):
            continue
        if id_m.group(1) in CATEGORY_HEADERS.values() or id_m.group(1) in [
            "coffee", "flavored-coffee", "frappe", "turkish-coffee", "tea", "matcha",
            "cold", "milkshake", "frozen", "smoothie", "fresh-juice", "mocktail",
            "lemonade-bar", "soft-drinks", "ice-cream", "desserts", "toast", "pizza",
            "menus", "kids", "crispy",
        ]:
            # skip if it's a category id accidentally matched - categories don't have price in same block
            if not price_m:
                continue
        items.append({
            "id": id_m.group(1),
            "name_tr": name_m.group(1),
            "price": price_m.group(1),
            "category": cat_m.group(1),
        })
    return items


# Toast vs pizza: same name in Excel, different prices — match by category + name
DUPLICATE_XLSX = {
    ("toast", "SUCUKLU"): "SUCUKLU",
    ("pizza", "SUCUKLU"): "SUCUKLU",
}


def find_xlsx_price(item_id, menu_item, xlsx_priced):
    xlsx_by_name = {}
    for x in xlsx_priced:
        key = (x["category"], norm(x["name"]))
        xlsx_by_name[key] = x
    xlsx_by_exact = {x["name"]: x for x in xlsx_priced}

    if item_id in ID_TO_XLSX:
        key = ID_TO_XLSX[item_id]
        cat = menu_item["category"]
        dup_key = (cat, norm(key))
        if dup_key in xlsx_by_name:
            return xlsx_by_name[dup_key]
        if key in xlsx_by_exact:
            cand = xlsx_by_exact[key]
            if cand["category"] == cat:
                return cand
        nk = norm(key)
        for x in xlsx_priced:
            if x["category"] == cat and norm(x["name"]) == nk:
                return x
        # toast sucuklu: excel name is just SUCUKLU in toast section
        if item_id == "sucuklu-toast":
            for x in xlsx_priced:
                if x["category"] == "toast" and norm(x["name"]) == "SUCUKLU":
                    return x
        if item_id == "sucuk-pizza":
            for x in xlsx_priced:
                if x["category"] == "pizza" and norm(x["name"]).startswith("SUCUKLU"):
                    return x

    return None


def main():
    xlsx_path = next(ROOT.glob("*.xlsx"))
    xlsx_priced, xlsx_no_price, headers = parse_xlsx(xlsx_path)
    menu_items = parse_menu()

    price_ok = []
    price_wrong = []
    menu_not_in_xlsx = []
    xlsx_matched = set()

    for mi in menu_items:
        match = find_xlsx_price(mi["id"], mi, xlsx_priced)
        if not match:
            menu_not_in_xlsx.append(mi)
            continue
        xlsx_matched.add(match["name"])
        if mi["price"] == match["price_str"]:
            price_ok.append(mi)
        else:
            price_wrong.append({**mi, "expected": match["price_str"], "xlsx_name": match["name"]})

    xlsx_not_in_menu = [x for x in xlsx_priced if x["name"] not in xlsx_matched]

    print("=" * 60)
    print("AUDIT: Excel vs menu-data.ts")
    print("=" * 60)
    print(f"Excel priced items:     {len(xlsx_priced)}")
    print(f"Excel no-price rows:    {len(xlsx_no_price)}")
    print(f"Menu items:             {len(menu_items)}")
    print(f"Prices OK:              {len(price_ok)}")
    print(f"Prices WRONG:           {len(price_wrong)}")
    print(f"Menu not in Excel:      {len(menu_not_in_xlsx)}")
    print(f"Excel not in menu:      {len(xlsx_not_in_menu)}")

    if price_wrong:
        print("\n--- WRONG PRICES ---")
        for w in price_wrong:
            print(f"  {w['id']}: menu={w['price']} excel={w['expected']} ({w['xlsx_name']})")

    if menu_not_in_xlsx:
        print("\n--- IN MENU, NOT IN EXCEL ---")
        for m in menu_not_in_xlsx:
            print(f"  {m['id']}: {m['name_tr']} ({m['price']})")

    if xlsx_not_in_menu:
        print("\n--- IN EXCEL, NOT IN MENU ---")
        for x in xlsx_not_in_menu:
            print(f"  [{x['category']}] {x['name']} = {x['price_str']}")

    if xlsx_no_price:
        print("\n--- EXCEL ROWS WITHOUT PRICE (headers/new items) ---")
        for x in xlsx_no_price:
            print(f"  [{x['category']}] {x['name']}")

    if not price_wrong and not menu_not_in_xlsx and not xlsx_not_in_menu:
        print("\n✓ FULL MATCH — all priced Excel items synced to menu.")


if __name__ == "__main__":
    main()
