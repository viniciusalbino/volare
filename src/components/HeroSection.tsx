import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-plata to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 bottom-0 w-full h-full md:w-1/2 md:h-3/4 bg-contain bg-no-repeat bg-right-bottom animate-float" 
             style={{backgroundImage: "url('/airplane.svg')"}}></div>
      </div>
      <div className="container-section relative z-10 pt-20">
        <div className="md:w-3/5 lg:w-1/2 animate-slide-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-quila text-cielo mb-4">
            Espanhol para Comissárias de Bordo
          </h1>
        </div>
        
        <div className="md:w-3/5 lg:w-1/2 animate-fade-in-delay-1">
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8">
            Aprenda espanhol especializado para atingir seus objetivos profissionais
          </h2>
        </div>
        
        <div className="animate-fade-in-delay-2">
          <a href="#planos" className="btn-primary inline-block">
            Quero Aprender Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;