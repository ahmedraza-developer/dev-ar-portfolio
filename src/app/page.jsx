"use client"
// Hooks
import { useEffect, useId, useState } from "react";
// Components
import TypingAnimation from "@/components/Animation/TypingAnimation";
import CTA from "@/components/CTA/CTA";
import Card from "@/components/Card/card";
// Next
import Image from "next/image";
import Link from "next/link";
import { Router } from 'next/router';
import Axios from "axios";
// Media
import BG from "media/home/bg.gif"
import Profile from "media/home/ar.jpg"
import Contact from "media/home/contact.png"
import Location from "media/home/location.png"
import Mail from "media/home/mail.png"
// Globle CSS
import "./globals.css";
const Page = () => {
  const typed1 = ["Front End Developer", "Using HTML5", "Using React-Js", "Using Next-Js", "Technician", "Freelancer"];
  const skills = [
    {
      title: "HTML",
      pers: "90%",
      beforeWth: "before:w-[90%]",
    },
    {
      title: "CSS",
      pers: "80%",
      beforeWth: "before:w-[80%]",
    },
    {
      title: "JavaScript",
      pers: "60%",
      beforeWth: "before:w-[60%]",
    },
    {
      title: "React",
      pers: "70%",
      beforeWth: "before:w-[70%]",
    },
    {
      title: "Nextjs",
      pers: "70%",
      beforeWth: "before:w-[70%]",
    },
    {
      title: "WordPress",
      pers: "65%",
      beforeWth: "before:w-[65%]",
    },
  ]
  const contactIcon = [
    {
      icon: Contact,
      title: "Name",
      desc: "Ahmed Raza"
    },
    {
      icon: Location,
      title: "Address",
      desc: "Karachi-Pakistan"
    },
    {
      icon: Mail,
      title: "Email",
      desc: "leadzahmed@gmail.com"
    },
  ]
  const [ip, setIP] = useState('');
  const getIPData = async () => {
    const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
    setIP(res.data);
  }
  useEffect(() => {
    getIPData()
  }, [])

  const referenceID = useId();
  const [score, setScore] = useState("Send Messege");
  const currentRoute = Router.pathname;
  const [pagenewurl, setPagenewurl] = useState('');
  useEffect(() => {
    const pagenewurl = window.location.href;
    console.log(pagenewurl);
    setPagenewurl(pagenewurl);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault()
    let currentdate = new Date().toLocaleString() + ''
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      comment: e.target.comments.value,
      pageUrl: pagenewurl,
      IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
      currentdate: currentdate,
    }

    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);
    setScore('Sending Data');
    fetch('/api/email/sendmail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }).then((res) => {
      console.log(`Response received ${res}`)
      if (res.status === 200) {
        console.log(`Response Successed ${res}`)
      }
    })
    let bodyContent = JSON.stringify({
      "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
      "Brand": "Persnol Portfolio AR",
      "Page": `${currentRoute}`,
      "Date": currentdate,
      "Time": currentdate,
      "JSON": JSONdata,

    });
    await fetch("https://sheetdb.io/api/v1/mzue1hrjpvgtm", {
      method: "POST",
      body: bodyContent
    });

    const { pathname } = Router
    if (pathname == pathname) {
      window.location.href = '/thank-you';
    }

  }
  return (
    <main>
      <section>
        <div className="bg-[#000000] md:h-screen md:pt-48 md:pb-36 pt-36 pb-20">
          <div className="container">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-8 items-center">
              <div className="text-white">
                <span className="block font-secondary md:text-[35px] text-xl leading-tigth">Hello, my name is</span>
                <h1 className="lg:text-[60px] text-[40px] font-bold leading-tight my-2">Ahmed Raza</h1>
                <p className="block md:text-[30px] text-xl leading-tigth">And I'm <TypingAnimation strings={typed1} typeSpeed={100} backSpeed={100} loop={true} className="hero-typing" /> </p>
                <Link href="mailto:leadzahmed@gmail.com" className={`classbox text-xl`}> <span className="relative z-40 font-sans">Hire me</span> </Link>
              </div>
              <div className="">
                <Image src={BG} alt="Gif" className="block mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us">
        <div className="lg:py-28 md:py-20 py-10">
          <div className="container">
            <div className="text-center text-black mb-5">
              <h2 className="lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold pb-4">About me</h2>
              <span className="relative inline-block px-2 font-secondary md:text-[30px] text-[20px] leading-tigth md:before:w-12 before:w-7 before:h-[3px] before:bg-red-500 before:absolute md:before:-left-12 before:-left-7 md:before:bottom-4 before:bottom-3 md:after:w-12 after:w-7 after:h-[3px] after:bg-red-500 after:absolute md:after:-right-12 after:-right-8 md:after:bottom-4 after:bottom-3">Who I Am </span>
            </div>
            <div className="md:flex items-center gap-x-5">
              <div className="md:basis-[55%]">
                <h4 className="md:text-[25px] text-xl font-semibold py-2 leading-tigth">I'm Ahmed Raza. and I'm <TypingAnimation strings={typed1} typeSpeed={100} backSpeed={100} loop={true} className="about-us-typing" /> </h4>
                <p className="md:text-base text-sm leading-normal font-medium">And I am 22 years young boy with dynamic and enthusiastic person looking for the job Web Design and Development mostly specializing in front end development. A firm believer in my own abilities, I am also a team player who thrives in a challenging environment.I am a junior with new and dynamics project ideas. Well-versed in numerous programming languages including HTML5, CSS3, JavaScript ES6, React-js, Next-js, Tailwind-CSS, and strong background in project management and customer relations.</p>
                <CTA
                  href="#contact-us"
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
                <Image src={Profile} alt="profile" height={300} width={300} objectFit="cover" className="block mx-auto md:mt-0 mt-5 object-cover rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="lg:py-28 md:py-20 py-10 bg-black">
          <div className="container">
            <div className="text-center text-white">
              <h2 className="lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold pb-4">My services</h2>
              <span className="relative inline-block px-2 font-secondary md:text-[30px] text-[20px] leading-tigth md:before:w-10 before:w-7 before:h-[3px] before:bg-red-500 before:absolute md:before:-left-10 before:-left-7 md:before:bottom-4 before:bottom-3 md:after:w-10 after:w-7 after:h-[3px] after:bg-red-500 after:absolute md:after:-right-11 after:-right-8 md:after:bottom-4 after:bottom-3">What I Provide </span>
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
              <h2 className="lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold pb-4">My skills</h2>
              <span className="relative inline-block px-2 font-secondary md:text-[30px] text-[20px] leading-tigth md:before:w-10 before:w-7 before:h-[3px] before:bg-red-500 before:absolute md:before:-left-10 before:-left-7 md:before:bottom-4 before:bottom-3 md:after:w-10 after:w-7 after:h-[3px] after:bg-red-500 after:absolute md:after:-right-11 after:-right-8 md:after:bottom-4 after:bottom-3">What I Know</span>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-10 pt-10">
              <div className="text-black">
                <h4 className="capitalize text-xl font-semibold mb-3">My creative skills & experiences.</h4>
                <p className="text-base font-medium leading-normal mb-3">Since beginning my journey as a freelance developer nearly 1 month ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.</p>
                <p className="text-base font-medium leading-normal mb-3">I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.</p>
                <p className="text-base font-medium leading-normal mb-3">I also have full-stack developer experience with popular open-source CMS like (WordPress, bubble.io and others) .</p>
                <CTA href="#contact-us" text="Learn More" bg="bg-transparent" color="text-[#ed143d]" border="border-2 border-[#ed143d]" padding="py-2 px-8" textSize="text-lg" rounded="rounded-lg" hover="hover:bg-[#ed143d] hover:text-white" />
              </div>
              <div className="text-black">
                {
                  skills && skills.map((e, i) => (
                    <div key={i} className="mb-5">
                      <div className="flex justify-between items-center mb-1">
                        <h5 className="text-lg font-semibold">{e.title}</h5>
                        <span className="block text-xl font-semibold">{e.pers}</span>
                      </div>
                      <div className={`h-[5px] w-full bg-[#d3d3d3] relative before:absolute ${e.beforeWth} before:bg-[#ed143d] before:top-0 before:left-0 before:h-full`}></div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact-us">
        <div className="lg:py-28 md:py-20 py-10 bg-black">
          <div className="container">
            <div className="text-center text-white mb-10">
              <h2 className="lg:text-[40px] md:text-[30px] text-[25px] leading-tight font-bold pb-4">Contact me</h2>
              <span className="relative inline-block px-2 font-secondary md:text-[30px] text-[20px] leading-tigth md:before:w-10 before:w-7 before:h-[3px] before:bg-red-500 before:absolute md:before:-left-10 before:-left-7 md:before:bottom-4 before:bottom-3 md:after:w-10 after:w-7 after:h-[3px] after:bg-red-500 after:absolute md:after:-right-11 after:-right-8 md:after:bottom-4 after:bottom-3">Get In Touch</span>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-10">
              <div className="text-white">
                <h4 className="capitalize md:text-xl text-lg font-semibold mb-3">Get in Touch</h4>
                <p className="md:text-base text-sm font-medium leading-normal mb-5">If you are interested in working together? Please fill out the form aside with some info about your project and I will get back to you as soon as I can. Please allow a couple days for me to respond.</p>
                {
                  contactIcon && contactIcon.map((e, i) => (
                    <div key={i} className="flex gap-x-5 mb-5 items-center">
                      <div>
                        <Image src={e.icon} alt="Icons" />
                      </div>
                      <div>
                        <p className="text-base font-semibold">{e.title}</p>
                        <span className="block md:text-xl text-lg font-medium">{e.desc}</span>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="text-white">
                <h4 className="capitalize md:text-xl text-lg font-semibold md:mb-3 mb-8">Message me</h4>
                <form onSubmit={handleSubmit} method="POST">
                  <div className="sm:flex items-center gap-x-5">
                    <input type="text" name="name" id={referenceID} required placeholder="Name" className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 placeholder:text-white ps-4 mb-5" />
                    <input type="email" name="email" id={referenceID} required placeholder="Email" className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 placeholder:text-white ps-4 mb-5" />
                  </div>
                  <input type="text" name="phone" id={referenceID} required placeholder="Phone" className="w-full bg-transparent border-2 border-[#d3d3d3] rounded-md py-3 placeholder:text-white ps-4 mb-5" />
                  <textarea name="comments" id={referenceID} required placeholder="Message..." className="w-full resize-none bg-transparent border-2 border-[#d3d3d3] rounded-md pt-4 pb-8 placeholder:text-white ps-4 mb-5"></textarea>
                  <button type="submit" className="bg-transparent transition-all ease-in-out duration-500 border-2 border-secondary px-4 py-2 rounded-md text-secondary hover:text-white hover:bg-secondary">{score}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page;
