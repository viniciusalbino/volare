import { useEffect, useRef } from 'react';
import airplane from '@/assets/images/airplane.svg';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-cielo/10 to-rosado/10">
      <div className="container-section relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-quila text-gray-900 mb-6">
              Aprenda Espanhol para <span className="text-cielo">Aviação</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Domine o espanhol necessário para sua carreira na aviação com aulas personalizadas e materiais exclusivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#planos" className="btn-primary">
                Começar Agora
              </a>
              <a href="#materiais" className="btn-secondary">
                Conhecer Materiais
              </a>
            </div>
          </div>
          
          <div className="relative h-[300px] lg:h-[500px] animate-fade-up">
            <img 
              src={airplane} 
              alt="Avião decorativo" 
              className="absolute right-0 w-full h-full object-contain opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;