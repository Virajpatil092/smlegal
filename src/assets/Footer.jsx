import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto p-6 md:p-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <span className="text-gold">⚖️</span> SMLEGAL
            </h2>
            <p className="mt-4 leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quae.
            </p>
            <p className="mt-2 leading-relaxed text-gray-300">
              Laudantium debitis velit, expedita nam excepturi dolores! Laborum quod quia velit.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gold transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Need a professional website? Contact me</h3>
            <div className="flex items-center gap-4">
              <Link to="https://www.linkedin.com/in/viraj-patil-863b32255/" className="hover:text-gold transition-transform transform duration-200 hover:scale-110" title='LinkedIn'>
                <FaLinkedin />
              </Link>
              <Link to="https://www.instagram.com/virajpatil092/" className="hover:text-gold transition-transform transform duration-200 hover:scale-110" title='Instagram'>
                <FaInstagram />
              </Link>
              <Link to="https://github.com/Virajpatil092/" className="hover:text-gold transition-transform transform duration-200 hover:scale-110" title='GitHub'>
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between text-sm space-y-4 md:space-y-0">
          <p className="text-center md:text-left text-gray-400">Copyright © Viraj Patil</p>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:text-gold transition-colors duration-200">
              Terms & Conditions
            </a>
            <span className="text-gray-400">|</span>
            <a href="/" className="hover:text-gold transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
