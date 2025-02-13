const Card = () => {
  let animateCard = [
    {
      beforeBg: "before:group-hover:bg-html5",
      afterBg: "after:group-hover:bg-html5",
      title: "HTML Development",
      desc: "Crafting clean, semantic, and accessible HTML to ensure the foundation of every website is solid, well-structured, and SEO-friendly.",
      bfGredient: "before:bg-gradient-to-tr from-[#ffbc00] to-[#ff0058]",
      afGredient: "after:bg-gradient-to-tr from-[#ffbc00] to-[#ff0058]",
    },
    {
      beforeBg: "before:group-hover:bg-css3",
      afterBg: "after:group-hover:bg-css3",
      title: "CSS & Styling",
      desc: "Implementing responsive, pixel-perfect layouts using TailwindCSS, Bootstrap, and custom CSS. I ensure smooth, adaptive design across all devices with modern techniques like Flexbox, Grid, and media queries.",
      bfGredient: "before:bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
      afGredient: "after:bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
    },
    {
      beforeBg: "before:group-hover:bg-javascript",
      afterBg: "after:group-hover:bg-javascript",
      title: "JavaScript Development",
      desc: "Writing dynamic and interactive JavaScript using advanced libraries like React.js and Next.js. I build fast, engaging web applications with responsive interactions and optimized performance.",
      bfGredient: "before:bg-gradient-to-tr from-[#03a9f4] to-[#ff0058]",
      afGredient: "after:bg-gradient-to-tr from-[#03a9f4] to-[#ff0058]",
    },
    {
      beforeBg: "before:group-hover:bg-ui-ux-design",
      afterBg: "after:group-hover:bg-ui-ux-design",
      title: "UI/UX Design",
      desc: "Utilizing ShadCN UI, Magic UI, and Material UI to design intuitive, visually appealing interfaces that enhance user experience. Custom animations and transitions powered by Framer Motion bring your design to life.",
      bfGredient: "before:bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
      afGredient: "after:bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
    },
    {
      beforeBg: "before:group-hover:bg-database",
      afterBg: "after:group-hover:bg-database",
      title: "Database Integration",
      desc: "Expertise in working with MongoDB for efficient, scalable database solutions, ensuring seamless data management for your web applications.",
      bfGredient: "before:bg-gradient-to-tr from-[#eecda3] to-[#ef629f]",
      afGredient: "after:bg-gradient-to-tr from-[#eecda3] to-[#ef629f]",
    },
    {
      beforeBg: "before:group-hover:bg-programmingsigns",
      afterBg: "after:group-hover:bg-programmingsigns",
      title: "Full-Stack Development",
      desc: "Utilizing ShadCN UI, Magic UI, and Material UI to design intuitive, visually appealing interfaces that enhance user experience. Custom animations and transitions powered by Framer Motion bring your design to life.",
      bfGredient: "before:bg-gradient-to-tr from-[#c33764] to-[#1d2671]",
      afGredient: "after:bg-gradient-to-tr from-[#c33764] to-[#1d2671]",
    },
  ]
  return (
    <>
      {animateCard &&
        animateCard.map((e, i) => (
          <div
            key={i}
            className={`relative group transition-all duration-500 flex justify-center items-center h-[400px] my-[40px] mx-[30px] before:absolute before:top-0 before:left-[50px] before:w-[50%] before:h-full before:bg-white before:skew-x-[15deg] ${e.bfGredient} before:hover:skew-x-0 before:hover:left-5 before:hover:w-full before:transition-all before:duration-500 after:absolute after:top-0 after:left-[50px] after:w-[50%] after:h-full after:bg-white after:rounded-lg after:transform after:skew-x-[15deg] after:blur-[30px] ${e.afGredient} after:hover:skew-x-0 after:hover:left-5 after:hover:w-full after:transition-all after:duration-500 `}
          >
            <div
              className={`__animations transition-all duration-500 absolute top-0 left-0 right-0 bottom-0 z-50 pointer-events-none before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-white before:bg-opacity-10 before:backdrop-blur-md before:opacity-0 before:transition-all before:duration-500 before:shadow-md before:group-hover:-top-[50px] before:group-hover:left-[50px] before:group-hover:w-[100px] before:group-hover:h-[100px] before:group-hover:opacity-100 ${e.beforeBg} before:group-hover:bg-no-repeat before:group-hover:bg-center before:group-hover:bg-contain before:group-hover:invert after:absolute after:bottom-0 after:right-0 after:w-full after:h-full after:rounded-lg after:bg-white after:bg-opacity-10 after:backdrop-blur-md after:opacity-0 after:transition-all after:duration-500 after:shadow-md after:delay-100 after:group-hover:-bottom-[50px] after:group-hover:right-[50px] after:group-hover:w-[100px] after:group-hover:h-[100px] after:group-hover:opacity-100 ${e.afterBg} after:group-hover:bg-no-repeat after:group-hover:bg-contain after:group-hover:bg-center`}
            ></div>
            <div className="relative h-[80%] left-0 py-[20px] px-[30px] bg-white bg-opacity-5 shadow-md rounded-lg backdrop-blur-md z-10 transition-all duration-500 text-white group-hover:py-[60px] group-hover:-left-[25px]">
              <h3 className="text-2xl leading-tight font-bold">{e.title}</h3>
              <p className="p-3 2xl:text-base text-sm tracking-widest leading-tight my-3">
                {e.desc}
              </p>
            </div>
          </div>
        ))}
    </>
  )
}
export default Card
