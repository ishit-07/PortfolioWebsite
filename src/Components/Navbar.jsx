import logo from "../assets/logo.png"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const Navbar = () => {
  return (  
    <motion.nav 
      initial={{ y: -50, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex items-center justify-between py-4 px-6 sm:px-10 rounded-full glass-card fixed top-4 left-1/2 w-[90%] sm:w-[85%] max-w-6xl z-50 shadow-lg border border-neutral-800/50"
    >
      <div className="flex flex-shrink-0 items-center">
        <a href="#home" className="hover:scale-105 transition-transform duration-300">
          <img className="mx-2 w-16 h-auto filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" src={logo} alt="Logo" />
        </a>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-sm font-medium text-neutral-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6 text-xl justify-center">
        <a 
          href="https://www.linkedin.com/in/ishit-verma/" 
          target="_blank" 
          rel="noreferrer"
          className="text-neutral-300 hover:text-blue-400 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.5)] transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/ishit-07" 
          target="_blank" 
          rel="noreferrer"
          className="text-neutral-300 hover:text-white hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </motion.nav>
  );
}
 
export default Navbar;
