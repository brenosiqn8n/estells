import { ArrowRight, Menu } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { useScrollState } from "../hooks/useScrollState";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { EASE, Logo, LangSwitch, TextRoll } from "./ui/primitives";

const SPY_IDS = [
  "inicio",
  "centro",
  "ventajas",
  "proceso",
  "servicios",
  "faq",
  "contacto",
];

export function Navbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const { t } = useI18n();
  const scrolled = useScrollState();
  const active = useScrollSpy(SPY_IDS);

  const links = [
    { id: "servicios", label: t.nav.servicios },
    { id: "ventajas", label: t.nav.ventajas },
    { id: "equipo", label: t.nav.equipo },
    { id: "faq", label: t.nav.faq },
    { id: "contacto", label: t.nav.contacto },
  ];

  return (
    <div className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto w-full max-w-[1440px] p-2 sm:p-3">
        <nav
          className={`flex items-center justify-between rounded-full bg-white p-[5px] transition-shadow duration-300 ${
            scrolled
              ? "shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
              : "shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          }`}
        >
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <a
              href="#inicio"
              className="flex items-center gap-2.5 pl-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 rounded-full"
            >
              <Logo className="h-9 w-9 sm:h-10 sm:w-10" />
              <span className="hidden font-heading text-[15px] font-semibold tracking-tight text-ink sm:block">
                Estells
              </span>
            </a>
            <div className="hidden items-center gap-6 md:flex">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={active === link.id ? "true" : undefined}
                  className={`font-heading text-[14px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink rounded ${
                    active === link.id
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT (desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            <LangSwitch />
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 rounded-full bg-ink pl-5 pr-2 py-2 font-heading text-[13px] font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              <TextRoll>{t.nav.reserva}</TextRoll>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <ArrowRight
                  size={14}
                  className={`text-ink transition-transform duration-500 ${EASE} group-hover:-rotate-45`}
                />
              </span>
            </a>
          </div>

          {/* MOBILE toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <LangSwitch />
            <button
              type="button"
              onClick={onMenuToggle}
              aria-label={t.a11y.openMenu}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
