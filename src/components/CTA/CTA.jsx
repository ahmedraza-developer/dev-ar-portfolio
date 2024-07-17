const CTA = ({
    href = "javascript:;",
    text,
    textSize = "text-base",
    textWeight = "font-bold",
    bg = "bg-primary",
    color = "text-white",
    width = "w-max",
    padding = "py-4 px-6",
    border,
    rounded,
    hover,
    margin,
    customCss,
    otherTags=""
}) => {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `<a href=${href} ${otherTags} class="relative z-20 gap-2 cursor-pointer overflow-hidden block ${customCss} ${bg} ${color} ${width} text-center ${padding} ${textSize} ${border} ${margin} ${textWeight} duration-500 group ${rounded} ${hover}">${text}</a>`
        }}>

        </div>
    )
}

export default CTA;
