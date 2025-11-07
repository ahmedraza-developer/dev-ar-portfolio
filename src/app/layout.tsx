import type { Metadata } from "next";
import { Satisfy, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense } from "react";
import { Contact, Footer, LayoutBg, Navbar, ChatbotWrapper } from "@/components";
import LoadingScreen from "@/components/LoadingScreen";
import CursorFollower from "@/components/CursorFollower";
import { Toaster } from "@/components/ui/sonner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const satisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title:
    "Ahmed Raza Portfolio – Web Design, Development &amp; Creative Solutions",
  description:
    "Explore Ahmed Raza portfolio showcasing innovative web design, development expertise, and creative digital solutions. Discover personalized and professional work that delivers results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satisfy.variable} ${montserrat.variable} font-mono antialiased cursor-[url("/cursor.svg")]`}
      >
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
                <ChatbotWrapper />
              </main>
              <Toaster />
            </Suspense>
          </TooltipProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
