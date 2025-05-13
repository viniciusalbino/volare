import { Users, Award, Clock, Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Alunos Formados",
      description: "Profissionais da aviação treinados em espanhol"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "98%",
      label: "Aprovação",
      description: "Taxa de aprovação nos credenciamentos"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "10+",
      label: "Anos de Experiência",
      description: "Ensinando espanhol para aviação"
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "4.9",
      label: "Satisfação",
      description: "Avaliação média dos alunos"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-quila text-gray-900 mb-4 relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-cielo after:to-rosado">Nossos Números</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Resultados que comprovam nossa excelência no ensino de espanhol para aviação</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-primary mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</p>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 