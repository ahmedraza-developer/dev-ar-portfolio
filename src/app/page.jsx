"use client"
// Hooks
import { useId, useState } from "react"
// Components
import TypingAnimation from "@/components/Animation/TypingAnimation"
import CTA from "@/components/CTA/CTA"
import Card from "@/components/Card/card"
// Next
import Image from "next/image"
import Link from "next/link"
// Media
import BG from "media/home/bg.gif"
import Profile from "media/home/ar.jpg"
import Contact from "media/home/contact.png"
import Location from "media/home/location.png"
import Mail from "media/home/mail.png"
// Globle CSS
import "./globals.css"
import FrontEndForm from "@/components/ForntEndForm/ForntEndForm"
const Page = () => {
  const typed1 = [
    "Front End Developer",
    "Using HTML5",
    "Using React-Js",
    "Using Next-Js",
    "Technician",
    "Freelancer",
  ]
  const skills = [
    {
      title: "HTML",
      pers: "90%",
      beforeWth: "before:w-[90%]",
    },
    {
      title: "CSS",
      pers: "90%",
      beforeWth: "before:w-[90%]",
    },
    {
      title: "Bootstrap 4,5",
      pers: "90%",
      beforeWth: "before:w-[90%]",
    },
    {
      title: "Tailwind CSS",
      pers: "90%",
      beforeWth: "before:w-[90%]",
    },
    {
      title: "JavaScript",
      pers: "60%",
      beforeWth: "before:w-[60%]",
    },
    {
      title: "Reactjs",
      pers: "50%",
      beforeWth: "before:w-[50%]",
    },
    {
      title: "Nextjs",
      pers: "70%",
      beforeWth: "before:w-[70%]",
    },
    {
      title: "Framer Motion",
      pers: "50%",
      beforeWth: "before:w-[50%]",
    },
    {
      title: "Mongo DB",
      pers: "50%",
      beforeWth: "before:w-[50%]",
    },
    {
      title: "GIT",
      pers: "70%",
      beforeWth: "before:w-[70%]",
    },
  ]
  const contactIcon = [
    {
      icon: Contact,
      title: "Name",
      desc: "Ahmed Raza",
    },
    {
      icon: Location,
      title: "Address",
      desc: "Karachi-Pakistan",
    },
    {
      icon: Mail,
      title: "Email",
      desc: "leadzahmed@gmail.com",
    },
  ]

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
                  And I'm{" "}
                  <TypingAnimation
                    strings={typed1}
                    typeSpeed={100}
                    backSpeed={100}
                    loop={true}
                    className="hero-typing"
                  />{" "}
                </p>
                <Link
                  href="mailto:leadzahmed@gmail.com"
                  className={`classbox text-xl`}
                >
                  {" "}
                  <span className="relative z-40 font-sans">Hire me</span>{" "}
                </Link>
              </div>
              <div>
                <Image
                  unoptimized
                  src={BG}
                  alt="Gif"
                  className="block mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="lg:py-28 md:py-20 py-10">
          <div className="container">
            <div className="text-center text-black mb-5">
              <h2 className="lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold pb-4">
                About me
              </h2>
              <span className="relative inline-block px-2 font-secondary md:text-[30px] text-[20px] leading-tigth md:before:w-12 before:w-7 before:h-[3px] before:bg-red-500 before:absolute md:before:-left-12 before:-left-7 md:before:bottom-4 before:bottom-3 md:after:w-12 after:w-7 after:h-[3px] after:bg-red-500 after:absolute md:after:-right-12 after:-right-8 md:after:bottom-4 after:bottom-3">
                Who I Am{" "}
              </span>
            </div>
            <div className="md:flex items-center gap-x-5">
              <div className="md:basis-[55%]">
                <h4 className="md:text-[25px] text-xl font-semibold py-2 leading-tigth">
                  I'm Ahmed Raza. and I'm{" "}
                  <TypingAnimation
                    strings={typed1}
                    typeSpeed={100}
                    backSpeed={100}
                    loop={true}
                    className="about-us-typing"
                  />{" "}
                </h4>
                <p className="md:text-base text-sm leading-normal font-medium">
                  And I’m a 23-year-old web developer specializing in front-end
                  development, with a strong focus on HTML5, CSS3, JavaScript
                  (ES6), React.js, Next.js, and TailwindCSS. Passionate about
                  creating responsive, user-friendly web applications, I thrive
                  in dynamic, collaborative environments. I bring fresh ideas to
                  the table and am committed to continuous learning and
                  improvement. With a solid understanding of project management
                  and client relations, I ensure timely delivery of high-quality
                  solutions that meet client needs. Driven by a love for
                  problem-solving, I focus on both functionality and design in
                  every project.
                </p>
                <CTA
                  href="/ahmedraza.pdf"
                  otherTags="download"
                  text="Download CV"
                  color="text-white"
                  bg="bg-[#0e1538]"
                  margin="my-4"
                  rounded="rounded-lg"
                  padding="py-4 px-10"
                  border="border-2 border-[#1c6cd9]"
                />
              </div>
              <div className="md:basis-[45%]">
                <Image
                  src={Profile}
                  alt="profile"
                  height={300}
                  width={300}
                  objectFit="cover"
                  className="block mx-auto md:mt-0 mt-5 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="lg:py-28 md:py-20 py-10 bg-black">
          <div className="container">
            <div className="text-center text-white">
              <h2 className="lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold pb-4">
                My services
              </h2>
              <span className="relative inline-block px-2 font-secondary md:text-[30px] text-[20px] leading-tigth md:before:w-10 before:w-7 before:h-[3px] before:bg-red-500 before:absolute md:before:-left-10 before:-left-7 md:before:bottom-4 before:bottom-3 md:after:w-10 after:w-7 after:h-[3px] after:bg-red-500 after:absolute md:after:-right-11 after:-right-8 md:after:bottom-4 after:bottom-3">
                What I Provide{" "}
              </span>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-center gap-x-10 pt-10">
              <Card />
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="lg:py-28 md:py-20 py-10">
          <div className="container">
            <div className="text-center text-black mb-5">
              <h2 className="lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold pb-4">
                My skills
              </h2>
              <span className="relative inline-block px-2 font-secondary md:text-[30px] text-[20px] leading-tigth md:before:w-10 before:w-7 before:h-[3px] before:bg-red-500 before:absolute md:before:-left-10 before:-left-7 md:before:bottom-4 before:bottom-3 md:after:w-10 after:w-7 after:h-[3px] after:bg-red-500 after:absolute md:after:-right-11 after:-right-8 md:after:bottom-4 after:bottom-3">
                What I Know
              </span>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-x-10 gap-10 pt-10">
              <div className="text-black">
                <h4 className="capitalize text-xl font-semibold mb-3">
                  My creative skills & experiences.
                </h4>
                <p className="text-base font-medium leading-normal mb-3">
                  Since embarking on my journey as a web developer nearly three
                  years ago, I have had the privilege of collaborating with
                  agencies, consulting for startups, and working alongside
                  talented professionals to create dynamic web products for both
                  business and consumer markets. My expertise lies in front-end
                  development, where I specialize in building responsive,
                  performant, and user-friendly websites and web applications.
                </p>
                <p className="text-base font-medium leading-normal mb-3">
                  I create fast, intuitive, and accessible web experiences using
                  industry-standard best practices. My work spans a wide range
                  of front-end development tasks
                </p>
                <CTA
                  href="#contact-us"
                  text="Learn More"
                  bg="bg-transparent"
                  color="text-[#ed143d]"
                  border="border-2 border-[#ed143d]"
                  padding="py-2 px-8"
                  textSize="text-lg"
                  rounded="rounded-lg"
                  hover="hover:bg-[#ed143d] hover:text-white"
                />
              </div>
              <div className="text-black">
                {skills &&
                  skills.map((e, i) => (
                    <div key={i} className="mb-5">
                      <div className="flex justify-between items-center mb-1">
                        <h5 className="text-lg font-semibold">{e.title}</h5>
                        <span className="block text-xl font-semibold">
                          {e.pers}
                        </span>
                      </div>
                      <div
                        className={`h-[5px] w-full bg-[#d3d3d3] relative before:absolute ${e.beforeWth} before:bg-[#ed143d] before:top-0 before:left-0 before:h-full`}
                      ></div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-us">
        <div className="lg:py-28 md:py-20 py-10 bg-black">
          <div className="container">
            <div className="text-center text-white mb-10">
              <h2 className="lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold pb-4">
                Contact me
              </h2>
              <span className="relative inline-block px-2 font-secondary md:text-[30px] text-[20px] leading-tigth md:before:w-10 before:w-7 before:h-[3px] before:bg-red-500 before:absolute md:before:-left-10 before:-left-7 md:before:bottom-4 before:bottom-3 md:after:w-10 after:w-7 after:h-[3px] after:bg-red-500 after:absolute md:after:-right-11 after:-right-8 md:after:bottom-4 after:bottom-3">
                Get In Touch
              </span>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-10">
              <div className="text-white">
                <h4 className="capitalize md:text-xl text-lg font-semibold mb-3">
                  Get in Touch
                </h4>
                <p className="md:text-base text-sm font-medium leading-normal mb-5">
                  If you are interested in working together? Please fill out the
                  form aside with some info about your project and I will get
                  back to you as soon as I can. Please allow a couple days for
                  me to respond.
                </p>
                {contactIcon &&
                  contactIcon.map((e, i) => (
                    <div key={i} className="flex gap-x-5 mb-5 items-center">
                      <div>
                        <Image src={e.icon} alt="Icons" />
                      </div>
                      <div>
                        <p className="text-base font-semibold">{e.title}</p>
                        <span className="block md:text-xl text-lg font-medium">
                          {e.desc}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="text-white">
                <h4 className="capitalize md:text-xl text-lg font-semibold md:mb-3 mb-8">
                  Message me
                </h4>
                <FrontEndForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
