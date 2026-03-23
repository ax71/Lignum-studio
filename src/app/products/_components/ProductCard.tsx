import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka);
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <Link
        href={`/products/${product.slug}`}
        className="relative h-64 w-full overflow-hidden bg-muted"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-card-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-primary font-semibold mb-3">
          {formatRupiah(product.price)}
        </p>
        <p className="text-muted-foreground text-sm line-clamp-2 flex-grow mb-4">
          {product.shortDescription}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="w-full text-center bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground font-medium py-2 px-4 rounded-xl transition-colors duration-300"
        >
          Detail Produk
        </Link>
      </div>
    </div>
  );
}
