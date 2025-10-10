import FrontEndForm from "../FrontEndForm";

export default function Contact() {
    return (
        <section>
            <div className="relative z-10 overflow-hidden lg:py-[100px] py-[50px]">
                <div className="container">
                    <div className="text-center">
                        <h2 className="lg:text-[50px] text-[40px] font-bold">Contact Me</h2>
                        <div className="relative z-10 mt-4">
                            <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px] xl:left-[39%] lg:left-[36%] md:left-[34%] sm:left-[30%] left-[17%] rounded"></span>
                            <span className="block font-sans text-[30px] leading-tigth">
                                Get In Touch
                            </span>
                            <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px] xl:right-[39%] lg:right-[36%] md:right-[34%] sm:right-[30%] right-[17%] rounded"></span>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-x-5 gap-y-8 md:pt-[60px] pt-[50px]">
                        <div>
                            <h2 className="xl:text-[35px] md:text-[30px] text-xl leading-tight font-medium mb-3">Let&apos;s Bring Your Vision to Life</h2>
                            <p className="2xl:text-lg md:text-base text-sm text-primary leading-relaxed font-medium max-w-[600px]">Have a project in mind? I&apos;d love to hear about it. Whether you&apos;re starting something new or need support with an existing idea, just fill out the form with a few key details. The more information you provide, the better I can understand your needs and offer the right support. I aim to respond within 1-2 business days. Let&apos;s create something great together!</p>
                        </div>
                        <FrontEndForm />
                    </div>
                </div>
            </div>
        </section>
    )
}
