import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { StatusPage } from "@/components/ui/status-page";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your message has been received.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

export default function ThankYou() {
  return (
    <StatusPage
      eyebrow="Message sent"
      title="Thank you for reaching out."
      description="I've received your message and appreciate your interest. I'll get back to you within 1–2 business days."
    >
      <LinkButton href="/">
        <ArrowLeft aria-hidden />
        Back to home
      </LinkButton>
      <LinkButton href="/projects" variant="outline">
        Browse projects
      </LinkButton>
    </StatusPage>
  );
}
