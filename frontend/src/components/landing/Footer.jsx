import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Zohari Imóveis</h3>
              </div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Especialistas em imóveis de alto padrão em Jundiaí e região. 
              Encontre o imóvel dos seus sonhos conosco.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#diferenciais" className="text-zinc-500 hover:text-amber-500 transition-colors text-sm">Diferenciais</a></li>
              <li><a href="#planta" className="text-zinc-500 hover:text-amber-500 transition-colors text-sm">Planta</a></li>
              <li><a href="#comodidades" className="text-zinc-500 hover:text-amber-500 transition-colors text-sm">Comodidades</a></li>
              <li><a href="#galeria" className="text-zinc-500 hover:text-amber-500 transition-colors text-sm">Galeria</a></li>
              <li><a href="#localizacao" className="text-zinc-500 hover:text-amber-500 transition-colors text-sm">Localização</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <Phone className="w-4 h-4 text-amber-500" />
                (11) 9.9919-3489
              </li>
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <MapPin className="w-4 h-4 text-amber-500" />
                Jundiaí, São Paulo
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-10 pt-6">
          <p className="text-zinc-600 text-sm text-center">
            © {currentYear} Zohari Imóveis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
