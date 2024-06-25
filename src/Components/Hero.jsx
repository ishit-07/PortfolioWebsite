import profilepic from "../assets/photo_2024-06-23_21-54-33.jpg"
import { HERO_TEXT } from "../constants";
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 my-10">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Ishit Verma
            </motion.h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              FrontEnd Developer
            </span>
            <p className="text-justify my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_TEXT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <img className="rounded-3xl" src={profilepic} alt="Ishit Verma" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
