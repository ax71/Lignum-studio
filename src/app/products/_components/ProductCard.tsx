import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import React from 'react';

// Membuat fungsi format uang Rupiah
const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(angka);
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <Link href={`/products/${product.slug}`} className="relative h-64 w-full overflow-hidden bg-stone-100">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="inline-block bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-semibold px-3 py-1 rounded-full">
            Lihat Detail &rarr;
          </span>
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-stone-800 mb-1">{product.name}</h3>
        <p className="text-amber-700 font-semibold mb-3">{formatRupiah(product.price)}</p>
        <p className="text-stone-500 text-sm line-clamp-2 flex-grow mb-4">
          {product.shortDescription}
        </p>
        <Link 
          href={`/products/${product.slug}`}
          className="w-full text-center bg-stone-100 hover:bg-amber-600 hover:text-white text-stone-800 font-medium py-2 px-4 rounded-xl transition-colors duration-300"
        >
          Detail Produk
        </Link>
      </div>
    </div>
  );
}
