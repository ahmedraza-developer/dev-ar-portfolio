import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Card = () => {
    let animateCard = [
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/html5.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/html5.png')]",
            title: "HTML Development",
            desc: "Crafting clean, semantic, and accessible HTML to ensure the foundation of every website is solid, well-structured, and SEO-friendly.",
            bfGredient: "before:bg-gradient-to-tr from-[#ffbc00] to-[#ff0058]",
            afGredient: "after:bg-gradient-to-tr from-[#ffbc00] to-[#ff0058]"
        },
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/css3.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/css3.png')]",
            title: "CSS & Styling",
            desc: "Implementing responsive, pixel-perfect layouts using TailwindCSS, Bootstrap, and custom CSS. I ensure smooth, adaptive design across all devices with modern techniques like Flexbox, Grid, and media queries.",
            bfGredient: "before:bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
            afGredient: "after:bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]"
        },
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/javascript.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/javascript.png')]",
            title: "JavaScript Development",
            desc: "Writing dynamic and interactive JavaScript using advanced libraries like React.js and Next.js. I build fast, engaging web applications with responsive interactions and optimized performance.",
            bfGredient: "before:bg-gradient-to-tr from-[#03a9f4] to-[#ff0058]",
            afGredient: "after:bg-gradient-to-tr from-[#03a9f4] to-[#ff0058]"
        },
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/ui_ux_design.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/ui_ux_design.png')]",
            title: "UI/UX Design",
            desc: "Utilizing ShadCN UI, Magic UI, and Material UI to design intuitive, visually appealing interfaces that enhance user experience. Custom animations and transitions powered by Framer Motion bring your design to life.",
            bfGredient: "before:bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]",
            afGredient: "after:bg-gradient-to-tr from-[#4dff03] to-[#00d0ff]"
        },
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/database.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/database.png')]",
            title: "Database Integration",
            desc: "Expertise in working with MongoDB for efficient, scalable database solutions, ensuring seamless data management for your web applications.",
            bfGredient: "before:bg-gradient-to-tr from-[#eecda3] to-[#ef629f]",
            afGredient: "after:bg-gradient-to-tr from-[#eecda3] to-[#ef629f]"
        },
        {
            beforeBg: "before:group-hover:bg-[url('../../public/home/programmingsigns.png')]",
            afterBg: "after:group-hover:bg-[url('../../public/home/programmingsigns.png')]",
            title: "Full-Stack Development",
            desc: "Utilizing ShadCN UI, Magic UI, and Material UI to design intuitive, visually appealing interfaces that enhance user experience. Custom animations and transitions powered by Framer Motion bring your design to life.",
            bfGredient: "before:bg-gradient-to-tr from-[#c33764] to-[#1d2671]",
            afGredient: "after:bg-gradient-to-tr from-[#c33764] to-[#1d2671]"
        },
    ]
    const { ref: cardRef, inView: cardInView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });
    return (
        <>
            {animateCard.map((e, i) => (
                <motion.div
                    key={i}
                    ref={cardRef}
                    className={`relative group transition-all duration-500 flex justify-center items-center h-[400px] my-[40px] mx-[30px] before:absolute before:top-0 before:left-[50px] before:w-[50%] before:h-full before:bg-white before:skew-x-[15deg] ${e.bfGredient} before:hover:skew-x-0 before:hover:left-5 before:hover:w-full before:transition-all before:duration-500 after:absolute after:top-0 after:left-[50px] after:w-[50%] after:h-full after:bg-white after:rounded-lg after:transform after:skew-x-[15deg] after:blur-[30px] ${e.afGredient} after:hover:skew-x-0 after:hover:left-5 after:hover:w-full after:transition-all after:duration-500`}
                    initial={{ opacity: 0.5, y: 50 }}
                    animate={{ opacity: cardInView ? 1 : 0.2, y: cardInView ? 0.2 : 50 }}
                    transition={{
                        delay: i * 0.2,
                        duration: 0.5,
                    }}
                >
                    <div className="relative h-[80%] left-0 py-[20px] px-[30px] bg-white bg-opacity-5 shadow-md rounded-lg backdrop-blur-md z-10 transition-all duration-500 text-white group-hover:py-[60px] group-hover:-left-[25px]">
                        <h3 className="text-2xl leading-tight font-bold">{e.title}</h3>
                        <p className="p-3 2xl:text-base text-sm tracking-widest leading-tight my-3">{e.desc}</p>
                    </div>
                </motion.div>
            ))}
        </>
    );
}
export default Card;
