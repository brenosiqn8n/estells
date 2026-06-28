import { useI18n } from "../i18n/I18nProvider";
import { EASE, SectionBadge } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

export function Process() {
  const { t } = useI18n();

  return (
    <section id="proceso" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mb-6 sm:mb-8">
          <SectionBadge n="3" label={t.process.badge} />
        </Reveal>

        <div className="mb-12 sm:mb-16 max-w-2xl">
          <Reveal
            as="h2"
            className="mb-4 font-heading font-medium leading-[1.12] tracking-[-0.02em] text-ink text-[clamp(1.5rem,4vw,3rem)]"
          >
            {t.process.title}
          </Reveal>
          <Reveal
            as="p"
            delay={80}
            className="font-body text-[16px] sm:text-[18px] leading-[1.6] text-muted"
          >
            {t.process.intro}
          </Reveal>
        </div>

        <ol className="relative grid gap-10 sm:gap-8 md:grid-cols-3">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-line via-gold/40 to-line md:block"
          />
          {t.process.steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="group relative">
              <div className={`relative z-10 mb-6 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-line bg-white font-mono text-[16px] font-semibold text-ink shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-500 ${EASE} group-hover:-translate-y-1 group-hover:border-gold group-hover:bg-gold group-hover:text-ink group-hover:shadow-[0_8px_24px_rgba(212,168,83,0.3)]`}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2 font-heading text-[20px] font-semibold text-ink">
                {step.title}
              </h3>
              <p className="font-body text-[15px] sm:text-[16px] leading-[1.6] text-muted">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
