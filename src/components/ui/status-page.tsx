import type { ReactNode } from "react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Backdrop } from "@/components/ui/backdrop";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";

type StatusPageProps = {
  eyebrow: string;
  /** Large decorative mark above the title, e.g. "404". */
  mark?: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
};

/** Centred, single-message page layout shared by 404 and confirmation screens. */
export function StatusPage({
  eyebrow,
  mark,
  title,
  description,
  children,
}: StatusPageProps) {
  return (
    <div className="relative isolate overflow-hidden">
      <Backdrop />

      <Container>
        <Stagger
          immediate
          stagger={0.1}
          className="flex min-h-[calc(100svh-5rem)] flex-col items-center justify-center py-20 text-center"
        >
          <StaggerItem>
            <Eyebrow>{eyebrow}</Eyebrow>
          </StaggerItem>
          {mark && (
            <StaggerItem>
              <p
                aria-hidden
                className="mt-4 font-serif text-[9rem] leading-none text-brand-ink italic sm:text-[13rem]"
              >
                {mark}
              </p>
            </StaggerItem>
          )}
          <StaggerItem>
            <h1 className="mt-6 text-4xl leading-[1.02] font-medium tracking-[-0.035em] text-balance sm:text-6xl">
              {title}
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-5 max-w-md text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
              {description}
            </p>
          </StaggerItem>
          {children && (
            <StaggerItem className="mt-9 flex flex-wrap items-center justify-center gap-3">
              {children}
            </StaggerItem>
          )}
        </Stagger>
      </Container>
    </div>
  );
}
