import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              Lignum studio
            </h3>
            <p className="text-sm text-muted-foreground">
              UMKM pengrajin kayu asli Indonesia. Menghadirkan produk
              berkualitas dari alam untuk mempercantik rumah Anda.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Kontak
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📍 Lokasi yang pernah ada</li>
              <li>📞 +62 812 3456 7890</li>
              <li>✉️ info@lignumstudio.id</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-sm text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Lignum Studio. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}
