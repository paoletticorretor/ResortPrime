import React, { useState } from 'react';
import { MapPin, Car, ShoppingBag, Route, GraduationCap,Sparkles, Navigation, Clock, ExternalLink } from 'lucide-react';

const Location = () => {
  const handleOpenMap = () => {
    window.open('https://www.google.com/maps/place/R3XF%2B8P+Engordadouro,+Jundiai+-+SP', '_blank');
  };
  const locationFeatures = [
    {
      icon: MapPin,
      title: 'Localização',
      description: 'Região em expansão e crescente valorização'
    },
    {
      icon: Route,
      title: 'Rodovia Anhanguera',
      description: 'Apenas 5 minutos de acesso'
    },
    {
      icon: Route,
      title: 'Rodovia Bandeirantes',
      description: 'Apenas 8 minutos de acesso'
    },
    {
      icon: ShoppingBag,
      title: 'Comércios Próximos',
      description: 'Shopping, supermercados, farmácias e bancos'
    },
    {
      icon: GraduationCap,
      title: 'Educação de Qualidade',
      description: 'Escolas e universidades próximas'
    },
    {
      icon: Car,
      title: 'Tudo por Perto',
      description: 'Parques, pistas de caminhada e serviços essenciais'
    }
  ];

  return (
  
    <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] relative">
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#d4af37_0%,transparent_70%)] opacity-5"></div>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold text-[#f5f5f0] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Excelente <span className="text-[#d4af37]">Localização</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No centro de uma das regiões que mais cresce e se valoriza em Jundiaí
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

        {/* 
        {/* Mapa Embutido do Google Maps 
        <div className="mb-12">
          <div className="relative bg-gradient-to-br from-[#1a1a1a] to-black rounded-3xl overflow-hidden border-2 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.8!2d-46.925!3d-23.226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf26f7f5555555%3A0x0!2sR3XF%2B8P%20Engordadouro%2C%20Jundiai%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div> */}

        <div 
          className="bg-gradient-to-br from-[#1a1a1a] to-black rounded-3xl p-10 border border-[#d4af37]/30 text-center shadow-2xl shadow-[#d4af37]/10 cursor-pointer hover:border-[#d4af37] hover:shadow-[#d4af37]/30 transition-all duration-300 group"
          onClick={handleOpenMap}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/40 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-8 h-8 text-[#d4af37]" />
          </div>
          <h3 className="text-3xl font-bold text-[#f5f5f0] mb-3 group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>Resort Prime</h3>
          <p className="text-gray-400 text-lg mb-4">Av. Pedro Clarismundo Fornari, 2009, Engordadouro, Jundiaí - SP</p>
          <div className="flex items-center justify-center gap-2 text-[#d4af37] text-sm font-semibold">
            <ExternalLink className="w-4 h-4" />
            <span>Ver no Google Maps</span>
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Location;