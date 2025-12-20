import { Mail, MapPin, Phone } from "lucide-react"
import React from "react"

export default function Footer() {
    return (
        <footer>
            <div className="relative z-10 overflow-hidden sm:py-[30px] py-[20px]">
                <span className="w-full h-[2px] bg-accent absolute inset-0"></span>
                <div className="container">
                    <div className="flex flex-wrap lg:justify-between justify-center items-center gap-5">
                        <div className="flex flex-wrap justify-center gap-y-5 items-center gap-x-8">
                            <a href="tel:+923187380601" className="flex items-center gap-x-2 text-sm leading-tight">
                                <Phone className="size-4"/>
                                <span>Phone</span>
                            </a>
                            <a href="mailto:leadzahmed@gmail.com" className="flex items-center gap-x-2 text-sm leading-tight">
                                <Mail className="size-4"/>
                                <span>Email</span>
                            </a>
                            <a href="https://maps.app.goo.gl/VkfxyBu6Bh7huHSc7" target="_blank" className="flex items-center gap-x-2 text-sm leading-tight">
                                <MapPin className="size-4"/>
                                <span>Location</span>
                            </a>
                        </div>
                        <p className="sm:text-base text-[13px] text-center leading-tight font-normal">© 2026 Developer Ahmed Raza | All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
