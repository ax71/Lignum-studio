export default function Contact() {
  return (
    <div className="bg-stone-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-10 md:p-16 text-center">
          <h1 className="text-4xl font-extrabold text-stone-900 mb-6">Hubungi Kami</h1>
          <p className="text-lg text-stone-600 mb-12">
            Punya pertanyaan mengenai produk atau pemesanan custom (partai besar/souvenir)? Jangan ragu untuk menghubungi kami.
          </p>
          
          <div className="space-y-8">
            <div className="flex flex-col items-center">
              <span className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </span>
              <h3 className="text-xl font-bold text-stone-900">WhatsApp</h3>
              <p className="text-stone-500 mt-2">+62 812 3456 7890</p>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="mt-4 text-amber-600 font-semibold hover:text-amber-700">Chat Sekarang &rarr;</a>
            </div>

            <hr className="border-stone-100" />

            <div className="flex flex-col items-center">
              <span className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </span>
              <h3 className="text-xl font-bold text-stone-900">Workshop</h3>
              <p className="text-stone-500 mt-2 max-w-sm text-center">
                Desa Pengrajin Kayu No. 12<br/>Kecamatan Jepara<br/>Jawa Tengah, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
