import React from 'react';
import { ArrowUpCircle, Code, Brain } from 'lucide-react';

const About = ({ aboutRef }) => (
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
);

export default About;