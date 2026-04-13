"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: "id" | "en") => {
    if (newLocale === locale) return;

    // Replace the current locale prefix with the new one
    // pathname will be like "/id/about" or "/en/products"
    const segments = pathname.split("/");
    segments[1] = newLocale; // replace the locale segment
    const newPath = segments.join("/") || `/${newLocale}`;

    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div
      className="flex items-center rounded-full border border-border bg-muted/60 p-0.5 gap-0.5"
      aria-label="Language switcher"
    >
      <button
        id="lang-switcher-id"
        onClick={() => switchLocale("id")}
        disabled={isPending}
        aria-pressed={locale === "id"}
        className={`
          relative px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300
          ${
            locale === "id"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }
          disabled:opacity-60 disabled:cursor-not-allowed
        `}
      >
        ID
      </button>
      <button
        id="lang-switcher-en"
        onClick={() => switchLocale("en")}
        disabled={isPending}
        aria-pressed={locale === "en"}
        className={`
          relative px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300
          ${
            locale === "en"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }
          disabled:opacity-60 disabled:cursor-not-allowed
        `}
      >
        EN
      </button>
    </div>
  );
}
