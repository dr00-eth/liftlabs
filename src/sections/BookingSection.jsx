import React from 'react';

const BookingSection = ({ contactRef, openDrawer }) => (
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
);

export default BookingSection;