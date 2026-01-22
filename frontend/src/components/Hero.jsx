import React from 'react';
import { MapPin, ArrowRight, Crown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999193489?text=Olá! Tenho interesse no apartamento no Resort Prime.', '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-black via-[#1a1a1a] to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[#d4af37]/20 to-transparent border border-[#d4af37]/30 rounded-full text-sm text-[#f4e5c3]">
              <MapPin className="w-4 h-4 mr-2 text-[#d4af37]" />
              Engordadouro - Jundiaí - São Paulo
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-8 h-8 text-[#d4af37]" />
                <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase">RESORT PRIME - SANTA ANGELA</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f5f5f0] leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Apartamento à Venda
                <span className="block mt-2 bg-gradient-to-r from-[#d4af37] via-[#f4e5c3] to-[#d4af37] bg-clip-text text-transparent">
                  Torre A - 109m²
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Andar alto com vista livre, 3 dormitórios (1 suíte), ampla varanda gourmet integrada, 2 vagas em subsolo e livres.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/20 px-6 py-4 rounded-xl">
                <div className="text-xs text-[#d4af37] mb-1 tracking-wider uppercase">Investimento</div>
                <div className="text-4xl font-bold text-[#f5f5f0]" style={{ fontFamily: 'Playfair Display, serif' }}>R$ 1.175.000</div>
              </div>
            </div>
            
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] hover:from-[#f4e5c3] hover:to-[#d4af37] text-black text-lg px-10 py-7 font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/50 group"
            >
              Agendar Visita Exclusiva
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] rounded-3xl blur-xl opacity-20"></div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/20">
              <img 
                src="https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/ze7a895z_FTRP%20%2815%29.jpg"
                alt="Resort Prime - Vista Aérea"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            {/* <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-black to-[#1a1a1a] border border-[#d4af37]/30 p-6 rounded-2xl shadow-2xl">
              <div className="text-xs text-[#d4af37] mb-1 tracking-wider uppercase">Área Total</div>
              <div className="text-4xl font-bold text-[#f5f5f0]" style={{ fontFamily: 'Playfair Display, serif' }}>109m²</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;