#!/usr/bin/env python3
"""Apply prices from explicit ID map — no fuzzy matching."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MENU_FILE = ROOT / "src" / "data" / "menu-data.ts"

# Explicit menu item id -> price (TL number) from SON EN GÜNCEL FİYAT list
PRICES: dict[str, int] = {
    # soft-drinks
    "water": 50,
    "water-pet": 25,
    "coca-cola": 85,
    "coca-cola-zero": 85,
    "sprite": 85,
    "fanta": 85,
    "cappy-visne": 85,
    "fusetea": 85,
    "sprite-teneke": 85,
    "fanta-teneke": 85,
    "coca-cola-kutu": 85,
    "coca-cola-zero-kutu": 85,
    "cappy-portakal": 70,
    # coffee
    "espresso": 70,
    "affogato": 250,
    "americano": 130,
    "americano-ice": 130,
    "cortado": 180,
    "cappuccino": 170,
    "flat-white": 180,
    "flat-white-ice": 180,
    "filter-coffee": 120,
    "filter-coffee-ice": 120,
    "filter-sutlu": 135,
    # flavored-coffee
    "caramel-latte-ice": 170,
    "caramel-latte": 170,
    "coffee-latte": 160,
    "coffee-latte-ice": 160,
    "vanilla-latte": 170,
    "vanilla-latte-ice": 170,
    "pistachio-latte": 170,
    "pistachio-latte-ice": 170,
    "tahini-latte": 170,
    "tahini-latte-ice": 170,
    "recelli-latte": 170,
    "recelli-latte-ice": 170,
    "hurma-latte": 170,
    "hurma-latte-ice": 170,
    "mocha-ice": 170,
    "caramel-mocha-ice": 180,
    "caramel-mocha": 180,
    "white-mocha": 180,
    "white-mocha-ice": 180,
    "oreo-mocha": 180,
    "oreo-mocha-ice": 180,
    "lotus-mocha": 180,
    "lotus-mocha-ice": 180,
    # frappe
    "classic-frappe": 180,
    "sutlu-frappe": 180,
    "chocolate-frappe": 190,
    "caramel-frappe": 190,
    "vanilla-frappe": 190,
    "oreo-frappe": 190,
    "lotus-frappe": 190,
    # turkish-coffee
    "turkish-coffee": 90,
    "suvari-turkish-coffee": 120,
    "mastic-turkish-coffee": 120,
    "osmanli-dibek": 120,
    "hell-qahwa": 90,
    "dag-cilekli": 120,
    # tea
    "kacak-cay": 30,
    "yerli-cay": 30,
    "kupa-cay": 60,
    "fincan-cay": 60,
    "atom-cay": 120,
    "herbal-tea": 120,
    # matcha
    "ice-matcha-latte": 180,
    "ice-vanilla-matcha": 180,
    "ice-strawberry-matcha": 180,
    "ice-coco-matcha": 180,
    "ice-caramel-banana-matcha": 180,
    # milkshake
    "cilek-dondurma-milkshake": 220,
    "chocolate-milkshake": 220,
    "antep-fistik-dondurma": 220,
    "avlutella-milkshake": 220,
    "limon-dondurma-milkshake": 220,
    "vanilya-dondurma-milkshake": 220,
    "kendin-sec-milkshake": 220,
    "avlu-bob-milkshake": 220,
    # frozen
    "lemon-frozen": 180,
    "seftali-frozen": 180,
    "bogurtlen-frozen": 180,
    "strawberry-frozen": 180,
    "karadut-frozen": 180,
    "berry-frozen": 180,
    "yaban-mersini-frozen": 180,
    # smoothie
    "sari-bahce-smoothie": 200,
    "berry-smoothie": 200,
    # fresh-juice
    "churchill": 100,
    "carrot-juice": 120,
    "apple-juice": 120,
    "pancar-suyu": 120,
    "detox-nane": 120,
    "geberten-atom": 220,
    # mocktail
    "berry-hibiscus": 120,
    "cool-lime": 150,
    "bubble-tea-cilek": 200,
    "pink-mojito": 230,
    "white-mojito": 230,
    "classic-mojito": 230,
    "avlu-sunset": 230,
    "kilis-bahcesi": 230,
    "iki-kuzu": 230,
    # lemonade
    "lemonade": 90,
    "strawberry-lemonade": 100,
    "rose-lemonade": 100,
    "botanical-lemonade": 100,
    # ice-cream
    "dondurma-sade": 30,
    "dondurma-meyveli": 30,
    "dondurma-fistikli": 50,
    # desserts
    "mersin-kruvasan": 300,
    "trilece": 190,
    "san-sebastian-cheesecake": 300,
    "cheesecake": 250,
    "taze-frambuazli-cheesecake": 250,
    "taze-limonlu-cheesecake": 250,
    "tartolet-yummy": 100,
    "carema-eclair": 80,
    "profiterol": 170,
    "tiramisu": 200,
    "brownie": 90,
    "sufle": 90,
    "ahududu-nata": 100,
    "waffle": 240,
    "klasik-nata": 100,
    # toast
    "sucuklu-toast": 200,
    "kasarli-toast": 200,
    "karisik-toast": 250,
    "thy-tostu": 130,
    "ayvalik-tostu": 200,
    # pizza
    "margherita-pizza": 210,
    "sucuk-pizza": 210,
    "mantarli-zeytinli-pizza": 210,
    "sosisli-misirli-pizza": 210,
    "kumru-pizza": 210,
    "efsane-5li": 230,
    "partiterra": 230,
    "meksikali-pizza": 230,
    "vejetaryen-pizza": 230,
    "barbeku-tavuklu-pizza": 230,
    "bol-bol-pizza": 245,
    "cheddarli-karisik-pizza": 245,
    "citir-tavuklu-pizza": 245,
    "bol-etli-pizza": 245,
    "sweet-chili-pizza": 245,
    "bol-peynirli-pizza": 260,
    "pastirmali-sucuklu-pizza": 260,
    "kavurmali-pizza": 260,
    "fume-kaburgali-pizza": 260,
    "pan-pizza-sucuklu": 160,
    "pan-pizza-karisik": 160,
    # menus
    "combo-menu": 240,
    "special-menu": 325,
    "champion-menu": 390,
    # kids
    "kids-chicken": 205,
    "kids-sausage": 205,
    # crispy
    "french-fries": 75,
    "onion-rings": 75,
    "citir-toplar": 75,
    "nuggets": 75,
    "tavuk-gogus": 75,
    "chicken-fingers": 95,
    "citir-peynir": 84,
    "citir-kutusu": 145,
    "patates-kovasi": 215,
    "citir-kovasi": 265,
    "tavuk-kovasi": 265,
}

REMOVE_IDS = {"karamelize-lotus-cheesecake", "elmali-tart"}

NAME_UPDATES = {
    "fusetea": {
        "tr": "Fucea Tea Limonlu, Ananas, Mango, Şeftali, Karpuz, Kavun-Çilek",
        "en": "Fucea Tea Lemon, Pineapple, Mango, Peach, Watermelon, Melon-Strawberry",
    },
    "cheesecake": {
        "tr": "Çilekli Cheesecake",
        "en": "Strawberry Cheesecake",
    },
    "taze-frambuazli-cheesecake": {
        "tr": "Frambuazlı Cheesecake",
        "en": "Raspberry Cheesecake",
    },
    "taze-limonlu-cheesecake": {
        "tr": "Limonlu Cheesecake",
        "en": "Lemon Cheesecake",
    },
}

WATER_PET_ITEM = '''
  {
    id: "water-pet",
    name: { tr: "Damla Su Pet", en: "PET Bottle Water" },
    description: { tr: "Pet şişe su.", en: "PET bottle water." },
    price: "25 TL",
    category: "soft-drinks",
  },'''


def parse_menu_ids(text: str) -> list[str]:
    ids = []
    for block in re.split(r"\n  \{\n", text):
        m = re.search(r'id:\s*"([^"]+)"', block)
        price_m = re.search(r'price:\s*"', block)
        if m and price_m:
            ids.append(m.group(1))
    return ids


def main():
    text = MENU_FILE.read_text(encoding="utf-8")
    menu_ids = parse_menu_ids(text)

    missing_map = [i for i in menu_ids if i not in PRICES and i not in REMOVE_IDS]
    if missing_map:
        print("WARN: no price in map for:", missing_map)

    updates = 0
    for item_id, price in PRICES.items():
        new_price = f"{price} TL"
        pattern = rf'(id:\s*"{re.escape(item_id)}"[\s\S]*?price:\s*")([^"]+)(")'
        new_text, n = re.subn(pattern, rf"\g<1>{new_price}\3", text, count=1)
        if n == 1:
            if new_price not in text or re.search(rf'id:\s*"{re.escape(item_id)}"[\s\S]*?price:\s*"{re.escape(new_price)}"', text) is None:
                if new_text != text:
                    updates += 1
            text = new_text
        elif item_id == "water-pet" and item_id not in menu_ids:
            pass
        else:
            print(f"WARN: could not patch price for {item_id}")

    for item_id in REMOVE_IDS:
        pattern = rf"\n  \{{\n    id: \"{re.escape(item_id)}\"[\s\S]*?\n  \}},?\n"
        text, n = re.subn(pattern, "\n", text, count=1)
        if n == 1:
            print(f"Removed: {item_id}")

    for item_id, names in NAME_UPDATES.items():
        pattern = (
            rf'(id:\s*"{re.escape(item_id)}"[\s\S]*?name:\s*\{{\s*tr:\s*")([^"]+)(",\s*en:\s*")([^"]+)(")'
        )
        text, n = re.subn(
            pattern,
            rf'\g<1>{names["tr"]}\g<3>{names["en"]}\g<5>',
            text,
            count=1,
        )
        if n == 1:
            print(f"Renamed: {item_id}")

    if "water-pet" not in parse_menu_ids(text):
        text = text.replace(
            "  // ---------------------------------------------------------------------\n  // SOĞUK MEŞRUBATLAR\n  // ---------------------------------------------------------------------\n  {",
            "  // ---------------------------------------------------------------------\n  // SOĞUK MEŞRUBATLAR\n  // ---------------------------------------------------------------------\n" + WATER_PET_ITEM + "\n  {",
            1,
        )
        print("Added: water-pet")

    MENU_FILE.write_text(text, encoding="utf-8")
    print(f"Done. Price fields updated: {updates}")


if __name__ == "__main__":
    main()
