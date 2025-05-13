
import { Card, CardContent } from "@/components/ui/card";

const MateriaisSection = () => {
  const materiais = [
    {
      id: 1,
      title: "Vocabulário de Aviação",
      description: "Aprenda os termos essenciais utilizados na aviação comercial.",
      bgClass: "bg-white",
      textClass: "text-gray-800",
      gradient: false,
      delay: "animate-fade-in-delay-1"
    },
    {
      id: 2,
      title: "Guia de Comunicação",
      description: "Comunicação eficiente com passageiros em diferentes situações.",
      bgClass: "bg-gradient-to-r from-cielo to-rosado",
      textClass: "text-white",
      gradient: true,
      delay: "animate-fade-in-delay-2"
    },
    {
      id: 3,
      title: "Preparação para Entrevistas",
      description: "Dicas e simulações para entrevistas em espanhol para companhias aéreas.",
      bgClass: "bg-gradient-to-r from-naranja to-girasol",
      textClass: "text-white",
      gradient: true,
      delay: "animate-fade-in-delay-3"
    }
  ];

  return (
    <section id="materiais" className="bg-plata py-16">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-quila text-gray-800 text-center mb-4 animate-slide-up">Materiais</h2>
        
        <div className="flex justify-center mb-12">
          <div className="h-1 w-24 bg-gradient-to-r from-cielo via-rosado to-girasol rounded-full animate-pulse-subtle"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materiais.map((material) => (
            <Card 
              key={material.id} 
              className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${material.bgClass} ${material.delay} hover-lift`}
            >
              <CardContent className="p-6">
                <div className={`mb-6 ${material.textClass}`}>
                  <h3 className="text-4xl font-quila mb-2 leading-tight">
                    <span className="text-5xl block mb-[-10px]">che</span>
                    <span className="text-7xl">profe</span>
                  </h3>
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${material.textClass}`}>{material.title}</h3>
                <p className={`mb-6 ${material.textClass} ${material.gradient ? 'text-white/90' : 'text-gray-600'}`}>{material.description}</p>
                <div>
                  <button 
                    className="rounded-full px-6 py-2 bg-gradient-to-r from-rosado to-girasol text-white font-medium hover:shadow-md transition-all duration-200 hover:scale-105"
                  >
                    Acessar
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MateriaisSection;