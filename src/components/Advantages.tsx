import {
  Users,
  GraduationCap,
  Eye,
  BookOpen,
  Lightbulb,
  MapPin,
} from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { SectionBadge } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const ICON_MAP = [Users, BookOpen, Eye, GraduationCap, Lightbulb, MapPin];

export function Advantages() {
  const { t } = useI18n();

  return (
    <section
      id="ventajas"
      className="bg-sand-alt py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-6 sm:mb-8">
          <SectionBadge n="2" label={t.advantages.badge} />
        </Reveal>

        <div className="mb-12 sm:mb-16 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <Reveal
            as="h2"
            className="font-heading font-medium leading-[1.12] tracking-[-0.02em] text-ink text-[clamp(1.5rem,4vw,3rem)]"
          >
            {t.advantages.title}
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="font-body text-[16px] sm:text-[18px] leading-[1.6] text-muted lg:text-right"
          >
            {t.advantages.intro}
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {t.advantages.items.map((item, i) => {
            const Icon = ICON_MAP[i];
            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 80}
                className="group bg-white"
              >
                <div className="flex h-full flex-col p-7 sm:p-8 transition-colors duration-300 group-hover:bg-sand">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/[0.04] text-ink transition-colors duration-300 group-hover:bg-gold/15 group-hover:text-gold-dark">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-[13px] text-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-2 font-heading text-[18px] sm:text-[19px] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.55] text-muted">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
