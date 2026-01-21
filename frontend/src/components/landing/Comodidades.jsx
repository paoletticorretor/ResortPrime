import React, { useState } from 'react';
import { Dumbbell, PartyPopper, Users, Briefcase, Shield, ChevronDown } from 'lucide-react';
import { comodidades, comodidadesStats } from '../../data/mock';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const iconMap = {
  Dumbbell: Dumbbell,
  PartyPopper: PartyPopper,
  Users: Users,
  Briefcase: Briefcase,
  Shield: Shield
};

const Comodidades = () => {
  return (
    <section id="comodidades" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-600/50 to-transparent" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Comodidades <span className="text-amber-500">Resort</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Uma infraestrutura completa de resort para você viver com todo conforto e sofisticação
          </p>
        </div>
        
        {/* Accordion */}
        <div className="max-w-3xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {comodidades.map((categoria) => {
              const IconComponent = iconMap[categoria.icon];
              return (
                <AccordionItem 
                  key={categoria.id} 
                  value={categoria.id}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden data-[state=open]:border-amber-600/50"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center group-data-[state=open]:bg-amber-600/30 transition-colors">
                        <IconComponent className="w-6 h-6 text-amber-500" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-white font-semibold text-lg">{categoria.title}</h3>
                        <p className="text-amber-500/80 text-sm">{categoria.count} comodidades exclusivas</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                      {categoria.items.map((item, index) => (
                        <div 
                          key={index}
                          className="bg-zinc-800/50 rounded-lg px-4 py-3 text-zinc-300 text-sm border border-zinc-700/50"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {comodidadesStats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-zinc-900/30 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-amber-600/30 transition-colors"
            >
              <p className="text-4xl lg:text-5xl font-bold text-amber-500 mb-2">{stat.value}</p>
              <p className="text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comodidades;
