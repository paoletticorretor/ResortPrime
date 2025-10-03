import React from 'react';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const CTASection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999193489?text=Olá! Tenho interesse no apartamento Resort Prime.', '_blank');
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 sm:p-16 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Agende sua Visita
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato agora e conheça pessoalmente este apartamento exclusivo no Resort Prime
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-medium">(11) 9.9919-3489</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;