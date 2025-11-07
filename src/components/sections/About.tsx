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
          <div className="grid grid-cols-12 gap-x-5 gap-y-8 items-center md:pt-[60px] pt-[40px]">
            <div className="xl:col-span-8 lg:col-span-6 col-span-12 max-w-[880px]">
              <p className="xl:text-lg md:text-base text-sm text-primary leading-relaxed font-medium">
                I&apos;m a 24-year-old front-end developer who turns ambitious ideas into polished, high-performing web experiences. My toolkit spans HTML5, CSS3, modern JavaScript (ES6), React, Next.js, and Tailwind CSS, and I&apos;m comfortable pairing emerging technologies with established best practices to deliver robust solutions. I rely on Git and GitHub to steer collaborative workflows, and I routinely architect data layers with services like Supabase, Convex, Neon, or MongoDB to keep interfaces fast and reliable. Colleagues know me for staying calm under pressure, championing accessibility, and keeping teams aligned through clear communication and structured project management. Whether I&apos;m shaping a brand-new interface or refining an existing product, I focus on measurable impact, motion crafted with Framer Motion, and a user journey that feels intuitive from the very first interaction.
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
