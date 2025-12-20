"use client";

import { useEffect } from "react";

export default function GoogleVerification() {
  useEffect(() => {
    const verificationCode = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
    
    if (verificationCode) {
      const existingMeta = document.querySelector(
        'meta[name="google-site-verification"]'
      );
      
      if (!existingMeta) {
        const meta = document.createElement("meta");
        meta.name = "google-site-verification";
        meta.content = verificationCode;
        document.head.appendChild(meta);
      }
    }
  }, []);

  return null;
}
