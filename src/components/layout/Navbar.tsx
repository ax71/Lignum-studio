import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-stone-800">
              KayuKita
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="text-stone-600 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-stone-600 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
              Katalog
            </Link>
            <Link href="/about" className="text-stone-600 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
              Tentang Kami
            </Link>
            <Link href="/contact" className="text-stone-600 hover:text-amber-700 px-3 py-2 text-sm font-medium transition-colors">
              Kontak
            </Link>
          </div>
          {/* Mobile menu button could be added here later */}
        </div>
      </div>
    </nav>
  );
}
