import { Phone } from "lucide-react";
import logo from "../assets/logo.png";
import phonecall from "../assets/phone-call.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="sticky top-8 z-50 bg-white border-b">
            <div className="max-w-5xl mx-auto flex items-center justify-between">

                {/* LEFT: Logo */}
                <div className="flex items-center gap-2 px-9 py-8">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-10 h-10 object-contain"
                    />
                    <span className="text-xl font-extrabold tracking-wide">
                        COURSE
                    </span>
                </div>

                {/* CENTER: Menu */}
                <ul className="hidden lg:flex gap-8 text-sm font-semibold tracking-wide">
                    <li>
                        <Link to="/" className="hover:text-blue-600 cursor-pointer">HOME </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-600 cursor-pointer">ABOUT US </Link>
                    </li>
                   <li>
                        <Link to="/Courses" className="hover:text-blue-600 cursor-pointer">COURSES </Link>
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">ELEMENTS</li>
                    <li className="hover:text-blue-600 cursor-pointer">NEWS</li>
                    <li className="hover:text-blue-600 cursor-pointer">CONTACT</li>
                </ul>

                {/* RIGHT: Phone Box */}
                <div className="bg-yellow-400 text-white px-6 py-8 flex items-center gap-2 font-semibold">

                    <img
                        src={phonecall}
                        alt="phonecall"
                        className="w-8 h-8 object-contain"
                    />
                    <span>+43 4566 7788 2457</span>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
