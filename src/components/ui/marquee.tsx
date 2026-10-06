import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  reverse?: boolean;
  className?: string;
  trackClassName?: string;
};

/**
 * Seamless, CSS-only horizontal ticker. The content is rendered twice so the
 * second copy slides in exactly as the first slides out; it pauses on hover.
 * Purely decorative — the whole strip is hidden from assistive tech, so don't
 * put the only copy of real content in here.
 */
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className,
  trackClassName,
}: MarqueeProps) {
  const track = cn(
    "flex shrink-0 animate-marquee items-center group-hover/marquee:[animation-play-state:paused]",
    reverse && "[animation-direction:reverse]",
    trackClassName,
  );

  return (
    <div
      aria-hidden
      style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      className={cn(
        "group/marquee flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <div className={track}>{children}</div>
      <div className={track}>{children}</div>
    </div>
  );
}
