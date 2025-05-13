
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuemSouSection from '@/components/QuemSouSection';
import MateriaisSection from '@/components/MateriaisSection';
import PlanosSection from '@/components/PlanosSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <QuemSouSection />
      <MateriaisSection />
      <PlanosSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;