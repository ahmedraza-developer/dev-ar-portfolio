"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/** Makes every motion component honour the visitor's reduced-motion setting. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
