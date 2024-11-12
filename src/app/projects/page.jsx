"use client"
// Next
import Image from "next/image"
import Link from "next/link"
// React
import { useState } from "react"
// Text Animation
import TypingAnimation from "@/components/Animation/TypingAnimation"
// Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
// Media
import BG from "media/home/bg.gif"
import Website1 from "media/projects/websites/1.png"
import Website2 from "media/projects/websites/2.png"
import Website3 from "media/projects/websites/3.png"
import Website4 from "media/projects/websites/4.png"
import Website5 from "media/projects/websites/5.png"
import Website6 from "media/projects/websites/6.png"
import Website7 from "media/projects/websites/7.png"
import Ecommerce1 from "media/projects/ecommerce/1.png"
import Ecommerce2 from "media/projects/ecommerce/2.png"
import Lp1 from "media/projects/landing-pages/1.png"
import Lp2 from "media/projects/landing-pages/2.png"
import Lp3 from "media/projects/landing-pages/3.png"
import Lp4 from "media/projects/landing-pages/4.png"
import Lp5 from "media/projects/landing-pages/5.png"
import Lp6 from "media/projects/landing-pages/6.png"
import Lp7 from "media/projects/landing-pages/7.png"
import Lp8 from "media/projects/landing-pages/8.png"
import Lp9 from "media/projects/landing-pages/9.png"
import Lp10 from "media/projects/landing-pages/10.png"
import Lp11 from "media/projects/landing-pages/11.png"
import Lp12 from "media/projects/landing-pages/12.png"
import Lp13 from "media/projects/landing-pages/13.png"
import Lp14 from "media/projects/landing-pages/14.png"
import Lp15 from "media/projects/landing-pages/15.png"
import Lp16 from "media/projects/landing-pages/16.png"
import EmailTemplates1 from "media/projects/email-templates/1.png"
import EmailTemplates2 from "media/projects/email-templates/2.png"
import EmailTemplates3 from "media/projects/email-templates/3.png"
import EmailTemplates4 from "media/projects/email-templates/4.png"
import EmailTemplates5 from "media/projects/email-templates/5.png"
import EmailTemplates6 from "media/projects/email-templates/6.png"
import EmailTemplates7 from "media/projects/email-templates/7.png"
import Eye from "media/projects/eye.png"
const Projects = () => {
  const typed1 = [
    "Front End Developer",
    "Using HTML5",
    "Using React-Js",
    "Using Next-Js",
    "Technician",
    "Freelancer",
  ]
  const items = [
    [
      Website1,
      ["Nextjs 13", "Bootstrap 5", "Jquery"],
      "https://crystallitedigital.com/",
    ],
    [
      Website2,
      ["Nextjs 14", "Tailwind Css", "Shadcn Ui"],
      "https://infinityanimations.com/",
    ],
    [
      Ecommerce1,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Javascript"],
      "https://fsf-mart-pk.netlify.app/",
    ],
    [
      Ecommerce2,
      [
        "Nextjs 14",
        "Tailwind Css",
        "React Hook Form",
        "Shadcn Ui",
        "Magic Ui",
        "Reactjs 18",
        "Typescript",
      ],
      "https://ecommerce-nextjs-sandy-one.vercel.app/",
    ],
    [
      Lp1,
      ["HTML 5", "CSS 3", "Jquery", "Slick"],
      "https://jumpto1.com/children-book-illustration-services/",
    ],
    [
      Lp2,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla"],
      "https://jumpto1.com/ios-app-development-services/",
    ],
    [
      Lp3,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://jumpto1.com/page-view/",
    ],
    [
      Lp4,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://jumpto1.com/page-view-1/",
    ],
    [
      Website3,
      [
        "HTML 5",
        "CSS 3",
        "Bootstrap 5",
        "Php",
        "Jquery",
        "Javascript",
        "Slick",
      ],
      "https://portfolio.mhrizwan.com/web-apps/001/",
    ],
    [
      Lp5,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla", "GSAP"],
      "https://seoresultspro.com/seo-services/",
    ],
    [
      Website4,
      ["HTML 5", "Tailwind CSS", "Javascript", "Embla"],
      "https://portfolio.mhrizwan.com/websites/001/",
    ],
    [
      Website5,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/",
    ],
    [
      Website6,
      [
        "Nextjs 14",
        "Tailwind CSS",
        "Javascript",
        "Swiper",
        "Slick",
        "Material Tailwind",
      ],
      "https://webiste-design-hub.vercel.app/",
    ],
    [
      Website7,
      ["Nextjs 14", "Tailwind CSS"],
      "https://www.mini-investments.net/",
    ],
    [
      Lp6,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/children-book-illustrator/",
    ],
    [
      Lp7,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookpublishingservice.us/",
    ],
    [
      Lp8,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/amazon-book-publishing-services/",
    ],
    [
      Lp9,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/audio-book-production-services/",
    ],
    [
      Lp10,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/lp/book-publishing-services/",
    ],
    [
      Lp11,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/marketing-lp2/",
    ],
    [
      Lp12,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/case-studies",
    ],
    [
      Lp13,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/book-marketing-company",
    ],
    [
      Lp14,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/lp/book-marketing-company",
    ],
    [
      Lp15,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/lp/book-publishing-company",
    ],
    [
      Lp16,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/audiobook-production-services",
    ],
    [
      EmailTemplates1,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/jumpto1-email-template-helloween/",
    ],
    [
      EmailTemplates2,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template-helloween/",
    ],
    [
      EmailTemplates3,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/h&w-email-template-2/",
    ],
    [
      EmailTemplates4,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/h&w-email-template-1/",
    ],
    [
      EmailTemplates5,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/bitswits-email-template/",
    ],
    [
      EmailTemplates6,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template-thankyou/",
    ],
    [
      EmailTemplates7,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template/",
    ],
  ]
  const items2 = [
    [
      Website1,
      ["Nextjs 13", "Bootstrap 5", "Jquery"],
      "https://crystallitedigital.com/",
    ],
    [
      Website2,
      ["Nextjs 14", "Tailwind Css", "Shadcn Ui"],
      "https://infinityanimations.com/",
    ],
    [
      Website3,
      [
        "HTML 5",
        "CSS 3",
        "Bootstrap 5",
        "Php",
        "Jquery",
        "Javascript",
        "Slick",
      ],
      "https://portfolio.mhrizwan.com/web-apps/001/",
    ],
    [
      Website4,
      ["HTML 5", "Tailwind CSS", "Javascript", "Embla"],
      "https://portfolio.mhrizwan.com/websites/001/",
    ],
    [
      Website5,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/",
    ],
    [
      Website6,
      [
        "Nextjs 14",
        "Tailwind CSS",
        "Javascript",
        "Swiper",
        "Slick",
        "Material Tailwind",
      ],
      "https://webiste-design-hub.vercel.app/",
    ],
    [
      Website7,
      ["Nextjs 14", "Tailwind CSS"],
      "https://www.mini-investments.net/",
    ],
  ]
  const items3 = [
    [
      Lp1,
      ["HTML 5", "CSS 3", "Jquery", "Slick"],
      "https://jumpto1.com/children-book-illustration-services/",
    ],
    [
      Lp2,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla"],
      "https://jumpto1.com/ios-app-development-services/",
    ],
    [
      Lp3,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://jumpto1.com/page-view/",
    ],
    [
      Lp4,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://jumpto1.com/page-view-1/",
    ],
    [
      Lp5,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Embla", "GSAP"],
      "https://seoresultspro.com/seo-services/",
    ],
    [
      Lp6,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/children-book-illustrator/",
    ],
    [
      Lp7,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookpublishingservice.us/",
    ],
    [
      Lp8,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/amazon-book-publishing-services/",
    ],
    [
      Lp9,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/audio-book-production-services/",
    ],
    [
      Lp10,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/lp/book-publishing-services/",
    ],
    [
      Lp11,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Slick"],
      "https://www.bookwritingcube.com/marketing-lp2/",
    ],
    [
      Lp12,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/case-studies",
    ],
    [
      Lp13,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/book-marketing-company",
    ],
    [
      Lp14,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/lp/book-marketing-company",
    ],
    [
      Lp15,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/lp/book-publishing-company",
    ],
    [
      Lp16,
      ["Nextjs 13", "Tailwind CSS", "Jquery", "Javascript", "Embla"],
      "https://bestsellingpublisher.com/audiobook-production-services",
    ],
  ]
  const items4 = [
    [
      Ecommerce1,
      ["HTML 5", "CSS 3", "Bootstrap 5", "Jquery", "Javascript"],
      "https://fsf-mart-pk.netlify.app/",
    ],
    [
      Ecommerce2,
      [
        "Nextjs 14",
        "Tailwind Css",
        "React Hook Form",
        "Shadcn Ui",
        "Magic Ui",
        "Reactjs 18",
        "Typescript",
      ],
      "https://ecommerce-nextjs-sandy-one.vercel.app/",
    ],
  ]
  const items5 = [
    [
      EmailTemplates1,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/jumpto1-email-template-helloween/",
    ],
    [
      EmailTemplates2,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template-helloween/",
    ],
    [
      EmailTemplates3,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/h&w-email-template-2/",
    ],
    [
      EmailTemplates4,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/h&w-email-template-1/",
    ],
    [
      EmailTemplates5,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/bitswits-email-template/",
    ],
    [
      EmailTemplates6,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template-thankyou/",
    ],
    [
      EmailTemplates7,
      ["HTML 5", "CSS3"],
      "https://farooqaziz.netlify.app/work/infinityanimations-email-template/",
    ],
  ]
  const [visibleCount, setVisibleCount] = useState(9)
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 9, items && items?.length));
  };
  return (
    <main>
      <section>
        <div className="bg-[#000000] md:h-screen flex items-center justify-center md:pt-48 md:pb-36 pt-36 pb-20">
          <div className="container">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-8 items-center">
              <div className="text-white">
                <span className="block font-secondary md:text-[35px] text-xl leading-tigth">
                  Hello, my name is
                </span>
                <h1 className="lg:text-[60px] text-[40px] font-bold leading-tight my-2">
                  Ahmed Raza
                </h1>
                <p className="block md:text-[30px] text-xl leading-tigth">
                  And I'm
                  <TypingAnimation
                    strings={typed1}
                    typeSpeed={100}
                    backSpeed={100}
                    loop={true}
                    className="hero-typing"
                  />
                </p>
                <Link
                  href="mailto:leadzahmed@gmail.com"
                  className={`classbox text-xl`}
                >
                  <span className="relative z-40 font-sans">Hire me</span>
                </Link>
              </div>
              <div>
                <Image src={BG} alt="Gif" className="block mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-[100px]">
          <div className="container">
            <div className="text-center text-black mb-5">
              <h2 className="lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold pb-4">
                Projects
              </h2>
              <span className="relative inline-block px-2 font-secondary md:text-[30px] text-[20px] leading-tigth md:before:w-12 before:w-7 before:h-[3px] before:bg-red-500 before:absolute md:before:-left-12 before:-left-7 md:before:bottom-4 before:bottom-3 md:after:w-12 after:w-7 after:h-[3px] after:bg-red-500 after:absolute md:after:-right-12 after:-right-8 md:after:bottom-4 after:bottom-3">
                Behind the Code
              </span>
            </div>
            <div className="pt-[40px]">
              <Tabs defaultValue="all">
                <TabsList className="flex bg-transparent gap-x-10 h-full">
                  {[
                    "all",
                    "websites",
                    "landing pages",
                    "eCommerce",
                    "email templates",
                  ].map((e, i) => (
                    <TabsTrigger
                      key={i}
                      className="!w-[12%] capitalize py-3"
                      value={e}
                    >
                      {e}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {[
                  { value: "all", items: items },
                  { value: "websites", items: items2 },
                  { value: "landing pages", items: items3 },
                  { value: "eCommerce", items: items4 },
                  { value: "email templates", items: items5 },
                ].map(({ value, items }, idx) => (
                  <TabsContent key={idx} value={value} className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                      {items
                        .slice(0, visibleCount)
                        .map(([img, tags, link], i) => (
                          <div
                            key={i}
                            className="relative group overflow-hidden h-full"
                          >
                            <div className="overflow-hidden h-full">
                              <Image
                                src={img}
                                alt={`${value} Preview`}
                                className="group-hover:scale-105 h-full transition-all duration-500 ease-in-out"
                              />
                            </div>
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-between">
                              <div className="flex flex-wrap gap-2">
                                {tags.map((tag, j) => (
                                  <span
                                    key={j}
                                    className="text-xs md:text-sm text-white font-bold bg-opacity-50 border border-white rounded px-3 py-1"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <Link href={link} target="_blank">
                                <Image
                                  src={Eye}
                                  alt="View Project"
                                  width={30}
                                  height={30}
                                  className="transition-transform transform hover:scale-110"
                                />
                              </Link>
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
              {visibleCount < items.length && (
                <button
                  onClick={handleLoadMore}
                  className="block mt-10 px-8 py-3 mx-auto bg-blue/90 text-white rounded hover:bg-blue/70"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects
