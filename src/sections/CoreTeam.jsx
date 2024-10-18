import React from 'react';
import { User } from 'lucide-react';

const TeamMember = ({ name, role, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg overflow-hidden group relative">
    <div className="relative z-10">
      <User className="mx-auto text-orange-400 mb-4 group-hover:scale-110 transition duration-300" size={48} />
      <h3 className="text-xl font-semibold mb-2 text-blue-300">{name}</h3>
      <h4 className="text-lg font-medium mb-2 text-orange-400">{role}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 opacity-0 group-hover:opacity-20 transition duration-300 pointer-events-none"></div>
  </div>
);

const CoreTeam = () => {
  const teamMembers = [
    {
      name: "Drew Meyer",
      role: "Co-Founder & CEO",
      description: "Visionary leader with a passion for innovative tech solutions."
    },
    {
      name: "Steve Fox",
      role: "Co-Founder & CTO",
      description: "Tech guru with expertise in AI and automation systems."
    },
    {
      name: "Steve Miller",
      role: "Co-Founder & COO",
      description: "Operations mastermind ensuring smooth project delivery."
    }
  ];

  return (
    <section id="team" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Meet the Core Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;