import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

export default function ProductCard({ product }: { product: Product }) {
  const locale = useLocale() as "id" | "en";
  const t = useTranslations("common");

  // Helper to get localized field safely
  const getLocalized = (field: any) => {
    return typeof field === "string" ? field : field[locale] || field["id"];
  };

  return (
    <div className="group flex flex-col bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <Link
        href={`/${locale}/products/${product.slug}`}
        className="relative h-64 w-full overflow-hidden bg-muted"
      >
        <Image
          src={product.images[0]}
          alt={getLocalized(product.name)}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-card-foreground mb-1">
          {getLocalized(product.name)}
        </h3>
        <p className="text-primary font-semibold mb-3">
          {formatCurrency(product.price, locale)}
        </p>
        <p className="text-muted-foreground text-sm line-clamp-2 flex-grow mb-4">
          {getLocalized(product.shortDescription)}
        </p>
        <Button variant="secondary" size="lg" asChild>
          <Link href={`/${locale}/products/${product.slug}`}>
            {t("details")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
