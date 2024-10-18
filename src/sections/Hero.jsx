import React from 'react';
import { ChevronDown } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';  // Assuming you've already created this component

const Hero = ({ scrollToSection, aboutRef }) => {
  const heroImages = [
    '/liftlabs-bg1.png',
    '/liftlabs-bg2.png',
    '/liftlabs-bg3.png',
    '/liftlabs-bg4.png',
    '/liftlabs-bg5.png',
    '/liftlabs-bg6.png'
  ];

  return (
    <section className="relative h-[60vh]">
      <HeroSlider images={heroImages} />
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <h1 className="text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
              Leading Innovations For Tomorrow
            </h1>
            <p className="text-2xl mb-8 text-gray-200">Empowering businesses with cutting-edge AI and automation solutions</p>
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <ChevronDown
        onClick={() => scrollToSection(aboutRef)}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-30 cursor-pointer"
        size={48}
      />
    </section>
  );
};

export default Hero;