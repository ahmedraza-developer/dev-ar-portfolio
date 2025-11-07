import { AngularjsIcon, BootstrapIcon, ConvexIcon, CSS3Icon, FramerIcon, GitIcon, HTML5Icon, JavascriptES6Icon, MongoDbIcon, NeonIcon, NextjsIcon, ReactjsIcon, ReactRouterIcon, SassIcon, SupabaseIcon, TailwindCssIcon, VitejsIcon, VueJsIcon, TypescriptIcon } from "../SvgRenderer";

export default function Skills() {

  const glowColors = {
    html: 'hover:shadow-[0_0_35px_#E44D26]',
    css: 'hover:shadow-[0_0_35px_#264DE4]',
    js: 'hover:shadow-[0_0_35px_#F7DF1E]',
    react: 'hover:shadow-[0_0_35px_#61DAFB]',
    reactRouter: 'hover:shadow-[0_0_35px_#DD0031]',
    vue: 'hover:shadow-[0_0_35px_#4FC08D]',
    angular: 'hover:shadow-[0_0_35px_#DD0031]',
    tailwind: 'hover:shadow-[0_0_35px_#38B2AC]',
    bootstrap: 'hover:shadow-[0_0_35px_#7952B3]',
    sass: 'hover:shadow-[0_0_35px_#CC6699]',
    mongo: 'hover:shadow-[0_0_35px_#47A248]',
    git: 'hover:shadow-[0_0_35px_#F05032]',
    framer: 'hover:shadow-[0_0_35px_#BB4B96]',
    vite: 'hover:shadow-[0_0_35px_#646CFF]',
    next: 'hover:shadow-[0_0_35px_#ffffff]',
    convex: 'hover:shadow-[0_0_35px_#f4be4f]',
    neon: 'hover:shadow-[0_0_35px_#12FFF7]',
    supabase: 'hover:shadow-[0_0_35px_#12FFF7]',
    typescript: 'hover:shadow-[0_0_35px_#007ACC]',
  };

  const skillsData = [
    { label: "HTML5", icon: <HTML5Icon />, glow: glowColors.html },
    { label: "TypeScript", icon: <TypescriptIcon />, glow: glowColors.typescript },
    { label: "JavaScript (ES6)", icon: <JavascriptES6Icon />, glow: glowColors.js },
    { label: "React", icon: <ReactjsIcon />, glow: glowColors.react },
    { label: "React Router", icon: <ReactRouterIcon />, glow: glowColors.reactRouter },
    { label: "Vite", icon: <VitejsIcon />, glow: glowColors.vite },
    { label: "Angular", icon: <AngularjsIcon />, glow: glowColors.angular },
    { label: "Vue", icon: <VueJsIcon />, glow: glowColors.vue },
    { label: "Next.js", icon: <NextjsIcon />, glow: glowColors.next },
    { label: "CSS3", icon: <CSS3Icon />, glow: glowColors.css },
    { label: "Bootstrap", icon: <BootstrapIcon />, glow: glowColors.bootstrap },
    { label: "Tailwind CSS", icon: <TailwindCssIcon />, glow: glowColors.tailwind },
    { label: "Sass", icon: <SassIcon />, glow: glowColors.sass },
    { label: "MongoDB", icon: <MongoDbIcon />, glow: glowColors.mongo },
    { label: "Convex", icon: <ConvexIcon />, glow: glowColors.convex },
    { label: "Neon", icon: <NeonIcon />, glow: glowColors.neon },
    { label: "Supabase", icon: <SupabaseIcon />, glow: glowColors.supabase },
    { label: "Framer Motion", icon: <FramerIcon />, glow: glowColors.framer },
    { label: "Git", icon: <GitIcon />, glow: glowColors.git },
  ];

  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[100px] py-[50px]">
        <div className="container">
          <div className="text-center">
            <h2 className="lg:text-[50px] text-[40px] font-bold">My Skills</h2>
            <div className="relative z-10 mt-4">
              <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px] xl:left-[39%] lg:left-[36%] md:left-[34%] sm:left-[30%] left-[17%] rounded"></span>
              <span className="block font-sans text-[30px] leading-tigth">
                What I Know
              </span>
              <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px] xl:right-[39%] lg:right-[36%] md:right-[34%] sm:right-[30%] right-[17%] rounded"></span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-y-7 gap-x-5 items-center md:pt-[60px] pt-[50px]">
            {skillsData.map((skill) => (
              <div key={skill.label} className="col-auto">
                <div
                  title={skill.label}
                  aria-label={skill.label}
                  className={`w-[96px] h-[96px] flex items-center justify-center bg-white/10 rounded-[12px] p-[24px] border border-[rgba(38,38,38,.7)] transition-all duration-500 ${skill.glow}`}
                >
                  {skill.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}