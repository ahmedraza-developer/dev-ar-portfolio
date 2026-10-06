"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE_OUT } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type RotatingWordsProps = {
  words: readonly string[];
  /** Milliseconds each word stays on screen. */
  interval?: number;
  className?: string;
  /** Styles the word itself, e.g. its colour, face and horizontal alignment. */
  wordClassName?: string;
};

/**
 * Cycles through `words` in a fixed-height line, so swapping never shifts the
 * layout. Decorative: pair it with visually hidden text for screen readers.
 */
export function RotatingWords({
  words,
  interval = 2400,
  className,
  wordClassName,
}: RotatingWordsProps) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || words.length < 2) return;

    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % words.length),
      interval,
    );
    return () => window.clearInterval(id);
  }, [interval, prefersReducedMotion, words.length]);

  return (
    <span
      aria-hidden
      className={cn("block h-[1.2em] overflow-hidden leading-[1.2]", className)}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className={cn("block w-fit whitespace-nowrap", wordClassName)}
          initial={{ y: "60%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-60%", opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
