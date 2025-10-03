import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999193489?text=Olá! Tenho interesse no apartamento Resort Prime.', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-[#d4af37]" />
            <span className="text-2xl sm:text-3xl font-bold text-[#f5f5f0]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Resort Prime
            </span>
          </div>
          <Button 
            onClick={handleWhatsApp}
            className="bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] hover:from-[#f4e5c3] hover:to-[#d4af37] text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/50"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Contato Exclusivo</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;