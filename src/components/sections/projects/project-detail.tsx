import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  Star,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Backdrop } from "@/components/ui/backdrop";
import { BentoCard, BentoLabel, bentoSurface } from "@/components/ui/bento";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import ProjectCard from "@/components/ui/project-card";
import { Eyebrow } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import {
  getAdjacentProjects,
  getCategoryLabel,
  getProjectsHref,
  getRelatedProjects,
  type Project,
} from "@/data/projects";
import { sectionHref } from "@/data/site";
import { cn } from "@/lib/utils";

function DetailSection({
  index,
  title,
  description,
  children,
}: {
  index: number;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-6 border-t border-border py-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 lg:py-16">
      <Reveal>
        <Eyebrow>{String(index).padStart(2, "0")}</Eyebrow>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em]">{title}</h2>
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </Reveal>
      <Reveal delay={0.1}>{children}</Reveal>
    </section>
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Breadcrumbs({ project }: { project: Project }) {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    {
      label: getCategoryLabel(project.category),
      href: getProjectsHref({ category: project.category }),
    },
  ];
  const linkClass =
    "rounded-sm transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-muted-foreground">
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-1.5">
            <Link href={crumb.href} className={linkClass}>
              {crumb.label}
            </Link>
            <ChevronRight className="size-3.5 opacity-60" aria-hidden />
          </li>
        ))}
        <li aria-current="page" className="text-foreground">
          {project.title}
        </li>
      </ol>
    </nav>
  );
}

function AdjacentLink({
  project,
  direction,
}: {
  project: Project;
  direction: "previous" | "next";
}) {
  const isNext = direction === "next";

  return (
    <BentoCard
      className={cn(
        "transition-colors duration-300 hover:bg-muted/40",
        isNext && "sm:col-start-2",
      )}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "group flex h-full flex-col gap-3 rounded-3xl p-6 outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
          isNext && "sm:items-end sm:text-right",
        )}
      >
        <BentoLabel className="inline-flex items-center gap-2">
          {!isNext && (
            <ArrowLeft
              className="size-3.5 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden
            />
          )}
          {isNext ? "Next project" : "Previous project"}
          {isNext && (
            <ArrowRight
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          )}
        </BentoLabel>
        <span className="text-2xl font-medium tracking-tight">
          {project.title}
        </span>
      </Link>
    </BentoCard>
  );
}

export default function ProjectDetailView({ project }: { project: Project }) {
  const { previous, next } = getAdjacentProjects(project.slug);
  const related = getRelatedProjects(project.slug);
  const { clientFeedback, infrastructure } = project;
  const gallery = project.gallery.slice(1);

  const meta = [
    { label: "Role", value: project.role },
    { label: "Category", value: getCategoryLabel(project.category) },
    ...(project.timeline ? [{ label: "Timeline", value: project.timeline }] : []),
  ];

  // Sections are numbered in render order, skipping any that have no content.
  let sectionIndex = 0;

  return (
    <article className="relative isolate">
      <Backdrop />

      <Container className="pt-10 pb-12 lg:pt-14 lg:pb-16">
        <Stagger immediate stagger={0.09}>
          <StaggerItem>
            <Breadcrumbs project={project} />
          </StaggerItem>

          <header className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-4xl">
              <StaggerItem>
                <Eyebrow>{getCategoryLabel(project.category)} case study</Eyebrow>
              </StaggerItem>
              <StaggerItem>
                <h1 className="mt-5 text-[2.5rem] leading-[0.98] font-medium tracking-[-0.045em] text-balance wrap-break-word sm:text-6xl lg:text-7xl">
                  {project.title}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
                  {project.description}
                </p>
              </StaggerItem>
            </div>

            {project.liveLink && (
              <StaggerItem>
                <LinkButton href={project.liveLink} newTab className="w-fit">
                  Visit live site
                  <ExternalLink aria-hidden />
                </LinkButton>
              </StaggerItem>
            )}
          </header>

          <StaggerItem y={40} className={cn(bentoSurface, "mt-12 p-2")}>
            <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-muted sm:aspect-video">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1088px"
                className="object-cover object-top"
              />
            </div>
          </StaggerItem>

          <StaggerItem>
            <dl className="mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4 md:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label} className={cn(bentoSurface, "p-5")}>
                  <dt>
                    <BentoLabel>{item.label}</BentoLabel>
                  </dt>
                  <dd className="mt-3 text-lg font-medium tracking-tight">
                    {item.value}
                  </dd>
                </div>
              ))}
              {project.rating && (
                <div className={cn(bentoSurface, "p-5")}>
                  <dt>
                    <BentoLabel>Rating</BentoLabel>
                  </dt>
                  <dd className="mt-3 flex items-center gap-1.5 text-lg font-medium tracking-tight">
                    <Star
                      className="size-4 fill-amber-400 text-amber-400"
                      aria-hidden
                    />
                    {project.rating.toFixed(1)}
                    {project.ratingCount && (
                      <span className="text-sm font-normal text-muted-foreground">
                        ({project.ratingCount})
                      </span>
                    )}
                  </dd>
                </div>
              )}
            </dl>
          </StaggerItem>
        </Stagger>
      </Container>

      <Container>
        <DetailSection
          index={++sectionIndex}
          title="Overview"
          description="What the product is and what the build covered."
        >
          <div className="space-y-5 text-pretty">
            {project.overview.map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-xl leading-snug font-medium tracking-tight sm:text-2xl sm:leading-snug"
                    : "text-base leading-relaxed text-muted-foreground sm:text-lg"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <BentoLabel>Stack</BentoLabel>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
            </div>
            {project.deliverables.length > 0 && (
              <div>
                <BentoLabel>Delivered</BentoLabel>
                <ul className="mt-3 space-y-2">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <Check
                        className="size-4 shrink-0 text-brand-ink"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </DetailSection>

        {project.highlights.length > 0 && (
          <DetailSection
            index={++sectionIndex}
            title="What I built"
            description="The interface pieces that make up the build."
          >
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {project.highlights.map((highlight, index) => (
                <li key={highlight.title}>
                  <BentoCard className="flex h-full flex-col p-6">
                    <span
                      aria-hidden
                      className="font-mono text-xs text-muted-foreground/60"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-6 text-lg font-medium tracking-tight">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {highlight.detail}
                    </p>
                  </BentoCard>
                </li>
              ))}
            </ul>
          </DetailSection>
        )}

        {gallery.length > 0 && (
          <DetailSection index={++sectionIndex} title="More screens">
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {gallery.map((image, index) => (
                <li key={image} className={cn(bentoSurface, "group p-2")}>
                  <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-muted">
                    <Image
                      src={image}
                      alt={`${project.title} — screen ${index + 2}`}
                      fill
                      sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 400px"
                      className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </DetailSection>
        )}

        {infrastructure && infrastructure.length > 0 && (
          <DetailSection
            index={++sectionIndex}
            title="Technical setup"
            description="How the project was structured across frontend, backend, and delivery."
          >
            <div
              className={cn(bentoSurface, "divide-y divide-border overflow-hidden")}
            >
              {infrastructure.map((group) => (
                <div key={group.title} className="p-6 sm:p-7">
                  <h3 className="text-lg font-medium tracking-tight">
                    {group.title}
                  </h3>
                  <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <div key={item.label}>
                        <dt>
                          <BentoLabel>{item.label}</BentoLabel>
                        </dt>
                        <dd className="mt-1.5 text-sm leading-relaxed">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        {clientFeedback && (
          <DetailSection index={++sectionIndex} title="Client feedback">
            <figure className={cn(bentoSurface, "p-6 sm:p-10")}>
              <span
                aria-hidden
                className="block h-12 font-serif text-8xl leading-none text-brand-ink italic select-none"
              >
                &ldquo;
              </span>
              <blockquote className="mt-4 text-2xl leading-snug font-medium tracking-tight text-pretty sm:text-3xl sm:leading-snug">
                {clientFeedback.quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 border-t border-border pt-6">
                <span
                  aria-hidden
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-brand font-mono text-sm font-semibold text-brand-foreground"
                >
                  {getInitials(clientFeedback.name)}
                </span>
                <span>
                  <span className="block font-medium">{clientFeedback.name}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">
                    {clientFeedback.role}
                    {clientFeedback.company && ` · ${clientFeedback.company}`}
                  </span>
                </span>
              </figcaption>
            </figure>
          </DetailSection>
        )}

        {related.length > 0 && (
          <section className="border-t border-border py-12 lg:py-16">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Eyebrow>Keep reading</Eyebrow>
                <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em]">
                  Related projects
                </h2>
              </div>
              <LinkButton href="/projects" variant="outline" size="sm" className="group">
                All projects
                <ArrowRight
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </LinkButton>
            </Reveal>
            <Stagger
              as="ul"
              className="mt-8 grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3"
            >
              {related.map((item) => (
                <StaggerItem as="li" key={item.id}>
                  <ProjectCard project={item} />
                </StaggerItem>
              ))}
            </Stagger>
          </section>
        )}

        <Reveal
          className={cn(
            bentoSurface,
            "flex flex-col gap-8 rounded-[2rem] border-transparent bg-brand p-8 text-brand-foreground sm:flex-row sm:items-end sm:justify-between sm:p-12",
          )}
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
              Interested in similar work?
            </p>
            <p className="mt-4 max-w-xl text-4xl leading-[1.02] font-medium tracking-[-0.04em] sm:text-5xl">
              Let&apos;s build your next project together.
            </p>
          </div>
          <Link
            href={sectionHref("contact")}
            className="group inline-flex h-12 w-fit shrink-0 items-center gap-2 rounded-full bg-brand-foreground px-6 text-sm font-medium text-brand transition-transform duration-300 ease-out outline-none hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-brand-foreground/50"
          >
            Get in touch
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </Reveal>

        {(previous || next) && (
          <nav
            aria-label="More projects"
            className="grid gap-3 pt-3 pb-16 sm:grid-cols-2 sm:gap-4 sm:pt-4 lg:pb-24"
          >
            {previous && <AdjacentLink project={previous} direction="previous" />}
            {next && <AdjacentLink project={next} direction="next" />}
          </nav>
        )}
      </Container>
    </article>
  );
}
