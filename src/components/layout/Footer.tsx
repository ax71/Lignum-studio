import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">KayuKita</h3>
            <p className="text-sm text-stone-400">
              UMKM pengrajin kayu asli Indonesia. Menghadirkan produk berkualitas dari alam untuk mempercantik rumah Anda.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-amber-500 transition-colors">Katalog Produk</Link></li>
              <li><Link href="/about" className="hover:text-amber-500 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>📍 Desa Pengrajin, Jawa Tengah</li>
              <li>📞 +62 812 3456 7890</li>
              <li>✉️ halo@kayukita.id</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-800 text-sm text-center text-stone-500">
          &copy; {new Date().getFullYear()} KayuKita UMKM. Hak Cipta Dilindungi.
        </div>
      </div>
    </footer>
  );
}
