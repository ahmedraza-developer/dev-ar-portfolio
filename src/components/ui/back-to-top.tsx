"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";

const SHOW_AFTER_PX = 600;

/** Floating button with a progress ring; appears once the page is scrolled. */
export function BackToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > SHOW_AFTER_PX);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0 })}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
          className="fixed right-5 bottom-5 z-30 grid size-12 place-items-center rounded-full border border-border bg-card/90 text-foreground shadow-lg shadow-black/20 backdrop-blur-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:right-8 sm:bottom-8"
        >
          <svg
            aria-hidden
            viewBox="0 0 48 48"
            className="absolute inset-0 size-full -rotate-90 text-brand-ink"
          >
            <motion.circle
              cx="24"
              cy="24"
              r="22.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <ArrowUp className="size-4" aria-hidden />
          <span className="sr-only">Back to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
