import React from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    role: "Front-End Engineer",
    company: "SYSARTX Software Company",
    period: "April 2025 - Present"
  },
  {
    role: "Front-End Developer",
    company: "Bitswits PVT LTD",
    period: "2024 - 2025"
  },
  {
    role: "Junior Front End Developer",
    company: "Crystallite Pak Pvt Ltd",
    period: "2023 - 2024"
  },
  {
    role: "Intern",
    company: "Cleantouch Software Corporation",
    period: "2022 - 2023"
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="relative z-10 overflow-hidden lg:py-[100px] py-[60px]">
        <div className="container">
          <div className="text-center">
            <h2 className="lg:text-[50px] text-[40px] font-bold">Experience</h2>
            <div className="relative z-10 mt-4">
              <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px] xl:left-[36%] lg:left-[32%] sm:left-[22%] left-[1%] rounded"></span>
              <span className="block font-sans text-[30px] leading-tigth">
              Where I&apos;ve contributed
              </span>
              <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px]  xl:right-[36%] lg:right-[32%] sm:right-[22%] right-[1%] rounded"></span>
            </div>
          </div>

          <div className="mt-12 relative">
            <span className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-fuchsia-500 via-purple-500 to-blue-500 hidden md:block" />
            <div className="space-y-10 md:pl-16">
              {experiences.map((experience, index) => (
                <article
                  key={`${experience.company}-${experience.period}`}
                  className={cn(
                    "relative rounded-xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur transition-colors duration-300",
                    "hover:border-fuchsia-500/80 hover:bg-white/10"
                  )}
                >
                  <div className="md:absolute md:left-0 md:translate-x-[-4.2rem] md:top-8 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-600 to-purple-600 text-white font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {experience.role}
                        </h3>
                        <p className="text-sm uppercase tracking-[0.3em] text-primary/70">
                          {experience.company}
                        </p>
                      </div>
                      <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary/70">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

