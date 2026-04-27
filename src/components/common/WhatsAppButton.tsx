import { useLocale, useTranslations } from "next-intl";
import { generateWhatsAppURL } from "@/lib/whatsapp";
import { Phone } from "lucide-react";

export default function WhatsAppButton({
  productName,
  className = "",
}: {
  productName: string;
  className?: string;
}) {
  const t = useTranslations("common");
  const tw = useTranslations("whatsapp");
  const locale = useLocale();

  const url = generateWhatsAppURL(productName, tw("message", { productName }));

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-semibold py-1.5 px-4 rounded-xl transition-colors ${className}`}
    >
      <Phone className="w-5 h-5 mr-2" />
      {t("whatsapp_btn")}
    </a>
  );
}
