import Image from "next/image";
import Link from "next/link";
import portrait from "media/home/profile-ahmed-raza.png";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Counter } from "@/components/motion/counter";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { BentoCard, BentoLabel, bentoSurface } from "@/components/ui/bento";
import { Marquee } from "@/components/ui/marquee";
import { Section } from "@/components/ui/section";
import { SocialLinks } from "@/components/ui/social-links";
import { experiences } from "@/data/experience";
import { allProjects } from "@/data/projects";
import { getYearsOfExperience, sectionHref, site } from "@/data/site";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

const [lead, ...details] = [
  "I am a front-end developer specializing in HTML5, CSS3, and modern JavaScript (ES6+), with strong expertise in React and Next.js for building scalable, high-performance web applications. I work extensively with Bootstrap 4/5, Tailwind CSS (v3/v4), Shadcn UI, Aceternity UI, Hero UI, and Magic UI to create clean, responsive, and accessible interfaces.",
  "I have hands-on experience using Vite for small to medium-sized projects and single-page applications, and I have worked with Vue.js where appropriate. For large, enterprise-scale applications requiring a structured, maintainable codebase and team collaboration, I prefer Angular.",
  "On the backend side, I have working knowledge of Supabase, Convex, Neon, and MongoDB for designing reliable data layers, authentication flows, and database-driven applications. I value clean architecture, clear communication, and delivering intuitive user experiences with measurable impact.",
];

const allSkills = skillGroups.flatMap((group) => group.skills);
const half = Math.ceil(allSkills.length / 2);
const skillRows = [allSkills.slice(0, half), allSkills.slice(half)];
const currentRoles = experiences.filter((experience) => experience.current);

const statNumberClass =
  "text-6xl leading-none font-medium tracking-[-0.05em] tabular-nums sm:text-7xl";

export default function About() {
  return (
    <Section id="about" className="pt-0 lg:pt-0">
      <Stagger
        stagger={0.07}
        className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12"
      >
        {/* Portrait */}
        <StaggerItem className="col-span-2 lg:col-span-5 lg:row-span-2">
          <BentoCard className="group h-full min-h-[26rem] overflow-hidden">
            <Image
              src={portrait}
              alt={`Portrait of ${site.name}`}
              placeholder="blur"
              fill
              sizes="(max-width: 992px) 100vw, 460px"
              className="object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <div className="text-white">
                <p className="text-2xl font-medium tracking-tight">{site.name}</p>
                <p className="mt-1 text-sm text-white/70">{site.role}</p>
              </div>
              <SocialLinks tone="overlay" className="shrink-0 max-sm:hidden" />
            </div>
          </BentoCard>
        </StaggerItem>

        {/* Bio */}
        <StaggerItem className="col-span-2 lg:col-span-7 lg:row-span-2">
          <BentoCard className="flex h-full flex-col p-6 sm:p-8">
            <BentoLabel>About</BentoLabel>
            <p className="mt-5 text-xl leading-snug font-medium tracking-tight text-pretty sm:text-2xl sm:leading-snug">
              {lead}
            </p>
            <div className="mt-auto grid gap-5 pt-8 text-sm leading-relaxed text-pretty text-muted-foreground md:grid-cols-2">
              {details.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </BentoCard>
        </StaggerItem>

        {/* Years of experience */}
        <StaggerItem className="col-span-1 lg:col-span-3">
          <BentoCard className="flex h-full flex-col justify-between gap-10 p-6">
            <BentoLabel>Experience</BentoLabel>
            <div>
              <p className={statNumberClass}>
                <Counter value={getYearsOfExperience()} suffix="+" />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Years building for the web
              </p>
            </div>
          </BentoCard>
        </StaggerItem>

        {/* Projects */}
        <StaggerItem className="col-span-1 lg:col-span-3">
          <BentoCard className="group h-full transition-colors duration-300 hover:bg-muted/40">
            <Link
              href="/projects"
              className="flex h-full flex-col justify-between gap-10 rounded-3xl p-6 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span className="flex items-start justify-between">
                <BentoLabel>Projects</BentoLabel>
                <ArrowUpRight
                  aria-hidden
                  className="size-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-ink"
                />
              </span>
              <span>
                <span className={cn("block", statNumberClass)}>
                  <Counter value={allProjects.length} />
                </span>
                <span className="mt-2 block text-sm text-muted-foreground">
                  Shipped — browse them all
                </span>
              </span>
            </Link>
          </BentoCard>
        </StaggerItem>

        {/* Current roles */}
        <StaggerItem className="col-span-2 lg:col-span-6">
          <BentoCard className="flex h-full flex-col p-6">
            <BentoLabel className="flex items-center gap-2.5">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-ink opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-ink" />
              </span>
              Currently
            </BentoLabel>
            <ul className="mt-auto divide-y divide-border pt-6">
              {currentRoles.map((role) => (
                <li
                  key={role.company}
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3 first:pt-0 last:pb-0"
                >
                  <p className="text-lg font-medium tracking-tight">
                    {role.role}{" "}
                    <span className="text-muted-foreground">
                      at {role.company}
                    </span>
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {role.period}
                  </p>
                </li>
              ))}
            </ul>
          </BentoCard>
        </StaggerItem>

        {/* Stack ticker */}
        <StaggerItem className="col-span-2 lg:col-span-8">
          <BentoCard className="flex h-full flex-col overflow-hidden py-6">
            <div className="flex items-center justify-between px-6">
              <BentoLabel>Stack</BentoLabel>
              <Link
                href={sectionHref("stack")}
                className="group inline-flex items-center gap-1 rounded-sm text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                See everything
                <ArrowDownRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </Link>
            </div>
            <div className="mt-auto space-y-3 pt-8">
              {skillRows.map((row, rowIndex) => (
                <Marquee
                  key={rowIndex}
                  duration={36}
                  reverse={rowIndex % 2 === 1}
                  trackClassName="gap-3 pr-3"
                >
                  {row.map(({ label, icon: Icon }) => (
                    <span
                      key={label}
                      className="flex items-center gap-2.5 rounded-full border border-border bg-background py-1.5 pr-4 pl-1.5 text-sm font-medium whitespace-nowrap"
                    >
                      <span className="grid size-7 place-items-center rounded-full bg-white ring-1 ring-black/10">
                        <Icon className="size-4" />
                      </span>
                      {label}
                    </span>
                  ))}
                </Marquee>
              ))}
            </div>
          </BentoCard>
        </StaggerItem>

        {/* Résumé */}
        <StaggerItem className="col-span-2 lg:col-span-4">
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              bentoSurface,
              "group flex h-full min-h-48 flex-col justify-between border-transparent bg-brand p-6 text-brand-foreground transition-transform duration-500 ease-out outline-none hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-ring/50",
            )}
          >
            <span className="flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-70">
                Résumé · PDF
              </span>
              <span className="grid size-11 place-items-center rounded-full bg-brand-foreground text-brand transition-transform duration-500 ease-out group-hover:rotate-45">
                <ArrowUpRight aria-hidden className="size-5" />
              </span>
            </span>
            <span className="text-3xl leading-none font-medium tracking-[-0.04em] sm:text-4xl">
              Download my CV
            </span>
          </a>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
