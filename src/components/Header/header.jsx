"use client"

import Image from "next/image";

import { useState } from 'react'

import Link from 'next/link';

import Toggler from "media/header/toggler.png"

import { motion } from "framer-motion";

import { useInView } from "framer-motion";



const Header = ({

    padding = "md:py-6 pt-6 pb-3",

    linkHover = "hover:text-secondary",

    bg,

}) => {

    const [toggler, setToggler] = useState(false);

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });



    return (

        <header className="relative">

            <div className={`absolute ${bg} py-4 w-full`}>

                <div className='container relative'>

                    <nav className={`flex items-center justify-between ${padding}`}>

                        <motion.div

                            initial={{ y: -50, opacity: 0 }}

                            animate={{ y: 0, opacity: 1 }}

                            transition={{ duration: 0.6, delay: 0.7 }}

                        >

                            <Link href="/" className='inline-block text-3xl font-bold text-white'>

                                Ahmed <span className="font-sans text-secondary">Raza</span>

                            </Link>

                        </motion.div>



                        <motion.button

                            type='button'

                            onClick={() => setToggler((prev) => !prev)}

                            className='md:hidden'

                            initial={{ y: -50, opacity: 0 }}

                            animate={{ y: 0, opacity: 1 }}

                            transition={{ duration: 0.6, delay: 0.9 }}

                        >

                            <Image src={Toggler} alt="Logo" width={50} height={28} className='block ml-auto' />

                        </motion.button>



                        <motion.ul

                            ref={ref}

                            className={`${!toggler ? "hidden md:flex" : "md:flex"} md:gap-9 items-center md:relative sm:absolute xs:absolute md:bg-inherit bg-white pl-3 z-50 md:w-auto w-full top-full left-0 right-0 text-start md:text-center md:py-0 py-5 md:justify-center justify-between`}

                            initial={{ opacity: 0, y: -30 }}

                            animate={{ opacity: inView ? 0 : 1, y: inView ? 0 : -30 }}

                            transition={{ duration: 0.6, delay: 0.9 }}

                        >

                            {

                                [

                                    ["Projects", "/projects"],

                                    ["Home", "/"],

                                    ["About", "#about-us"],

                                    ["Services", "#services"],

                                    ["Skills", "#skills"],

                                    ["Contact", "#contact-us"],

                                ].map(([text, link], i) => (

                                    <motion.li

                                        key={i}

                                        className="md:!text-white md:mb-0 mb-5 text-black"

                                        initial={{ opacity: 0, y: 20 }}

                                        animate={{ opacity: inView ? 0 : 1, y: inView ? 0 : 20 }}

                                        transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}

                                    >

                                        <Link href={link} onClick={() => setToggler(false)} className={`relative block transition-all duration-500 ease-in-out text-sm md:text-base lg:text-lg font-medium ${linkHover}`}>{text}</Link>

                                    </motion.li>

                                ))

                            }

                        </motion.ul>

                    </nav>

                </div>

            </div>

        </header>

    )

}



export default Header;