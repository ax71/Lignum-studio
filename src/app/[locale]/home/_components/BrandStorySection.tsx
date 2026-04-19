import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations, useLocale } from "next-intl";

export default function BrandStorySection() {
  const t = useTranslations("brandStory");
  const locale = useLocale();

  const headingLines = t("heading").split("\n");

  return (
    <section className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[550px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/brand-story.png"
              alt={t("imageAlt")}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              {headingLines[0]}
              {headingLines[1] && (
                <>
                  <br />
                  {headingLines[1]}
                </>
              )}
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Di{" "}
              <span className="text-primary font-semibold">Lignum Studio</span>,{" "}
              {t("p1")}
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("p2")}
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t("p3")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href={`/${locale}/products`}>{t("cta_products")}</Link>
              </Button>

              <Button size="lg" variant="secondary">
                <Link href={`/${locale}/about`}>{t("cta_about")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
