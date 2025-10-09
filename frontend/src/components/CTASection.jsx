import React from 'react';
import { Phone, MessageCircle, ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const CTASection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999193489?text=Olá! Tenho interesse no apartamento Resort Prime.', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="relative bg-gradient-to-br from-[#1a1a1a] via-black to-[#1a1a1a] rounded-3xl p-12 sm:p-16 border-2 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/20 overflow-hidden">
          {/* Gold corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#d4af37]/40 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#d4af37]/40 rounded-br-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-[#d4af37]" />
              <Star className="w-6 h-6 text-[#d4af37]" />
              <Star className="w-6 h-6 text-[#d4af37]" />
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-[#f5f5f0]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Agende sua Visita
              <span className="block mt-2 text-[#d4af37]">Exclusiva</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre em contato e conheça pessoalmente este apartamento e tudo o que um verdadeiro Resort, dentro da cidade, pode lhe oferecer. Estamos prontos para recebê-lo!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] hover:from-[#f4e5c3] hover:to-[#d4af37] text-black text-lg px-10 py-7 font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/50 group w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-[#d4af37]">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">(11) 9.9919-3489</span>
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#d4af37]/20">
              <p className="text-gray-400 text-sm">
                Atendimento personalizado e consultoria imobiliária especializada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;