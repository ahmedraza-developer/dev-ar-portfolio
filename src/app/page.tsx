import Contact from "@/components/sections/contact";
import About from "@/components/sections/home/about";
import Experience from "@/components/sections/home/experience";
import Hero from "@/components/sections/home/hero";
import Projects from "@/components/sections/home/projects";
import Services from "@/components/sections/home/services";
import Skills from "@/components/sections/home/skills";
import { JsonLd } from "@/components/seo/json-ld";
import { profilePageSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={profilePageSchema()} />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
