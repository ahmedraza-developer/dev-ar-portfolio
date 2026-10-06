"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const tags = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  ul: motion.ul,
  ol: motion.ol,
  li: motion.li,
  dl: motion.dl,
  code: motion.code,
  header: motion.header,
};

type Tag = keyof typeof tags;

type Timing = { delay?: number; y?: number };

const itemVariants: Variants = {
  hidden: ({ y = 24 }: Timing = {}) => ({ opacity: 0, y }),
  visible: ({ delay = 0 }: Timing = {}) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT, delay },
  }),
};

const VIEWPORT = { once: true, margin: "0px 0px -80px 0px" } as const;

type BaseProps = {
  as?: Tag;
  className?: string;
  children: ReactNode;
};

/** Fades and lifts its content into place the first time it scrolls into view. */
export function Reveal({
  as = "div",
  delay,
  y,
  className,
  children,
}: BaseProps & Timing) {
  const Component = tags[as] as typeof motion.div;

  return (
    <Component
      className={className}
      variants={itemVariants}
      custom={{ delay, y }}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </Component>
  );
}

type StaggerProps = BaseProps & {
  /** Seconds between each child's entrance. */
  stagger?: number;
  delay?: number;
  /** Play on mount instead of waiting for the element to scroll into view. */
  immediate?: boolean;
};

/** Orchestrates the entrance of its <StaggerItem> descendants one after another. */
export function Stagger({
  as = "div",
  stagger = 0.08,
  delay = 0,
  immediate = false,
  className,
  children,
}: StaggerProps) {
  const Component = tags[as] as typeof motion.div;

  return (
    <Component
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: VIEWPORT })}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  as = "div",
  y,
  className,
  children,
}: BaseProps & Pick<Timing, "y">) {
  const Component = tags[as] as typeof motion.div;

  return (
    <Component className={className} variants={itemVariants} custom={{ y }}>
      {children}
    </Component>
  );
}
