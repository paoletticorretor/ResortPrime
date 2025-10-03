import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const images = [
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/ze7a895z_FTRP%20%2815%29.jpg',
      title: 'Vista Aérea - Torres'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/58snlq4h_FTRP%20%2819%29.jpg',
      title: 'Vista Aérea - Detalhe'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/54l0dlhg_FTRP_Jan2.jpeg',
      title: 'Área de Lazer e Piscinas'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/audg3xwk_FTRP_Jan3.jpeg',
      title: 'Vista Panorâmica'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/0boln44b_FTRP_Janela.jpeg',
      title: 'Vista Área Verde'
    }
  ];

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Conheça o Empreendimento
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore as imagens e veja a qualidade e localização privilegiada
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white font-medium">
                    {image.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage.url}
            alt={selectedImage.title}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;