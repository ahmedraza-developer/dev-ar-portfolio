// Utils
import { cn } from "@/lib/utils";
// Media
import HTML5 from "media/home/html5.png";
import CSS3 from "media/home/css3.png";
import JS from "media/home/javascript.png";
import UI from "media/home/ui_ux_design.png";
import CodeSign from "media/home/programmingsigns.png";
import Database from "media/home/database.png";

const Cards = () => {
  const animateCard = [
    {
      beforeBg: HTML5,
      afterBg: HTML5,
      title: "HTML Development",
      desc: "Crafting semantic, accessible HTML5 markup with clean structure, clear hierarchy, and SEO-optimized code for enhanced visibility and user experience.",
      bfGredient: "bg-gradient-to-tr from-[#ffbc00] to-[#ff0058]",
      afGredient: "bg-gradient-to-tr from-[#ffbc00] to-[#ff0058]",
    },
    {
      beforeBg: CSS3,
      afterBg: CSS3,
      title: "CSS & Styling",
      desc: "Building responsive, pixel-perfect interfaces with Tailwind CSS, Bootstrap, and modern CSS techniques including Grid and Flexbox for seamless cross-device experiences.",
      bfGredient: "bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
      afGredient: "bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
    },
    {
      beforeBg: JS,
      afterBg: JS,
      title: "JavaScript Development",
      desc: "Developing dynamic web applications with modern JavaScript (ES6+), React, Next.js, Vue.js, and Angular, writing clean, maintainable code optimized for performance and scalability.",
      bfGredient: "bg-gradient-to-tr from-[#03a9f4] to-[#ff0058]",
      afGredient: "bg-gradient-to-tr from-[#03a9f4] to-[#ff0058]",
    },
    {
      beforeBg: UI,
      afterBg: UI,
      title: "UI/UX Design",
      desc: "Designing intuitive, accessible interfaces using Shadcn UI, Aceternity UI, Hero UI, Magic UI, and Material UI, enhanced with Framer Motion animations for engaging interactions.",
      bfGredient: "bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
      afGredient: "bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
    },
    {
      beforeBg: Database,
      afterBg: Database,
      title: "Database Integration",
      desc: "Implementing robust backend solutions with Supabase, Convex, Neon, and MongoDB, designing reliable data layers and authentication flows for scalable applications.",
      bfGredient: "bg-gradient-to-tr from-[#eecda3] to-[#ef629f]",
      afGredient: "bg-gradient-to-tr from-[#eecda3] to-[#ef629f]",
    },
    {
      beforeBg: CodeSign,
      afterBg: CodeSign,
      title: "Full-Stack Development",
      desc: "Delivering end-to-end solutions from concept to deployment, managing GitHub workflows, designing RESTful APIs, and implementing cloud-ready architectures.",
      bfGredient: "bg-gradient-to-tr from-[#c33764] to-[#1d2671]",
      afGredient: "bg-gradient-to-tr from-[#c33764] to-[#1d2671]",
    },
  ];
  return (
    <>
      {animateCard?.map((e, i) => (
        <div
          key={i}
          className="relative z-10 group transition-all duration-500 flex justify-center items-center h-[400px] my-[40px] mx-[30px]"
        >
          <span
            className={cn(
              "absolute top-0 left-[50px] w-[50%] h-full skew-x-[15deg] group-hover:skew-x-0 group-hover:left-5 group-hover:w-full transition-all duration-500",
              e.bfGredient
            )}
          />
          <span
            className={cn(
              "absolute top-0 left-[50px] w-[50%] h-full rounded-lg transform skew-x-[15deg] blur-[30px] group-hover:skew-x-0 group-hover:left-5 group-hover:w-full transition-all duration-500",
              e.afGredient
            )}
          />
          <div className="animate-UpDown transition-all duration-500 absolute top-0 left-0 right-0 bottom-0 z-50 pointer-events-none">
            <span
              style={{
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${e.beforeBg.src})`,
              }}
              className="absolute top-0 left-0 w-full h-full rounded-lg bg-opacity-10 backdrop-blur-md opacity-0 transition-all duration-500 shadow-md group-hover:-top-[50px] group-hover:left-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100 group-hover:bg-no-repeat group-hover:bg-center group-hover:bg-contain group-hover:invert"
            />
            <span
              style={{
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${e.afterBg.src})`,
              }}
              className="absolute bottom-0 right-0 w-full h-full rounded-lg bg-opacity-10 backdrop-blur-md opacity-0 transition-all duration-500 shadow-md delay-100 group-hover:-bottom-[50px] group-hover:right-[50px] group-hover:w-[100px] group-hover:h-[100px] group-hover:opacity-100 group-hover:bg-no-repeat group-hover:bg-contain group-hover:bg-center"
            />
          </div>
          <div className="relative h-[85%] left-0 py-[20px] md:px-[30px] px-[20px] bg-opacity-5 shadow-md rounded-lg backdrop-blur-md z-10 transition-all duration-500 text-white group-hover:py-[60px] group-hover:-left-[25px]">
            <h3 className="text-2xl leading-tight font-bold">{e.title}</h3>
            <p className="p-3 2xl:text-base text-sm tracking-widest leading-relaxed my-3">
              {e.desc}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
export default Cards;
