import React, { useState, useRef } from 'react';
import Intercom from '@intercom/messenger-js-sdk';
import Header from './sections/Header';
import HeroSection from './sections/Hero';
import About from './sections/About';
import ServicesSection from './sections/Services';
import CoreTeam from './sections/CoreTeam';
import Projects from './sections/Projects';
import BookingSection from './sections/BookingSection';
import Footer from './sections/Footer';
import BookingDrawer from './components/BookingDrawer';
import PrivacyPolicy from './components/PrivacyPolicy';
import { usePrivacyPolicy } from './hooks/usePrivacyPolicy';

Intercom({
  app_id: 'y0e8zusf',
});

const LiftLabsLanding = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const { isPrivacyPolicyOpen, handleOpenPrivacyPolicy, handleClosePrivacyPolicy } = usePrivacyPolicy();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      <Header />
      <main className="w-full">
        <HeroSection scrollToSection={scrollToSection} aboutRef={aboutRef} />
        <About aboutRef={aboutRef} />
        <ServicesSection />
        <CoreTeam />
        <Projects />
        <BookingSection contactRef={contactRef} openDrawer={openDrawer} />
      </main>
      <Footer onPrivacyClick={handleOpenPrivacyPolicy} />
      <BookingDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
      <PrivacyPolicy 
        isOpen={isPrivacyPolicyOpen} 
        onClose={handleClosePrivacyPolicy} 
      />
    </div>
  );
};

export default LiftLabsLanding;