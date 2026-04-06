import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BrandStorySection() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[550px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/brand-story.png"
              alt="Proses Kerajinan Kayu"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              Dari Kayu Mentah <br />
              Menjadi Karya Bernilai
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Di{" "}
              <span className="text-primary font-semibold">Lignum Studio</span>,
              setiap potongan kayu memiliki cerita. Kami percaya bahwa kayu
              bukan sekadar bahan, tetapi bagian dari alam yang layak dihargai
              dan diolah dengan penuh ketelitian.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Setiap produk dibuat secara handmade oleh pengrajin lokal
              Indonesia yang berpengalaman. Dari proses pemilihan kayu,
              pemotongan, hingga finishing—semuanya dilakukan dengan detail dan
              dedikasi tinggi untuk menghasilkan karya yang tidak hanya indah,
              tetapi juga tahan lama.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Kami juga berkomitmen menggunakan kayu legal bersertifikat dan
              bahan finishing food grade yang aman, sehingga setiap produk tidak
              hanya estetis tetapi juga ramah lingkungan dan aman digunakan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/products">Jelajahi Produk</Link>
              </Button>

              <Button size="lg" variant="secondary">
                <Link href="/about">Cerita Lengkap Kami</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
