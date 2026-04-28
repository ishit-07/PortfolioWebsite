import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-800/50 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-16 text-center text-4xl sm:my-20 sm:text-5xl font-semibold text-neutral-100"
      >
        Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto space-y-12">
        {EXPERIENCE.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative flex flex-col lg:flex-row gap-8 glass-card rounded-3xl p-6 sm:p-10 transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(168,85,247,0.1)]"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block w-4 h-4 rounded-full bg-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.8)] border-2 border-neutral-900 group-hover:scale-150 transition-transform duration-300"></div>

            <div className="w-full lg:w-1/4 shrink-0">
              <p className="mb-2 text-sm font-medium text-neutral-400 bg-neutral-900/50 inline-block px-3 py-1 rounded-full border border-neutral-800">
                {experience.year}
              </p>
            </div>
            <div className="w-full lg:w-3/4">
              <h3 className="mb-2 text-xl font-semibold text-neutral-100 group-hover:text-purple-300 transition-colors duration-300">
                {experience.role} <span className="text-purple-400/80 mx-2">@</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-6 text-neutral-400 text-base leading-relaxed text-justify">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-neutral-900/80 px-3 py-1.5 text-xs font-medium text-neutral-300 border border-neutral-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
