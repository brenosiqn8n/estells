import { Suspense, lazy, useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nProvider";
import { EASE, GoldButton, GhostButton } from "./ui/primitives";

const ShaderBackground = lazy(() => import("./ShaderBackground"));

// Centre + team imagery for the bottom strip.
const STRIP_IMAGES = [
  { src: "/images/team/lara.jpg", alt: "Profesora de Estells en clase" },
  { src: "/images/coworking-1.jpg", alt: "Aula y espacio de estudio de Estells, Alginet" },
  { src: "/images/team/ricard.jpg", alt: "Profesor de idiomas de Estells" },
  { src: "/images/team/virginia.jpg", alt: "Profesora de matemáticas de Estells" },
  { src: "/images/team/frances-mari.jpg", alt: "Francesc Marí, director de Estells" },
  { src: "/images/team/salva.jpg", alt: "Profesor de física de Estells" },
];

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
      {/* Shader (golden), lazy-loaded */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Suspense fallback={<div className="h-full w-full bg-sand" />}>
          <ShaderBackground />
        </Suspense>
      </div>

      {/* Centered content */}
      <div className="relative z-20 flex flex-1 items-center justify-center px-5 pt-24 pb-10 sm:pt-28">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p
            style={delay(60)}
            className={`mb-5 font-mono text-[12px] sm:text-[13px] uppercase tracking-[0.18em] text-muted ${reveal}`}
          >
            {t.hero.kicker}
          </p>

          <h1 className="font-heading font-medium leading-[1.05] tracking-[-0.03em] text-ink text-[clamp(2.2rem,8vw,5rem)]">
            {t.hero.titleLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <span style={delay(140 + i * 90)} className={`block ${reveal}`}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            style={delay(440)}
            className={`mx-auto mt-6 max-w-xl font-body text-[17px] sm:text-[19px] leading-[1.6] text-muted ${reveal}`}
          >
            {t.hero.subtitle}
          </p>

          <div
            style={delay(540)}
            className={`mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 ${reveal}`}
          >
            <GoldButton label={t.hero.ctaPrimary} href="#contacto" />
            <GhostButton label={t.hero.ctaSecondary} href="#servicios" />
          </div>
        </div>
      </div>

      {/* Bottom image strip (marquee) */}
      <div
        style={delay(720)}
        className={`relative z-20 pb-4 sm:pb-6 ${reveal}`}
        aria-hidden="true"
      >
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max gap-4 px-2 sm:gap-5">
            {[...STRIP_IMAGES, ...STRIP_IMAGES].map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] h-[clamp(180px,30vh,320px)] shrink-0 overflow-hidden rounded-2xl bg-sand-alt"
              >
                <img
                  src={img.src}
                  alt={i < STRIP_IMAGES.length ? img.alt : ""}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
