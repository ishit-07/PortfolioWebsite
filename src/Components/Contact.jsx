import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-xl text-center"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4 font-light"
          href= "mailto: ishitverma2602@email.com"
        >
          ishitverm2602@gmail.com
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
