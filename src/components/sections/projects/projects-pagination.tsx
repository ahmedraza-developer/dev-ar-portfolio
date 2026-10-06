import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { getProjectsHref, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectsPaginationProps = {
  currentPage: number;
  totalPages: number;
  category: ProjectCategory;
};

function getVisiblePages(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current <= 3) {
    return [1, 2, 3, "ellipsis", total];
  }

  if (current >= total - 2) {
    return [1, "ellipsis", total - 2, total - 1, total];
  }

  return [1, "ellipsis", current, "ellipsis", total];
}

export default function ProjectsPagination({
  currentPage,
  totalPages,
  category,
}: ProjectsPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getVisiblePages(currentPage, totalPages);
  const hrefFor = (page: number) => getProjectsHref({ page, category });
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        <PaginationItem>
          <Link
            href={hrefFor(Math.max(1, currentPage - 1))}
            scroll={false}
            aria-disabled={isFirst}
            tabIndex={isFirst ? -1 : undefined}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "gap-1 rounded-full pr-3.5 pl-2.5",
              isFirst && "pointer-events-none opacity-50",
            )}
          >
            <ChevronLeftIcon aria-hidden />
            <span className="hidden sm:inline">Previous</span>
            <span className="sr-only sm:hidden">Previous page</span>
          </Link>
        </PaginationItem>

        {pages.map((page, i) =>
          page === "ellipsis" ? (
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={page}>
              <Link
                href={hrefFor(page)}
                scroll={false}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
                className={cn(
                  buttonVariants({
                    variant: page === currentPage ? "default" : "ghost",
                    size: "icon",
                  }),
                  "rounded-full tabular-nums",
                )}
              >
                {page}
              </Link>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <Link
            href={hrefFor(Math.min(totalPages, currentPage + 1))}
            scroll={false}
            aria-disabled={isLast}
            tabIndex={isLast ? -1 : undefined}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "gap-1 rounded-full pr-2.5 pl-3.5",
              isLast && "pointer-events-none opacity-50",
            )}
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sr-only sm:hidden">Next page</span>
            <ChevronRightIcon aria-hidden />
          </Link>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
