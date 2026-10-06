import type { IconName } from "@/components/ui/icons";

const PRODUCTION_URL = "https://dev-ar-portfolio.vercel.app";

/** Canonical origin, without a trailing slash. Override with NEXT_PUBLIC_SITE_URL. */
function resolveSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || PRODUCTION_URL).replace(/\/+$/, "");
}

export const site = {
  name: "Ahmed Raza",
  initials: "AR",
  role: "Senior Front-End Engineer",
  url: resolveSiteUrl(),
  title: "Ahmed Raza — Senior Front-End Engineer (React & Next.js)",
  description:
    "Ahmed Raza is a senior front-end engineer building fast, accessible web products with React, Next.js and TypeScript. See projects and case studies.",
  locale: "en_US",
  email: "leadzahmed@gmail.com",
  phone: "+923187380601",
  twitterHandle: "@AhmedRazaa956",
  resume: "/resume/updated-resume.pdf",
  portrait: "/home/profile-ahmed-raza.png",
  mapUrl: "https://maps.app.goo.gl/VkfxyBu6Bh7huHSc7",
  careerStartYear: 2022,
  availability: { open: true, label: "Open to new projects" },
  /** Words cycled through in the hero headline: "building ___ web interfaces." */
  heroWords: ["fast", "accessible", "pixel-perfect", "scalable"],
  coreStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  focus: ["Performance", "Accessibility", "Design systems"],
  keywords: [
    "Ahmed Raza",
    "Front-End Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "Web Developer Portfolio",
    "UI Development",
    "Web Performance",
  ],
  /** Google Analytics 4 measurement ID (G-XXXXXXXXXX). Analytics is off when unset. */
  gaId: process.env.NEXT_PUBLIC_GA_ID || undefined,
  /** Search Console HTML-tag token. The verification tag is omitted when unset. */
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
} as const;

/**
 * The generated share card (app/opengraph-image.tsx). Pages that set their own
 * `openGraph`/`twitter` metadata replace the inherited one, so they pass this
 * explicitly unless they have a better image.
 */
export const defaultShareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: site.title,
};

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return path === "/" ? site.url : `${site.url}${path}`;
}

export const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "stack", label: "Stack" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];

export function sectionHref(id: SectionId): string {
  return `/#${id}`;
}

export type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
  external: boolean;
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Ahmed-Crystallite",
    icon: "github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://pk.linkedin.com/in/ahmed-raza-96027a250",
    icon: "linkedin",
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923187380601",
    icon: "whatsapp",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: "email",
    external: false,
  },
];

export function getYearsOfExperience(now: Date = new Date()): number {
  return Math.max(1, now.getFullYear() - site.careerStartYear);
}
