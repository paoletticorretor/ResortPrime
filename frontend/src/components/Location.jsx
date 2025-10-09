import React from 'react';
import { MapPin, Car, ShoppingBag, GraduationCap, Navigation, Clock } from 'lucide-react';

const Location = () => {
  const locationFeatures = [
    {
      icon: MapPin,
      title: 'Localização',
      description: 'Região em crescente valorização em Jundiaí'
    },
    {
      icon: Navigation,
      title: 'Rodovia Anhanguera',
      description: 'Apenas 5 minutos de acesso'
    },
    {
      icon: Navigation,
      title: 'Rodovia Bandeirantes',
      description: 'Apenas 8 minutos de acesso'
    },
    {
      icon: ShoppingBag,
      title: 'Comércio Próximos',
      description: 'Shopping, supermercados, farmácias e bancos'
    },
    {
      icon: GraduationCap,
      title: 'Educação de Qualidade',
      description: 'Escolas renomadas e universidades próximas'
    },
    {
      icon: Car,
      title: 'Tudo por Perto',
      description: 'Parques e serviços essenciais'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#d4af37_0%,transparent_70%)] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <MapPin className="w-5 h-5 text-[#d4af37]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#f5f5f0] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Localização <span className="text-[#d4af37]">Estratégica</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No coração de uma das regiões que mais cresce e mais valorizadas de Jundiaí
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {locationFeatures.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/30 rounded-2xl mb-5 group-hover:border-[#d4af37] group-hover:shadow-lg group-hover:shadow-[#d4af37]/30 transition-all duration-300">
                <feature.icon className="w-9 h-9 text-[#d4af37] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#f5f5f0] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-3xl p-10 border border-[#d4af37]/30 text-center shadow-2xl shadow-[#d4af37]/10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/40 rounded-2xl mb-6">
            <MapPin className="w-8 h-8 text-[#d4af37]" />
          </div>
          <h3 className="text-3xl font-bold text-[#f5f5f0] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Resort Prime</h3>
          <p className="text-gray-400 text-lg">Jundiaí, São Paulo</p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Location;