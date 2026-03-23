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
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-foreground tracking-tight sm:text-5xl mb-4">
            Tentang Kami
          </h1>
          <p className="text-xl text-muted-foreground">
            Mengenal lebih dekat perjalanan KayuKita.
          </p>
        </div>

        <div className="prose prose-lg prose-amber dark:prose-invert mx-auto text-muted-foreground">
          <div className="mb-10 w-full h-80 bg-muted rounded-2xl overflow-hidden relative shadow-2xl">
            <Image
              src="/images/ourTeam.png"
              alt="Our Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">Visi Kami</h2>
        <p className="mb-8">
          KayuKita lahir dari kepedulian terhadap para pengrajin lokal di
          pedesaan Jawa Tengah yang memiliki keterampilan luar biasa, namun
          kesulitan memasarkan karya mereka. Visi kami adalah membawa kerajinan
          kayu autentik Indonesia ke setiap rumah sambil meningkatkan
          kesejahteraan para pengrajin.
        </p>

        <h2 className="text-2xl font-bold text-foreground mb-4">
          Kualitas & Material
        </h2>
        <p className="mb-8">
          Kami hanya menggunakan kayu-kayu legal berkualitas seperti Jati,
          Mahoni, Aren, dan Pinus. Setiap material dipilih secara teliti,
          dikeringkan hingga kadar air optimal, lalu dibentuk oleh tangan-tangan
          terampil.
        </p>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
