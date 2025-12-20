// Next
import Image from "next/image";
// Media
import SideImage from "media/home/ar.jpg";
import CTA from "../CTA";
export default function About() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[100px] py-[50px]">
        <div className="container">
          <div className="text-center">
            <h2 className="lg:text-[50px] text-[40px] font-bold">About Me</h2>
            <div className="relative z-10 mt-4">
              <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px] 2xl:left-[41%] lg:left-[39%] md:left-[36%] sm:left-[34%] left-[22%] rounded" />
              <span className="block font-sans text-[30px] leading-tigth">
                Who I am
              </span>
              <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px] 2xl:right-[41%] lg:right-[39%] md:right-[36%] sm:right-[34%] right-[22%] rounded"/>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-5 gap-y-8 items-start md:pt-[60px] pt-[40px]">
            <div className="xl:col-span-8 lg:col-span-6 col-span-12 max-w-[880px]">
              <p className="xl:text-lg md:text-base text-sm text-primary leading-relaxed font-medium mb-2">
              I am a front-end developer specializing in HTML5, CSS3, and modern JavaScript (ES6+), with strong expertise in React and Next.js for building scalable, high-performance web applications. I work extensively with styling frameworks such as Bootstrap 4/5, Tailwind CSS (v3/v4), Shadcn UI, Aceternity UI, Hero UI, and Magic UI to create clean, responsive, and accessible interfaces.
              </p>
              <p className="xl:text-lg md:text-base text-sm text-primary leading-relaxed font-medium mb-2">
              I have hands-on experience using Vite for small to medium-sized projects and single-page applications, and I have worked with Vue.js where appropriate. For large, enterprise-scale applications requiring a structured, maintainable codebase and team collaboration, I prefer Angular.
              </p>
              <p className="xl:text-lg md:text-base text-sm text-primary leading-relaxed font-medium">
              On the backend side, I have working knowledge of Supabase, Convex, Neon, and MongoDB for designing reliable data layers, authentication flows, and database-driven applications. I value clean architecture, clear communication, and delivering intuitive user experiences with measurable impact.
              </p>
              <CTA
                link="/resume/updated-resume.pdf"
                target="_blank"
                text="Explore My Experience (PDF)"
                css="!w-[300px] mt-5"
              />
            </div>
            <div className="xl:col-span-4 lg:col-span-6 col-span-12">
              <Image
                src={SideImage}
                rel="preload"
                priority={true}
                alt="side_image"
                width={400}
                height={400}
                style={{ width: "400px", height: "400px" }}
                className="object-cover object-center mx-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
