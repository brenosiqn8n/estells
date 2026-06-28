import { ArrowRight } from "lucide-react";
import { useI18n } from "../../i18n/I18nProvider";

export const EASE = "ease-[cubic-bezier(0.25,0.1,0.25,1)]";

/* Hover text-roll label */
export function TextRoll({ children }: { children: React.ReactNode }) {
  return (
    <span className="block overflow-hidden h-[20px]">
      <span
        className={`flex flex-col transition-transform duration-500 ${EASE} group-hover:-translate-y-1/2`}
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center">{children}</span>
      </span>
    </span>
  );
}

export function GoldButton({
  label,
  href = "#",
  className = "",
}: {
  label: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full bg-gold pl-5 sm:pl-6 pr-2 py-2 font-heading text-[13px] sm:text-[14px] font-medium text-ink transition-colors hover:bg-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 ${className}`}
    >
      <TextRoll>{label}</TextRoll>
      <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white">
        <ArrowRight
          size={16}
          className={`text-gold transition-transform duration-500 ${EASE} group-hover:-rotate-45`}
        />
      </span>
    </a>
  );
}

export function GhostButton({
  label,
  href = "#",
}: {
  label: string;
  href?: string;
}) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-white pl-5 sm:pl-6 pr-2 py-2 font-heading text-[13px] sm:text-[14px] font-medium text-ink shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
    >
      <TextRoll>{label}</TextRoll>
      <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-ink">
        <ArrowRight
          size={16}
          className={`text-white transition-transform duration-500 ${EASE} group-hover:-rotate-45`}
        />
      </span>
    </a>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-white ${className}`}
    >
      <img
        src="/images/logo.png"
        alt="Estells Centre d'Estudis"
        width={40}
        height={40}
        className="h-full w-full rounded-full object-cover p-0.5"
      />
    </div>
  );
}

export function SectionBadge({
  n,
  label,
  className = "",
}: {
  n: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-ink font-mono text-[11px] sm:text-[12px] font-semibold text-white">
        {n}
      </div>
      <span className="rounded-full border border-line px-3 sm:px-4 py-1 sm:py-1.5 font-mono text-[12px] sm:text-[13px] uppercase tracking-wide text-ink">
        {label}
      </span>
    </div>
  );
}

export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  return (
    <div
      role="group"
      aria-label={t.a11y.langLabel}
      className={`inline-flex items-center rounded-full border border-line p-0.5 font-mono text-[11px] uppercase tracking-wide ${className}`}
    >
      {(["es", "va"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink ${
            lang === l ? "bg-ink text-white" : "text-muted hover:text-ink"
          }`}
        >
          {l === "es" ? "ES" : "VA"}
        </button>
      ))}
    </div>
  );
}
