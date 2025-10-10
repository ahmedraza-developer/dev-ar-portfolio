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
      desc: "Crafting clean, semantic, and accessible HTML to ensure the foundation of every website is solid, well-structured, and SEO-friendly.",
      bfGredient: "bg-gradient-to-tr from-[#ffbc00] to-[#ff0058]",
      afGredient: "bg-gradient-to-tr from-[#ffbc00] to-[#ff0058]",
    },
    {
      beforeBg: CSS3,
      afterBg: CSS3,
      title: "CSS & Styling",
      desc: "Implementing responsive, pixel-perfect layouts using TailwindCSS, Bootstrap, and custom CSS. I ensure smooth, adaptive design across all devices with modern techniques like Flexbox, Grid, and media queries.",
      bfGredient: "bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
      afGredient: "bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
    },
    {
      beforeBg: JS,
      afterBg: JS,
      title: "JavaScript Development",
      desc: "Writing dynamic and interactive JavaScript using advanced libraries like React.js and Next.js. I build fast, engaging web applications with responsive interactions and optimized performance.",
      bfGredient: "bg-gradient-to-tr from-[#03a9f4] to-[#ff0058]",
      afGredient: "bg-gradient-to-tr from-[#03a9f4] to-[#ff0058]",
    },
    {
      beforeBg: UI,
      afterBg: UI,
      title: "UI/UX Design",
      desc: "Utilizing ShadCN UI, Magic UI, and Material UI to design intuitive, visually appealing interfaces that enhance user experience. Custom animations and transitions powered by Framer Motion bring your design to life.",
      bfGredient: "bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
      afGredient: "bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
    },
    {
      beforeBg: Database,
      afterBg: Database,
      title: "Database Integration",
      desc: "Expertise in working with MongoDB for efficient, scalable database solutions, ensuring seamless data management for your web applications.",
      bfGredient: "bg-gradient-to-tr from-[#eecda3] to-[#ef629f]",
      afGredient: "bg-gradient-to-tr from-[#eecda3] to-[#ef629f]",
    },
    {
      beforeBg: CodeSign,
      afterBg: CodeSign,
      title: "Full-Stack Development",
      desc: "Utilizing ShadCN UI, Magic UI, and Material UI to design intuitive, visually appealing interfaces that enhance user experience. Custom animations and transitions powered by Framer Motion bring your design to life.",
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
