import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "@/components/motion/motion-provider";
import SiteFooter from "@/components/sections/site-footer";
import SiteHeader from "@/components/sections/site-header";
import { GoogleAnalytics } from "@/components/seo/google-analytics";
import { JsonLd } from "@/components/seo/json-ld";
import { BackToTop } from "@/components/ui/back-to-top";
import { Cursor } from "@/components/ui/cursor";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { site } from "@/data/site";
import { siteGraph } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Display accent only: the italic used for emphasised words in headings.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [...site.keywords],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    firstName: site.name.split(" ")[0],
    lastName: site.name.split(" ").slice(1).join(" "),
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: site.twitterHandle,
  },
  ...(site.googleSiteVerification && {
    verification: { google: site.googleSiteVerification },
  }),
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={cn(
        geistSans.variable,
        geistMono.variable,
        instrumentSerif.variable,
      )}
    >
      <body className="min-h-svh antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only z-50 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
          >
            Skip to content
          </a>
          <MotionProvider>
            <SiteHeader />
            <main id="main" className="pt-20">
              {children}
            </main>
            <SiteFooter />
            <BackToTop />
            <Cursor />
          </MotionProvider>
          <Toaster position="top-right" />
        </ThemeProvider>
        <JsonLd data={siteGraph()} />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
