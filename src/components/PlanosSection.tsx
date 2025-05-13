
const PlanosSection = () => {
    return (
      <section id="planos" className="bg-white py-16">
        <div className="container-section">
          <h2 className="text-3xl md:text-4xl font-quila text-cielo text-center mb-12">Planos & Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Materiais */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="bg-plata p-6">
                <h3 className="text-2xl font-quila text-cielo mb-2">Plano Materiais</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">R$97</span>
                  <span className="text-gray-600 ml-1">/mês</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-girasol mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Acesso a todos os materiais em PDF</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-girasol mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Áudios em espanhol para praticar pronúncia</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-girasol mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Grupo de WhatsApp para dúvidas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-girasol mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Exercícios práticos semanais</span>
                  </li>
                </ul>
                
                <button className="w-full bg-cielo text-white font-semibold py-3 rounded-lg transition-transform duration-200 hover:scale-105">
                  Contratar Agora
                </button>
              </div>
            </div>
            
            {/* Plano Aulas Particulares */}
            <div className="border-2 border-rosado rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute top-0 right-0 bg-rosado text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMENDADO
              </div>
              
              <div className="bg-plata p-6">
                <h3 className="text-2xl font-quila text-cielo mb-2">Plano Aulas Particulares</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">R$297</span>
                  <span className="text-gray-600 ml-1">/mês</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-rosado mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tudo do Plano Materiais</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-rosado mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>4 aulas particulares por mês (1h cada)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-rosado mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Feedback personalizado sobre pronúncia</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-rosado mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Simulações de situações reais de voo</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-rosado mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Certificado de conclusão do curso</span>
                  </li>
                </ul>
                
                <button className="w-full bg-rosado text-white font-semibold py-3 rounded-lg transition-transform duration-200 hover:scale-105">
                  Contratar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PlanosSection;