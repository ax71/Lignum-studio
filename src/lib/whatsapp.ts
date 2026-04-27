// Ganti dengan nomor WhatsApp UMKM Anda (tambahkan kode negara tanpa '+')
const WA_NUMBER = "6285190657236";

export const generateWhatsAppURL = (productName: string, template: string) => {
  // Ganti placeholder {productName} dengan nama produk yang sebenarnya
  const message = template.replace("{productName}", productName);

  // Encode message agar aman digunakan dalam URL
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`;
};
