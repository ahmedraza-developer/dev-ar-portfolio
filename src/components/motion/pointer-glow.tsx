"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Soft light that trails the pointer across its parent element.
 * The parent must be positioned; the glow fills it and ignores pointer events.
 */
export function PointerGlow({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const parent = node?.parentElement;
    if (!node || !parent) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = parent.getBoundingClientRect();
        node.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
        node.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
        node.style.opacity = "1";
      });
    };
    const onPointerLeave = () => {
      node.style.opacity = "0";
    };

    parent.addEventListener("pointermove", onPointerMove, { passive: true });
    parent.addEventListener("pointerleave", onPointerLeave);
    return () => {
      parent.removeEventListener("pointermove", onPointerMove);
      parent.removeEventListener("pointerleave", onPointerLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500",
        "bg-[radial-gradient(480px_circle_at_var(--glow-x,50%)_var(--glow-y,30%),color-mix(in_oklch,var(--foreground)_6%,transparent),transparent_70%)]",
        className,
      )}
    />
  );
}
