// Import Components
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/header";
import Link from "next/link";

const Page = () => {
    return (
        <main>
            <Header bg="bg-black"/>
            <section>
                <div className="h-screen flex items-center">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-sans text-black font-bold leading-none mb-5">
                           Thanks You,
                        </h1>
                        <p className="text-base font-medium font-sans text-black mb-5">
                            Thank you for submitting the Form on our website. We appreciate your interest
                        </p>
                        <Link href="/" className="w-max px-10 rounded-xl h-[50px] block bg-secondary text-[#ffffff] text-[18px] font-sans font-semibold hover:ring-2 hover:bg-transparent hover:text-black ring-light-yellow leading-[50px]">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}

export default Page;