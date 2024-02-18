const Card = () => {
    let animateCard = [
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/pen.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/pen.png')]",
            title: "Designer",
            desc: "I am a Fresher web designer. I have make different design with different ideas. I today's rat race new fresher have more mind blowing ideas with more expoloring ideas.",
            bfGredient: "before:bg-gradient-to-tr from-[#ffbc00] to-[#ff0058]",
            afGredient: "after:bg-gradient-to-tr from-[#ffbc00] to-[#ff0058]"
        },
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/programmingsigns.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/programmingsigns.png')]",
            title: "Development",
            desc: "In this digital world. I help people in build there business and brand digitally which helps in the many thing like:Brand building, more seling etc.",
            bfGredient: "before:bg-gradient-to-tr from-[#03a9f4] to-[#ff0058]",
            afGredient: "after:bg-gradient-to-tr from-[#03a9f4] to-[#ff0058]"
        },
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/search_icon.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/search_icon.png')]",
            title: "SEO",
            desc: "I provide SEO in every business for getting there business in first ,which helps people to make stand there business in google search first.",
            bfGredient: "before:bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
            afGredient: "after:bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]"
        },
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/video-camera.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/video-camera.png')]",
            title: "video Editing",
            desc: "In this competitive world video editing is necessary in any of the digital platform. Most of the eCommerce website needs video in there which which make there customer attractive.",
            bfGredient: "before:bg-gradient-to-tr from-[#eecda3] to-[#ef629f]",
            afGredient: "after:bg-gradient-to-tr from-[#eecda3] to-[#ef629f]"
        },
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/bars-chart.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/bars-chart.png')]",
            title: "Digital Marketing",
            desc: "Digital Marketing is the only tools which helps people to build advertised there business digitally which make people more attracted to there products and there business.",
            bfGredient: "before:bg-gradient-to-tr from-[#c33764] to-[#1d2671]",
            afGredient: "after:bg-gradient-to-tr from-[#c33764] to-[#1d2671]"
        },
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/android.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/android.png')]",
            title: "App Development",
            desc: "Apps helps to those people who are not mostly friendly towards the website.Apps helps people in user interface which make them easier.",
            bfGredient: "before:bg-gradient-to-tr from-[#36d1dc] to-[#5b86e5]",
            afGredient: "after:bg-gradient-to-tr from-[#36d1dc] to-[#5b86e5]"
        },
    ]
    return (
        <>
            {
                animateCard && animateCard.map((e, i) => (
                    <div key={i} className={`relative group transition-all duration-500 flex justify-center items-center h-[400px] my-[40px] mx-[30px] before:absolute before:top-0 before:left-[50px] before:w-[50%] before:h-full before:bg-white before:skew-x-[15deg] ${e.bfGredient} before:hover:skew-x-0 before:hover:left-5 before:hover:w-full before:transition-all before:duration-500 after:absolute after:top-0 after:left-[50px] after:w-[50%] after:h-full after:bg-white after:rounded-lg after:transform after:skew-x-[15deg] after:blur-[30px] ${e.afGredient} after:hover:skew-x-0 after:hover:left-5 after:hover:w-full after:transition-all after:duration-500 `}>
                        <div className={`__animations transition-all duration-500 absolute top-0 left-0 right-0 bottom-0 z-50 pointer-events-none before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-white before:bg-opacity-10 before:backdrop-blur-md before:opacity-0 before:transition-all before:duration-500 before:shadow-md before:group-hover:-top-[50px] before:group-hover:left-[50px] before:group-hover:w-[100px] before:group-hover:h-[100px] before:group-hover:opacity-100 ${e.beforeBg} before:group-hover:bg-no-repeat before:group-hover:bg-center before:group-hover:bg-contain before:group-hover:invert after:absolute after:bottom-0 after:right-0 after:w-full after:h-full after:rounded-lg after:bg-white after:bg-opacity-10 after:backdrop-blur-md after:opacity-0 after:transition-all after:duration-500 after:shadow-md after:delay-100 after:group-hover:-bottom-[50px] after:group-hover:right-[50px] after:group-hover:w-[100px] after:group-hover:h-[100px] after:group-hover:opacity-100 ${e.afterBg} after:group-hover:bg-no-repeat after:group-hover:bg-contain after:group-hover:bg-center`}>
                        </div>
                        <div className="relative left-0 py-[20px] px-[40px] bg-white bg-opacity-5 shadow-md rounded-lg backdrop-blur-md z-10 transition-all duration-500 text-white group-hover:py-[60px] group-hover:-left-[25px]">
                            <h3 className="text-3xl leading-tight font-bold">{e.title}</h3>
                            <p className="p-3 text-lg leading-tight my-3">{e.desc}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default Card;
