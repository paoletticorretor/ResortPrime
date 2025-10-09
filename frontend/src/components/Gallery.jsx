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
      title: 'Vista Aérea - Torres'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/54l0dlhg_FTRP_Jan2.jpeg',
      title: 'Vista Panorâmica'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/0boln44b_FTRP_Janela.jpeg',
      title: 'Vista Livre da Varanda Gourmet'
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
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/vqfyvr4g_DSC_6680.jpg',
      title: 'Banheiro Premium com Acabamento em Madeira'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/codc797n_DSC_6690.jpg',
      title: 'Suíte Master com Painel TV'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/nr70xq0s_DSC_6697.jpg',
      title: 'Dormitório Elegante com Iluminação LED'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/yd9pdvvm_DSC_6699.jpg',
      title: 'Quarto com Vista Privilegiada'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/pvr0qepx_DSC_6701.jpg',
      title: 'Acabamento de Alto Padrão'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/jfl2cw48_138595207737408.webp',
      title: 'Varanda Gourmet Ampla com Vista'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/vkxv7zgk_156522927645382.webp',
      title: 'Dormitório Espaçoso com Vista'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/y8qudrdm_974559329944279.webp',
      title: 'Circulação Interna Ampla'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/3bmeln9j_982548200029528.webp',
      title: 'Sala Ampla com Preparação para Ar'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/6bj655bu_994542326453670.webp',
      title: 'Ambiente Integrado Sala e Cozinha'
    }
  ];

  const renderImageGrid = (images) => (
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
  );

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
              Galeria <span className="text-[#d4af37]">Exclusiva</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore cada detalhe deste ótimo apartamento
            </p>
          </div>
          
          <Tabs defaultValue="apartamento" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 p-1 rounded-2xl">
              <TabsTrigger 
                value="apartamento"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4e5c3] data-[state=active]:text-black font-semibold rounded-xl transition-all duration-300"
              >
                <Home className="w-4 h-4 mr-2" />
                Apartamento Decorado
              </TabsTrigger>
              <TabsTrigger 
                value="empreendimento"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4e5c3] data-[state=active]:text-black font-semibold rounded-xl transition-all duration-300"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Empreendimento
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="apartamento" className="mt-0">
              {renderImageGrid(apartamentoImages)}
            </TabsContent>
            
            <TabsContent value="empreendimento" className="mt-0">
              {renderImageGrid(empreendimentoImages)}
            </TabsContent>
          </Tabs>
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