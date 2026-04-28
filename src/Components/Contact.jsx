import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="pb-24 pt-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-10 text-4xl text-center font-semibold text-neutral-100"
      >
        Get in Touch
      </motion.h2>
      <div className="w-full flex justify-center items-center">
        <motion.a
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="inline-flex justify-center items-center px-8 py-4 rounded-full glass font-medium text-lg text-neutral-300 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 tracking-tight"
          href="mailto:ishitverma2602@gmail.com"
        >
          ishitverma2602@gmail.com
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
