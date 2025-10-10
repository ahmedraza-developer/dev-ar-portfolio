import { cn } from "@/lib/utils";

export default function CTA({
  link = "#",
  target = "_self",
  text = "Lorem, ipsum dolor",
  css = "",
}) {
  return (
    <a
      href={link}
      target={target}
      className={cn(
        "relative z-10 md:w-[230px] w-[190px] md:h-[70px] h-[60px] flex justify-center items-center bg-[#0e1538] overflow-hidden rounded-[10px] cursor-pointer group",
        css
      )}
    >
      <span className="absolute z-10 inset-0 w-full h-[90%] m-auto bg-[#0e1538] rounded-[10px]" />
      <span className="absolute -z-10 inset-0 w-full h-full transition-all ease-in-out duration-500 scale-0 group-hover:scale-100 group-hover:bg-gradient-to-b from-[#00ccff] to-[#d400d4] animate-rotate" />
      <div className="text-white text-center lg:text-lg text-base leading-tight font-medium z-10">
        {text}
      </div>
    </a>
  );
}
