import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div id="projects" className="border-b border-neutral-800/50 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-16 text-center text-4xl sm:my-20 sm:text-5xl font-semibold text-neutral-100"
      >
        Projects
      </motion.h2>
      <div className="space-y-16 sm:space-y-20 flex flex-col items-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between w-full max-w-6xl glass-card rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(168,85,247,0.15)] group"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
              className="block w-full shrink-0 overflow-hidden rounded-2xl sm:max-w-xl lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-6">
                <span className="text-white font-medium flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  View Project <span className="text-xl">↗</span>
                </span>
              </div>
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="aspect-video w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </a>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-semibold text-neutral-100 group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="mb-6 text-base leading-relaxed text-neutral-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-purple-900/20 border border-purple-500/20 px-4 py-1.5 text-xs font-medium text-purple-300 backdrop-blur-sm"
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

export default Project;
