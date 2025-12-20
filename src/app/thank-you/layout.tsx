import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Thank You - Contact Received",
  description:
    "Thank you for contacting Ahmed Raza. Your message has been received and will be responded to shortly.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Thank You - Contact Received | Ahmed Raza Portfolio",
    description:
      "Thank you for contacting Ahmed Raza. Your message has been received and will be responded to shortly.",
    url: `${siteConfig.url}/thank-you`,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/thank-you`,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
