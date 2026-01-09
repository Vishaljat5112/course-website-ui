import logo from "../assets/logo.png";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-400">
      
      {/* Newsletter */}
      <div className="py-20 text-center border-b border-gray-700">
        <div className="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
        <h2 className="text-3xl font-bold text-white mb-6">
          Subscribe to newsletter
        </h2>

        <div className="flex justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 outline-none"
          />
          <button className="bg-yellow-400 text-white px-6 font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-30 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
           <img
          src={logo}
          alt="course logo"
          className="w-12 mb-10"
          />
          <h3 className="text-white text-2xl font-bold mb-4">
            COURSE
          </h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo reiciendis a facilis officiis consequatur!
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Menu
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Useful Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Testimonials</li>
            <li>FAQ</li>
            <li>Community</li>
            <li>Campus Pictures</li>
            <li>Tuitions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Contact
          </h4>

          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" />
              Blvd Libertad, 34 m05200 Arévalo
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" />
              0034 37483 2445 322
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              hello@company.com
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          
          <p>
            Copyright ©2026 All rights reserved | This template is made with ❤️ by Vishal Jat
          </p>

          <div className="flex gap-4 text-white">
            <Facebook size={18} />
            <Linkedin size={18} />
            <Instagram size={18} />
            <Twitter size={18} />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
