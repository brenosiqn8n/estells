import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { EASE, SectionBadge } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

// TODO: replace with real contact data when provided by client
const CONTACT_EMAIL = "estellscentre@gmail.com";
const WHATSAPP_NUMBER = "34600000000"; // TODO teléfono real

const inputBase =
  "w-full rounded-xl border border-line bg-white px-4 py-3 font-body text-[15px] text-ink placeholder:text-faint transition-colors focus:border-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20";

type Mode = "reserva" | "contacto";

export function Reserva() {
  const { t } = useI18n();
  const l = t.reserva.labels;
  const [mode, setMode] = useState<Mode>("reserva");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const isReserva = mode === "reserva";
  const needsDetails = isReserva; // age/subject/level/start required only when booking

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    const data = new FormData(form);
    const lines = [
      `${l.name}: ${data.get("name")}`,
      `${l.phone}: ${data.get("phone")}`,
      `${l.email}: ${data.get("email")}`,
    ];
    if (needsDetails) {
      lines.push(
        `${l.age}: ${data.get("age")}`,
        `${l.subject}: ${data.get("subject")}`,
        `${l.level}: ${data.get("level")}`,
        `${l.start}: ${data.get("start") || "—"}`
      );
    }
    lines.push(`${l.message}: ${data.get("message") || "—"}`);
    const body = lines.join("\n");
    const subject = isReserva ? t.reserva.mailSubject : t.reserva.mailSubjectContacto;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => {
      window.location.href = href;
      setStatus("success");
    }, 500);
  };

  return (
    <section id="contacto" className="bg-sand-alt py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Left: pitch */}
          <div>
            <Reveal className="mb-6 sm:mb-8">
              <SectionBadge n="7" label={t.reserva.badge} />
            </Reveal>

            {/* Intent toggle */}
            <Reveal delay={40} className="mb-6">
              <div
                role="group"
                aria-label={t.reserva.badge}
                className="inline-flex rounded-full border border-line bg-white p-1"
              >
                {(["reserva", "contacto"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    aria-pressed={mode === m}
                    className={`rounded-full px-4 py-2 font-heading text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink ${
                      mode === m ? "bg-ink text-white" : "text-muted hover:text-ink"
                    }`}
                  >
                    {t.reserva.modes[m]}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal
              as="h2"
              delay={60}
              className="mb-4 font-heading font-medium leading-[1.12] tracking-[-0.02em] text-ink text-[clamp(1.6rem,4vw,3.2rem)]"
            >
              {isReserva ? t.reserva.title : t.reserva.titleContacto}
            </Reveal>
            <Reveal
              as="p"
              delay={120}
              className="mb-8 font-body text-[16px] sm:text-[18px] leading-[1.6] text-muted"
            >
              {isReserva ? t.reserva.subtitle : t.reserva.subtitleContacto}
            </Reveal>
            <Reveal delay={160}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-white px-5 py-3 font-heading text-[14px] font-medium text-ink transition-colors hover:border-ink/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  fill="currentColor"
                  className="shrink-0 text-[#25D366]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t.reserva.whatsapp}
              </a>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal as="div" delay={100}>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-line bg-white p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label={l.name} required>
                  <input id="name" name="name" type="text" required autoComplete="name" className={inputBase} />
                </Field>
                <Field id="phone" label={l.phone} required>
                  <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputBase} />
                </Field>
                <Field id="email" label={l.email} required>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputBase} />
                </Field>
                {needsDetails && (
                  <>
                    <Field id="age" label={l.age} required>
                      <input id="age" name="age" type="text" required className={inputBase} />
                    </Field>
                    <Field id="subject" label={l.subject} required>
                      <input id="subject" name="subject" type="text" required className={inputBase} />
                    </Field>
                    <Field id="level" label={l.level} required>
                      <select id="level" name="level" required defaultValue="" className={`${inputBase} appearance-none`}>
                        <option value="" disabled>
                          —
                        </option>
                        {t.reserva.levels.map((lv) => (
                          <option key={lv} value={lv}>
                            {lv}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field id="start" label={l.start} className="sm:col-span-2">
                      <input id="start" name="start" type="date" className={inputBase} />
                    </Field>
                  </>
                )}
                <Field
                  id="message"
                  label={l.message}
                  optional={l.optional}
                  className="sm:col-span-2"
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder={l.messagePlaceholder}
                    className={`${inputBase} resize-none`}
                  />
                </Field>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink pl-6 pr-2 py-2.5 font-heading text-[14px] font-medium text-white transition-colors hover:bg-ink-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 disabled:opacity-60"
                >
                  {status === "sending"
                    ? t.reserva.sending
                    : isReserva
                      ? t.reserva.submit
                      : t.reserva.submitContacto}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold">
                    <ArrowRight
                      size={15}
                      className={`text-ink transition-transform duration-500 ${EASE} group-hover:-rotate-45`}
                    />
                  </span>
                </button>
                <p className="font-body text-[12px] leading-[1.5] text-faint sm:max-w-[220px]">
                  {t.reserva.privacy}
                </p>
              </div>

              <p
                role="status"
                aria-live="polite"
                className={`mt-4 font-body text-[14px] text-ink transition-opacity ${
                  status === "success" ? "opacity-100" : "opacity-0"
                }`}
              >
                {status === "success" ? t.reserva.success : " "}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  optional,
  className = "",
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-1.5 block font-mono text-[12px] uppercase tracking-wide text-muted"
      >
        {label}
        {required && <span className="text-coral"> *</span>}
        {optional && <span className="text-faint"> · {optional}</span>}
      </label>
      {children}
    </div>
  );
}
