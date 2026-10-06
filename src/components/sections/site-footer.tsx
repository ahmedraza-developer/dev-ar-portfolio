import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SocialLinks } from "@/components/ui/social-links";
import { navLinks, sectionHref, site } from "@/data/site";

const contactLinks = [
  { label: site.email, href: `mailto:${site.email}` },
  { label: site.phone, href: `tel:${site.phone}` },
  { label: "Find me on the map", href: site.mapUrl, external: true },
];

const linkClass =
  "group inline-flex items-center gap-1 rounded-sm text-sm text-muted-foreground transition-colors duration-300 outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50";

const headingClass =
  "font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70";

export default function SiteFooter() {
  return (
    <footer className="overflow-hidden border-t border-border">
      <Container className="pt-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="max-w-xs text-xl leading-snug font-medium tracking-tight">
              {site.role} building fast, accessible interfaces.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer">
            <p className={headingClass}>Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link href={sectionHref(link.id)} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/projects" className={linkClass}>
                  All projects
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className={headingClass}>Contact</p>
            <ul className="mt-4 space-y-2.5">
              {contactLinks.map(({ label, href, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className={linkClass}
                  >
                    {label}
                    <ArrowUpRight
                      aria-hidden
                      className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
        </div>
      </Container>

      {/* Oversized wordmark, cropped by the footer's bottom edge. */}
      <p
        aria-hidden
        className="pointer-events-none -mb-[0.22em] mt-6 text-center text-[17.5vw] leading-none font-semibold tracking-[-0.06em] whitespace-nowrap text-foreground/[0.06] select-none"
      >
        {site.name}
      </p>
    </footer>
  );
}
