"use client";

import { useEffect, useRef } from "react";

type ScrollOnChangeProps = {
  targetId: string;
  /** Scrolls the target into view whenever this value changes after mount. */
  watch: string;
};

export function ScrollOnChange({ targetId, watch }: ScrollOnChangeProps) {
  const previous = useRef(watch);

  useEffect(() => {
    if (previous.current === watch) return;
    previous.current = watch;

    document.getElementById(targetId)?.scrollIntoView({ block: "start" });
  }, [targetId, watch]);

  return null;
}
