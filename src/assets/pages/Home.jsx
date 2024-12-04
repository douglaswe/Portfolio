import { Typewriter } from "react-simple-typewriter";
import Foto from "../img/foto.webp";
import { Link } from "react-router-dom";
import { IoDocumentTextOutline, IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    
    <HelmetProvider>
      <Helmet>
        <title>Home Douglas José</title>
      </Helmet>
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="container section h-[90vh]"
      >
        <motion.img
          variants={item}
          className="h-[200px] w-[200px]  flex items-center justify-center rounded-full border-4 border-ccyan shadow-lg"
          src={Foto}
          alt="Foto"
        />
        <motion.h1
          variants={item}
          className="font-salsa text-5xl  text-center text-ccyan dark:text-cdcyan -mb-4 "
        >
          DOUGLAS JOSÉ
        </motion.h1>
        <motion.h1
          variants={item}
          className="font-salsa text-2xl text-center text-cdark dark:text-cwhite"
        >
          Hii.. I am a{" "}
          <span className="text-cpink uppercase dark:text-cdpink">
            <Typewriter
              words={["Web Developer", "Frontend Developer"]}
              loop={true}
              cursor={true}
            />
          </span>
        </motion.h1>
        <motion.p
          variants={item}
          className="font-blinker text-center text-cdark dark:text-cwhite text-lg"
        >
          Atualmente estou no curso de Análise e Desenvolvimento de Sistemas na Fatec,
        ansioso para absorver tudo o que este universo tem a oferecer. Em minha
        jornada, tenho explorado diversas linguagens que me intrigam e desafiam
        de maneiras únicas.
        </motion.p>
        <motion.div variants={item}>
          <div className="flex gap-4 justify-center items-center">
            <Link
              to="/about"
              className="flex items-center justify-centerfont-blinker text-cpink dark:text-cdpink hover:bg-ccyan hover:text-cwhite dark:hover:text-cwhite border p-2 rounded-md"
            >
              About Me <IoArrowForwardOutline />
            </Link>
          </div>
        </motion.div>
      </motion.section>
  </HelmetProvider>
  );
};
export default Home;

