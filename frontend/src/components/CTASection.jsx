import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowRight, Star, Mail, User, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const CTASection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    horario: '',
    mensagem: ''
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999193489?text=Olá! Tenho interesse no apartamento Resort Prime.', '_blank');
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Formata mensagem para WhatsApp
    const message = `Olá! Tenho interesse no apartamento Resort Prime.%0A%0A` +
      `*Nome:* ${formData.nome}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Telefone:* ${formData.telefone}%0A` +
      `${formData.mensagem ? `*Mensagem:* ${formData.mensagem}` : ''}`;
    
    window.open(`https://wa.me/5511999193489?text=${message}`, '_blank');
    setIsDialogOpen(false);
    
    // Limpa o formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="relative bg-gradient-to-br from-[#1a1a1a] via-black to-[#1a1a1a] rounded-3xl p-12 sm:p-16 border-2 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/20 overflow-hidden">
          {/* Gold corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-[#d4af37]/40 rounded-tl-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-[#d4af37]/40 rounded-br-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <Star className="w-6 h-6 text-[#d4af37]" />
              <Star className="w-6 h-6 text-[#d4af37]" />
              <Star className="w-6 h-6 text-[#d4af37]" />
            </div>
            
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-[#f5f5f0]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Agende sua Visita
              <span className="block mt-2 text-[#d4af37]">Exclusiva</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Entre em contato e conheça pessoalmente este excelente apartamento. Escolha a melhor forma de contato para você.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              {/* WhatsApp Direto */}
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] hover:from-[#f4e5c3] hover:to-[#d4af37] text-black text-lg px-8 py-7 font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/50 group w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Direto
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Formulário de Contato */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg"
                    className="bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black text-lg px-8 py-7 font-bold transition-all duration-300 hover:scale-105 group w-full sm:w-auto"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Preencher Formulário
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-gradient-to-br from-[#1a1a1a] to-black border-2 border-[#d4af37]/30 text-[#f5f5f0] max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#d4af37]" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Agende sua Visita
                    </DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Preencha seus dados e entraremos em contato via WhatsApp
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-5 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome" className="text-[#d4af37] font-semibold flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleFormChange}
                        required
                        placeholder="Seu nome"
                        className="bg-black/40 border-[#d4af37]/30 text-[#f5f5f0] placeholder:text-gray-500 focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#d4af37] font-semibold flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        required
                        placeholder="seu@email.com"
                        className="bg-black/40 border-[#d4af37]/30 text-[#f5f5f0] placeholder:text-gray-500 focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefone" className="text-[#d4af37] font-semibold flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Telefone *
                      </Label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleFormChange}
                        required
                        placeholder="(11) 99999-9999"
                        className="bg-black/40 border-[#d4af37]/30 text-[#f5f5f0] placeholder:text-gray-500 focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem" className="text-[#d4af37] font-semibold">
                        Mensagem (Opcional)
                      </Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleFormChange}
                        placeholder="Gostaria de agendar uma visita..."
                        className="bg-black/40 border-[#d4af37]/30 text-[#f5f5f0] placeholder:text-gray-500 focus:border-[#d4af37] min-h-[100px]"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#d4af37] to-[#f4e5c3] hover:from-[#f4e5c3] hover:to-[#d4af37] text-black font-bold py-6 transition-all duration-300 hover:scale-105 group"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar via WhatsApp
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-[#d4af37]">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">(11) 9.9919-3489</span>
            </div>
            
            <div className="mt-8 pt-8 border-t border-[#d4af37]/20">
              <p className="text-gray-400 text-sm">
                Atendimento personalizado e consultoria imobiliária especializada
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;