"use client";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import type { AnimationItem } from "lottie-web";

type AnimationsWrapperProps = {
  animationPath: string;
  loop?: boolean;
  autoplay?: boolean;
  renderer?: "svg" | "canvas" | "html";
  className?: string;
  style?: CSSProperties;
};

const AnimationsWrapper = ({
  animationPath,
  loop = true,
  autoplay = true,
  renderer = "svg",
  className,
  style,
}: AnimationsWrapperProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function setup() {
      if (typeof window === "undefined") return;
      if (!containerRef.current) return;
      if (!animationPath) return;

      animRef.current?.destroy();
      animRef.current = null;

      try {
        const mod = await import("lottie-web");
        if (cancelled || !containerRef.current) return;

        animRef.current = mod.default.loadAnimation({
          container: containerRef.current,
          renderer,
          loop,
          autoplay,
          path: animationPath,
        });
      } catch {
        // Intentionally swallow: invalid/missing animation JSON shouldn't crash UI.
      }
    }

    void setup();

    return () => {
      cancelled = true;
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, [animationPath, autoplay, loop, renderer]);

  return <div ref={containerRef} className={className} style={style} />;
};

export default AnimationsWrapper;
