import React, { useState } from 'react';
import { galeriaData } from '../../data/mock';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

const Galeria = () => {
  const [activeTab, setActiveTab] = useState('apartamento');
  const [selectedImage, setSelectedImage] = useState(null);

  const currentImages = activeTab === 'apartamento' ? galeriaData.apartamento : galeriaData.empreendimento;

  return (
    <section id="galeria" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,119,6,0.08),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Galeria <span className="text-amber-500">Exclusiva</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Explore cada detalhe desta residência excepcional
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {galeriaData.tabs.map((tab) => (
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
        
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-medium text-lg translate-y-2 group-hover:translate-y-0 transition-transform">
                      {image.alt}
                    </p>
                  </div>
                  
                  {/* Border Glow on Hover */}
                  <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 rounded-2xl transition-colors" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl bg-zinc-900 border-zinc-700 p-2">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-white text-center py-3 font-medium">{image.alt}</p>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
