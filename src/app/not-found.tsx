import { LottieAnimations } from "@/components"
import Link from "next/link"
import React from "react"

export default function NotFound() {
    return (
        <section>
            <div className="h-svh flex items-center">
                <div className="container">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 items-center">
                        <div>
                            <h2 className="text-[50px] leading-tight font-bold font-mono mb-3">Not Found</h2>
                            <p className="text-[20px] leading-relaxed font-medium font-mono">Site Is Under Development</p>
                            <Link href="/" className="block text-lg underline leading-normal font-sans mt-3">Return Home</Link>
                        </div>
                        <LottieAnimations animationPath="/animations/1747496420466.json" />
                    </div>
                </div>
            </div>
        </section>
    )
}
