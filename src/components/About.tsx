import { useI18n } from "../i18n/I18nProvider";
import { TEAM_NAMES } from "../i18n/dictionaries";
import { EASE, GoldButton, SectionBadge } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";
import { HoursCard } from "./HoursCard";

export function About() {
  const { t } = useI18n();

  return (
    <section
      id="centro"
      className="overflow-hidden bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <Reveal className="mb-6 sm:mb-8 px-5 sm:px-8 lg:px-12">
          <SectionBadge n="1" label={t.about.badge} />
        </Reveal>

        <Reveal
          as="h2"
          delay={60}
          className="mb-12 sm:mb-16 lg:mb-24 px-5 sm:px-8 lg:px-12 font-heading font-medium leading-[1.12] tracking-[-0.02em] text-ink text-[clamp(1.5rem,4vw,3.2rem)]"
        >
          {t.about.titleLines[0]}
          <br />
          {t.about.titleLines[1]}
        </Reveal>

        {/* MOBILE / TABLET */}
        <div className="lg:hidden px-5 sm:px-8">
          <Reveal as="p" className="font-body text-[16px] sm:text-[18px] leading-[1.6] text-ink">
            {t.about.paragraphMobile}
          </Reveal>
          <Reveal delay={80} className="mt-6">
            <GoldButton label={t.about.cta} href="#contacto" />
          </Reveal>
          <Reveal delay={120} className="mt-8">
            <HoursCard />
          </Reveal>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid grid-cols-12 items-center gap-10 xl:gap-16 px-5 sm:px-8 lg:px-12">
          {/* Text */}
          <Reveal delay={80} className="col-span-7 self-center">
            <p className="font-body text-[19px] xl:text-[22px] leading-[1.6] text-ink">
              {t.about.paragraphLines[0]} {t.about.paragraphLines[1]}{" "}
              {t.about.paragraphLines[2]}
            </p>
            <div className="mt-9">
              <GoldButton label={t.about.cta} href="#contacto" />
            </div>
          </Reveal>

          {/* Hours card */}
          <Reveal delay={160} className="col-span-5">
            <HoursCard />
          </Reveal>
        </div>

        {/* Team */}
        <div id="equipo" className="mt-20 sm:mt-24 lg:mt-32 px-5 sm:px-8 lg:px-12">
          <Reveal
            as="p"
            className="mb-6 sm:mb-8 font-mono text-[12px] sm:text-[13px] uppercase tracking-wide text-muted"
          >
            {t.about.teamKicker}
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {TEAM_NAMES.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 80} className="group flex flex-col">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-sand-alt">
                  <img
                    src={`/images/team/${m.img}.jpg`}
                    alt={`${m.name} — ${t.team[i].role}`}
                    width={400}
                    height={500}
                    loading="lazy"
                    className={`h-full w-full object-cover transition-transform duration-500 ${EASE} group-hover:scale-[1.04]`}
                  />
                </div>
                <h3 className="mt-4 font-heading text-[18px] sm:text-[19px] font-semibold text-ink">
                  {m.name}
                </h3>
                <p className="mt-0.5 font-mono text-[12px] uppercase tracking-wide text-gold-dark">
                  {t.team[i].role}
                </p>
                <p className="mt-3 font-body text-[14px] sm:text-[15px] leading-[1.6] text-muted">
                  {t.team[i].bio}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
