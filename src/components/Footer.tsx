import { Mail, Phone } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { EASE, Logo } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

// TODO: replace with real contact data when provided by client
const PHONE_DISPLAY = "+34 600 000 000"; // TODO teléfono real
const PHONE_HREF = "+34600000000";
const EMAIL = "estellscentre@gmail.com";
const INSTAGRAM = "https://www.instagram.com/estellscentre";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-ink-dark text-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        {/* Top CTA row */}
        <Reveal className="mb-14 flex flex-col gap-8 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-3">
              <Logo className="h-11 w-11" />
              <span className="font-heading text-[18px] font-semibold">Estells</span>
            </div>
            <p className="font-body text-[18px] sm:text-[22px] leading-[1.4] text-white/80">
              {t.footer.tagline}
            </p>
          </div>
          <a
            href="#contacto"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-gold pl-6 pr-2 py-2.5 font-heading text-[14px] font-medium text-ink transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink-dark"
          >
            {t.footer.cta}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`text-gold transition-transform duration-500 ${EASE} group-hover:-rotate-45`}
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </Reveal>

        {/* Info grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr]">
          {/* Contact */}
          <Reveal>
            <h3 className="mb-5 font-mono text-[12px] uppercase tracking-wide text-white/40">
              {t.footer.contactLabel}
            </h3>
            <ul className="space-y-3 font-body text-[15px] text-white/80">
              <li>
                <a href={`tel:${PHONE_HREF}`} className="inline-flex items-center gap-2.5 transition-colors hover:text-gold focus-visible:outline-none focus-visible:text-gold">
                  <Phone size={16} className="text-gold" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2.5 transition-colors hover:text-gold focus-visible:outline-none focus-visible:text-gold">
                  <Mail size={16} className="text-gold" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold focus-visible:outline-none focus-visible:text-gold"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  @estellscentre
                </a>
              </li>
            </ul>
          </Reveal>

          {/* Quick nav */}
          <Reveal delay={80}>
            <h3 className="mb-5 font-mono text-[12px] uppercase tracking-wide text-white/40">
              {t.nav.servicios}
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 font-body text-[15px] text-white/80">
              {[
                { id: "servicios", label: t.nav.servicios },
                { id: "ventajas", label: t.nav.ventajas },
                { id: "proceso", label: t.nav.proceso },
                { id: "equipo", label: t.nav.equipo },
                { id: "faq", label: t.nav.faq },
                { id: "resenas", label: t.nav.reviews },
                { id: "contacto", label: t.nav.contacto },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="transition-colors hover:text-gold focus-visible:outline-none focus-visible:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-8 font-body text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights.replace("2026", String(year))}</p>
          <p className="font-mono uppercase tracking-wide">{t.footer.region}</p>
        </div>
      </div>
    </footer>
  );
}
