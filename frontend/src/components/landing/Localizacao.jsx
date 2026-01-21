import React from 'react';
import { MapPin, Route, ShoppingBag, GraduationCap, TreePine } from 'lucide-react';
import { localizacaoData } from '../../data/mock';

const iconMap = {
  MapPin: MapPin,
  Route: Route,
  ShoppingBag: ShoppingBag,
  GraduationCap: GraduationCap,
  TreePine: TreePine
};

const Localizacao = () => {
  return (
    <section id="localizacao" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Localização <span className="text-amber-500">Estratégica</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            No coração de uma das regiões mais valorizadas de Jundiaí
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left - Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {localizacaoData.highlights.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div 
                  key={index}
                  className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5 hover:border-amber-600/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-zinc-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Right - Location Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/20 to-transparent rounded-3xl blur-2xl opacity-50" />
            <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 border border-amber-900/30">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-900/30">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{localizacaoData.title}</h3>
                <p className="text-amber-500 text-lg">{localizacaoData.subtitle}</p>
                
                <div className="mt-8 pt-6 border-t border-zinc-700/50">
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Localizado em uma das áreas mais nobres e valorizadas de Jundiaí, 
                    com fácil acesso às principais rodovias e toda infraestrutura necessária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;
