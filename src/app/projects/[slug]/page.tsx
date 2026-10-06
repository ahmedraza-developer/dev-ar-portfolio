import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailView from "@/components/sections/projects/project-detail";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getCategoryLabel,
  getProjectBySlug,
  getProjectSlugs,
} from "@/data/projects";
import { site } from "@/data/site";
import { projectSchema } from "@/lib/structured-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found", robots: { index: false } };
  }

  const path = `/projects/${project.slug}`;
  const title = `${project.title} — ${getCategoryLabel(project.category)} Case Study`;
  const images = [{ url: project.image, alt: `${project.title} — main screen` }];

  return {
    title,
    description: project.description,
    keywords: [project.title, ...project.tags, `${site.name} portfolio`],
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      siteName: site.name,
      locale: site.locale,
      title: `${title} · ${site.name}`,
      description: project.description,
      authors: [site.name],
      tags: project.tags,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${site.name}`,
      description: project.description,
      creator: site.twitterHandle,
      images,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <JsonLd data={projectSchema(project)} />
      <ProjectDetailView project={project} />
    </>
  );
}
