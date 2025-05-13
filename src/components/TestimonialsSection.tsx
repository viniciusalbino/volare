import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Julio Cezar Costa",
      role: "Comissário Gol",
      image: "https://placehold.co/100x100/ff8c4d/ffffff?text=JC",
      text: "Tive aulas preparatórias com a professora Stephanie para a realização do credenciamento do idioma Espanhol. Além de ela ser nativa e possuir experiência na aviação, tem uma ótima didática para ensinar e oferece todo o suporto durante o processo de aprendizagem, sempre comprometida com a evolução do aluno. Super indico o seu trabalho!"
    },
    {
      id: 2,
      name: "Mirian Chow",
      role: "Comissária Gol",
      image: "https://placehold.co/100x100/e62c27/ffffff?text=MC",
      text: "Querida Stephanie, te agradeço viu imensamente foi maravilhoso amei a sua didática de aula, amei os exercícios amei tudo."
    }
  ];
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="bg-plata py-16">
      <div className="text-center mb-12">
      <h2 className="text-3xl font-quila text-gray-900 mb-4 relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-cielo after:to-rosado">Depoimentos</h2>
        
        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl p-6 shadow-md hover-lift">
                    <div className="flex flex-col md:flex-row items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full mb-4 md:mb-0 md:mr-6 animate-float"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-girasol">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors hover:scale-110 transition-transform"
            aria-label="Depoimento anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cielo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors hover:scale-110 transition-transform"
            aria-label="Próximo depoimento"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cielo" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-cielo scale-125' : 'bg-gray-300 hover:bg-gray-400'
                } transition-all duration-300`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;