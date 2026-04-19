import ProductCard from "@/components/common/ProductCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";

export default function ProductsPage() {
  const products = productsData as Product[];

  return (
    <div className="bg-muted/30">
      <div className="mb-10">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-foreground tracking-tight sm:text-5xl mb-4">
            Katalog Produk
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jelajahi berbagai pilihan peralatan dapur berbahan kayu yang aman,
            awet, dan cantik.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
