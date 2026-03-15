export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
  material: string;
  dimensions: string;
  images: string[];
  isFeatured?: boolean;
}
