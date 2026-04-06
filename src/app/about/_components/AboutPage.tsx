import BrandStorySection from "@/app/home/_components/BrandStorySection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MyLocation from "./MyLocation";

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: "Ramah Lingkungan",
      desc: "Kayu bersertifikat dan proses produksi berkelanjutan.",
    },
    {
      icon: ShieldCheck,
      title: "Kualitas Terjamin",
      desc: "Finishing premium, halus, dan tahan lama.",
    },
    {
      icon: Sparkles,
      title: "100% Handmade",
      desc: "Dibuat dengan detail tinggi oleh pengrajin berpengalaman.",
    },
    {
      icon: Users,
      title: "Dukung UMKM Lokal",
      desc: "Membantu memberdayakan pengrajin lokal Indonesia.",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex justify-center mb-16">
          <div className="w-80 h-80 rounded-3xl overflow-hidden border border-border bg-muted relative">
            <Image
              src="/logos/bg-logo.webp"
              alt="Our Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="prose prose-lg mx-auto text-muted-foreground">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
            Tentang Kami
          </h1>
          <p className="mb-6 text-justify">
            Lignum Studio berdedikasi dan berusaha untuk memberdayakan pengrajin
            lokal sekaligus melestarikan kerajinan kayu tradisional Indonesia.
            Semua produk dibuat melalui proses handmade yang teliti, menggunakan
            bahan kayu solid legal bersertifikat, premium, dan di-finishing
            dengan bahan food grade alami sehingga aman untuk dikoleksi maupun
            dipajang.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-10">
            Visi Kami
          </h2>
          <p className="mb-8 text-justify">
            Lignum Studio berdedikasi dan berusaha untuk memberdayakan pengrajin
            lokal sekaligus melestarikan kerajinan kayu tradisional Indonesia.
            Semua produk dibuat melalui proses handmade yang teliti, menggunakan
            bahan kayu solid legal bersertifikat, premium, dan di-finishing
            dengan bahan food grade alami sehingga aman untuk dikoleksi maupun
            dipajang.
          </p>
        </div>
      </div>

      <section className="mt-20 bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Kenapa Memilih Kami?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami menghadirkan lebih dari sekadar produk. Setiap karya membawa
              nilai, kualitas, dan cerita.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-3xl border border-border bg-background shadow-sm hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <BrandStorySection />
        <MyLocation />
      </section>

      <div className="mt-20 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
          Temukan Produk Favoritmu
        </h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Jelajahi koleksi kami dan rasakan kualitas handmade premium.
        </p>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link href="/products">Belanja Sekarang</Link>
        </Button>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
