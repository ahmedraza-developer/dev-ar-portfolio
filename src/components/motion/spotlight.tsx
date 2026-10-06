"use client";

import type { PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  as?: "div" | "article" | "li";
  className?: string;
  children: ReactNode;
};

/**
 * Card surface whose border and background glow follow the pointer.
 * The visuals live in the `.spotlight` rules in globals.css.
 */
export function Spotlight({ as = "div", className, children }: SpotlightProps) {
  const Component = as as "div";

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <Component
      className={cn("spotlight", className)}
      onPointerMove={onPointerMove}
    >
      {children}
    </Component>
  );
}
