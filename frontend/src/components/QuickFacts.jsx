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
      label: '1 Suíte Premium'
    },
    {
      icon: Bath,
      value: '3 Banheiros',
      label: 'Ventilação Natural'
    },
    {
      icon: Car,
      value: '2 Vagas',
      label: 'Subsolo Privativo'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black border-y border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <div 
              key={index}
              className="text-center group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 rounded-2xl mb-4 group-hover:border-[#d4af37] group-hover:shadow-lg group-hover:shadow-[#d4af37]/30 transition-all duration-300">
                  <fact.icon className="w-9 h-9 text-[#d4af37] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-3xl font-bold text-[#f5f5f0] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{fact.value}</div>
                <div className="text-sm text-gray-400">{fact.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;