const PlanosSection = () => {
    return (
      <section id="planos" className="bg-white py-16">
        <div className="container-section">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-quila text-gray-900 mb-4 relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-cielo after:to-rosado">Planos & Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Escolha o plano ideal para seus objetivos e comece sua jornada no espanhol para aviação</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Tripulante Júnior */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-up">
              <div className="bg-plata p-6 transition-colors duration-300 hover:bg-gray-50">
                <h3 className="text-2xl font-quila text-cielo mb-2">Tripulante Júnior</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">R$99</span>
                  <span className="text-gray-600 ml-1">/mês</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                    <svg className="h-5 w-5 text-girasol mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Acesso a 4 módulos em PDF</span>
                  </li>
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                    <svg className="h-5 w-5 text-girasol mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Grupo de WhatsApp para dúvidas</span>
                  </li>
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                    <svg className="h-5 w-5 text-girasol mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>1 aula ao vivo (60 min) de prática e correção</span>
                  </li>
                </ul>
                
                <button className="w-full bg-girasol text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-girasol/90">
                  Contratar Agora
                </button>
              </div>
            </div>
            
            {/* Tripulante Sênior */}
            <div className="border-2 border-rosado rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-up [animation-delay:200ms] relative">
              <div className="absolute top-0 right-0 bg-rosado text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMENDADO
              </div>
              
              <div className="bg-plata p-6 transition-colors duration-300 hover:bg-gray-50">
                <h3 className="text-2xl font-quila text-cielo mb-2">Tripulante Sênior</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">R$149</span>
                  <span className="text-gray-600 ml-1">/mês</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                    <svg className="h-5 w-5 text-rosado mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tudo do Tripulante Júnior</span>
                  </li>
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                    <svg className="h-5 w-5 text-rosado mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>2 aulas ao vivo para conversação guiada</span>
                  </li>
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                    <svg className="h-5 w-5 text-rosado mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Feedback individual</span>
                  </li>
                </ul>
                
                <button className="w-full bg-rosado text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-rosado/90">
                  Contratar Agora
                </button>
              </div>
            </div>

            {/* Chefe de Cabine */}
            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-up [animation-delay:400ms]">
              <div className="bg-plata p-6 transition-colors duration-300 hover:bg-gray-50">
                <h3 className="text-2xl font-quila text-cielo mb-2">Chefe de Cabine</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">R$200</span>
                  <span className="text-gray-600 ml-1">/mês</span>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                    <svg className="h-5 w-5 text-girasol mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Tudo do Tripulante Sênior</span>
                  </li>
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                    <svg className="h-5 w-5 text-girasol mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>4 aulas ao vivo (uma por módulo)</span>
                  </li>
                  <li className="flex items-start transition-transform duration-300 hover:translate-x-1">
                    <svg className="h-5 w-5 text-girasol mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Domine o conteúdo com segurança</span>
                  </li>
                </ul>
                
                <button className="w-full bg-girasol text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-girasol/90">
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