import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { bentoSurface } from "@/components/ui/bento";
import { Em, Section, SectionHeader } from "@/components/ui/section";
import { experiences } from "@/data/experience";
import { getYearsOfExperience } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        index="04"
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <Em>contributed.</Em>
          </>
        }
        description={`${getYearsOfExperience()}+ years across ${experiences.length} teams — from intern to senior engineer.`}
      />

      <Reveal className={cn(bentoSurface, "mt-12 overflow-hidden")}>
        <Stagger as="ol" stagger={0.07} className="divide-y divide-border">
          {experiences.map((experience, index) => (
            <StaggerItem
              as="li"
              y={12}
              key={`${experience.company}-${experience.period}`}
              className="group grid gap-x-8 gap-y-2 p-6 transition-colors duration-300 hover:bg-muted/50 sm:p-7 md:grid-cols-[3rem_1fr_auto] md:items-center"
            >
              <span
                aria-hidden
                className="font-mono text-xs text-muted-foreground/60 transition-colors duration-300 group-hover:text-brand-ink max-md:hidden"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-xl font-medium tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-1 sm:text-2xl">
                  {experience.role}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {experience.company}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {experience.current && (
                  <p className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-xs font-medium text-brand-foreground">
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-brand-foreground"
                    />
                    Current
                  </p>
                )}
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {experience.period}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Reveal>
    </Section>
  );
}
