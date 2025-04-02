// import { DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { motion } from "framer-motion";
import { SiExpress } from "react-icons/si";

const iconAnimation = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="text-center text-4xl my-20"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center flex-wrap gap-4"
      >
        <motion.div
          variants={iconAnimation(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconAnimation(2.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl" />
        </motion.div>
        <motion.div
          variants={iconAnimation(1.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl text-[#00ffff]" />
        </motion.div>
        <motion.div
          variants={iconAnimation(1.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandCpp className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconAnimation(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-[#649f64]" />
        </motion.div>
        {/* <motion.div
          variants={iconAnimation(0.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiPostgresql className="text-7xl text-sky-700" />
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export default Technologies;
