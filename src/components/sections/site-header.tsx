"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, FileText, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT } from "@/components/motion/reveal";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navLinks, sectionHref, site } from "@/data/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

const SECTION_IDS = navLinks.map((link) => link.id);
const MOBILE_MENU_ID = "site-mobile-menu";

const glass =
  "border border-border bg-background/70 shadow-lg shadow-black/5 backdrop-blur-xl dark:shadow-black/40";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useActiveSection(SECTION_IDS, isHome);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const isActive = (id: string) =>
    isHome
      ? activeSection === id
      : id === "work" && pathname.startsWith("/projects");

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-3">
      <ScrollProgress className="absolute inset-x-0 top-0" />

      <div
        className={cn(
          "pointer-events-auto mx-auto mt-4 flex h-14 w-full max-w-xl items-center justify-between gap-1 rounded-full p-1.5 lg:w-fit lg:max-w-none",
          glass,
        )}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-2.5 rounded-full pr-3 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span
            aria-hidden
            className="grid size-11 place-items-center rounded-full bg-brand font-mono text-xs font-semibold text-brand-foreground transition-transform duration-500 ease-out group-hover:rotate-[360deg]"
          >
            {site.initials}
          </span>
          <span className="text-sm font-medium tracking-tight lg:hidden xl:inline">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center">
            {navLinks.map((link) => {
              const active = isActive(link.id);

              return (
                <li key={link.id}>
                  <Link
                    href={sectionHref(link.id)}
                    aria-current={active ? "true" : undefined}
                    className={cn(
                      "relative isolate block rounded-full px-3.5 py-2 text-sm transition-colors duration-300 outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        aria-hidden
                        className="absolute inset-0 -z-10 rounded-full bg-foreground/10"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LinkButton
            href={sectionHref("contact")}
            onClick={closeMenu}
            variant="secondary"
            size="sm"
            className="group hidden h-11 px-5 sm:inline-flex"
          >
            Let&apos;s talk
            <ArrowUpRight
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </LinkButton>
          <Button
            variant="ghost"
            size="icon"
            className="size-11 rounded-full lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id={MOBILE_MENU_ID}
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className={cn(
              "pointer-events-auto mx-auto mt-2 w-full max-w-xl origin-top rounded-3xl p-2 lg:hidden",
              glass,
              "bg-background/95",
            )}
          >
            <ul>
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: EASE_OUT,
                    delay: 0.04 + index * 0.035,
                  }}
                >
                  <Link
                    href={sectionHref(link.id)}
                    onClick={closeMenu}
                    aria-current={isActive(link.id) ? "true" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-base transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                      isActive(link.id)
                        ? "bg-foreground/10 text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    <span className="font-mono text-xs text-muted-foreground/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border p-2 pt-4">
              <LinkButton href={site.resume} newTab variant="outline">
                <FileText aria-hidden />
                Résumé
              </LinkButton>
              <LinkButton href={sectionHref("contact")} onClick={closeMenu}>
                Let&apos;s talk
              </LinkButton>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
