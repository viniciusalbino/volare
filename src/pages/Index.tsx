import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import QuemSouSection from '../components/QuemSouSection';
import MateriaisSection from '../components/MateriaisSection';
import PlanosSection from '../components/PlanosSection';
import TestimonialsSection from '../components/TestimonialsSection';
import QuizSection from '../components/QuizSection';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <QuemSouSection />
        <MateriaisSection />
        <PlanosSection />
        <TestimonialsSection />
        <QuizSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;