import { ArrowRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { LinkButton } from "@/components/ui/link-button";
import ProjectCard from "@/components/ui/project-card";
import { Em, Section, SectionHeader } from "@/components/ui/section";
import { allProjects, featuredProjects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="work">
      <SectionHeader
        index="03"
        eyebrow="Work"
        title={
          <>
            Selected <Em>projects.</Em>
          </>
        }
        description="A few builds I'm proud of — each with a short case study covering the stack, the delivery and the outcome."
        action={
          <LinkButton href="/projects" variant="outline" className="group">
            All {allProjects.length} projects
            <ArrowRight
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </LinkButton>
        }
      />

      <Stagger
        as="ul"
        stagger={0.1}
        className="mt-12 grid gap-3 sm:gap-4 md:grid-cols-2"
      >
        {featuredProjects.map((project, index) => (
          <StaggerItem
            as="li"
            key={project.id}
            className={index === 0 ? "md:col-span-2" : undefined}
          >
            <ProjectCard
              project={project}
              wide={index === 0}
              priority={index === 0}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
