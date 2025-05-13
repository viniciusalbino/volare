import { useState } from 'react';
import { Check, X } from 'lucide-react';

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Como se diz 'Bom dia' em espanhol?",
      options: ["Buenos días", "Buenas noches", "Buenas tardes", "Hola"],
      correctAnswer: 0
    },
    {
      question: "Qual é a tradução de 'Comissária de bordo'?",
      options: ["Piloto", "Azafata", "Copiloto", "Mecânico"],
      correctAnswer: 1
    },
    {
      question: "Como se diz 'Obrigado' em espanhol?",
      options: ["Por favor", "De nada", "Gracias", "Hasta luego"],
      correctAnswer: 2
    }
  ];

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <section id="quiz" className="py-12 bg-gray-50">
      <div className="container-section">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-quila text-gray-900 mb-4 relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-cielo after:to-rosado">Teste seu Espanhol</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Descubra seu nível de espanhol com nosso quiz rápido e divertido!</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          {!showResult ? (
            <div>
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="h-2 bg-gradient-to-r from-cielo to-rosado rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h3>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className="w-full p-3 text-left rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-quila text-gray-900 mb-4 relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-cielo after:to-rosado">Resultado do Quiz</h3>
              <p className="text-lg mb-4">
                Você acertou {score} de {questions.length} questões!
              </p>
              {score === questions.length ? (
                <p className="text-green-600 mb-4 flex items-center justify-center">
                  <Check className="w-5 h-5 mr-2" />
                  Excelente! Você tem um ótimo conhecimento de espanhol!
                </p>
              ) : score >= questions.length / 2 ? (
                <p className="text-yellow-600 mb-4 flex items-center justify-center">
                  <Check className="w-5 h-5 mr-2" />
                  Bom trabalho! Continue praticando para melhorar ainda mais!
                </p>
              ) : (
                <p className="text-red-600 mb-4 flex items-center justify-center">
                  <X className="w-5 h-5 mr-2" />
                  Não desanime! Aprender um novo idioma leva tempo e prática.
                </p>
              )}
              <button
                onClick={resetQuiz}
                className="px-6 py-2 bg-gradient-to-r from-cielo to-rosado text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Tentar Novamente
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection; 