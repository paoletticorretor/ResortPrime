import React, { useState } from 'react';
import { Expand } from 'lucide-react';
import { plantaData } from '../../data/mock';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

const Planta = () => {
  const [activeTab, setActiveTab] = useState('planta');

  return (
    <section id="planta" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,119,6,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Planta & <span className="text-amber-500">Implantação</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Conheça em detalhes a distribuição dos ambientes e a implantação completa do empreendimento
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {plantaData.tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/30'
                  : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Image */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/30 to-transparent rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700">
                <img 
                  src={plantaData.planta.image}
                  alt={plantaData.planta.title}
                  className="w-full h-auto"
                />
                
                {/* Ampliar Button */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="absolute bottom-4 right-4 bg-zinc-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-amber-600 transition-colors">
                      <Expand className="w-4 h-4" />
                      Ampliar
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl bg-zinc-900 border-zinc-700">
                    <img 
                      src={plantaData.planta.image}
                      alt={plantaData.planta.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
          
          {/* Info Card */}
          <div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-3">
              {plantaData.planta.title}
            </h3>
            <p className="text-zinc-400 mb-6">
              {plantaData.planta.description}
            </p>
            
            <div className="space-y-4">
              {plantaData.planta.specs.map((spec, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-zinc-700/50 last:border-0"
                >
                  <span className="text-zinc-400">{spec.label}</span>
                  <span className="text-2xl font-bold text-amber-500">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Planta;
