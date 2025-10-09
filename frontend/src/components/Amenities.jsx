import React from 'react';
import { Dumbbell, Waves, Users, ShoppingCart, Shield, Smartphone, TreePine, UtensilsCrossed, Baby, Dog, Bike, Flower2, Heart, Gamepad2, Sparkles } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const Amenities = () => {
  const amenityCategories = [
    {
      title: 'Fitness & Bem-estar',
      icon: Dumbbell,
      color: '#d4af37',
      items: [
        { icon: Dumbbell, text: 'Complexo Fitness completo com academia equipada' },
        { icon: Heart, text: 'Espaço Yoga e Espaço Pilates dedicados' },
        { icon: Waves, text: 'SPA exclusivo para relaxamento' },
        { icon: Sparkles, text: 'Espaço Beleza com cadeira de corte, manicure e lavatório' },
        { icon: TreePine, text: 'Pista de Caminhada com 250m lineares' },
        { icon: Dumbbell, text: 'Fitness Externo ao ar livre' }
      ]
    },
    {
      title: 'Lazer & Entretenimento',
      icon: Waves,
      color: '#d4af37',
      items: [
        { icon: Waves, text: 'Piscina Descoberta Adulto (25m) e Infantil (7,5m)' },
        { icon: Waves, text: 'Piscina Coberta Aquecida (20m)' },
        { icon: UtensilsCrossed, text: 'Club Prime com churrasqueira e piscina exclusiva' },
        { icon: UtensilsCrossed, text: 'Salão de Festas com chopeira e churrasqueira' },
        { icon: UtensilsCrossed, text: '2 Churrasqueiras Extras para confraternizações' },
        { icon: Waves, text: 'Quadra Beach Tennis' },
        { icon: Users, text: 'Quadra Poliesportiva completa' },
        { icon: Gamepad2, text: 'Salão de Jogos equipado' },
        { icon: Baby, text: 'Playground infantil' }
      ]
    },
    {
      title: 'Espaços para Família',
      icon: Baby,
      color: '#d4af37',
      items: [
        { icon: Baby, text: 'Brinquedoteca completa' },
        { icon: Baby, text: 'Espaço Baby para os pequenos' },
        { icon: Users, text: 'Espaço Teen para adolescentes' },
        { icon: Dog, text: 'Espaço Pet dedicado' },
        { icon: Flower2, text: 'Horta Comunitária' }
      ]
    },
    {
      title: 'Conveniência & Serviços',
      icon: ShoppingCart,
      color: '#d4af37',
      items: [
        { icon: Smartphone, text: 'Coworking moderno equipado' },
        { icon: Bike, text: 'Bicicletário seguro' },
        { icon: ShoppingCart, text: 'Complexo comercial no térreo com comércios essenciais' },
        { icon: Users, text: 'Estacionamento para Visitantes' },
        { icon: Shield, text: 'Elevadores transfer para maior comodidade' }
      ]
    },
    {
      title: 'Segurança & Infraestrutura',
      icon: Shield,
      color: '#d4af37',
      items: [
        { icon: Shield, text: 'Portaria Blindada com monitoramento 24h' },
        { icon: Shield, text: 'Sistema de segurança completo' },
        { icon: Users, text: '4 Elevadores com acesso direto às garagens' },
        { icon: Flower2, text: 'Paisagismo e jardins internos e externos' }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-[#f5f5f0] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Comodidades <span className="text-[#d4af37]">Resort</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Uma infraestrutura completa de resort para você viver com todo conforto e sofisticação
          </p>
        </div>

        {/* Accordion for categories */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {amenityCategories.map((category, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/50 transition-all duration-300"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/30 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:border-[#d4af37] transition-all duration-300">
                      <category.icon className="w-7 h-7 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#f5f5f0] group-hover:text-[#d4af37] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">{category.items.length} comodidades exclusivas</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className="flex items-start gap-3 p-4 bg-black/40 rounded-xl border border-[#d4af37]/10 hover:border-[#d4af37]/30 hover:bg-black/60 transition-all duration-300 group"
                      >
                        <item.icon className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Highlight stats */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-2xl">
            <div className="text-4xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>3</div>
            <div className="text-sm text-gray-400">Piscinas</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-2xl">
            <div className="text-4xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>250m</div>
            <div className="text-sm text-gray-400">Pista de Caminhada</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-2xl">
            <div className="text-4xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>24h</div>
            <div className="text-sm text-gray-400">Segurança</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-2xl">
            <div className="text-4xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>15+</div>
            <div className="text-sm text-gray-400">Áreas de Lazer</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Amenities;
