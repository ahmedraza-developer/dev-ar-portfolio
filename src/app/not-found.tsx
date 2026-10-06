import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { StatusPage } from "@/components/ui/status-page";

export const metadata: Metadata = {
  title: "Page not found",
  // An unknown URL has no canonical; don't inherit the home page's.
  alternates: {},
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <StatusPage
      eyebrow="Error"
      mark="404"
      title="Page not found."
      description="The page you are looking for doesn't exist or has been moved."
    >
      <LinkButton href="/">
        <ArrowLeft aria-hidden />
        Return home
      </LinkButton>
      <LinkButton href="/projects" variant="outline">
        Browse projects
      </LinkButton>
    </StatusPage>
  );
}
