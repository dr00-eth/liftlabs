import React, { useEffect, useState, useRef } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import CoreTeam from './sections/CoreTeam';
import Projects from './sections/Projects';
import BookingSection from './sections/BookingSection';
import BookingDrawer from './components/BookingDrawer';
import Footer from './sections/Footer';

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans relative">
      <Header />
      <Hero scrollToSection={scrollToSection} aboutRef={aboutRef} />
      <About aboutRef={aboutRef} />
      <Services />
      <CoreTeam />
      <Projects />
      <BookingSection contactRef={contactRef} openDrawer={openDrawer} />
      <Footer />
      <BookingDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </div>
  );
};

export default LiftLabsLanding;