import type { LocalizedString } from "../i18n/types";

export type MenuCategory = {
  id: string;
  label: LocalizedString;
  description?: LocalizedString;
};

export type MenuItem = {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  price: string;
  category: string;
  image?: string;
  tags?: string[];
  isPopular?: boolean;
  isAvailable?: boolean;
};

export type CafeInfo = {
  name: string;
  tagline: LocalizedString;
  hours?: LocalizedString;
};
