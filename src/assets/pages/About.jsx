import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import { SiMysql, SiTailwindcss } from "react-icons/si";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const container = {
    show: {
      transition: { staggerChildren: 0.05 },
    },
    exit: {
      transition: { staggerChildren: 0.03 },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { opacity: 0 },
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Douglas</title>
      </Helmet>
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="container section mt-[10vh] mb-[5vh]"
      >
        <motion.h1
          variants={item}
          className="font-salsa text-3xl text-cdark dark:text-cwhite"
        >
          About Me
        </motion.h1>
        <motion.div
          variants={item}
          className="rounded-lg px-[4vh] py-[3vh] border-cdark dark:border-cwhite border-2 flex flex-col justify-center items-center"
        >
          <p className="flex flex-col font-blinker text-ccyan dark:text-cdcyan uppercase text-md">
            Java, HTML, JavaScript, Python e CSS são como novos idiomas que
            estou aprendendo a dominar, cada um abrindo portas para
            possibilidades emocionantes. Java: Estou começando a entender como
            criar programas que podem fazer coisas incríveis e como essa
            linguagem é poderosa. HTML, JavaScript e CSS: Descobri como
            construir páginas web interativas. É fascinante ver o código
            ganhando vida no navegador! Python: Estou experimentando com scripts
            e pequenos projetos, maravilhado com a simplicidade desta linguagem.
            Banco de Dados (MySQL): Entendi como armazenar e recuperar
            informações importantes para aplicativos. O Que Me Empolga: Estou
            empolgado para enfrentar desafios novos, aprender coisas novas e,
            claro, criar minhas próprias coisas. Quero ser capaz de construir
            aplicativos úteis e, quem sabe, contribuir para soluções que ajudem
            as pessoas.
          </p>
          <motion.div
            variants={item}
            className="flex flex-wrap gap-10 items-center justify-center pt-[2vh]"
          >
            {/*<Link
                to={cv}
                download
                target="_blank"
                className="flex justify-center items-center gap-2 font-blinker text-cpink dark:text-cdpink border p-2 rounded-md hover:bg-ccyan dark:hover:bg-cdcyan hover:text-cwhite dark:hover:text-cdark"
              >
                <IoDocumentTextOutline />
                Download CV
              </Link>*/}
          </motion.div>
        </motion.div>
        <motion.h1
          variants={item}
          className="flex justify-center items-center max font-salsa text-3xl text-cdark dark:text-cwhite pt-[5vh]"
        >
          Tech Stack
        </motion.h1>

        <div className="bg-cdark/5 dark:bg-cbrown/5 flex flex-col justify-center items-center px-[5vh] py-[3vh] rounded-lg">
          <div className="flex flex-wrap text-4xl gap-10 items-center justify-center text-ccyan dark:text-cdcyan">
            <motion.div variants={item}>
              <IoLogoHtml5 className="hover:rotate-20 hover:text-cpink dark:hover:text-cdpink" />
            </motion.div>

            <motion.div variants={item}>
              <IoLogoCss3 className="hover:rotate-20 hover:text-cpink dark:hover:text-cdpink" />
            </motion.div>

            <motion.div variants={item}>
              <SiTailwindcss className="hover:rotate-20 hover:text-cpink dark:hover:text-cdpink" />
            </motion.div>

            <motion.div variants={item}>
              <FaBootstrap className="hover:rotate-20 hover:text-cpink dark:hover:text-cdpink" />
            </motion.div>

            <motion.div variants={item}>
              <FaReact className="hover:rotate-20 hover:text-cpink dark:hover:text-cdpink" />
            </motion.div>

            <motion.div variants={item}>
              <SiMysql className="hover:rotate-20 hover:text-cpink dark:hover:text-cdpink" />
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={item}
          className="flex items-center justify-center flex-col gap-2"
        >
          <div className="flex flex-wrap text-3xl gap-5 items-center justify-center text-cpink dark:text-cdpink pt-[10vh]">
            <Link
              to="https://www.linkedin.com/in/douglas-queiroz-3b9a72212/"
              target="_blank"
              className="hover:text-ccyan dark:hover:text-cdcyan"
            >
              <AiFillLinkedin />
            </Link>
            <Link
              to="https://github.com/douglaswe"
              target="_blank"
              className="hover:text-ccyan dark:hover:text-cdcyan"
            >
              <AiFillGithub />
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </HelmetProvider>
  );
};

export default About;
