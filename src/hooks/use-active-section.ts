"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids currently crosses the middle of the
 * viewport. `ids` must be a stable reference.
 */
export function useActiveSection(
  ids: readonly string[],
  enabled = true,
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const { id } = entry.target;
          setActiveId((current) => {
            if (entry.isIntersecting) return id;
            return current === id ? null : current;
          });
        }
      },
      { rootMargin: "-45% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return enabled ? activeId : null;
}
