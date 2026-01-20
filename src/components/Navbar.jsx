import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
   <nav className="fixed top-0 left-0 w-full z-50 px-17 py-5">
  <div className="max-w-7xl mx-auto mt-10 bg-white shadow-lg px-8 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <span className="text-xl font-extrabold tracking-wide">COURSE</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-sm font-semibold tracking-wide">
          <li><Link to="/" className="hover:text-yellow-500">HOME</Link></li>
          <li><Link to="/about" className="hover:text-yellow-500">ABOUT US</Link></li>
          <li><Link to="/courses" className="hover:text-yellow-500">COURSES</Link></li>
          <li><Link to="/elements" className="hover:text-yellow-500">ELEMENTS</Link></li>
          <li><Link to="/news" className="hover:text-yellow-500">NEWS</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">CONTACT</Link></li>
        </ul>

        {/* Desktop Phone Box */}
        <div className="hidden lg:flex bg-yellow-400 text-white px-6 py-4 items-center gap-2 font-semibold">
          <Phone size={18} />
          <span>+43 4566 7788 2457</span>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="lg:hidden bg-white border-t">
          <ul className="flex flex-col p-4 gap-4 text-sm font-semibold tracking-wide">
            <li><Link to="/" onClick={() => setOpen(false)}>HOME</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>ABOUT US</Link></li>
            <li><Link to="/courses" onClick={() => setOpen(false)}>COURSES</Link></li>
            <li><Link to="/elements" onClick={() => setOpen(false)}>ELEMENTS</Link></li>
            <li><Link to="/news" onClick={() => setOpen(false)}>NEWS</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>CONTACT</Link></li>

            {/* Phone in Mobile */}
            <li className="pt-3 border-t flex items-center gap-2 text-yellow-500">
              <Phone size={18} />
              <span>+43 4566 7788 2457</span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

