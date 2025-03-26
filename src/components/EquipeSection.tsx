
import React from 'react';

const EquipeSection = () => {
  return (
    <section id="equipe" className="bg-rise-dark-green section relative icon-decoration">
      <div className="container mx-auto">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-alta text-rise-gold text-center mb-8">
          L'ÉQUIPE
        </h2>
        
        <p className="text-white text-center max-w-4xl mx-auto mb-16 text-lg">
          Nous avons réuni une équipe d'experts passionnés et complémentaires, chacun dédié à équilibrer les trois cerveaux qui vous gouvernent : votre tête, votre cœur et votre intestin.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Laetitia */}
          <div className="relative">
            <div className="absolute top-4 left-8 w-14 h-14 bg-rise-gold rounded-full flex items-center justify-center text-rise-dark-green text-2xl font-bold z-20">
              1
            </div>
            <div className="bg-rise-beige/40 backdrop-blur-sm rounded-3xl p-6 pt-20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-44 rounded-t-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rise-dark-green/90"></div>
                <img 
                  src="/public/lovable-uploads/b01791d3-2fa7-465a-9a40-8f5d896c6f6b.png" 
                  alt="Laetitia" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-center text-xl font-alta text-rise-gold mb-2">LAETITIA LUSAKIVANA</h3>
                <p className="text-center text-white mb-6">
                  Experte en neuroperformance & neurosciences appliquées
                </p>
                <p className="text-rise-cream text-center text-sm leading-relaxed">
                  Fondatrice de la méthode SWING et experte en neuroperformance et neurosciences appliquées, Laetitia vous guidera dans un voyage intérieur pour mieux comprendre et exploiter les capacités extraordinaires de votre cerveau-tête.
                </p>
                <p className="text-rise-cream text-center text-sm leading-relaxed mt-4">
                  A travers ses enseignements en neurosciences appliquées, vous découvrirez comment optimise la résilience et la performance de votre cerveau.
                </p>
              </div>
            </div>
          </div>
          
          {/* Sandra */}
          <div className="relative">
            <div className="absolute top-4 left-8 w-14 h-14 bg-rise-gold rounded-full flex items-center justify-center text-rise-dark-green text-2xl font-bold z-20">
              2
            </div>
            <div className="bg-rise-beige/40 backdrop-blur-sm rounded-3xl p-6 pt-20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-44 rounded-t-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rise-dark-green/90"></div>
                <img 
                  src="/public/lovable-uploads/7900804e-071d-48ea-a157-db6bb600b8a8.png" 
                  alt="Sandra" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-center text-xl font-alta text-rise-gold mb-2">SANDRA LEGUEDE</h3>
                <p className="text-center text-white mb-6">
                  Experte en fitness & mobilité
                </p>
                <p className="text-rise-cream text-center text-sm leading-relaxed">
                  8 ans d'experience en tant que Expert en fitness et performance physique. Avec Sandra, boostez votre corps et renforcez votre cerveau-cœur grâce à des entraînements personnalisés.
                </p>
                <p className="text-rise-cream text-center text-sm leading-relaxed mt-4">
                  Spécialiste du bien-être physique, elle vous aidera à développer votre endurance, augmenter votre énergie et éveiller la connexion entre votre corps et votre esprit. Son approche met en lumière l'importance du mouvement pour une résilience physique et mentale accrue.
                </p>
              </div>
            </div>
          </div>
          
          {/* Chris */}
          <div className="relative">
            <div className="absolute top-4 left-8 w-14 h-14 bg-rise-gold rounded-full flex items-center justify-center text-rise-dark-green text-2xl font-bold z-20">
              3
            </div>
            <div className="bg-rise-beige/40 backdrop-blur-sm rounded-3xl p-6 pt-20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-44 rounded-t-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rise-dark-green/90"></div>
                <img 
                  src="/public/lovable-uploads/d1520ffd-cd97-4438-97a6-56f53639858c.png" 
                  alt="Chris" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-center text-xl font-alta text-rise-gold mb-2">CHRIS MASSAMBA</h3>
                <p className="text-center text-white mb-6">
                  Expert en nutrition Fonctionnelle & Santé
                </p>
                <p className="text-rise-cream text-center text-sm leading-relaxed">
                  Expert en nutrition fonctionnelle, Chris se concentre sur le pouvoir de votre cerveau-intestin pour optimiser votre bien-être.
                </p>
                <p className="text-rise-cream text-center text-sm leading-relaxed mt-4">
                  Il vous apprendra comment la nutrition influence votre santé mentale et émotionnelle, en vous proposant des conseils personnalisés et des repas nourrissants pour soutenir votre corps de l'intérieur. Son objectif : vous aider à mieux vous nourrir pour mieux performer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;
