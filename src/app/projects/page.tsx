'use client';

import { useState, FormEvent } from "react";
import Image from "next/image";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import data from "@/data/projects.json";

const projectCatalog = [
  {
    title: "AI Marketing Dashboard",
    image: "/projects/placeholder.jpg",
    summary:
      "A conversion intelligence workspace that blends campaign analytics, customer feedback, and growth experiments into a single command center.",
    deliverables: ["Real-time metrics", "Executive handoff docs", "Auto-escalation chatbot"],
  },
  {
    title: "Ecommerce Experience Refresh",
    image: "/projects/placeholder.jpg",
    summary:
      "High-velocity storefront revamp with motion-led product discovery, streamlined checkout, and Supabase-backed merchandising tools.",
    deliverables: ["UX testing suite", "Performance budget", "Launch playbook"],
  },
  {
    title: "Neon SaaS Landing System",
    image: "/projects/placeholder.jpg",
    summary:
      "A modular landing framework for rapid experimentation where every hero, CTA, and integration is wired for personalization and analytics.",
    deliverables: ["Component library", "AB test matrix", "CRM automations"],
  },
];

type FormStatus =
  | {
      type: "loading" | "success" | "error";
      message: string;
    }
  | null;

type FormField = "name" | "email" | "rating" | "message";

type FormState = {
  name: string;
  email: string;
  rating: string;
  message: string;
  status: FormStatus;
};

const blankForm: FormState = { name: "", email: "", rating: "5", message: "", status: null };

const Projects = () => {
  const [forms, setForms] = useState<FormState[]>(projectCatalog.map(() => ({ ...blankForm })));

  const handleInputChange = (index: number, field: FormField, value: string) => {
    setForms((prev) =>
      prev.map((form, i) => (i === index ? { ...form, [field]: value } : form))
    );
  };

  const handleSubmit = async (index: number, event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setForms((prev) =>
      prev.map((form, i) =>
        i === index
          ? {
              ...form,
              status: { type: "loading", message: "Sending..." },
            }
          : form
      )
    );

    const form = forms[index];
    try {
      const response = await fetch("/api/project-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          project: projectCatalog[index].title,
          name: form.name,
          email: form.email,
          rating: Number(form.rating),
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to send feedback right now.");
      }

      setForms((prev) =>
        prev.map((formState, i) =>
          i === index
            ? {
                ...blankForm,
                status: {
                  type: "success",
                  message: "Thanks! Feedback delivered to my inbox.",
                },
              }
            : formState
        )
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unexpected error. Please try again.";
      setForms((prev) =>
        prev.map((formState, i) =>
          i === index
            ? {
                ...formState,
                status: { type: "error", message: errorMessage },
              }
            : formState
        )
      );
    }
  };

  return (
    <>
      <section>
    <div className="relative z-10 mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="absolute z-10 inset-0 h-full w-full bg-black/60 dark:bg-black/70" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={data.images}
      />
      <div className="container">
        <div className="text-center text-white relative z-10">
          <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[22px] font-bold">Real-World Project Insights</h2>
          <div className="relative z-10 mt-4">
            <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute sm:top-[20px] top-[15px] xl:left-[38%] lg:left-[36%] md:left-[32%] sm:left-[28%] left-[18%] rounded"></span>
            <span className="block font-sans sm:text-[30px] text-[22px] leading-tigth">
              Behind the Code
            </span>
            <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute sm:top-[20px] top-[15px]  xl:right-[38%] lg:right-[36%] md:right-[32%] sm:right-[28%] right-[18%] rounded"></span>
          </div>
        </div>
      </div>
    </div>
  </section>

      <section className="relative z-10 overflow-hidden py-20 lg:py-[100px]">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-3">
            {projectCatalog.map((project, index) => {
              const form = forms[index];
              const isLoading = form.status?.type === "loading";

              return (
                <article
                  key={project.title}
                  className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.08] shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-fuchsia-500/80"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                      Dummy Project
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-6 p-6 text-white">
                    <div>
                      <h3 className="text-2xl font-semibold leading-tight">{project.title}</h3>
                      <p className="mt-2 text-sm text-white/70">{project.summary}</p>
                    </div>

                    <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                        Deliverables
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-white/70">
                        {project.deliverables.map((item) => (
                          <li key={`${project.title}-${item}`} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <form
                      className="mt-auto space-y-4"
                      onSubmit={(event) => handleSubmit(index, event)}
                    >
                      <div className="flex items-center gap-3">
                        <label
                          htmlFor={`rating-${index}`}
                          className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                        >
                          Rating
                        </label>
                        <input
                          id={`rating-${index}`}
                          type="range"
                          min="1"
                          max="5"
                          step="1"
                          value={form.rating}
                          onChange={(event) =>
                            handleInputChange(index, "rating", event.target.value)
                          }
                          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/20 accent-fuchsia-500"
                        />
                        <span className="w-8 text-right text-sm font-semibold text-white/70">
                          {form.rating}
                        </span>
                      </div>

                      <textarea
                        name="message"
                        value={form.message}
                        onChange={(event) =>
                          handleInputChange(index, "message", event.target.value)
                        }
                        placeholder="Share your experience with this project..."
                        rows={4}
                        className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500"
                        required
                      />

                      <button
                        type="submit"
                        // disabled={isLoading}
                        disabled={true}
                        className="w-full rounded-xl bg-gradient-to-r from-fuchsia-600 to-purple-600 px-4 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-fuchsia-500/25 transition hover:shadow-fuchsia-500/40 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isLoading ? "Sending..." : "Send Feedback"}
                      </button>

                      {form.status && form.status.type !== "loading" && (
                        <p
                          className={`text-sm ${
                            form.status.type === "success"
                              ? "text-emerald-400"
                              : "text-red-400"
                          }`}
                        >
                          {form.status.message}
                        </p>
                      )}
                    </form>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;