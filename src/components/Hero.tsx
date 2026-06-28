import { Fragment, Suspense, lazy, useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nProvider";
import { EASE, GoldButton, GhostButton } from "./ui/primitives";

const ShaderBackground = lazy(() => import("./ShaderBackground"));

export function Hero() {
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const reveal = `transition-all duration-700 ${EASE} ${
    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;
  const delay = (ms: number) => ({ transitionDelay: `${ms}ms` });

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col overflow-hidden bg-sand"
    >
      {/* Shader overlay (golden), lazy-loaded */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Suspense fallback={<div className="h-full w-full bg-sand" />}>
          <ShaderBackground />
        </Suspense>
      </div>

      <div className="flex-1" />

      {/* Hero content */}
      <div className="relative z-20 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <p
          style={delay(60)}
          className={`mb-5 sm:mb-8 font-mono text-[12px] sm:text-[13px] uppercase tracking-[0.18em] text-muted ${reveal}`}
        >
          {t.hero.kicker}
        </p>
        <h1 className="font-heading font-medium leading-[1.08] tracking-[-0.03em] text-ink text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)]">
          {t.hero.titleLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                style={delay(140 + i * 90)}
                className={`block ${reveal}`}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p
          style={delay(440)}
          className={`mt-6 max-w-xl font-body text-[16px] sm:text-[18px] leading-[1.6] text-muted ${reveal}`}
        >
          {t.hero.subtitle}
        </p>

        <div
          style={delay(540)}
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 ${reveal}`}
        >
          <GoldButton label={t.hero.ctaPrimary} href="#contacto" />
          <GhostButton label={t.hero.ctaSecondary} href="#servicios" />
        </div>

        <div
          style={delay(640)}
          className={`mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] uppercase tracking-wide text-muted ${reveal}`}
        >
          {t.hero.chips.map((chip, i) => (
            <Fragment key={chip}>
              {i > 0 && <span className="h-1 w-1 rounded-full bg-gold" />}
              <span>{chip}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
