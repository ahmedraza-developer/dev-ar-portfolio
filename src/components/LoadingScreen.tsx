"use client";

import LottieAnimation from "./LottieAnimations";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="md:w-56 md:h-56 w-48 h-48">
        <LottieAnimation animationPath="/animations/1746205799510.json" />
      </div>
    </div>
  );
} 