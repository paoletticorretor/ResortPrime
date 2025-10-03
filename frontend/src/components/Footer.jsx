import React from 'react';
import { Building2, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6" />
              <h3 className="text-xl font-bold">Resort Prime</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Apartamento de alto padrão com acabamento premium e localização privilegiada em Jundiaí, SP.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>(11) 9.9919-3489</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Jundiaí, São Paulo</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold mb-4">Informações</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Valor: R$ 1.155.000,00</p>
              <p>Área: 109m²</p>
              <p>3 Dormitórios (1 Suíte)</p>
              <p>2 Vagas de Garagem</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Resort Prime. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;