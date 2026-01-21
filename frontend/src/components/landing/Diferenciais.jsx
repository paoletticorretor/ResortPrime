import React from 'react';
import { Crown, Layout, Snowflake, Wifi, UtensilsCrossed, ChefHat, Maximize, Gem } from 'lucide-react';
import { diferenciais } from '../../data/mock';

const iconMap = {
  Crown: Crown,
  Layout: Layout,
  Snowflake: Snowflake,
  Wifi: Wifi,
  UtensilsCrossed: UtensilsCrossed,
  ChefHat: ChefHat,
  Maximize: Maximize,
  Gem: Gem
};

const Diferenciais = () => {
  return (
    <section id="diferenciais" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Diferenciais <span className="text-amber-500">Exclusivos</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Cada detalhe foi cuidadosamente planejado para proporcionar uma experiência de vida incomparável
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diferenciais.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div 
                key={index}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-amber-600/50 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-amber-500" />
                  </div>
                  
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Diferenciais;
