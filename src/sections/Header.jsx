import React from 'react';
import logoImage from '/logo-transparent.png';

const Header = () => (
  <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
        Lift Labs LLC
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-orange-400 transition duration-300">About</a></li>
          <li><a href="#services" className="hover:text-orange-400 transition duration-300">Services</a></li>
          <li><a href="#contact" className="hover:text-orange-400 transition duration-300">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;