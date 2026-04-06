import { Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";

export default function ValuePropositionSection() {
  const values = [
    {
      icon: Leaf,
      title: "Ramah Lingkungan",
      desc: "Menggunakan kayu legal bersertifikat dan proses produksi yang berkelanjutan.",
    },
    {
      icon: ShieldCheck,
      title: "Kualitas Terjamin",
      desc: "Setiap produk melewati proses finishing premium yang halus dan tahan lama.",
    },
    {
      icon: Sparkles,
      title: "100% Handmade",
      desc: "Dibuat dengan detail tinggi oleh tangan pengrajin berpengalaman.",
    },
    {
      icon: Users,
      title: "Dukung UMKM Lokal",
      desc: "Setiap pembelian membantu memberdayakan pengrajin lokal Indonesia.",
    },
  ];

  return (
    <section className="py-20 bg-background border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menghadirkan lebih dari sekadar produk — kami membawa nilai,
            kualitas, dan cerita di setiap karya.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border bg-muted/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
