import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { EASE, SectionBadge } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

export function Faq() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Reveal className="mb-6 sm:mb-8">
              <SectionBadge n="5" label={t.faq.badge} />
            </Reveal>
            <Reveal
              as="h2"
              delay={60}
              className="font-heading font-medium leading-[1.12] tracking-[-0.02em] text-ink text-[clamp(1.5rem,4vw,3rem)] lg:sticky lg:top-28"
            >
              {t.faq.title}
            </Reveal>
          </div>

          <Reveal as="div" delay={80} className="border-t border-line">
            {t.faq.items.map((item, i) => {
              const isOpen = open === i;
              const btnId = `${baseId}-q-${i}`;
              const panelId = `${baseId}-a-${i}`;
              return (
                <div key={item.q} className="border-b border-line">
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:rounded-lg"
                    >
                      <span className="font-heading text-[17px] sm:text-[20px] font-medium text-ink">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 ${EASE} ${
                          isOpen ? "rotate-45 bg-gold border-gold" : ""
                        }`}
                      >
                        <Plus size={16} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={`grid transition-all duration-300 ${EASE} ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 font-body text-[15px] sm:text-[17px] leading-[1.65] text-muted">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
