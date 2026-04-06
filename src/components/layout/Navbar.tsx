import Link from "next/link";
import { DarkModeToggle } from "../common/DarkmodeToggle";
import { Phone } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter text-foreground transition-opacity hover:opacity-80"
            >
              <Image
                src="/logos/logos.webp"
                alt="Logo"
                width={50}
                height={50}
                className="mr-2"
              />
            </Link>
          </div>

          <div className="hidden items-center space-x-4 sm:flex sm:space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Katalog
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Tentang Kami
            </Link>

            <div className="flex items-center gap-3 border-l pl-6 ml-2">
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://wa.me/6281234567890"
                  aria-label="Hubungi Kami"
                >
                  <Phone className="h-4 w-4 text-green-600 dark:text-green-400" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
