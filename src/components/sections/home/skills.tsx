import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { BentoCard, BentoLabel } from "@/components/ui/bento";
import { Em, Section, SectionHeader } from "@/components/ui/section";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

/** The first two groups take half the row each; the rest sit three across. */
function spanFor(index: number): string {
  return index < 2 ? "lg:col-span-3" : "lg:col-span-2";
}

export default function Skills() {
  return (
    <Section id="stack">
      <SectionHeader
        index="02"
        eyebrow="Stack"
        title={
          <>
            Tools I reach for <Em>every day.</Em>
          </>
        }
        description="A front-end-first toolkit, with enough backend and data experience to own a feature end to end."
      />

      <Stagger
        stagger={0.07}
        className="mt-12 grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-6"
      >
        {skillGroups.map((group, index) => (
          <StaggerItem key={group.title} className={spanFor(index)}>
            <BentoCard className="flex h-full flex-col gap-8 p-6">
              <div className="flex items-center justify-between">
                <BentoLabel>{group.title}</BentoLabel>
                <span
                  aria-hidden
                  className="font-mono text-xs text-muted-foreground/60 tabular-nums"
                >
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-auto flex flex-wrap gap-2">
                {group.skills.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className={cn(
                      "inline-flex items-center gap-2.5 rounded-full border border-border bg-background py-1.5 pr-4 pl-1.5 text-sm font-medium",
                      "transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-ink/60",
                    )}
                  >
                    {/* Brand marks are drawn for light surfaces, so they sit on a white tile in both themes. */}
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white ring-1 ring-black/10">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </BentoCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
