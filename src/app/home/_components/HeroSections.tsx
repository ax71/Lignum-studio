import Link from "next/link";
import ProductCard from "@/app/products/_components/ProductCard";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  const featuredProducts = (productsData as Product[])
    .filter((p) => p.isFeatured)
    .slice(0, 3);

  return (
    <div>
      <section className="relative bg-background min-h-[80vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
          <span className="text-accent font-semibold tracking-wider uppercase mb-4 text-sm md:text-base">
            Karya Anak Bangsa
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground text-balance">
            Kerajinan Kayu <br className="hidden md:block" /> Premium & Estetik
          </h1>

          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mb-10 text-balance">
            Hadirkan nuansa alam ke dalam rumah Anda dengan koleksi piring,
            mangkuk, dan alat dapur kayu kualitas terbaik buatan pengrajin lokal
            Indonesia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="w-full py-5 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/products">Lihat Katalog</Link>
            </Button>

            <Button size="lg" variant="secondary" className="w-full py-5">
              <Link href="/about">Tentang Kami</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-muted relative h-[400px]">
                <Image
                  src="/images/ourTeam.png"
                  alt="Our Team"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl mb-6">
                Cerita di Balik{" "}
                <span className="text-primary">Lignum Studio</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Berawal dari bengkel kecil di Jawa Tengah, Lignum Studio
                berdedikasi untuk memberdayakan pengrajin lokal sekaligus
                melestarikan kerajinan kayu tradisional Indonesia.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Semua produk kami dibuat melalui proses <i>handmade</i> yang
                teliti, menggunakan bahan kayu solid legal bersertifikat, dan
                di-finishing dengan bahan <i>food grade</i> alami.
              </p>

              <Link
                href="/about"
                className="text-primary font-semibold hover:text-primary/80 flex items-center group"
              >
                Baca cerita selengkapnya
                <span className="ml-2 group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl mb-4">
              Produk Pilihan
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Koleksi best-seller kami yang paling digemari pelanggan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="secondary" size="lg" className="w-fit">
              <Link href="/products">Lihat Semua Produk</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
