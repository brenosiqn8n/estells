import { BookOpen, Lightbulb, Languages, Building2, ArrowRight } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { EASE, SectionBadge } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const ICONS = [BookOpen, Lightbulb, Languages, Building2];

export function Services() {
  const { t } = useI18n();

  return (
    <section id="servicios" className="bg-sand-alt py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-6 sm:mb-8">
          <SectionBadge n="4" label={t.services.badge} />
        </Reveal>

        <Reveal
          as="h2"
          delay={60}
          className="mb-12 sm:mb-16 max-w-2xl font-heading font-medium leading-[1.12] tracking-[-0.02em] text-ink text-[clamp(1.5rem,4vw,3rem)]"
        >
          {t.services.title}
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {t.services.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal
                key={item.title}
                delay={(i % 2) * 90}
                className="group flex flex-col rounded-2xl border border-line bg-white p-7 sm:p-9 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-7 flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <ArrowRight
                    size={20}
                    className={`text-faint transition-all duration-500 ${EASE} group-hover:-rotate-45 group-hover:text-ink`}
                  />
                </div>
                <h3 className="mb-3 font-heading text-[21px] sm:text-[23px] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mb-6 font-body text-[15px] sm:text-[16px] leading-[1.6] text-muted">
                  {item.desc}
                </p>
                <p className="mt-auto border-t border-line pt-4 font-mono text-[12px] sm:text-[13px] uppercase tracking-wide text-faint">
                  {item.detail}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal
          as="p"
          delay={120}
          className="mt-8 max-w-3xl font-body text-[14px] sm:text-[15px] leading-[1.6] text-muted"
        >
          {t.services.note}
        </Reveal>
      </div>
    </section>
  );
}
