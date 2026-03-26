import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mb-10">
        <Navbar />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center  prose prose-lg prose-amber dark:prose-invert mx-auto text-muted-foreground">
          <div className="mb-10 w-80 h-80 bg-muted rounded-2xl overflow-hidden relative shadow-2xl">
            <Image
              src="/logos/bg-logo.webp"
              alt="Our Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mb-4">
          <h1 className="text-2xl font-bold text-foreground tracking-tight mb-4">
            Tentang Kami
          </h1>

          <p className="mb-4 text-justify">
            Lignum Studio berdedikasi dan berusaha untuk memberdayakan pengrajin
            lokal sekaligus melestarikan kerajinan kayu tradisional Indonesia.
            Semua produk dibuat melalui proses handmade yang teliti, menggunakan
            bahan kayu solid legal bersertifikat, premium, dan di-finishing
            dengan bahan food grade alami sehingga aman untuk dikoleksi maupun
            dipajang.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">Visi Kami</h2>
        <p className="mb-8 text-justify">
          Lignum Studio berdedikasi dan berusaha untuk memberdayakan pengrajin
          lokal sekaligus melestarikan kerajinan kayu tradisional Indonesia.
          Semua produk dibuat melalui proses handmade yang teliti, menggunakan
          bahan kayu solid legal bersertifikat, premium, dan di-finishing dengan
          bahan food grade alami sehingga aman untuk dikoleksi maupun dipajang.
        </p>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
