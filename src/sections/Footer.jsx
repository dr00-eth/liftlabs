import React from 'react';

const Footer = ({ onPrivacyClick }) => (
    <footer className="bg-black text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Lift Labs LLC. All rights reserved.</p>
        <div className="mt-4">
          <button
            onClick={onPrivacyClick}
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );

export default Footer;