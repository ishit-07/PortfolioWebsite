// import logo from "../assets/photo_2024-06-23_21-54-33.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="">
        {/* <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center items-center">
            <img className="rounded-2xl" height={500} width={450} src={logo} alt="about" />
          </div>
        </motion.div> */}
        <div className="w-full lg:w-1/2 mx-auto">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <p className="text-justify my-2 max-w-xl py-6  font-light">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
