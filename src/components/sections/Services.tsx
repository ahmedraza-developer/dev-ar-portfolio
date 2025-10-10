import {Cards} from "../index";

export default function Services() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden lg:py-[100px] py-[50px]">
        <div className="container">
          <div className="text-center">
            <h2 className="lg:text-[50px] text-[40px] font-bold">My Services</h2>
            <div className="relative z-10 mt-4">
              <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px] xl:left-[38%] lg:left-[36%] sm:left-[32%] left-[12%] rounded"></span>
              <span className="block font-sans text-[30px] leading-tigth">
              What I Provide
              </span>
              <span className="h-[3px] sm:w-[4%] w-[7%] bg-fuchsia-600 absolute top-[20px]  xl:right-[38%] lg:right-[36%] sm:right-[32%] right-[12%] rounded"></span>
            </div>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8 items-center md:pt-[60px] pt-[50px]">
          <Cards/>
          </div>
        </div>
      </div>
    </section>
  );
}
