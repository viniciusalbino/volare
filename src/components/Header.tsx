import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-1' : 'bg-transparent py-2'}`}>
      <div className="container-section">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img 
              src="/src/assets/logo.png" 
              alt="Volaré Logo" 
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
  );
};

export default Header;