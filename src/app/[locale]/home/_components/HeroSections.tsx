import Link from "next/link";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import BrandStorySection from "./BrandStorySection";
import ValuePropositionSection from "./ValuePropositionSection";
import { useTranslations, useLocale } from "next-intl";
import ProductCard from "@/components/common/ProductCard";

export default function HeroSection() {
  const t = useTranslations("hero");
  const tf = useTranslations("featuredProducts");
  const locale = useLocale();

  const featuredProducts = (productsData as Product[])
    .filter((p) => p.isFeatured)
    .slice(0, 4);

  return (
    <div>
      <section className="relative bg-background min-h-[80vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground text-balance">
            {t("heading")}
          </h1>

          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mb-10 text-balance">
            {t("subheading")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="w-full py-5 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href={`/${locale}/products`}>{t("cta_catalog")}</Link>
            </Button>

            <Button size="lg" variant="secondary" className="w-full py-5">
              <Link href={`/${locale}/about`}>{t("cta_about")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <ValuePropositionSection />
        <BrandStorySection />
      </section>

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl mb-4">
              {tf("heading")}
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {tf("subheading")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="secondary" size="lg" className="w-fit">
              <Link href={`/${locale}/products`}>{tf("cta_all")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
