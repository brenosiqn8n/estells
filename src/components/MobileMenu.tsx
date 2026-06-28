import { useEffect, useRef } from "react";
import { ArrowRight, X } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { EASE, LangSwitch, TextRoll } from "./ui/primitives";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t } = useI18n();
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const links = [
    { id: "inicio", label: t.nav.inicio },
    { id: "servicios", label: t.nav.servicios },
    { id: "ventajas", label: t.nav.ventajas },
    { id: "centro", label: t.nav.centro },
    { id: "equipo", label: t.nav.equipo },
    { id: "faq", label: t.nav.faq },
    { id: "resenas", label: t.nav.reviews },
    { id: "contacto", label: t.nav.contacto },
  ];

  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = "";
      lastFocused.current?.focus?.();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = sheetRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 md:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={sheetRef}
        className={`absolute inset-x-0 bottom-0 mx-3 mb-3 rounded-2xl bg-white p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <LangSwitch />
          <div className="flex items-center gap-2">
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label={t.a11y.closeMenu}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <nav className="flex flex-col gap-1.5">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={onClose}
              className="font-heading text-[26px] leading-[34px] font-medium text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          onClick={onClose}
          className="group mt-6 inline-flex items-center gap-3 rounded-full bg-gold pl-5 pr-2 py-2 font-heading text-[14px] font-medium text-ink"
        >
          <TextRoll>{t.nav.reserva}</TextRoll>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <ArrowRight
              size={16}
              className={`text-gold transition-transform duration-500 ${EASE} group-hover:-rotate-45`}
            />
          </span>
        </a>
      </div>
    </div>
  );
}
