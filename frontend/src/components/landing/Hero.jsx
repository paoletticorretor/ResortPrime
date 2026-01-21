import React from 'react';
import { MapPin, Ruler, Bed, Bath, Car, ArrowRight } from 'lucide-react';
import { heroData, featuresOverview } from '../../data/mock';

const iconMap = {
  Ruler: Ruler,
  Bed: Bed,
  Bath: Bath,
  Car: Car
};

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-zinc-950 overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroData.heroImage} 
          alt="Resort Prime" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide">{heroData.location}</span>
              </div>
              
              <p className="text-amber-500/80 uppercase tracking-[0.3em] text-sm font-medium">
                {heroData.tagline}
              </p>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                {heroData.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  {heroData.titleHighlight}
                </span>
              </h1>
              
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                {heroData.description}
              </p>
            </div>
            
            {/* Price Tag */}
            <div className="inline-flex flex-col bg-zinc-900/80 backdrop-blur-sm border border-amber-900/30 rounded-2xl p-6">
              <span className="text-amber-500/80 text-sm font-medium uppercase tracking-wider">{heroData.priceLabel}</span>
              <span className="text-4xl font-bold text-white mt-1">{heroData.price}</span>
            </div>
            
            {/* CTA Button */}
            <button 
              onClick={scrollToContact}
              className="group flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-amber-900/40"
            >
              {heroData.ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Right - Feature Cards */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-zinc-900/60 backdrop-blur-xl border border-amber-900/30 rounded-3xl p-8">
                <img 
                  src={heroData.heroImage} 
                  alt="Resort Prime" 
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  {featuresOverview.map((feature, index) => {
                    const IconComponent = iconMap[feature.icon];
                    return (
                      <div 
                        key={index}
                        className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50 hover:border-amber-600/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-amber-500" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">{feature.value}</p>
                            <p className="text-zinc-500 text-xs">{feature.label}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Features */}
        <div className="lg:hidden mt-12 grid grid-cols-2 gap-3">
          {featuresOverview.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className="bg-zinc-900/60 backdrop-blur-sm rounded-xl p-4 border border-zinc-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{feature.value}</p>
                    <p className="text-zinc-500 text-xs">{feature.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
