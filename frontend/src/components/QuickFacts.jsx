import React from 'react';
import { Home, Bed, Bath, Car } from 'lucide-react';

const QuickFacts = () => {
  const facts = [
    {
      icon: Home,
      value: '109m²',
      label: 'Área Total'
    },
    {
      icon: Bed,
      value: '3 Dorms',
      label: '1 Suíte'
    },
    {
      icon: Bath,
      value: '3 Banheiros',
      label: 'Ventilação Natural'
    },
    {
      icon: Car,
      value: '2 Vagas',
      label: 'Subsolo Livre'
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                <fact.icon className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{fact.value}</div>
              <div className="text-sm text-gray-600">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;