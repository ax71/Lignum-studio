import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MyLocation() {
  const t = useTranslations("location");

  const lokasi = {
    nama: "Lignum Studio",
    alamat: "Jalan raya : test Lokasi",
    googleMapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3323032549!2d115.15813337424698!3d-8.660855288137358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23fb46e01a89f%3A0xe23049b4c09d5718!2sJl.%20Pengubengan%20Kauh%20No.99%2C%20Kerobokan%20Kelod%2C%20Kec.%20Kuta%20Utara%2C%20Kabupaten%20Badung%2C%20Bali%2080361!5e0!3m2!1sid!2sid!4v1711200000000!5m2!1sid!2sid",
    telepon: "+62 812 3456 7890",
    email: "hello@lignumstudio.com",
    jamBuka: [
      {
        hari: t("days.weekdays"),
        jam: t("hours.weekdays"),
      },
      {
        hari: t("days.saturday"),
        jam: t("hours.saturday"),
      },
      {
        hari: t("days.sunday"),
        jam: t("days.closed"),
      },
    ],
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-1 space-y-10">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <MapPin className="text-primary w-7 h-7" />
              {t("workshop_heading")}
            </h2>
            <p className="text-lg text-foreground font-semibold mb-2">
              {lokasi.nama}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {lokasi.alamat}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="w-5 h-5 text-primary" />
              <span>{lokasi.telepon}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href={`mailto:${lokasi.email}`}
                className="hover:text-primary transition-colors"
              >
                {lokasi.email}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-3">
              <Clock className="text-primary w-6 h-6" />
              {t("hours_heading")}
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              {lokasi.jamBuka.map((jadwal, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span className="font-medium">{jadwal.hari}</span>
                  <span>{jadwal.jam}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted p-6 rounded-xl border">
            <p className="text-muted-foreground text-sm">{t("visit_note")}</p>
          </div>
        </div>

        {/* GOOGLE MAP EMBED */}
        <div className="lg:col-span-2">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-lg border-4 border-background">
            <iframe
              src={lokasi.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("map_title", { name: lokasi.nama })}
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
