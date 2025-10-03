import React, { useState } from 'react';
import { X, Maximize2, Building2, Home } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const empreendimentoImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/ze7a895z_FTRP%20%2815%29.jpg',
      title: 'Vista Aérea - Torres'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/58snlq4h_FTRP%20%2819%29.jpg',
      title: 'Arquitetura Premium'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/54l0dlhg_FTRP_Jan2.jpeg',
      title: 'Área de Lazer Exclusiva'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/audg3xwk_FTRP_Jan3.jpeg',
      title: 'Vista Panorâmica'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/0boln44b_FTRP_Janela.jpeg',
      title: 'Vista Privilegiada'
    }
  ];
  
  const apartamentoImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/9rbztsyx_DSC_6608.jpg',
      title: 'Cozinha Gourmet Integrada'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/qo6sngzl_DSC_6610.jpg',
      title: 'Cozinha com Acabamento Premium'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/x82c64sj_DSC_6613.jpg',
      title: 'Sala de Estar Elegante'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/y3n078m2_DSC_6616.jpg',
      title: 'Ambiente Integrado'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/x9ru84y2_DSC_6620.jpg',
      title: 'Decoração Sofisticada'
    }
  ];

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
              <Maximize2 className="w-5 h-5 text-[#d4af37]" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#f5f5f0] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Conheça o <span className="text-[#d4af37]">Empreendimento</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore cada detalhe desta residência excepcional
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className={`aspect-square ${index === 0 ? 'lg:aspect-[2/1]' : ''}`}>
                  <img 
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/50 rounded-2xl transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white font-semibold text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {image.title}
                  </div>
                  <div className="h-0.5 w-12 bg-[#d4af37] group-hover:w-24 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-[#d4af37] hover:text-[#f4e5c3] transition-colors p-2 bg-black/50 rounded-full border border-[#d4af37]/30"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl w-full">
            <img 
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain mx-auto rounded-xl border-2 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/20"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-center text-[#f4e5c3] mt-4 text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;