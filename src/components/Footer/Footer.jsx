// Components
import TypingAnimation from "@/components/Animation/TypingAnimation";
// Next
import Image from "next/image";
// Media
import Facebook from "media/home/facebook.png"
import Twitter from "media/home/twitter.png"
import Instagram from "media/home/instagram.png"
import Whatsapp from "media/home/whatsapp.png"
import Link from "next/link";
const Footer = () => {
    const typed1 = ["Connect with me on :)"];
    return (
        <div className="lg:pt-28 md:pt-20 pt-10 bg-gradient-to-r from-red-700 via-[#ff9046] to-red-700">
            <div className="container">
                <h2 className="lg:text-4xl md:text-3xl text-2xl text-center text-white font-bold">
                    <TypingAnimation strings={typed1} typeSpeed={100} backSpeed={100} loop={true} className="contact-us-typing" />
                </h2>
                <div className="flex justify-center items-center md:gap-x-24 gap-x-10 mt-10 mb-5">
                    <Link href="https://www.facebook.com/ahmedraza1161/" target="_blank"><Image src={Facebook} alt="Icons" width={30} height={30} /></Link>
                    <Link href="https://x.com/ahmedraza1161/" target="_blank"><Image src={Twitter} alt="Icons" width={30} height={30} /></Link>
                    <Link href="https://www.instagram.com/ahmedraza1161/" target="_blank"><Image src={Instagram} alt="Icons" width={30} height={30} /></Link>
                    <Link href="https://api.whatsapp.com/send?phone=03187380601" target="_blank"><Image src={Whatsapp} alt="Icons" width={30} height={30} /></Link>
                </div>
                <span className="block text-center md:text-lg text-sm md:py-5 py-3 text-white font-sans">© 2024 <strong>Ahmed Raza</strong> | All Rights Reserved |</span>
            </div>
        </div>
    )
}

export default Footer;
