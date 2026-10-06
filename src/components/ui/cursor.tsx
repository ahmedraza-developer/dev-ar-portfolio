"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
/** Class on <html> that hides the native cursor; styled in globals.css. */
const ROOT_CLASS = "has-custom-cursor";

const INTERACTIVE = "a, button, [role='button'], label, summary";
/** Over these the native cursor takes over, so the caret stays precise. */
const TEXT_ENTRY = "input, textarea, select, [contenteditable='true']";

type Mode = "hidden" | "default" | "hover";

function subscribeToPointerType(onChange: () => void) {
  const query = window.matchMedia(FINE_POINTER_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function modeFor(target: EventTarget | null): Mode {
  if (!(target instanceof Element)) return "default";
  if (target.closest(TEXT_ENTRY)) return "hidden";
  return target.closest(INTERACTIVE) ? "hover" : "default";
}

/**
 * Custom pointer for mouse users: a dot locked to the pointer (so aiming stays
 * exact) and a ring that trails it and swells over anything clickable.
 * Renders nothing on touch devices or when reduced motion is requested.
 */
export function Cursor() {
  const hasFinePointer = useSyncExternalStore(
    subscribeToPointerType,
    () => window.matchMedia(FINE_POINTER_QUERY).matches,
    () => false,
  );
  const prefersReducedMotion = useReducedMotion();
  const isEnabled = hasFinePointer && !prefersReducedMotion;

  const [mode, setMode] = useState<Mode>("hidden");
  const [isPressed, setIsPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 520, damping: 38, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 520, damping: 38, mass: 0.5 });

  useEffect(() => {
    if (!isEnabled) return;

    const root = document.documentElement;
    root.classList.add(ROOT_CLASS);

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      x.set(event.clientX);
      y.set(event.clientY);
      setMode(modeFor(event.target));
    };
    const onPointerDown = () => setIsPressed(true);
    const onPointerUp = () => setIsPressed(false);
    const onPointerLeave = () => setMode("hidden");

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    root.addEventListener("pointerleave", onPointerLeave);

    return () => {
      root.classList.remove(ROOT_CLASS);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      root.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [isEnabled, x, y]);

  if (!isEnabled) return null;

  const isVisible = mode !== "hidden";
  const isHovering = mode === "hover";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      <motion.div style={{ x: ringX, y: ringY }} className="absolute top-0 left-0">
        <motion.span
          // The dark outer hairline keeps the ring legible on accent-coloured fills.
          className="absolute -top-[18px] -left-[18px] block size-9 rounded-full border border-brand-ink shadow-[0_0_0_1px_rgb(0_0_0/0.45)]"
          initial={false}
          animate={{
            opacity: isVisible ? (isHovering ? 1 : 0.5) : 0,
            scale: isPressed ? 0.75 : isHovering ? 1.7 : 1,
            backgroundColor: isHovering
              ? "color-mix(in oklch, var(--brand) 10%, transparent)"
              : "color-mix(in oklch, var(--brand) 0%, transparent)",
          }}
          transition={{ type: "spring", stiffness: 360, damping: 26 }}
        />
      </motion.div>

      <motion.div style={{ x, y }} className="absolute top-0 left-0">
        <motion.span
          className="absolute -top-1 -left-1 block size-2 rounded-full bg-brand-ink shadow-[0_0_0_1.5px_rgb(0_0_0/0.55)]"
          initial={false}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isHovering ? 0.5 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </div>
  );
}
