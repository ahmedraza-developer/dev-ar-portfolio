"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - (isHovering ? 24 : 16));
      cursorY.set(e.clientY - (isHovering ? 24 : 16));

      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest('a, button, [role="button"], [data-interactive]');

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY, isHovering]);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 pointer-events-none z-50"
      animate={{
        width: isHovering ? 48 : 32,
        height: isHovering ? 48 : 32,
        opacity: isHovering ? 0.4 : 0.5,
      }}
      transition={{ duration: 0.2 }}
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
}
