// Components
import TypingAnimation from "@/components/Animation/TypingAnimation";
// Next
import Image from "next/image";
// Media
import Whatsapp from "media/home/whatsapp.png"
import Github from "media/home/github.png"
import Linkedin from "media/home/linkedin.png"
const Footer = () => {
    const typed2 = ["Connect with me on :)"];
    return (
        <footer className="lg:pt-28 md:pt-20 pt-10 bg-gradient-to-r from-red-700 via-[#ff9046] to-red-700">
            <div className="container">
                <h2 className="lg:text-4xl md:text-3xl text-2xl text-center text-white font-bold">
                    <TypingAnimation strings={typed2} typeSpeed={100} backSpeed={100} loop={true} className="contact-us-typing" />
                </h2>
                <div className="flex justify-center items-center gap-x-10 mt-10 mb-5">
                    <a href="https://github.com/Ahmed-Crystallite" target="_blank">
                        <Image src={Github} alt="Icons" width={35} height={35} />
                    </a>
                    <a href="https://pk.linkedin.com/in/ahmed-raza-96027a250" target="_blank">
                        <Image src={Linkedin} alt="Icons" width={35} height={35} />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=03187380601" target="_blank">
                        <Image src={Whatsapp} alt="Icons" width={35} height={35} />
                    </a>
                </div>
                <span className="block text-center md:text-lg text-sm md:py-5 py-3 text-white font-sans">© 2024 <strong>Ahmed Raza</strong> | All Rights Reserved</span>
            </div>
        </footer>
    )
}

export default Footer;
