import React from 'react';
import { Building2, Phone, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-[#f5f5f0] py-16 border-t-2 border-[#d4af37]/20 relative overflow-hidden">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-7 h-7 text-[#d4af37]" />
              <h3 className="text-2xl font-bold text-[#f5f5f0]" style={{ fontFamily: 'Playfair Display, serif' }}>Resort Prime</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Apartamento de alto padrão com acabamento premium e localização privilegiada no coração de Jundiaí.
            </p>
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#d4af37] to-transparent mt-6"></div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-[#d4af37] text-lg tracking-wider uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400 text-sm group hover:text-[#d4af37] transition-colors">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#d4af37]" />
                <span>(11) 9.9919-3489</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400 text-sm group hover:text-[#d4af37] transition-colors">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#d4af37]" />
                <span>Jundiaí, São Paulo</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold mb-6 text-[#d4af37] text-lg tracking-wider uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>Detalhes</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-[#d4af37]/10">
                <span>Investimento</span>
                <span className="text-[#f5f5f0] font-semibold">R$ 1.155.000</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#d4af37]/10">
                <span>Área</span>
                <span className="text-[#f5f5f0] font-semibold">109m²</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#d4af37]/10">
                <span>Dormitórios</span>
                <span className="text-[#f5f5f0] font-semibold">3 (1 Suíte)</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-[#d4af37]/10">
                <span>Vagas</span>
                <span className="text-[#f5f5f0] font-semibold">2 Privativas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#d4af37]/20 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Resort Prime. Todos os direitos reservados.
          </p>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent mx-auto mt-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;