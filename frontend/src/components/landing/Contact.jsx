import React from 'react';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { contactData } from '../../data/mock';

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.12),transparent_60%)]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-amber-600/30 to-amber-800/10 rounded-[2.5rem] blur-2xl" />
          
          {/* Card */}
          <div className="relative bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border border-amber-900/30 rounded-3xl p-10 lg:p-14 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              {contactData.title}
              <span className="text-amber-500"> {contactData.titleHighlight}</span>
            </h2>
            
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mt-4 mb-10">
              {contactData.description}
            </p>
            
            {/* WhatsApp Button */}
            <a 
              href={contactData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col items-center"
            >
              <div className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 shadow-2xl shadow-green-900/40 group-hover:scale-105">
                <MessageCircle className="w-7 h-7" />
                {contactData.ctaLabel}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
              
              <p className="text-amber-500 font-semibold text-2xl mt-6">
                {contactData.whatsapp}
              </p>
            </a>
            
            <p className="text-zinc-500 mt-6 text-sm">
              {contactData.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
