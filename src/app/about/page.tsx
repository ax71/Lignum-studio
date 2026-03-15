export default function About() {
  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-stone-900 tracking-tight sm:text-5xl mb-4">Tentang Kami</h1>
          <p className="text-xl text-stone-500">Mengenal lebih dekat perjalanan KayuKita.</p>
        </div>
        
        <div className="prose prose-lg prose-amber mx-auto text-stone-600">
          <div className="mb-10 w-full h-80 bg-stone-200 rounded-2xl flex items-center justify-center">
            {/* Image Placeholder */}
            <span className="font-mono text-sm text-stone-500">[Foto Tim Pengrajin KayuKita]</span>
          </div>
          
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Visi Kami</h2>
          <p className="mb-8">
            KayuKita lahir dari kepedulian terhadap para pengrajin lokal di pedesaan Jawa Tengah yang memiliki keterampilan luar biasa, namun kesulitan memasarkan karya mereka. Visi kami adalah membawa kerajinan kayu autentik Indonesia ke setiap rumah sambil meningkatkan kesejahteraan para pengrajin.
          </p>

          <h2 className="text-2xl font-bold text-stone-900 mb-4">Kualitas & Material</h2>
          <p className="mb-8">
            Kami hanya menggunakan kayu-kayu legal berkualitas seperti Jati, Mahoni, Aren, dan Pinus. Setiap material dipilih secara teliti, dikeringkan hingga kadar air optimal, lalu dibentuk oleh tangan-tangan terampil.
          </p>

          <h2 className="text-2xl font-bold text-stone-900 mb-4">Keamanan Food Grade</h2>
          <p className="mb-8">
            Komitmen kami adalah melindungi keluarga Anda. Oleh karena itu, semua produk peralatan makan dan dapur KayuKita menggunakan <i>finishing beewax natural</i> atau minyak khusus <i>food grade</i> yang dijamin 100% aman (non-toxic) meskipun terkena makanan berkuah panas.
          </p>
        </div>
      </div>
    </div>
  );
}
