import type { ComponentProps, ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("scroll-mt-24 py-16 lg:py-24", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

/** Serif-italic accent for a word or phrase inside a display heading. */
export function Em({ children }: { children: ReactNode }) {
  return (
    <em className="pr-[0.06em] font-serif text-[1.08em] font-normal text-brand-ink italic">
      {children}
    </em>
  );
}

export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",
        className,
      )}
    >
      <span aria-hidden className="size-1.5 rounded-[2px] bg-brand" />
      {index && <span className="text-foreground">{index}</span>}
      {children}
    </p>
  );
}

type SectionHeaderProps = {
  index?: string;
  eyebrow: string;
  /** Wrap the phrase to emphasise in <Em>. */
  title: ReactNode;
  description?: string;
  action?: ReactNode;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  action,
  as: Heading = "h2",
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="max-w-3xl">
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <Heading className="mt-5 text-4xl leading-[1.02] font-medium tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">
          {title}
        </Heading>
        {description && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
