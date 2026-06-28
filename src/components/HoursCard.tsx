import { Clock } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { useOpenStatus } from "../hooks/useOpenStatus";

export function HoursCard({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  const h = t.about.hours;
  const { open, time } = useOpenStatus();

  return (
    <div
      className={`flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-7 sm:p-8 ${className}`}
    >
      <div>
        {/* Status pill */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line py-1.5 pl-2.5 pr-3.5">
          <span className="relative flex h-2.5 w-2.5">
            {open && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500/60" />
            )}
            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                open ? "bg-green-500" : "bg-faint"
              }`}
            />
          </span>
          <span className="font-mono text-[12px] uppercase tracking-wide text-ink">
            {open ? h.openNow : h.closedNow}
          </span>
        </div>

        <div className="mb-5 flex items-center gap-2.5">
          <Clock size={18} className="text-gold-dark" />
          <h3 className="font-heading text-[17px] sm:text-[18px] font-semibold text-ink">
            {h.title}
          </h3>
        </div>

        <dl className="space-y-3 font-body text-[15px]">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <dt className="text-muted">{h.weekdays}</dt>
            <dd className="font-mono text-[14px] text-ink">{h.schedule}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-muted">{h.weekend}</dt>
            <dd className="font-mono text-[14px] text-faint">{h.closed}</dd>
          </div>
        </dl>
      </div>

      <p className="mt-7 flex items-center justify-between border-t border-line pt-4 font-mono text-[12px] uppercase tracking-wide text-faint">
        <span>{h.localTime}</span>
        <span className="text-ink">{time}</span>
      </p>
    </div>
  );
}
