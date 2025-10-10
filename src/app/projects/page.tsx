import { ThreeDMarquee } from '@/components/ui/3d-marquee'
import data from "@/data/projects.json";

const Projects = () => {
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
    <section>
    <div className="relative z-10 mx-auto flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      <div className="container">
        <div className="text-center text-white relative z-10">
          <span className="block font-sans sm:text-[30px] text-[22px] leading-tigth">
              Site Under Development
            </span>
          <h2 className="lg:text-[50px] md:text-[40px] sm:text-[30px] text-[22px] font-bold">Projects Added Soon</h2>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Projects