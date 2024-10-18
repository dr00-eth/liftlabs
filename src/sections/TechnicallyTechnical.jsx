import React from 'react';
import { Code, Zap, Brain } from 'lucide-react';

const TechnicallyTechnical = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg overflow-hidden">
      <h3 className="text-3xl font-bold mb-4 text-orange-400">Technically Technical</h3>
      <p className="text-xl mb-6 text-gray-300">
        Your on-demand Chief Technology Officer, specializing in streamlining business processes for entrepreneurs and companies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Code, title: "System Architecture", description: "We architect systems that simplify operations and remove technological barriers to scaling." },
          { icon: Zap, title: "Automation", description: "Develop automations that eliminate repetitive tasks and get you back to the human side of business." },
          { icon: Brain, title: "AI Integration", description: "Leverage artificial intelligence to optimize your workflows and decision-making processes." }
        ].map((item, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg overflow-hidden group relative">
            <div className="relative z-10">
              <item.icon className="text-orange-400 mb-4 group-hover:scale-110 transition duration-300" size={36} />
              <h4 className="text-xl font-semibold mb-2 text-blue-300">{item.title}</h4>
              <p className="text-gray-400">{item.description}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
      <a
        href="https://technicallytechnical.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
      >
        Learn More
      </a>
    </div>
  );
};

export default TechnicallyTechnical;