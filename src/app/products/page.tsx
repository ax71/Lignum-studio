import ProductCard from "@/app/products/_components/ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";

export default function ProductsPage() {
  const products = productsData as Product[];

  return (
    <div className="bg-stone-50 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-stone-900 tracking-tight sm:text-5xl mb-4">
            Katalog Produk
          </h1>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Jelajahi berbagai pilihan peralatan dapur berbahan kayu yang aman,
            awet, dan cantik.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
