import React from 'react';
import { Lightbulb, Rocket, Users, ChartBar, Shield, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Innovation Incubation",
      description: "Nurture groundbreaking ideas and transform them into viable tech ventures. We provide the environment and resources needed for innovation to flourish."
    },
    {
      icon: Rocket,
      title: "Startup Acceleration",
      description: "Accelerate the growth of promising tech startups with mentorship, funding, and strategic guidance to help them reach their full potential."
    },
    {
      icon: Users,
      title: "Tech Talent Network",
      description: "Access our extensive network of top-tier tech professionals, from developers to AI specialists, to build world-class teams for your projects."
    },
    {
      icon: ChartBar,
      title: "Market Strategy & Growth",
      description: "Develop data-driven market strategies and growth plans to help your tech venture capture market share and scale effectively."
    },
    {
      icon: Shield,
      title: "Regulatory & Compliance",
      description: "Navigate the complex landscape of tech regulations and compliance with our expert guidance, ensuring your innovations meet all legal requirements."
    },
    {
      icon: Zap,
      title: "Tech Solutions Integration",
      description: "Seamlessly integrate cutting-edge AI and automation solutions into your business processes, leveraging our expertise in advanced technologies."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Our Services</h2>
        <p className="text-xl mb-12 text-gray-300">
          As an incubator and umbrella company, Lift Labs provides a comprehensive suite of services designed to nurture, accelerate, and integrate innovative tech ventures.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
  );
};

export default ServicesSection;