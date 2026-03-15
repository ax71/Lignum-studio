// Ganti dengan nomor WhatsApp UMKM Anda (tambahkan kode negara tanpa '+')
const WA_NUMBER = "6281234567890";

export const generateWhatsAppURL = (productName: string) => {
  const message = `Halo, saya tertarik dengan produk *${productName}* yang ada di katalog website. Apakah stoknya masih tersedia?`;
  
  // Encode message agar aman digunakan dalam URL
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`;
};
