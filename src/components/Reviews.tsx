import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import {
  REVIEWS,
  GOOGLE_REVIEWS_URL,
  GOOGLE_WRITE_REVIEW_URL,
} from "../data/reviews";
import { EASE, GoldButton, GhostButton, SectionBadge } from "./ui/primitives";
import { Reveal } from "./ui/Reveal";

const AUTO_ROTATE_MS = 6000;

/** Google "G" mark in brand colors. */
function GoogleMark({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
      />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={
            i < rating
              ? "fill-gold text-gold"
              : "fill-line text-line"
          }
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const { t } = useI18n();
  const r = t.reviews;
  const [active, setActive] = useState(0);
  const hasReviews = REVIEWS.length > 0;
  const count = REVIEWS.length;
  const go = (i: number) => setActive((i + count) % count);

  useEffect(() => {
    if (REVIEWS.length <= 1) return;
    const id = window.setInterval(
      () => setActive((c) => (c + 1) % REVIEWS.length),
      AUTO_ROTATE_MS
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="resenas" className="overflow-hidden bg-sand-alt py-16 sm:py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        {/* Left: heading + CTAs */}
        <div className="flex flex-col justify-center">
          <Reveal className="mb-6 sm:mb-8">
            <SectionBadge n="6" label={r.badge} />
          </Reveal>
          <Reveal
            as="h2"
            delay={60}
            className="mb-4 font-heading font-medium leading-[1.12] tracking-[-0.02em] text-ink text-[clamp(1.6rem,4vw,3.2rem)]"
          >
            {r.title}
          </Reveal>
          <Reveal
            as="p"
            delay={120}
            className="mb-8 max-w-[520px] font-body text-[16px] sm:text-[18px] leading-[1.6] text-muted"
          >
            {r.subtitle}
          </Reveal>

          <Reveal delay={160} className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <GoldButton label={r.ctaView} href={GOOGLE_REVIEWS_URL} />
            <GhostButton label={r.ctaWrite} href={GOOGLE_WRITE_REVIEW_URL} />
          </Reveal>

          {hasReviews && count > 1 && (
            <Reveal delay={220} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(active - 1)}
                  aria-label="Reseña anterior"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-300 ${EASE} hover:border-ink hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2`}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => go(active + 1)}
                  aria-label="Reseña siguiente"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-300 ${EASE} hover:border-ink hover:bg-ink hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2`}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Reseña ${i + 1}`}
                    aria-current={active === i}
                    className={`h-2.5 rounded-full transition-all duration-300 ${EASE} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink ${
                      active === i ? "w-10 bg-gold" : "w-2.5 bg-line hover:bg-faint"
                    }`}
                  />
                ))}
              </div>
            </Reveal>
          )}
        </div>

        {/* Right: carousel or empty state */}
        <Reveal delay={120} className="relative">
          {hasReviews ? (
            <div className="relative min-h-[300px] md:min-h-[360px]">
              {REVIEWS.map((review, i) => (
                <div
                  key={i}
                  aria-hidden={active !== i}
                  className={`absolute inset-0 transition-all duration-500 ${EASE} ${
                    active === i
                      ? "translate-x-0 opacity-100"
                      : "pointer-events-none translate-x-6 opacity-0"
                  }`}
                  style={{ zIndex: active === i ? 10 : 0 }}
                >
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 sm:p-10">
                    <div className="mb-6 flex items-center justify-between">
                      <Stars rating={review.rating} />
                      <GoogleMark size={22} />
                    </div>
                    <div className="relative mb-6 flex-1">
                      <Quote
                        size={32}
                        className="absolute -left-1 -top-2 rotate-180 text-gold/25"
                        aria-hidden="true"
                      />
                      <p className="relative font-body text-[18px] sm:text-[20px] leading-[1.55] text-ink">
                        {review.content}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 border-t border-line pt-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-heading text-[16px] font-semibold text-gold-dark">
                        {review.name.charAt(0)}
                      </span>
                      <div>
                        <p className="font-heading text-[15px] font-semibold text-ink">
                          {review.name}
                        </p>
                        {review.role && (
                          <p className="font-body text-[13px] text-muted">
                            {review.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-full min-h-[280px] flex-col justify-center rounded-2xl border border-dashed border-line bg-white p-8 sm:p-10">
              <div className="mb-5 flex items-center gap-3">
                <GoogleMark size={26} />
                <Stars rating={5} />
              </div>
              <h3 className="mb-2 font-heading text-[20px] sm:text-[22px] font-semibold text-ink">
                {r.emptyTitle}
              </h3>
              <p className="font-body text-[15px] sm:text-[16px] leading-[1.6] text-muted">
                {r.emptyText}
              </p>
              <p className="mt-6 font-mono text-[12px] uppercase tracking-wide text-faint">
                {r.ratingNote}
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
