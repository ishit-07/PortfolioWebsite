import logo from "../assets/logo.png"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
    return (  
        <nav className=" flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-10 w-24 h-20" src={logo} alt="" />
            </div>
            <div className="text-white m-8 flex items-center gap-4 text-2xl justify-center">
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
            </div>
        </nav>
    );
}
 
export default Navbar;
