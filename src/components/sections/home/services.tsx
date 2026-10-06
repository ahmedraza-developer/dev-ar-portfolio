import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { BentoCard } from "@/components/ui/bento";
import { Em, Section, SectionHeader } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { services } from "@/data/services";

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader
        index="01"
        eyebrow="Services"
        title={
          <>
            What I can help <Em>you ship.</Em>
          </>
        }
        description="From a single landing page to a full product front end — built to be fast, accessible and easy to maintain."
      />

      <Stagger
        as="ul"
        stagger={0.07}
        className="mt-12 grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <StaggerItem as="li" key={service.title}>
              <BentoCard className="group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-muted/40 sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-muted text-foreground transition-[background-color,color,transform] duration-500 ease-out group-hover:-rotate-6 group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span
                    aria-hidden
                    className="font-mono text-xs text-muted-foreground/60"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-10 text-2xl font-medium tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {service.stack.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
