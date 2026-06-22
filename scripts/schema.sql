-- Supabase schema for Avlu Dessert dynamic menu

-- Categories
CREATE TABLE categories (
  id TEXT PRIMARY KEY,
  label_tr TEXT NOT NULL,
  label_en TEXT NOT NULL,
  description_tr TEXT,
  description_en TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Cafe info (single row)
CREATE TABLE cafe_info (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  tagline_tr TEXT NOT NULL,
  tagline_en TEXT NOT NULL,
  hours_tr TEXT,
  hours_en TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Menu items
CREATE TABLE menu_items (
  id TEXT PRIMARY KEY,
  name_tr TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_tr TEXT NOT NULL,
  description_en TEXT NOT NULL,
  price TEXT NOT NULL,
  category_id TEXT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  image TEXT,
  tags TEXT[],
  is_popular BOOLEAN NOT NULL DEFAULT FALSE,
  is_available BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE cafe_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

-- Public read policies
CREATE POLICY "Allow public read categories"
  ON categories FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow public read cafe_info"
  ON cafe_info FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "Allow public read menu_items"
  ON menu_items FOR SELECT TO anon, authenticated USING (true);

-- Admin write policies (only admin email can modify data)
CREATE POLICY "Allow admin update menu_items"
  ON menu_items FOR UPDATE TO authenticated
  USING (auth.email() = 'raffikokereci@polat.com')
  WITH CHECK (auth.email() = 'raffikokereci@polat.com');

CREATE POLICY "Allow admin insert menu_items"
  ON menu_items FOR INSERT TO authenticated
  WITH CHECK (auth.email() = 'raffikokereci@polat.com');

CREATE POLICY "Allow admin update categories"
  ON categories FOR UPDATE TO authenticated
  USING (auth.email() = 'raffikokereci@polat.com')
  WITH CHECK (auth.email() = 'raffikokereci@polat.com');

CREATE POLICY "Allow admin update cafe_info"
  ON cafe_info FOR UPDATE TO authenticated
  USING (auth.email() = 'raffikokereci@polat.com')
  WITH CHECK (auth.email() = 'raffikokereci@polat.com');
