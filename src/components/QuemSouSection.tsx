import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const QuemSouSection = () => {
    return (
      <section id="quem-sou" className="bg-white py-16">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-quila text-gray-900 mb-4 relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-cielo after:to-rosado">Quem Sou Eu</h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 animate-slide-up">
              <img 
                src="/src/assets/professora.jpg" 
                alt="Professora de Espanhol para Comissárias" 
                className="rounded-xl shadow-lg w-full h-auto hover-lift"
              />
            </div>
            
            <div className="w-full md:w-1/2 animate-fade-in-delay-1">
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  ¡Hola! Soy Stephanie — pero pode me chamar de Sté.
                </p>
                <p>
                  Portenha de 35 anos, moro em São Paulo desde 2014 e sou apaixonada por duas coisas que fizeram minha carreira decolar: aviação e línguas.
                </p>
                <p>
                  Depois de dois anos voando pela LATAM, ouvi a mesma pergunta de muitos colegas de cabine:
                </p>
                <p>
                  "Você dá aula de espanhol?"
                </p>
                <p>
                  Na época, a resposta era "aún no". Desde então, mergulhei no curso de Letras, aperfeiçoei minha didática on‑line e encontrei o ponto exato onde meus dois mundos se encontram — exatamente como Hannah Montana, só que sem peruca. 😄✈️
                </p>
                <p>
                  Hoje, o Volaré existe para ajudar comissários e profissionais de solo a conquistarem a tão desejada "bandeira de espanhol" de forma leve, prática e pensada para os horários apertados de quem vive entre fusos e escalas. Já estive no seu lugar, entendo a sua rotina e sei o quanto um segundo idioma abre portas (ou, melhor dizendo, portas em automático 😉).
                </p>
                <p>
                  Se quiser saber como o curso funciona ou tirar qualquer dúvida, mande‑me uma mensagem. Será um prazer ter você a bordo desta jornada.
                </p>
                <p>
                  Tripulação, portas em automático — vamos decolar juntos! 🛫✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export default QuemSouSection;