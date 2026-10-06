import { experiences } from "@/data/experience";
import {
  allProjects,
  getCategoryLabel,
  getProjectsHref,
  type Project,
} from "@/data/projects";
import { absoluteUrl, site, socials } from "@/data/site";
import { skillGroups } from "@/data/skills";

/** schema.org JSON-LD builders. Node ids let the graphs reference each other. */

const PERSON_ID = `${site.url}/#person`;
const WEBSITE_ID = `${site.url}/#website`;

type JsonLdNode = Record<string, unknown>;

export function personSchema(): JsonLdNode {
  const currentEmployers = experiences
    .filter((experience) => experience.current)
    .map((experience) => ({
      "@type": "Organization",
      name: experience.company,
    }));

  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.name,
    url: site.url,
    image: absoluteUrl(site.portrait),
    jobTitle: site.role,
    description: site.description,
    email: `mailto:${site.email}`,
    sameAs: socials
      .filter((social) => social.icon === "github" || social.icon === "linkedin")
      .map((social) => social.href),
    knowsAbout: skillGroups.flatMap((group) =>
      group.skills.map((skill) => skill.label),
    ),
    ...(currentEmployers.length > 0 && { worksFor: currentEmployers }),
  };
}

export function websiteSchema(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: `${site.name} — Portfolio`,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

/** Site-wide graph, rendered once in the root layout. */
export function siteGraph(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [personSchema(), websiteSchema()],
  };
}

export function profilePageSchema(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${site.url}/#profile`,
    url: site.url,
    name: site.title,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
  };
}

function breadcrumbSchema(trail: { name: string; path: string }[]): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function projectsCollectionSchema(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/projects")}#collection`,
        url: absoluteUrl("/projects"),
        name: `Projects by ${site.name}`,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: allProjects.length,
          itemListElement: allProjects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.title,
            url: absoluteUrl(`/projects/${project.slug}`),
          })),
        },
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
      ]),
    ],
  };
}

export function projectSchema(project: Project): JsonLdNode {
  const path = `/projects/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${absoluteUrl(path)}#work`,
        url: absoluteUrl(path),
        name: project.title,
        headline: project.title,
        description: project.description,
        abstract: project.overview.join(" "),
        image: project.gallery.map((image) => absoluteUrl(image)),
        genre: getCategoryLabel(project.category),
        keywords: project.tags.join(", "),
        inLanguage: "en",
        creator: { "@id": PERSON_ID },
        author: { "@id": PERSON_ID },
        isPartOf: { "@id": WEBSITE_ID },
        ...(project.liveLink && { sameAs: project.liveLink }),
      },
      // Mirrors the visible breadcrumb trail on the case-study page.
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        {
          name: getCategoryLabel(project.category),
          path: getProjectsHref({ category: project.category }),
        },
        { name: project.title, path },
      ]),
    ],
  };
}
