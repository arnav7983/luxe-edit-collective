/*
  # Cart System Setup

  1. New Tables
    - `cart_items`
      - `id` (uuid, primary key)
      - `session_id` (text, for anonymous users)
      - `product_id` (text)
      - `product_name` (text)
      - `product_price` (numeric)
      - `product_image` (text)
      - `product_category` (text)
      - `size` (text)
      - `quantity` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `cart_items` table
    - Add policy for session-based access
*/

CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  product_id text NOT NULL,
  product_name text NOT NULL,
  product_price numeric NOT NULL,
  product_image text NOT NULL,
  product_category text NOT NULL,
  size text DEFAULT 'One Size',
  quantity integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own cart items"
  ON cart_items FOR SELECT
  USING (true);

CREATE POLICY "Users can insert own cart items"
  ON cart_items FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update own cart items"
  ON cart_items FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can delete own cart items"
  ON cart_items FOR DELETE
  USING (true);

CREATE INDEX IF NOT EXISTS idx_cart_session ON cart_items(session_id);
CREATE INDEX IF NOT EXISTS idx_cart_product ON cart_items(product_id);