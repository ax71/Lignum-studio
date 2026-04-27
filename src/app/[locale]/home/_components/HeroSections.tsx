import Link from "next/link";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { formatCurrency } from "@/lib/utils";

export default function HeroSection() {
  const t = useTranslations("hero");
  const th = useTranslations("home");
  const tf = useTranslations("featuredProducts");
  const tb = useTranslations("brandStory");
  const tl = useTranslations("location");
  const locale = useLocale() as "id" | "en";

  const getLocalized = (field: any) => {
    return typeof field === "string" ? field : field[locale] || field["id"];
  };

  const featuredProducts = (productsData as Product[])
    .filter((p) => p.isFeatured)
    .slice(0, 7);

  const findYourFitProducts = featuredProducts.slice(0, 4);
  const mostWantedProducts = featuredProducts.slice(4, 7);

  const stats = [
    { value: "100%", label: "Handmade" },
    { value: "4", label: th("philosophy.stat_label") },
    { value: "100%", label: "Eco-Friendly" },
    { value: "∞", label: "Local Pride" },
  ];

  return (
    <div className="bg-[#F5F3EF] min-h-screen pt-20 text-foreground selection:bg-primary/20 selection:text-primary">
      <section className="relative w-full h-[75vh] overflow-hidden">
        <div className="relative w-full aspect-[21/9] min-h-[60vh] md:min-h-[75vh] overflow-hidden bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1611486212557-88be5ff6f941?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Craft"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 p-8 sm:p-16 md:p-24 flex flex-col justify-center max-w-3xl">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-normal tracking-tight text-white drop-shadow-lg leading-none mb-6">
              {t("heading").split(" ").slice(0, 2).join(" ")}
              <br />
              {t("heading").split(" ").slice(2).join(" ")}.
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light max-w-lg mb-10 drop-shadow-md">
              {t("subheading")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/products`}
                className="bg-foreground text-background px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-foreground/80 transition-colors text-center"
              >
                {t("cta_catalog")}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="bg-transparent border border-white text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-foreground transition-colors text-center"
              >
                {t("cta_about")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS & PHILOSOPHY */}
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-24 md:py-32 border-b border-foreground/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8 block">
              {th("philosophy.label")}
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-8 whitespace-pre-line">
              {th("philosophy.heading")}
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-6 text-sm md:text-base max-w-md text-justify">
              {tb("p1")}
            </p>
            <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base max-w-md text-justify">
              {tb("p2")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-16 content-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col border-b border-foreground/10 pb-6"
              >
                <span className="text-5xl md:text-6xl font-light tracking-tighter mb-2">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FIND YOUR FIT */}
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-24 border-b border-foreground/10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              {th("collection.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              {th("collection.heading")}
            </h2>
          </div>
          <Link
            href={`/${locale}/products`}
            className="text-xs font-semibold tracking-widest uppercase border-b border-foreground pb-1 hover:text-muted-foreground transition-colors"
          >
            {locale === "id" ? "Lihat Semua" : "View All"} &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {findYourFitProducts.map((p) => (
            <Link
              href={`/${locale}/products/${p.slug}`}
              key={p.id}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] bg-muted mb-4 overflow-hidden">
                <Image
                  src={p.images[0]}
                  alt={getLocalized(p.name)}
                  fill
                  className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                {getLocalized(p.name)}
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 line-clamp-1">
                {getLocalized(p.material)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. MOST WANTED */}
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-24 md:py-32 border-b border-foreground/10">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
              {th("bestsellers.label")}
            </span>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              {th("bestsellers.heading")}
            </h2>
          </div>
          <span className="text-xs text-muted-foreground hidden sm:block">
            {th("bestsellers.subheading")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mostWantedProducts.map((p) => (
            <Link
              href={`/${locale}/products/${p.slug}`}
              key={p.id}
              className="group flex flex-col"
            >
              <div className="relative aspect-square bg-muted mb-6 overflow-hidden">
                <Image
                  src={p.images[0]}
                  alt={getLocalized(p.name)}
                  fill
                  className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {getLocalized(p.name)}
                  </h3>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 line-clamp-1">
                    {getLocalized(p.material)}
                  </p>
                </div>
                <span className="text-xs font-semibold">
                  {formatCurrency(p.price, locale)}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href={`/${locale}/products`}
            className="bg-foreground text-background px-12 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-foreground/80 transition-colors"
          >
            {tf("cta_all")}
          </Link>
        </div>
      </section>

      {/* 5. BRAND STORY / PROCESS */}
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-24 md:py-32 border-b border-foreground/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative aspect-[4/5] bg-muted w-full max-w-lg mx-auto md:mx-0">
            <Image
              src="/images/brand-story.png"
              alt={tb("imageAlt")}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8 block">
              {th("process.label")}
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-12 whitespace-pre-line">
              {th("process.heading")}
            </h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="text-xs font-bold text-muted-foreground">
                  01 &mdash;
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">
                    {th("process.steps.design")}
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {tb("p1")}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-xs font-bold text-muted-foreground">
                  02 &mdash;
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">
                    {th("process.steps.material")}
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {tb("p3")}
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-xs font-bold text-muted-foreground">
                  03 &mdash;
                </span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-2">
                    {th("process.steps.craft")}
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {tb("p2")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LOCATION */}
      <section className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-24 md:py-32">
        <div className="mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4 block">
            {th("store.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight">
            {th("store.heading")}
          </h2>
          <p className="text-muted-foreground text-sm mt-4">
            {tl("visit_note")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-foreground text-background p-8 flex flex-col justify-between aspect-square group cursor-pointer hover:bg-foreground/90 transition-colors">
            <div>
              <h3 className="text-lg font-semibold mb-1">Bali</h3>
              <p className="text-[10px] uppercase tracking-widest text-white/50 mb-6">
                Lignum Studio
              </p>
              <p className="text-sm font-light text-white/80 leading-relaxed max-w-[180px]">
                Jl. Raya Canggu No. 123,
                <br />
                Kuta Utara, Badung,
                <br />
                Bali 80361
              </p>
            </div>
            <div>
              <p className="text-[10px] text-white/50 mb-1">
                {tl("days.weekdays")}
              </p>
              <p className="text-sm font-semibold">{tl("hours.weekdays")}</p>
            </div>
          </div>

          <div className="border border-foreground/10 p-8 flex flex-col justify-center items-center aspect-square bg-background/50 text-center">
            <p className="text-sm text-muted-foreground italic">
              {th("store.coming_soon")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
