import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-2 h-16 flex items-center">
        <div className="flex justify-between items-center w-full">
          <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
            Lift Labs LLC
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-orange-400 transition duration-300">About</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition duration-300">Services</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition duration-300">Contact</a></li>
            </ul>
          </nav>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="bg-gray-900 py-4">
            <ul className="flex flex-col items-center space-y-4">
              <li><a href="#about" className="text-white hover:text-orange-400 transition duration-300" onClick={toggleMenu}>About</a></li>
              <li><a href="#services" className="text-white hover:text-orange-400 transition duration-300" onClick={toggleMenu}>Services</a></li>
              <li><a href="#contact" className="text-white hover:text-orange-400 transition duration-300" onClick={toggleMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;