import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import ProjectsFilter from "@/components/sections/projects/projects-filter";
import ProjectsPagination from "@/components/sections/projects/projects-pagination";
import { Backdrop } from "@/components/ui/backdrop";
import { Container } from "@/components/ui/container";
import ProjectCard from "@/components/ui/project-card";
import { ScrollOnChange } from "@/components/ui/scroll-on-change";
import { Em, SectionHeader } from "@/components/ui/section";
import type { Project, ProjectCategory } from "@/data/projects";

const CATALOG_ID = "project-catalog";

type ProjectsCatalogProps = {
  projects: Project[];
  category: ProjectCategory;
  currentPage: number;
  totalPages: number;
  totalProjects: number;
};

export default function ProjectsCatalog({
  projects,
  category,
  currentPage,
  totalPages,
  totalProjects,
}: ProjectsCatalogProps) {
  const viewKey = `${category}:${currentPage}`;

  return (
    <div className="relative isolate">
      <Backdrop />

      <Container className="pt-12 pb-16 lg:pt-16 lg:pb-24">
        <SectionHeader
          as="h1"
          eyebrow="Work"
          title={
            <>
              All <Em>projects.</Em>
            </>
          }
          description="Landing pages, marketing sites, e-commerce, AI products and real-time apps — browse the full catalogue or filter by type."
        />

        <div id={CATALOG_ID} className="mt-10 scroll-mt-28">
          <ScrollOnChange targetId={CATALOG_ID} watch={viewKey} />
          <Reveal delay={0.1}>
            <ProjectsFilter active={category} />
          </Reveal>

          <p
            className="mt-6 font-mono text-xs text-muted-foreground"
            aria-live="polite"
          >
            {totalProjects} {totalProjects === 1 ? "project" : "projects"}
            {totalPages > 1 && ` · page ${currentPage} of ${totalPages}`}
          </p>

          {/* Keyed so the grid replays its entrance whenever the filter or page changes. */}
          <Stagger
            key={viewKey}
            as="ul"
            immediate
            delay={0.15}
            className="mt-6 grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {projects.map((project, index) => (
              <StaggerItem as="li" key={project.id}>
                <ProjectCard project={project} as="h2" priority={index < 3} />
              </StaggerItem>
            ))}
          </Stagger>

          <ProjectsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            category={category}
          />
        </div>
      </Container>
    </div>
  );
}
