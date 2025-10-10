import React from 'react';
import { Zap, Wind, Building2, Sparkles, Grid3x3, Wrench, Waves, ShieldCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Building2,
      title: 'Exclusividade Premium',
      description: 'Apenas 5 apartamentos por andar, 4 elevadores com acesso direto às garagens'
    },
    {
      icon: Grid3x3,
      title: 'Planta Única',
      description: 'Andar alto, meio da Torre. Única metragem de 109m² no andar'
    },
    {
      icon: Wind,
      title: 'Climatização Premium',
      description: 'Todos os dormitórios, sala e varanda gourmet com preparação completa para ar-condicionado'
    },
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Sistema completo de automação residencial com fibra ótica'
    },
    {
      icon: Waves,
      title: 'Varanda Gourmet',
      description: 'Ampla varanda integrada com sala e cozinha'
    },
    {
      icon: Sparkles,
      title: 'Cozinha Integrada',
      description: 'Design funcional, integrado com despensa e lavanderia'
    },
    {
      icon: Wrench,
      title: 'Flexibilidade Total',
      description: 'Paredes internas removíveis (conforme planta) para personalização'
    },
    {
      icon: ShieldCheck,
      title: 'Acabamento Superior',
      description: 'Padrão superior de louças, metais, pias, pisos em porcelanato 1ª linha (áreas molhadas), tratamento acústico nos contrapisos'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#f5f5f0] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Diferenciais <span className="text-[#d4af37]">Exclusivos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cada detalhe foi cuidadosamente planejado para proporcionar uma experiência de vida incomparável
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-[#1a1a1a] to-black p-8 rounded-2xl border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 rounded-xl mb-5 group-hover:scale-110 group-hover:border-[#d4af37] transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold text-[#f5f5f0] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;