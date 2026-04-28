import { motion } from "framer-motion";
import {
  SiExpress,
  SiGooglegemini,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const iconAnimation = (duration) => ({
  initial: { y: -5 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  { label: "JavaScript", icon: SiJavascript, color: "text-yellow-300", bgGlow: "group-hover:shadow-[0_0_20px_rgba(253,224,71,0.2)]", duration: 2.5 },
  { label: "TypeScript", icon: SiTypescript, color: "text-blue-400", bgGlow: "group-hover:shadow-[0_0_20px_rgba(96,165,250,0.2)]", duration: 3 },
  { label: "React", icon: SiReact, color: "text-cyan-400", bgGlow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]", duration: 2.2 },
  { label: "Next.js", icon: SiNextdotjs, color: "text-neutral-100", bgGlow: "group-hover:shadow-[0_0_20px_rgba(245,245,245,0.2)]", duration: 2.8 },
  { label: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300", bgGlow: "group-hover:shadow-[0_0_20px_rgba(103,232,249,0.2)]", duration: 2.4 },
  { label: "Node.js", icon: SiNodedotjs, color: "text-green-500", bgGlow: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]", duration: 2.7 },
  { label: "Python", icon: SiPython, color: "text-yellow-400", bgGlow: "group-hover:shadow-[0_0_20px_rgba(250,204,21,0.2)]", duration: 3.1 },
  { label: "Express", icon: SiExpress, color: "text-neutral-100", bgGlow: "group-hover:shadow-[0_0_20px_rgba(245,245,245,0.2)]", duration: 2.3 },
  { label: "MongoDB", icon: SiMongodb, color: "text-green-500", bgGlow: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]", duration: 2.6 },
  { label: "Redux", icon: SiRedux, color: "text-purple-400", bgGlow: "group-hover:shadow-[0_0_20px_rgba(192,132,252,0.2)]", duration: 2.9 },
  { label: "Gemini AI", icon: SiGooglegemini, color: "text-blue-300", bgGlow: "group-hover:shadow-[0_0_20px_rgba(147,197,253,0.2)]", duration: 2.1 },
];

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800/50 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-16 text-center text-4xl sm:my-20 sm:text-5xl font-semibold text-neutral-100"
      >
        Technologies
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {technologies.map((technology) => {
          const Icon = technology.icon;

          return (
            <motion.div
              key={technology.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group flex h-32 w-full max-w-36 flex-col items-center justify-center gap-3 rounded-2xl glass transition-all duration-300 ${technology.bgGlow}`}
            >
              <motion.div
                variants={iconAnimation(technology.duration)}
                initial="initial"
                animate="animate"
              >
                {Icon ? (
                  <Icon className={`text-4xl sm:text-5xl ${technology.color} drop-shadow-md transition-all duration-300 group-hover:scale-110`} />
                ) : (
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 text-3xl font-bold ${technology.color}`}>
                    {technology.textIcon}
                  </span>
                )}
              </motion.div>
              <span className="max-w-full text-center text-sm font-medium text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200">
                {technology.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Technologies;
