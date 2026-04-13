import { Leaf, ShieldCheck, Sparkles, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const ICONS = [Leaf, ShieldCheck, Sparkles, Users];

export default function ValuePropositionSection() {
  const t = useTranslations("valueProposition");

  // Typed access to the array of items from translation
  const items = [0, 1, 2, 3].map((i) => ({
    icon: ICONS[i],
    title: t(`items.${i}.title`),
    desc: t(`items.${i}.desc`),
  }));

  return (
    <section className="py-20 bg-background border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            {t("heading")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("subheading")}
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border bg-muted/40 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
