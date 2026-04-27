import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-[#F5F3EF] border-t border-foreground/10 pt-24 pb-12 text-foreground">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-1">
            <h3 className="text-xl font-extrabold tracking-widest uppercase mb-6">
              LIGNUM
            </h3>
            <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-xs">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">
              {t("shop_heading")}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="text-sm hover:text-muted-foreground transition-colors"
                >
                  {t("nav.products")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="text-sm hover:text-muted-foreground transition-colors"
                >
                  {t("nav.bestsellers")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">
              {t("info_heading")}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-sm hover:text-muted-foreground transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-sm hover:text-muted-foreground transition-colors"
                >
                  {t("nav.store_location")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-sm hover:text-muted-foreground transition-colors"
                >
                  {t("nav.faq")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">
              {t("contact_heading")}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@lignumstudio.id"
                  className="text-sm hover:text-muted-foreground transition-colors"
                >
                  info@lignumstudio.id
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  className="text-sm hover:text-muted-foreground transition-colors"
                >
                  +62 812 3456 7890
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-muted-foreground transition-colors"
                >
                  @lignumstudio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-foreground/10 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href={`/${locale}/about`}
              className="hover:text-foreground transition-colors"
            >
              {t("nav.privacy")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="hover:text-foreground transition-colors"
            >
              {t("nav.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
