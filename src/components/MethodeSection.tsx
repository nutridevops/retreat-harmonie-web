
import React from 'react';

const MethodeSection = () => {
  return (
    <section id="methode" className="bg-rise-dark-green section relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-start mb-12">
          <img 
            src="/public/lovable-uploads/085c276e-2ff2-4122-8590-8c48682c78c8.png" 
            alt="Logo R.I.S.E" 
            className="h-16 w-16 mr-6"
          />
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-alta text-rise-gold mb-4">
              C'EST QUOI
            </h2>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-alta text-rise-gold">
              LA MÉTHODE R.I.S.E ?
            </h2>
          </div>
        </div>
        
        <div className="bg-rise-gold/80 py-4 px-6 rounded-md mb-16">
          <p className="text-rise-dark-green text-xl font-semibold text-center">
            Renforcer votre résilience, affiner votre intuition et optimiser votre énergie
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-14">
            <div className="flex items-start">
              <div className="bg-rise-dark-green rounded-full p-6 flex justify-center items-center w-16 h-16 mr-6">
                <span className="text-rise-gold text-4xl font-alta">R</span>
              </div>
              <div className="flex-1 bg-rise-dark-green rounded-full py-4 px-8">
                <div className="flex items-center">
                  <h3 className="text-white text-xl font-bold mr-4">Resiliance</h3>
                  <div className="flex-1 border-t border-white/20"></div>
                </div>
                <p className="text-rise-cream mt-4">
                  Apprenez à rebondir face aux défis et à maintenir votre calme et votre concentration, même dans les moments de forte pression.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-rise-dark-green rounded-full p-6 flex justify-center items-center w-16 h-16 mr-6">
                <span className="text-rise-gold text-4xl font-alta">I</span>
              </div>
              <div className="flex-1 bg-rise-dark-green rounded-full py-4 px-8">
                <div className="flex items-center">
                  <h3 className="text-white text-xl font-bold mr-4">Intuition</h3>
                  <div className="flex-1 border-t border-white/20"></div>
                </div>
                <p className="text-rise-cream mt-4">
                  Développez votre faculté à prendre des décisions éclairées et rapides en écoutant les signaux de l'intestin et en développant une meilleure connexion avec vos instincts.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-rise-dark-green rounded-full p-6 flex justify-center items-center w-16 h-16 mr-6">
                <span className="text-rise-gold text-4xl font-alta">S</span>
              </div>
              <div className="flex-1 bg-rise-dark-green rounded-full py-4 px-8">
                <div className="flex items-center">
                  <h3 className="text-white text-xl font-bold mr-4">Strength</h3>
                  <div className="flex-1 border-t border-white/20"></div>
                </div>
                <p className="text-rise-cream mt-4">
                  Renforcez votre force mentale et physique, pour mieux gérer le stress et maintenir une endurance optimale dans la performance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-rise-dark-green rounded-full p-6 flex justify-center items-center w-16 h-16 mr-6">
                <span className="text-rise-gold text-4xl font-alta">E</span>
              </div>
              <div className="flex-1 bg-rise-dark-green rounded-full py-4 px-8">
                <div className="flex items-center">
                  <h3 className="text-white text-xl font-bold mr-4">Energy</h3>
                  <div className="flex-1 border-t border-white/20"></div>
                </div>
                <p className="text-rise-cream mt-4">
                  Apprenez à optimiser votre énergie mentale et physique en alignant le cerveau, le cœur et l'intestin, permettant de rester performant et équilibré tout au long de la journée.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <img 
              src="/public/lovable-uploads/cc78aa16-93d4-4574-af46-eb331709dfc8.png" 
              alt="Femme pratiquant la méditation" 
              className="rounded-lg shadow-2xl max-h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodeSection;
