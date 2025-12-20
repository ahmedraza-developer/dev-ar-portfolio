import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects - Real-World Project Insights",
  description:
    "Explore Ahmed Raza's portfolio of real-world projects including AI Marketing Dashboard, Ecommerce Experiences, and SaaS Landing Systems. Discover innovative web development solutions and creative digital projects.",
  keywords: [
    "Projects",
    "Portfolio Projects",
    "Web Development Projects",
    "React Projects",
    "Next.js Projects",
    "AI Marketing Dashboard",
    "Ecommerce Development",
    "SaaS Landing Pages",
    ...siteConfig.keywords,
  ],
  openGraph: {
    title: "Projects - Real-World Project Insights | Ahmed Raza Portfolio",
    description:
      "Explore Ahmed Raza's portfolio of real-world projects including AI Marketing Dashboard, Ecommerce Experiences, and SaaS Landing Systems.",
    url: `${siteConfig.url}/projects`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ahmed Raza - Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Real-World Project Insights | Ahmed Raza Portfolio",
    description:
      "Explore Ahmed Raza's portfolio of real-world projects including AI Marketing Dashboard, Ecommerce Experiences, and SaaS Landing Systems.",
    images: [`${siteConfig.url}/og-image.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
