import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';

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
        className={`fixed bottom-0 left-0 w-full bg-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
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

export default BookingDrawer;