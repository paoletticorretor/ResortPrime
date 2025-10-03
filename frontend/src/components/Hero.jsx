import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999193489?text=Olá! Tenho interesse no apartamento Resort Prime.', '_blank');
  };

  return (
    <section className="relative pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700">
              <MapPin className="w-4 h-4 mr-2" />
              Jundiaí, SP
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Seu novo lar no
              <span className="block text-gray-600 mt-2">Resort Prime</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Apartamento de alto padrão com 109m², 3 dormitórios, varanda gourmet e automação residencial completa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div>
                <div className="text-sm text-gray-500 mb-1">Valor</div>
                <div className="text-4xl font-bold text-gray-900">R$ 1.155.000</div>
              </div>
            </div>
            
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 group"
            >
              Agendar Visita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/ze7a895z_FTRP%20%2815%29.jpg"
                alt="Resort Prime - Vista Aérea"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-sm text-gray-500">Área Total</div>
              <div className="text-3xl font-bold text-gray-900">109m²</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;