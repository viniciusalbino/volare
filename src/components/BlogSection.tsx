import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: "Frases Essenciais para Comissários de Bordo",
      excerpt: "Aprenda as expressões mais importantes para comunicação a bordo em espanhol.",
      date: "15 Mar 2024",
      readTime: "5 min",
      image: "/src/assets/blog1.jpg",
      category: "Comunicação"
    },
    {
      title: "Como se Preparar para o Credenciamento",
      excerpt: "Dicas práticas para obter sucesso na prova de proficiência em espanhol.",
      date: "10 Mar 2024",
      readTime: "7 min",
      image: "/src/assets/blog2.jpg",
      category: "Credenciamento"
    },
    {
      title: "Vocabulário Técnico da Aviação",
      excerpt: "Termos técnicos essenciais que todo profissional da aviação deve conhecer.",
      date: "5 Mar 2024",
      readTime: "6 min",
      image: "/src/assets/blog3.jpg",
      category: "Vocabulário"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-section">
        <h2 className="text-3xl md:text-4xl font-quila text-center mb-4">
          Blog Volaré
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Dicas, artigos e conteúdo exclusivo para ajudar você a dominar o espanhol para aviação
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-cielo text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-quila mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-cielo hover:text-cielo/80 transition-colors"
                >
                  Ler mais
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cielo hover:bg-cielo/90 transition-colors"
          >
            Ver todos os artigos
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 