export type MenuCategory = {
  id: string;
  label: string;
  description?: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  tags?: string[];
  isPopular?: boolean;
  isAvailable?: boolean;
};

export type CafeInfo = {
  name: string;
  tagline: string;
  hours?: string;
};
