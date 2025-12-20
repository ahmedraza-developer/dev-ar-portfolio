"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import data from "@/data/projects.json";
import {
  getProjectsByCategory,
  type ProjectCategory,
} from "@/data/projects-data";

const PROJECTS_PER_PAGE = 9;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingImages, setLoadingImages] = useState<Set<number>>(new Set());

  // Get filtered projects based on category
  const filteredProjects = useMemo(
    () => getProjectsByCategory(activeCategory),
    [activeCategory]
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, currentPage]);

  // Reset to page 1 when category changes
  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleImageLoad = (projectId: number) => {
    setLoadingImages((prev) => {
      const next = new Set(prev);
      next.delete(projectId);
      return next;
    });
  };

  const handleImageError = (projectId: number) => {
    setLoadingImages((prev) => {
      const next = new Set(prev);
      next.delete(projectId);
      return next;
    });
  };

  // Initialize loading states when page or category changes
  useEffect(() => {
    const currentStartIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const currentEndIndex = currentStartIndex + PROJECTS_PER_PAGE;
    const currentProjects = filteredProjects.slice(currentStartIndex, currentEndIndex);
    const initialLoadingSet = new Set(currentProjects.map((p) => p.id));
    setLoadingImages(initialLoadingSet);
  }, [currentPage, activeCategory, filteredProjects]);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-12">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex items-center gap-1">
          {startPage > 1 && (
            <>
              <Button
                variant={currentPage === 1 ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(1)}
                className="min-w-[40px]"
              >
                1
              </Button>
              {startPage > 2 && (
                <span className="px-2 text-white/50">...</span>
              )}
            </>
          )}

          {pages.map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(page)}
              className="min-w-[40px]"
            >
              {page}
            </Button>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <span className="px-2 text-white/50">...</span>
              )}
              <Button
                variant={currentPage === totalPages ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(totalPages)}
                className="min-w-[40px]"
              >
                {totalPages}
              </Button>
            </>
          )}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="relative z-10 mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden">
          <div className="absolute z-10 inset-0 h-full w-full bg-black/60 dark:bg-black/70" />
          <ThreeDMarquee
            className="pointer-events-none absolute inset-0 h-full w-full"
            images={data.images}
          />
          <div className="container">
            <div className="text-center text-white relative z-10">
              <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[22px] font-bold">
                Real-World Project Insights
              </h2>
              <div className="relative z-10 mt-4">
                <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute sm:top-[20px] top-[15px] xl:left-[38%] lg:left-[36%] md:left-[32%] sm:left-[28%] left-[18%] rounded"></span>
                <span className="block font-sans sm:text-[30px] text-[22px] leading-tight">
                  Behind the Code
                </span>
                <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute sm:top-[20px] top-[15px] xl:right-[38%] lg:right-[36%] md:right-[32%] sm:right-[28%] right-[18%] rounded"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Tabs */}
      <section className="relative z-10 overflow-hidden py-20 lg:py-[100px]">
        <div className="container">
          <Tabs
            value={activeCategory}
            onValueChange={(value) => handleCategoryChange(value as ProjectCategory)}
            className="w-full"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <TabsList className="w-full flex-nowrap whitespace-nowrap overflow-x-auto sm:justify-center justify-start sm:w-auto gap-x-4 bg-white/5 border border-white/10 backdrop-blur">
                <TabsTrigger value="all" className="data-[state=active]:bg-fuchsia-600">
                  All
                </TabsTrigger>
                <TabsTrigger value="landingPages" className="data-[state=active]:bg-fuchsia-600">
                  Landing Pages
                </TabsTrigger>
                <TabsTrigger value="websites" className="data-[state=active]:bg-fuchsia-600">
                  Websites
                </TabsTrigger>
                <TabsTrigger value="ai" className="data-[state=active]:bg-fuchsia-600">
                  AI Related
                </TabsTrigger>
                <TabsTrigger value="ecommerce" className="data-[state=active]:bg-fuchsia-600">
                  Ecommerce
                </TabsTrigger>
                <TabsTrigger value="crm" className="data-[state=active]:bg-fuchsia-600">
                  CRM
                </TabsTrigger>
                <TabsTrigger value="communication" className="data-[state=active]:bg-fuchsia-600">
                  Communication
                </TabsTrigger>
              </TabsList>
            </div>

            {/* All Categories Content */}
            {(["all", "landingPages", "websites", "ai", "ecommerce", "crm", "communication"] as ProjectCategory[]).map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                {paginatedProjects.length > 0 ? (
                  <>
                    <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                      {paginatedProjects.map((project) => (
                        <article
                          key={project.id}
                          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.08] shadow-xl shadow-black/20 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-fuchsia-500/80 hover:shadow-fuchsia-500/20"
                        >
                          {/* Image */}
                          <div className="relative h-56 w-full overflow-hidden">
                            {/* Skeleton Loader */}
                            {loadingImages.has(project.id) && (
                              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse">
                                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-pink-500/10" />
                              </div>
                            )}

                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 400px"
                              className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                                loadingImages.has(project.id)
                                  ? "opacity-0"
                                  : "opacity-100"
                              }`}
                              onLoad={() => handleImageLoad(project.id)}
                              onError={() => handleImageError(project.id)}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Rating Badge */}
                            {project.rating && (
                              <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur px-3 py-1.5 rounded-full text-white text-sm">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold">{project.rating}</span>
                                {project.ratingCount && (
                                  <span className="text-white/70 text-xs">
                                    ({project.ratingCount})
                                  </span>
                                )}
                              </div>
                            )}

                            {/* External Link Button */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {project.link !== "#" && (
                                <Link
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-lg"
                                >
                                  View Project
                                  <ExternalLink className="h-4 w-4" />
                                </Link>
                              )}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex flex-1 flex-col gap-4 p-6 text-white">
                            <div>
                              <h3 className="text-2xl font-semibold leading-tight mb-2">
                                {project.title}
                              </h3>
                              <p className="text-sm text-white/70 leading-relaxed">
                                {project.description}
                              </p>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                              {project.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 text-xs font-medium rounded-full bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30"
                                >
                                  {tag}
                                </span>
                              ))}
                              {project.tags.length > 3 && (
                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white/70">
                                  +{project.tags.length - 3} more
                                </span>
                              )}
                            </div>

                            {/* Deliverables */}
                            {project.deliverables && project.deliverables.length > 0 && (
                              <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                                <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50 mb-3">
                                  Deliverables
                                </h4>
                                <ul className="space-y-2 text-sm text-white/70">
                                  {project.deliverables.slice(0, 3).map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-fuchsia-500 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </article>
                      ))}
                    </div>

                    {/* Pagination */}
                    {renderPagination()}
                  </>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-white/70 text-lg">
                      No projects found in this category.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Projects;
