import { useInView } from "../../hooks/useInView";
import { EASE } from "./primitives";

type Tag = "div" | "section" | "li" | "span" | "p" | "h2" | "h3";

/**
 * Reveal-on-scroll wrapper: fades + lifts content into view once.
 * `delay` (ms) enables stagger. Honors prefers-reduced-motion via useInView.
 */
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: Tag;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as "div";

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ${EASE} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
