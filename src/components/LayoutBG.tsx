"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "./index";

export default function LayoutBG() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
  return (
    <Particles
      quantity={100}
      ease={80}
      color={color}
      refresh
      className="absolute inset-0 -z-10"
    />
  );
}
