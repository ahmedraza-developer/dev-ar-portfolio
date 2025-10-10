import { LottieAnimations } from "../index";
import CTA from "../CTA";

export default function Hero() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:pt-0 pt-[60px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 items-center">
            <div>
              <span className="block font-sans md:text-[35px] text-xl leading-tigth">
                Hello, my name is
              </span>
              <h1 className="lg:text-[60px] text-[40px] font-bold leading-tight my-2">
                Ahmed Raza
              </h1>
                <h2 className="block md:text-[30px] text-xl leading-tight font-medium">
                And I&apos;m a Frontend Engineer
                </h2>
              <CTA
                link="mailto:leadzahmed(@)gmail(.)com"
                text="Let's Talk"
                css="mt-5"
              />
            </div>
            <LottieAnimations animationPath="/animations/1745958043915.json" />
          </div>
        </div>
      </div>
    </section>
  );
}
