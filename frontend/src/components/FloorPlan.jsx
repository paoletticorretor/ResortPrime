import React, { useState } from 'react';
import { Ruler, Building2, Maximize2, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const FloorPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = {
    apartamento: {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/4dttqedo_PLANTA%20109M%20-%20FINAL%2003.png',
      title: 'Planta do Apartamento 109m²',
      description: '3 dormitórios (1 suíte), 3 banheiros, sala integrada com varanda gourmet'
    },
    implantacao: {
      url: 'https://customer-assets.emergentagent.com/job_home-seller-1/artifacts/lkix506u_Implanta%C3%A7%C3%A3o_Geral.JPG',
      title: 'Implantação Geral',
      description: 'Visão completa do complexo Resort Prime com todas as áreas de lazer'
    }
  };

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]"></div>
              <Ruler className="w-5 h-5 text-[#d4af37]" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d4af37]"></div>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-[#f5f5f0] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Planta & <span className="text-[#d4af37]">Implantação</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Conheça em detalhes a distribuição dos ambientes e a implantação completa do empreendimento
            </p>
          </div>

          <Tabs defaultValue="apartamento" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 p-1 rounded-2xl">
              <TabsTrigger 
                value="apartamento"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4e5c3] data-[state=active]:text-black font-semibold rounded-xl transition-all duration-300"
              >
                <Ruler className="w-4 h-4 mr-2" />
                Planta 109m²
              </TabsTrigger>
              <TabsTrigger 
                value="implantacao"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#d4af37] data-[state=active]:to-[#f4e5c3] data-[state=active]:text-black font-semibold rounded-xl transition-all duration-300"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Implantação
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="apartamento" className="mt-0">
              <div className="max-w-5xl mx-auto">
                <div 
                  className="relative bg-white rounded-2xl overflow-hidden shadow-2xl shadow-[#d4af37]/20 border-2 border-[#d4af37]/30 cursor-pointer group"
                  onClick={() => setSelectedPlan(plans.apartamento)}
                >
                  <img 
                    src={plans.apartamento.url}
                    alt={plans.apartamento.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {plans.apartamento.title}
                        </h3>
                        <p className="text-gray-200 text-sm">{plans.apartamento.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[#d4af37]">
                        <Maximize2 className="w-6 h-6" />
                        <span className="text-sm font-semibold">Ampliar</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>109m²</div>
                    <div className="text-sm text-gray-400">Área Total</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>3</div>
                    <div className="text-sm text-gray-400">Dormitórios</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-[#d4af37] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>3</div>
                    <div className="text-sm text-gray-400">Banheiros</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="implantacao" className="mt-0">
              <div className="max-w-5xl mx-auto">
                <div 
                  className="relative bg-white rounded-2xl overflow-hidden shadow-2xl shadow-[#d4af37]/20 border-2 border-[#d4af37]/30 cursor-pointer group"
                  onClick={() => setSelectedPlan(plans.implantacao)}
                >
                  <img 
                    src={plans.implantacao.url}
                    alt={plans.implantacao.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {plans.implantacao.title}
                        </h3>
                        <p className="text-gray-200 text-sm">{plans.implantacao.description}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[#d4af37]">
                        <Maximize2 className="w-6 h-6" />
                        <span className="text-sm font-semibold">Ampliar</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#d4af37]/20 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-[#f5f5f0] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Complexo Resort Prime
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Implantação completa com todas as áreas de lazer, piscinas, quadras esportivas, fitness, espaços de convivência e áreas verdes. Um verdadeiro resort urbano com infraestrutura completa para toda a família.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox Modal for Floor Plans */}
      {selectedPlan && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedPlan(null)}
        >
          <button 
            className="absolute top-6 right-6 text-[#d4af37] hover:text-[#f4e5c3] transition-colors p-2 bg-black/50 rounded-full border border-[#d4af37]/30"
            onClick={() => setSelectedPlan(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-7xl w-full">
            <img 
              src={selectedPlan.url}
              alt={selectedPlan.title}
              className="max-w-full max-h-[85vh] object-contain mx-auto rounded-xl border-2 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/20"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-6">
              <h3 className="text-[#f4e5c3] text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                {selectedPlan.title}
              </h3>
              <p className="text-gray-400">{selectedPlan.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloorPlan;
