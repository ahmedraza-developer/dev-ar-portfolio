import { siteConfig } from "./seo";

export function getWebSiteStructuredData(url?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: url || siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getPersonStructuredData(url?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahmed Raza",
    jobTitle: "Frontend Engineer & Web Developer",
    description:
      "Professional web developer and designer specializing in React, Next.js, and modern web technologies",
    url: url || siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    sameAs: [
      siteConfig.contact.github,
      siteConfig.contact.linkedin,
      siteConfig.contact.whatsapp,
    ],
    knowsAbout: [
      "Web Development",
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "UI/UX Design",
      "Web Design",
    ],
  };
}
