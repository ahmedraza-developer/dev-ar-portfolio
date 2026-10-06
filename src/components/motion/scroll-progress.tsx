"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

/** Hairline that fills left-to-right as the page is scrolled. */
export function ScrollProgress({ className }: { className?: string }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className={cn("h-0.5 origin-left bg-brand", className)}
    />
  );
}
