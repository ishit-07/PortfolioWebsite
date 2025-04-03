import logo from "../assets/logo.png"
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
    return (  
        <nav className=" flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="#"><img className="mx-3 w-24 h-20" src={logo} alt="" /></a>
            </div>
            <div className="m-8 flex items-center gap-4 text-2xl justify-center">
                <a href="https://www.linkedin.com/in/ishit-verma/"><FaLinkedin  /></a>
                <a href="https://github.com/ishit-07"><FaGithub /></a>
                {/* <a href="https://x.com/ishit__07"><FaSquareXTwitter /></a>
                <a href="https://www.instagram.com/_ishit_07_/"><FaInstagram /></a> */}
            </div>
        </nav>
    );
}
 
export default Navbar;
