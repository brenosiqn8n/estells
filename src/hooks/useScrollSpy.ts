import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently in view, given a list of section ids.
 * Uses IntersectionObserver against the viewport's upper third.
 */
export function useScrollSpy(ids: string[], rootMargin = "-45% 0px -50% 0px"): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin, threshold: 0 }
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return active;
}
