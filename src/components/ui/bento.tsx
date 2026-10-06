import type { ReactNode } from "react";
import { Spotlight } from "@/components/motion/spotlight";
import { cn } from "@/lib/utils";

export const bentoSurface = "rounded-3xl border border-border bg-card";

type BentoCardProps = {
  as?: "div" | "article" | "li";
  className?: string;
  children: ReactNode;
};

/** The shared card surface: large radius, hairline border, pointer-lit edge. */
export function BentoCard({ as, className, children }: BentoCardProps) {
  return (
    <Spotlight as={as} className={cn(bentoSurface, className)}>
      {children}
    </Spotlight>
  );
}

/** Small mono caption that sits at the top of a bento card. */
export function BentoLabel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}
