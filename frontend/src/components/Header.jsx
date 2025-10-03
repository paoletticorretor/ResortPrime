import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999193489?text=Olá! Tenho interesse no apartamento Resort Prime.', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl sm:text-2xl font-bold text-gray-900">
            Resort Prime
          </div>
          <Button 
            onClick={handleWhatsApp}
            className="bg-gray-900 hover:bg-gray-800 text-white transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Contato</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;