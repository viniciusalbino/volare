import { Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="bg-[#333333] text-white py-12">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <a href="#" className="text-2xl font-quila text-white inline-block bg-gradient-to-r from-girasol to-rosado bg-clip-text text-transparent">Volaré</a>
            </div>
            <p className="text-white/80 mb-6">
              Especialista em espanhol para comissárias de bordo.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/che.profe" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="mailto:contato@volare.com.br" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-quila mb-6 relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-cielo after:to-rosado">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#quem-sou" className="text-white/80 hover:text-white transition-colors">Quem Sou Eu</a>
              </li>
              <li>
                <a href="#planos" className="text-white/80 hover:text-white transition-colors">Planos e Valores</a>
              </li>
              <li>
                <a href="#materiais" className="text-white/80 hover:text-white transition-colors">Materiais</a>
              </li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h3 className="text-xl font-quila mb-6 relative inline-block pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-0.5 after:bg-gradient-to-r after:from-cielo after:to-rosado">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contato@volare.com.br" className="text-white/80 hover:text-white transition-colors">contato@volare.com.br</a>
              </li>
              <li>
                <a href="https://instagram.com/che.profe" className="text-white/80 hover:text-white transition-colors">@che.profe</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Volaré. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;