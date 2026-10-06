import type { Metadata } from "next";
import ProjectsCatalog from "@/components/sections/projects/projects-catalog";
import { JsonLd } from "@/components/seo/json-ld";
import {
  allProjects,
  getCategoryLabel,
  getPaginatedProjects,
  getProjectsHref,
  parseProjectCategory,
  type ProjectCategory,
} from "@/data/projects";
import { defaultShareImage, site } from "@/data/site";
import { projectsCollectionSchema } from "@/lib/structured-data";

type PageProps = {
  searchParams: Promise<{ page?: string; category?: string }>;
};

function parseView(params: { page?: string; category?: string }): {
  page: number;
  category: ProjectCategory;
} {
  const parsedPage = Number.parseInt(params.page ?? "1", 10);

  return {
    page: Number.isNaN(parsedPage) ? 1 : parsedPage,
    category: parseProjectCategory(params.category),
  };
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { page, category } = parseView(await searchParams);
  const { currentPage } = getPaginatedProjects({ page, category });

  const isFiltered = category !== "all";
  const title = [
    isFiltered
      ? `${getCategoryLabel(category)} Projects`
      : "Projects & Case Studies",
    currentPage > 1 && `Page ${currentPage}`,
  ]
    .filter(Boolean)
    .join(" — ");
  const description = `Browse ${allProjects.length} projects by ${site.name} — landing pages, websites, e-commerce, AI apps and real-time products built with React and Next.js.`;

  // Each page of the full list is its own indexable URL. Category filters are
  // subsets of that list, so they point search engines back to it.
  const canonical = isFiltered
    ? "/projects"
    : getProjectsHref({ page: currentPage });

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: site.name,
      locale: site.locale,
      title: `${title} · ${site.name}`,
      description,
      images: [defaultShareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description,
      creator: site.twitterHandle,
      images: [defaultShareImage],
    },
  };
}

export default async function ProjectsPage({ searchParams }: PageProps) {
  const { page, category } = parseView(await searchParams);
  const { projects, currentPage, totalPages, totalProjects } =
    getPaginatedProjects({ page, category });

  return (
    <>
      <JsonLd data={projectsCollectionSchema()} />
      <ProjectsCatalog
        projects={projects}
        category={category}
        currentPage={currentPage}
        totalPages={totalPages}
        totalProjects={totalProjects}
      />
    </>
  );
}
