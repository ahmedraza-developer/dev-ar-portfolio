"use client"
// Import Components
import Header from "@/components/Header/header"
import FrontEndForm from "@/components/ForntEndForm/ForntEndForm"
// Next
import { useEffect, useState } from "react";
import Image from "next/image"
// Media
import Contact from "media/home/contact.png"
import Location from "media/home/location.png"
import Mail from "media/home/mail.png"

const NotFound = () => {
  const [countdown, setCountdown] = useState(5);
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
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          window.location.href = "/";
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <main>
      <Header bg="bg-black" />
      <section>
        <div className="h-screen flex items-center text-center">
          <div className="container">
            <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-sans text-black font-medium leading-none mt-10">
              404 - Page Not Found
            </h1>
            <p className="mt-6 text-lg font-medium flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Redirecting to the home page in {countdown} seconds...
            </p>
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

export default NotFound
