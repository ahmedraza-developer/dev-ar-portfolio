"use client"
import Image from "next/image";
import React, { useState } from 'react'
import Link from 'next/link';
import Toggler from "media/header/toggler.png"
import CTA from "../CTA/CTA";

const Header = ({
    padding = "md:py-6 pt-6 pb-3",
    linkHover = "hover:text-secondary",
    bg,
}) => {
    const [toggler, setToggler] = useState(false);
    return (
        <header className="relative">
            <div className={`absolute ${bg} py-4 w-full`}>
                <div className='container relative'>
                    <nav className={`flex items-center justify-between ${padding}`}>
                        <Link href="/" className='inline-block text-3xl font-bold text-white'>
                            Ahmed <span className="font-sans text-secondary">Raza</span>
                        </Link>
                        <button type='button' onClick={() => setToggler((prev) => (!prev))} className='md:hidden'>
                            <Image src={Toggler} alt="Logo" width={50} height={28} className='block ml-auto' />
                        </button>
                        <ul className={`${!toggler ? "hidden md:flex" : "md:flex"} md:gap-9 items-center md:relative sm:absolute xs:absolute md:bg-inherit bg-white pl-3 z-50 md:w-auto w-full top-full left-0 right-0 text-start md:text-center md:py-0 py-5 md:justify-center justify-between`}>
                            {
                                [
                                    ["Projects","/projects"],
                                    ["Home","/"],
                                    ["About","#about-us"],
                                    ["Services","#services"],
                                    ["Skills","#skills"],
                                    ["Contact","#contact-us"],
                                ].map(([text,link],i)=>(
                                    <li key={i} className="md:text-white md:mb-0 mb-5 text-black"><Link href={link} className={`relative block transition-all duration-500 ease-in-out text-sm md:text-base lg:text-lg font-medium ${linkHover}`}>{text}</Link></li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header >
    )
}

export default Header;
