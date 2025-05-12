// Alpine.js data
document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    // Mobile menu state
    isMenuOpen: false,
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    // Course modules
    modulos: [
      {
        titulo: 'Fundamentos do Espanhol',
        descricao: 'Vocabulário básico, pronúncia e estruturas essenciais para comunicação inicial.'
      },
      {
        titulo: 'Terminologia Técnica',
        descricao: 'Termos específicos da aviação, procedimentos de segurança e comunicação de emergência.'
      },
      {
        titulo: 'Atendimento ao Passageiro',
        descricao: 'Frases e diálogos para situações comuns de bordo, check-in e informações de voo.'
      },
      {
        titulo: 'Procedimentos Operacionais',
        descricao: 'Comunicação com torre de controle, coordenação de equipe e protocolos IATA.'
      },
      {
        titulo: 'Emergências e Segurança',
        descricao: 'Comandos, instruções e procedimentos para situações críticas e evacuação.'
      },
      {
        titulo: 'Documentação e Regulamentos',
        descricao: 'Termos técnicos para documentação de voo, regulamentos ANAC e procedimentos internacionais.'
      },
      {
        titulo: 'Simulações Práticas',
        descricao: 'Exercícios de role-play com cenários reais de voo e atendimento ao passageiro.'
      },
      {
        titulo: 'Certificação Final',
        descricao: 'Avaliação prática, feedback personalizado e certificado de conclusão.'
      }
    ],

    // Testimonials
    depoimentos: [
      {
        nome: 'Ana Silva',
        cargo: 'Comissária de Bordo',
        foto: 'https://placehold.co/100x100',
        texto: 'O curso transformou minha confiança ao atender passageiros hispanos. Agora me sinto preparada para qualquer situação de voo.'
      },
      {
        nome: 'Carlos Mendes',
        cargo: 'Agente de Aeroporto',
        foto: 'https://placehold.co/100x100',
        texto: 'Material didático excelente e aulas muito práticas. A professora tem uma didática incrível e domina perfeitamente o assunto.'
      },
      {
        nome: 'Mariana Costa',
        cargo: 'Supervisora de Voo',
        foto: 'https://placehold.co/100x100',
        texto: 'Investimento que valeu cada centavo. O curso é completo e focado exatamente no que precisamos no dia a dia da aviação.'
      }
    ],

    // FAQs
    faqs: [
      {
        pergunta: 'Preciso ter conhecimento prévio de espanhol?',
        resposta: 'Não. O curso começa do zero e é estruturado para que qualquer profissional da aviação possa acompanhar, independente do nível de espanhol.'
      },
      {
        pergunta: 'Como são as aulas?',
        resposta: 'As aulas são 100% online, com material em vídeo, áudio e texto. Você pode assistir no seu ritmo e revisar quantas vezes quiser. Além disso, temos encontros ao vivo semanais para prática e tirar dúvidas.'
      },
      {
        pergunta: 'Quanto tempo preciso dedicar por semana?',
        resposta: 'Recomendamos dedicar cerca de 4-5 horas por semana para acompanhar o conteúdo, fazer os exercícios e participar dos encontros ao vivo. O curso foi projetado para ser conciliado com a rotina de trabalho.'
      },
      {
        pergunta: 'O certificado é reconhecido?',
        resposta: 'Sim. O certificado é reconhecido pela ANAC e inclui as horas de estudo para reciclagem de comissários. Além disso, é um diferencial importante no currículo para voos internacionais.'
      },
      {
        pergunta: 'Posso parcelar o investimento?',
        resposta: 'Sim! Oferecemos duas opções de pagamento: à vista com desconto ou em até 12x no cartão de crédito. Todas as transações são processadas com segurança pela Eduzz.'
      },
      {
        pergunta: 'Existe garantia de satisfação?',
        resposta: 'Sim. Oferecemos garantia incondicional de 7 dias. Se você não ficar satisfeito com o curso, devolvemos 100% do seu investimento.'
      }
    ]
  }));
});

// Mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[aria-label="Menu"]');
  const nav = document.querySelector('nav');
  
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      nav.classList.toggle('hidden');
      nav.classList.toggle('md:flex');
      nav.classList.toggle('absolute');
      nav.classList.toggle('top-full');
      nav.classList.toggle('left-0');
      nav.classList.toggle('right-0');
      nav.classList.toggle('bg-volare-600');
      nav.classList.toggle('p-4');
      nav.classList.toggle('flex-col');
      nav.classList.toggle('space-y-4');
      nav.classList.toggle('md:space-y-0');
      nav.classList.toggle('md:space-x-6');
      nav.classList.toggle('md:flex-row');
    });
  }
}); 