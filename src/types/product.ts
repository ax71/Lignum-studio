export interface LocalizedField {
  id: string;
  en: string;
}

export interface Product {
  id: string;
  name: LocalizedField;
  slug: string;
  price: number;
  shortDescription: LocalizedField;
  fullDescription: LocalizedField;
  material: LocalizedField;
  dimensions: LocalizedField;
  images: string[];
  isFeatured?: boolean;
}
