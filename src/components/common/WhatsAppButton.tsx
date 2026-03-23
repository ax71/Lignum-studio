import { generateWhatsAppURL } from "@/lib/whatsapp";
import { Phone } from "lucide-react";

export default function WhatsAppButton({
  productName,
  className = "",
}: {
  productName: string;
  className?: string;
}) {
  const url = generateWhatsAppURL(productName);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-xl ${className}`}
    >
      <Phone className="w-5 h-5 mr-2" />
      WhatsApp
    </a>
  );
}
