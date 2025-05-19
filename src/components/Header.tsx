import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import logo from '@/assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { href: "#quem-sou", label: "Quem Sou" },
    { href: "#materiais", label: "Materiais" },
    { href: "#planos", label: "Planos" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" }
  ];

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-1' : 'bg-transparent py-2'}`}>
        <div className="container-section">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center">
              <img 
                src={logo}
                alt="Volare Logo"
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-16' : 'h-32'}`}
              />
            </a>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-cielo"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item) => (
                <div 
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a 
                    href={item.href} 
                    className="text-gray-800 hover:text-cielo transition-colors"
                  >
                    {item.label}
                  </a>
                  <div 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cielo via-rosado to-girasol transition-all duration-300 ease-in-out ${
                      hoveredItem === item.href ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              ))}
            </nav>
          </div>
          
          {/* Mobile menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 max-h-0 ${isMenuOpen ? 'max-h-60' : ''}`}>
            <nav className="flex flex-col space-y-4 pt-4 pb-2">
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-gray-800 hover:text-cielo transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511977722531"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center gap-2"
        aria-label="Contato WhatsApp"
      >
        <MessageCircle size={24} />
        <span className="hidden sm:inline">Fale Conosco</span>
      </a>

      {/* Lead Capture Form */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-2xl font-quila mb-4">Comece sua jornada!</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cielo focus:ring-cielo"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cielo focus:ring-cielo"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cielo focus:ring-cielo"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowLeadForm(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-cielo hover:bg-cielo/90 rounded-md"
                >
                  Quero Começar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;