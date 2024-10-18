import React, { useEffect, useState, useRef } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
import { ArrowUpCircle, Code, Brain, Zap, ChevronDown, X } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoImage from '/logo-transparent.png';

// Booking Drawer component
const BookingDrawer = ({ isOpen, onClose }) => {
  const [drawerHeight, setDrawerHeight] = useState('80vh');
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setDrawerHeight(`${Math.min(window.innerHeight * 0.9, 800)}px`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}></div>
      )}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'
          } z-50 flex flex-col`}
        style={{ height: drawerHeight, maxHeight: '90vh' }}
      >
        <div className="flex justify-between items-center p-4 border-b bg-gray-100 sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-gray-800">Book a Consultation</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <X size={24} />
          </button>
        </div>
        <div className="flex-grow overflow-hidden">
          <iframe
            ref={iframeRef}
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2c3mrfHevLi61BnAKmagUILAaB1YRth68ip6NXizp5lwtvP_aO-TIgF-gRae0iOpmKI-Mo-lUA?gv=true"
            style={{ border: 0, width: '100%', height: '100%' }}
            frameBorder="0"
            title="Google Calendar Booking"
          ></iframe>
        </div>
      </div>
    </>
  );
};

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
        <div key={index} className="w-full h-[60vh]">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          />
        </div>
      ))}
    </Slider>
  );
};

Intercom({
  app_id: 'y0e8zusf',
});

const LiftLabsLanding = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const heroImages = [
    '/liftlabs-bg1.png',
    '/liftlabs-bg2.png',
    '/liftlabs-bg3.png',
    '/liftlabs-bg4.png',
    '/liftlabs-bg5.png',
    '/liftlabs-bg6.png'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans relative">
      {/* Header */}
      <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* <img
            src={logoImage}
            alt="Lift Labs LLC Logo"
            className="h-10 w-auto" // Adjust the height as needed
          /> */}
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

      {/* Hero Section with Slider */}
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
                onClick={() => scrollToSection(contactRef)}
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

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">About Lift Labs</h2>
          <p className="text-xl mb-12 text-gray-300">
            We are the catalyst that elevates businesses into the future, making advanced technology accessible and transformative for organizations worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ArrowUpCircle, title: "Innovation", description: "Pushing the boundaries to provide the latest technological solutions." },
              { icon: Code, title: "Excellence", description: "Committing to the highest standards in every project." },
              { icon: Brain, title: "Forward-Thinking", description: "Anticipating future trends to keep clients ahead of the curve." }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden group relative">
                <div className="relative z-10">
                  <item.icon className="mx-auto text-orange-400 mb-4 group-hover:scale-110 transition duration-300" size={48} />
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Zap, title: "AI Solutions", description: "Harness the power of artificial intelligence to transform your business processes and decision-making." },
              { icon: Code, title: "Automation Systems", description: "Streamline your operations with custom automation solutions designed to boost efficiency and reduce errors." }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden group relative">
                <div className="relative z-10">
                  <service.icon className="text-orange-400 mb-4 group-hover:scale-110 transition duration-300" size={36} />
                  <h3 className="text-xl font-semibold mb-2 text-blue-300">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="contact" ref={contactRef} className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">Schedule a Consultation</h2>
          <p className="text-xl mb-8 text-gray-300">
            Ready to elevate your business with cutting-edge AI and automation solutions? Book a consultation with our experts today!
          </p>
          <button
            onClick={openDrawer}
            className="bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
          >
            Book a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Lift Labs LLC. All rights reserved.</p>
        </div>
      </footer>

      {/* Booking Drawer */}
      <BookingDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
};

export default LiftLabsLanding;