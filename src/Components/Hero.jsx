import profilepic from "../assets/profile_pic.jpg";
import { HERO_TEXT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
});

const Hero = () => {
  return (
    <div id="home" className="border-b border-neutral-800/50 pb-12 lg:mb-35 pt-32">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-center text-5xl font-semibold tracking-tight sm:pb-8 sm:text-6xl lg:mt-16 lg:text-left lg:text-8xl text-neutral-100"
            >
              Ishit Verma
            </motion.h1>
            <motion.span
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-center text-2xl tracking-tight text-transparent font-medium sm:text-3xl lg:text-left"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-4 text-center lg:text-left font-light leading-relaxed text-neutral-400 text-lg"
            >
              {HERO_TEXT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 mt-10 lg:mt-0">
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative rounded-3xl p-2 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.15)]"
            >
              <img
                className="w-full max-w-md rounded-[1.25rem] object-cover"
                src={profilepic}
                alt="Ishit Verma"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
