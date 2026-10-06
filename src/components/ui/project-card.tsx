import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { BentoCard } from "@/components/ui/bento";
import { Tag } from "@/components/ui/tag";
import { getCategoryLabel, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const VISIBLE_TAGS = 3;

type ProjectCardProps = {
  project: Project;
  /** Heading level, so the card fits the outline of the page it sits on. */
  as?: "h2" | "h3";
  /** Full-row variant with a wider image; use for the lead card in a grid. */
  wide?: boolean;
  priority?: boolean;
  className?: string;
};

export default function ProjectCard({
  project,
  as: Heading = "h3",
  wide = false,
  priority = false,
  className,
}: ProjectCardProps) {
  const hiddenTagCount = project.tags.length - VISIBLE_TAGS;

  return (
    <BentoCard
      as="article"
      className={cn("group flex h-full flex-col p-2", className)}
    >
      <div
        className={cn(
          "relative aspect-16/10 overflow-hidden rounded-2xl bg-muted",
          wide && "md:aspect-[2.5/1]",
        )}
      >
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          priority={priority}
          sizes={
            wide
              ? "(max-width: 1200px) 100vw, 1100px"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
          }
          className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
        />
        <span
          aria-hidden
          className="absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 translate-y-4 items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium whitespace-nowrap text-brand-foreground opacity-0 shadow-lg transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
        >
          View case study
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 pt-5 sm:p-5">
        <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <span>{getCategoryLabel(project.category)}</span>
          {project.rating && (
            <span className="inline-flex items-center gap-1">
              <Star className="size-3 fill-amber-400 text-amber-400" aria-hidden />
              <span className="sr-only">Rated</span>
              {project.rating.toFixed(1)}
            </span>
          )}
        </div>

        <Heading
          className={cn(
            "mt-3 font-medium tracking-tight",
            wide ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
          )}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="outline-none after:absolute after:inset-0 after:z-10 after:rounded-3xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50"
          >
            {project.title}
          </Link>
        </Heading>

        <p
          className={cn(
            "mt-2 text-sm leading-relaxed text-muted-foreground",
            wide ? "max-w-2xl" : "line-clamp-2",
          )}
        >
          {project.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.tags.slice(0, VISIBLE_TAGS).map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
          {hiddenTagCount > 0 && (
            <li>
              <Tag>+{hiddenTagCount}</Tag>
            </li>
          )}
        </ul>
      </div>
    </BentoCard>
  );
}
