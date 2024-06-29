import { DiMongodb, DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandCpp, TbBrandNextjs } from "react-icons/tb";
import { animate, motion } from "framer-motion";

const iconAnimation = (duration) => ({
    initial: {y: -10,},
    animate: {
        y
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="text-center text-4xl my-20">Technologies</h1>
      <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{x: -100, opacity: 0}}
        transition={{duration: 0.5}}
        className="flex items-center justify-center flex-wrap gap-4"
      >
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandCpp className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPostgresql className="text-7xl text-sky-700" />
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
