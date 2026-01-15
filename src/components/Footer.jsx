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
        <h2 className="text-2xl font-bold text-white mb-6">
          Subscribe to newsletter
        </h2>

        <div className="flex justify-center max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 outline-none bg-white text-gray-900"
          />
          <button className="bg-yellow-400 text-white px-6 font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-15 grid grid-cols-1 md:grid-cols-4 gap-10 md:flex-row">
        
        {/* Logo & About */}
        <div >
           <div className="flex items-center gap-5">
            <img
          src={logo}
          alt="course logo"
          className="w-12 mb-5"
          />
          <h3 className="text-white font-bold mb-4 text-3xl">
            COURSE
          </h3>
           </div>

          <p className="text-sm leading-relaxed">
           Upgrade your skills with expert-led courses, practical learning, and flexible study options. Join thousands of students and build a successful career with us.
          </p>
          
        </div>
        

        {/* Menu */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xl">
            Menu
          </h4>
          <ul className="space-y-2 text-lg">
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xl">
            Useful Links
          </h4>
          <ul className="space-y-2 text-lg">
            <li>Testimonials</li>
            <li>FAQ</li>
            <li>Community</li>
            <li>Campus Pictures</li>
            <li>Tuitions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-xl">
            Contact
          </h4>

          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" />
              Blvd Libertad, 34 m05200 
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" />
              0034 37483 2445 322
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              hello@company.com
            </li>
            <li className="flex items-center gap-6">
               <div className="flex gap-4 text-white">
            <Facebook size={20} />
            <Linkedin size={20} />
            <Instagram size={20} />
            <Twitter size={20} />
          </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col  justify-between items-center gap-4 text-base ">
          
          <p >
            Copyright ©2026 All rights reserved | This template is made with ❤️ by Vishal Jat
          </p>


          {/* If you need social media item at bottom , uncomment this part */}
          {/* <div className="flex gap-4 text-white">
            <Facebook size={18} />
            <Linkedin size={18} />
            <Instagram size={18} />
            <Twitter size={18} />
          </div> */}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
