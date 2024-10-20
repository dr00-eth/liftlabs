import React from 'react';
import { ChevronDown } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index} className="w-full h-screen">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      ))}
    </Slider>
  );
};

const HeroSection = ({ scrollToSection, aboutRef }) => {
  const heroImages = [
    '/liftlabs-bg1.png',
    '/liftlabs-bg2.png',
    '/liftlabs-bg3.png',
    '/liftlabs-bg4.png',
    '/liftlabs-bg5.png',
    '/liftlabs-bg6.png'
  ];

  return (
    <section className="relative h-screen">
      <HeroSlider images={heroImages} />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center px-4 w-full max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
            Leading Innovations For Tomorrow
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Empowering businesses with cutting-edge AI and automation solutions
          </p>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full transition duration-300 transform hover:scale-105"
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ChevronDown
          onClick={() => scrollToSection(aboutRef)}
          className="text-white animate-bounce cursor-pointer"
          size={36}
        />
      </div>
    </section>
  );
};

export default HeroSection;