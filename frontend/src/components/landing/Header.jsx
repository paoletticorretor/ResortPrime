import React from 'react';
import { MapPin } from 'lucide-react';

const Header = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div>
              <h1 className="text-white font-semibold text-lg tracking-tight">Zohari Imóveis</h1>
              <p className="text-amber-500/80 text-xs flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Jundiaí, SP
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#diferenciais" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm font-medium">Diferenciais</a>
            <a href="#planta" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm font-medium">Planta</a>
            <a href="#comodidades" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm font-medium">Comodidades</a>
            <a href="#galeria" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm font-medium">Galeria</a>
            <a href="#localizacao" className="text-zinc-400 hover:text-amber-500 transition-colors text-sm font-medium">Localização</a>
          </nav>
          
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-amber-900/30"
          >
            Agendar Visita
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
