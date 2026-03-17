import { Calendar, Clock, User, Facebook, Twitter, Linkedin, Link, Instagram } from 'lucide-react';
import { ImageGallery } from './ImageGallery';
import { SocialShareButtons } from './SocialShareButtons';

export function BlogPost() {
  const beachGallery = [
    "https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzczNjI3ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1667350763578-76177e86e732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBvY2VhbiUyMHZpZXd8ZW58MXx8fHwxNzczNjAwNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1729673766571-2409a89a3f64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc29ydCUyMHBvb2x8ZW58MXx8fHwxNzczNTk0MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  const cultureGallery = [
    "https://images.unsplash.com/photo-1769223147961-e31437e6ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzM2NTgwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1759299710388-690bf2305e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0cmVldCUyMGZvb2QlMjBtYXJrZXR8ZW58MXx8fHwxNzczNjU4MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1762421028264-fb4e2e9de042?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwY2l0eSUyMG5pZ2h0bGlmZXxlbnwxfHx8fDE3NzM2NTgwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  const adventureGallery = [
    "https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMGhpa2luZ3xlbnwxfHx8fDE3NzM1OTMzNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1700470438333-9cdf3578ab32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJhaW5mb3Jlc3QlMjB3YXRlcmZhbGx8ZW58MXx8fHwxNzczNjU4MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1766421687399-9e56b17f4246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGN1aXNpbmUlMjBkaXNoZXN8ZW58MXx8fHwxNzczNjU4MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl mb-4">
          Descobrindo o Paraíso Tropical: Uma Jornada Inesquecível pela Ásia
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>Maria Silva</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>15 de Março, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>8 min de leitura</span>
          </div>
        </div>

        <SocialShareButtons 
          url="https://exemplo.com/blog/paraiso-tropical"
          title="Descobrindo o Paraíso Tropical: Uma Jornada Inesquecível pela Ásia"
        />
      </header>

      {/* Hero Image */}
      <div className="mb-10">
        <img 
          src="https://images.unsplash.com/photo-1714412192114-61dca8f15f68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcGFyYWRpc2V8ZW58MXx8fHwxNzczNjI3ODY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Praia tropical paradisíaca"
          className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-6">
          Viajar é mais do que visitar novos lugares; é descobrir novas perspectivas, sabores e experiências que transformam nossa visão de mundo. Minha recente aventura pelo Sudeste Asiático foi exatamente isso: uma jornada transformadora que combinou praias paradisíacas, templos milenares e uma gastronomia de dar água na boca.
        </p>

        <h2 className="text-3xl mt-10 mb-4">Praias de Tirar o Fôlego</h2>
        
        <p className="text-gray-700 mb-6">
          A primeira parada foi nas praias de águas cristalinas e areias brancas que parecem saídas de um cartão postal. O contraste entre o azul turquesa do mar e o verde exuberante da vegetação tropical cria cenários absolutamente deslumbrantes. Passamos dias explorando diferentes praias, cada uma com sua própria personalidade e charme único.
        </p>

        <ImageGallery images={beachGallery} />

        <p className="text-gray-700 mb-6">
          O resort onde ficamos hospedados era o refúgio perfeito após dias de exploração. Com uma piscina infinity que parecia se fundir com o oceano e um serviço impecável, cada momento ali foi puro relaxamento. Os pôr do sol vistos da varanda do quarto são memórias que guardarei para sempre.
        </p>

        <h2 className="text-3xl mt-10 mb-4">Cultura e Tradição</h2>
        
        <p className="text-gray-700 mb-6">
          Além das praias paradisíacas, mergulhamos profundamente na rica cultura local. Visitamos templos centenários com arquitetura impressionante, onde monges ainda mantêm vivas tradições milenares. A espiritualidade e a paz que esses lugares transmitem são simplesmente indescritíveis.
        </p>

        <ImageGallery images={cultureGallery} />

        <p className="text-gray-700 mb-6">
          Os mercados noturnos foram outro destaque da viagem. As ruas ganham vida com luzes vibrantes, música animada e uma explosão de aromas tentadores. Experimentamos comidas de rua autênticas, negociamos em pequenas lojas de artesanato e nos perdemos felizes no meio da multidão local.
        </p>

        <h2 className="text-3xl mt-10 mb-4">Aventuras Inesquecíveis</h2>
        
        <p className="text-gray-700 mb-6">
          Para os amantes de aventura como eu, a região oferece experiências incríveis. Fizemos trilhas em montanhas com vistas panorâmicas de tirar o fôlego, nadamos em cachoeiras escondidas na floresta tropical e provamos pratos locais que desafiaram nosso paladar da melhor maneira possível.
        </p>

        <ImageGallery images={adventureGallery} />

        <h2 className="text-3xl mt-10 mb-4">Reflexões Finais</h2>
        
        <p className="text-gray-700 mb-6">
          Esta viagem me ensinou que o verdadeiro luxo não está apenas em hotéis cinco estrelas ou praias exclusivas, mas nas conexões que fazemos, nas histórias que ouvimos e nas experiências autênticas que vivemos. Voltei para casa com a mala cheia de lembranças, o coração repleto de gratidão e uma lista ainda maior de lugares para visitar.
        </p>

        <p className="text-gray-700 mb-8">
          Se você está pensando em explorar o Sudeste Asiático, meu conselho é: vá sem expectativas fixas. Deixe-se surpreender pela generosidade das pessoas, pela beleza natural estonteante e pela riqueza cultural que cada esquina revela. Esta é uma jornada que vale cada minuto.
        </p>

        {/* Share Again */}
        <div className="border-t border-b border-gray-200 py-6 my-8">
          <p className="text-center text-gray-600 mb-4">Gostou deste artigo? Compartilhe com seus amigos!</p>
          <SocialShareButtons 
            url="https://exemplo.com/blog/paraiso-tropical"
            title="Descobrindo o Paraíso Tropical: Uma Jornada Inesquecível pela Ásia"
          />
        </div>
      </div>
    </article>
  );
}
