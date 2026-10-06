import Link from "next/link";
import {
  getProjectCategories,
  getProjectsHref,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

export default function ProjectsFilter({ active }: { active: ProjectCategory }) {
  return (
    <nav aria-label="Filter projects by category">
      <ul className="flex flex-wrap gap-2">
        {getProjectCategories().map(({ category, label, count }) => {
          const isActive = category === active;

          return (
            <li key={category}>
              <Link
                href={getProjectsHref({ category })}
                scroll={false}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-300 outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
                  isActive
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card/60 text-muted-foreground backdrop-blur-sm hover:border-foreground/30 hover:text-foreground",
                )}
              >
                {label}
                <span
                  className={cn(
                    "font-mono text-[11px] tabular-nums",
                    isActive ? "text-background/60" : "text-muted-foreground/60",
                  )}
                >
                  {count}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
