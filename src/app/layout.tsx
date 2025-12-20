import type { Metadata, Viewport } from "next";
import { Satisfy, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense } from "react";
import { Contact, Footer, LayoutBg, Navbar } from "@/components";
import LoadingScreen from "@/components/LoadingScreen";
import CursorFollower from "@/components/CursorFollower";
import { Toaster } from "@/components/ui/sonner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleVerification from "@/components/GoogleVerification";
import LiveChat from "@/components/LiveChat";
import StructuredData from "@/components/StructuredData";
import { defaultMetadata, siteConfig } from "@/lib/seo";
import { getPersonStructuredData, getWebSiteStructuredData } from "@/lib/structured-data";
const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#a855f7" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const siteUrl = siteConfig.url;
  const personStructuredData = getPersonStructuredData(siteUrl);
  const webSiteStructuredData = getWebSiteStructuredData(siteUrl);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satisfy.variable} ${montserrat.variable} font-mono antialiased cursor-[url("/cursor.svg")]`}
      >
        <GoogleVerification />
        <StructuredData data={[personStructuredData, webSiteStructuredData]} />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            <Suspense fallback={<LoadingScreen/>}>
              <main className="relative z-10 overflow-hidden">
                <LayoutBg />
                <LoadingScreen />
                <CursorFollower />
                <Navbar />
                {children}
                <Contact/>
                <Footer/>
                <LiveChat />
              </main>
              <Toaster />
            </Suspense>
          </TooltipProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
