"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { EASE_OUT } from "@/components/motion/reveal";

/** Re-mounts on every route change, giving each page a soft entrance. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
