import React from 'react';

const Footer = () => (
  <footer className="bg-black text-gray-400 py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; {new Date().getFullYear()} Lift Labs LLC. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;