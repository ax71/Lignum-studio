import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-20">
        <div className="flex justify-center mb-16">
          <div className="w-80 h-80 rounded-3xl overflow-hidden border border-border relative">
            <Image
              src="/logos/logos.webp"
              alt="Our Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="prose prose-lg mx-auto text-muted-foreground">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
            {t("heading")}
          </h1>
          <p className="mb-6 text-justify">{t("p1")}</p>

          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 mt-10">
            {t("vision_heading")}
          </h2>
          <p className="mb-8 text-justify">{t("vision_p")}</p>
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
