import { Shield, Clock, RefreshCw, Award } from 'lucide-react';

const TrustSection = () => {
  const trustElements = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Garantia de Satisfação",
      description: "Se você não ficar satisfeito com as primeiras aulas, devolvemos seu dinheiro."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Horários Flexíveis",
      description: "Aulas adaptadas à sua rotina, com opções de horários diversos."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Reposição de Aulas",
      description: "Garantimos a reposição de aulas em caso de imprevistos."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificação",
      description: "Certificado reconhecido pelo mercado de aviação."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-quila text-gray-900 mb-4 relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-cielo after:to-rosado">Nossa Garantia</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Compromisso com a qualidade e satisfação dos nossos alunos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustElements.map((element, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-cielo mb-4 flex justify-center">
                {element.icon}
              </div>
              <h3 className="text-xl font-quila mb-2">
                {element.title}
              </h3>
              <p className="text-gray-600">
                {element.description}
              </p>
            </div>
          ))}
        </div>

        {/* Políticas */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-quila text-gray-900 mb-4 relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-cielo after:to-rosado">Nossas Políticas</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium mb-4">Política de Cancelamento</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Cancelamento com até 24h de antecedência</li>
                <li>• Reposição garantida em até 7 dias</li>
                <li>• Flexibilidade para reagendamento</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Política de Reembolso</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Garantia de satisfação de 7 dias</li>
                <li>• Reembolso integral em caso de insatisfação</li>
                <li>• Processo simples e transparente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection; 