import Script from "next/script";
import { site } from "@/data/site";

/**
 * Google Analytics 4. Loads after the page is interactive, and only in
 * production builds with NEXT_PUBLIC_GA_ID set — local visits are never
 * recorded. GA4's enhanced measurement picks up client-side route changes.
 */
export function GoogleAnalytics() {
  if (!site.gaId || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${site.gaId}');`}
      </Script>
    </>
  );
}
