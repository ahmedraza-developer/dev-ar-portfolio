import type { Metadata } from "next";
import { Hero, About, Services, Skills, Experience } from "@/components";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
    </>
  );
}
