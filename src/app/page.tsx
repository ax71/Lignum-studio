import Link from "next/link";
import ProductCard from "@/app/products/_components/ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";

export default function Home() {
  // Hanya ambil produk yang isFeatured = true
  const featuredProducts = (productsData as Product[])
    .filter((p) => p.isFeatured)
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          {/* Fallback pattern since we don't have hero images yet */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800 to-stone-950"></div>
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
          <span className="text-amber-500 font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">
            Karya Anak Bangsa
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white text-balance">
            Kerajinan Kayu <br className="hidden md:block" /> Premium & Estetik
          </h1>
          <p className="mt-4 text-xl text-stone-300 max-w-2xl mb-10 text-balance">
            Hadirkan nuansa alam ke dalam rumah Anda dengan koleksi piring,
            mangkuk, dan alat dapur kayu kualitas terbaik buatan pengrajin lokal
            Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-amber-600/50 transition-all transform hover:-translate-y-1"
            >
              Lihat Katalog
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded-full transition-all"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </section>

      {/* About UMKM Snippet */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl bg-stone-200 relative h-[400px]">
                {/* Placeholder design */}
                <div className="absolute inset-0 flex items-center justify-center text-stone-400">
                  <span className="font-mono text-sm">
                    [Gambar Pengrajin Sedang Bekerja]
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600 rounded-full flex items-center justify-center border-8 border-stone-50 shadow-xl hidden md:flex">
                <span className="text-white font-bold text-center leading-tight">
                  100%
                  <br />
                  Asli
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight sm:text-4xl mb-6">
                Cerita di Balik <span className="text-amber-700">KayuKita</span>
              </h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Berawal dari bengkel kecil di Jawa Tengah, KayuKita berdedikasi
                untuk membedayakan pengrajin lokal sekaligus melestarikan
                kerajinan kayu tradisional Indonesia.
              </p>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Semua produk kami dibuat melalui proses <i>handmade</i> yang
                teliti, menggunakan bahan kayu solid legal bersertifikat, dan
                di-finishing dengan bahan <i>food grade</i> alami yang aman
                untuk kesehatan.
              </p>
              <Link
                href="/about"
                className="text-amber-700 font-semibold hover:text-amber-600 flex items-center group"
              >
                Baca cerita selengkapnya
                <span className="ml-2 group-hover:translate-x-2 transition-transform">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-stone-900 tracking-tight sm:text-4xl mb-4">
              Produk Pilihan
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Koleksi best-seller kami yang paling digemari pelanggan. Siap
              menghiasi meja makan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/products"
              className="inline-block bg-stone-900 hover:bg-stone-800 text-white font-semibold py-4 px-10 rounded-xl shadow-md transition-colors"
            >
              Lihat Semua Produk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
