import Image from "next/image";
import portrait from "media/home/profile-ahmed-raza.png";
import { ArrowDown, ArrowRight } from "lucide-react";
import { PointerGlow } from "@/components/motion/pointer-glow";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { RotatingWords } from "@/components/motion/rotating-words";
import { Backdrop } from "@/components/ui/backdrop";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { sectionHref, site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Backdrop />
      <PointerGlow className="-z-10" />

      <Container className="pt-14 pb-16 text-center sm:pt-20 lg:pt-24 lg:pb-20">
        <Stagger immediate stagger={0.1} delay={0.1} className="flex flex-col items-center">
          <StaggerItem>
            <p className="inline-flex items-center gap-3 rounded-full border border-border bg-card/70 py-1.5 pr-4 pl-1.5 text-sm backdrop-blur-sm">
              <Image
                src={portrait}
                alt=""
                sizes="32px"
                className="size-8 rounded-full object-cover object-top"
              />
              <span className="font-medium whitespace-nowrap max-[400px]:hidden">
                {site.name}
              </span>
              {site.availability.open && (
                <>
                  <span
                    aria-hidden
                    className="h-4 w-px bg-border max-[400px]:hidden"
                  />
                  <span className="flex items-center gap-2 whitespace-nowrap text-muted-foreground">
                    <span aria-hidden className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-ink opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-brand-ink" />
                    </span>
                    {site.availability.label}
                  </span>
                </>
              )}
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="mt-8 text-[9.6vw] leading-[0.98] font-medium tracking-[-0.045em] sm:text-7xl lg:text-[5.75rem]">
              <span className="sr-only">
                {site.name} — front-end engineer building{" "}
                {site.heroWords.join(", ")} web interfaces.
              </span>
              <span aria-hidden className="block">
                Front-end engineer <br className="sm:hidden" />
                building
              </span>
              <RotatingWords
                words={site.heroWords}
                wordClassName="mx-auto pr-[0.08em] font-serif text-[1.1em] font-normal tracking-[-0.02em] text-brand-ink italic"
              />
              <span aria-hidden className="block">
                web interfaces.
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              I turn designs into production-ready products with{" "}
              {site.coreStack.slice(0, 3).join(", ")} — responsive,
              maintainable and quick on every device.
            </p>
          </StaggerItem>

          <StaggerItem className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <LinkButton href={sectionHref("work")} className="group">
              View my work
              <ArrowRight
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </LinkButton>
            <LinkButton
              href={sectionHref("about")}
              variant="outline"
              className="group"
            >
              More about me
              <ArrowDown
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </LinkButton>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
