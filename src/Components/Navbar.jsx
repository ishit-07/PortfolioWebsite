import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
    return (  
        <nav className="bg-red-800 flex items-center justify-between mb-20 py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src="" alt="" />
            </div>
            <div className="m-8 flex items-center justify-center text-2xl gap-4">
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
            </div>
        </nav>
    );
}
 
export default Navbar;
