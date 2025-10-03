import React from 'react';
import { MapPin, Car, ShoppingBag, GraduationCap } from 'lucide-react';

const Location = () => {
  const locationFeatures = [
    {
      icon: MapPin,
      title: 'Localização Privilegiada',
      description: 'Jundiaí, SP - Região nobre e valorizada'
    },
    {
      icon: Car,
      title: 'Fácil Acesso',
      description: 'Próximo às principais vias de acesso'
    },
    {
      icon: ShoppingBag,
      title: 'Comércio Completo',
      description: 'Shopping, mercados e serviços próximos'
    },
    {
      icon: GraduationCap,
      title: 'Educação',
      description: 'Escolas e universidades na região'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Localização Estratégica
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Viva em uma das regiões mais valorizadas de Jundiaí
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {locationFeatures.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-4 border border-gray-100 group-hover:border-gray-900 group-hover:bg-gray-900 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
          <MapPin className="w-12 h-12 text-gray-900 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Resort Prime</h3>
          <p className="text-gray-600">Jundiaí, São Paulo</p>
        </div>
      </div>
    </section>
  );
};

export default Location;