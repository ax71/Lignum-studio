"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "../common/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              href={`/${locale}`}
              className="flex items-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/logos/logos.webp"
                alt="Logo"
                className="w-20 h-20 object-contain"
                width={100}
                height={100}
              />
            </Link>
          </div>

          <div className="hidden items-center justify-center space-x-12 sm:flex flex-1">
            <Link
              href={`/${locale}`}
              className="text-xs font-semibold tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("home")}
            </Link>
            <Link
              href={`/${locale}/products`}
              className="text-xs font-semibold tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("catalog")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-xs font-semibold tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("about")}
            </Link>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <LanguageSwitcher />
            <Link
              href={`/${locale}/products`}
              className="text-xs font-bold tracking-widest uppercase border border-foreground/20 px-6 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              {t("shop")}
            </Link>
          </div>

          <div className="flex sm:hidden items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-background shadow-lg border-b border-foreground/5">
          <div className="flex flex-col space-y-6 px-6 pt-6 pb-8">
            <Link
              href={`/${locale}`}
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase text-foreground transition-colors"
            >
              {t("home")}
            </Link>
            <Link
              href={`/${locale}/products`}
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase text-foreground transition-colors"
            >
              {t("catalog")}
            </Link>
            <Link
              href={`/${locale}/about`}
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold tracking-widest uppercase text-foreground transition-colors"
            >
              {t("about")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
