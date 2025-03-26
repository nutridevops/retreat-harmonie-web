
import React from 'react';

const ReservationSection = () => {
  return (
    <section id="reservation" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="bg-cover bg-center min-h-[600px]" style={{ backgroundImage: "url('/public/lovable-uploads/4ed81d03-d759-4b7a-87f2-7260a9d3fddb.png')" }}>
          <div className="bg-rise-dark-green/90 h-full p-12 flex flex-col justify-center">
            <h2 className="text-5xl sm:text-6xl font-alta text-rise-gold mb-16">
              INVESTISSEZ<br />EN VOUS
            </h2>
            
            <img 
              src="/public/lovable-uploads/085c276e-2ff2-4122-8590-8c48682c78c8.png" 
              alt="Logo R.I.S.E" 
              className="h-32 w-32 mx-auto my-8"
            />
          </div>
        </div>
        
        {/* Right Side */}
        <div className="bg-rise-cream p-12 flex items-center">
          <div className="max-w-lg mx-auto">
            <img 
              src="/public/lovable-uploads/9c4e4edb-bff0-4ee0-b0bb-8ab1f183ecbb.png" 
              alt="Méditation en groupe" 
              className="w-full h-auto rounded-lg mb-8"
            />
            
            <h3 className="text-3xl font-alta text-rise-dark-green mb-6 text-center">
              JE RÉSERVE MA PLACE MAINTENANT !
            </h3>
            
            <div className="mb-8">
              <div className="mb-4">
                <p className="text-rise-dark-green font-semibold mb-1">Nom et numéro de l'entreprise</p>
                <p className="text-rise-dark-green">Women Empowerment Balance</p>
                <p className="text-rise-dark-green">0803.132.680</p>
              </div>
              
              <div className="mb-8">
                <p className="text-rise-dark-green font-semibold mb-1">Numéro de compte</p>
                <p className="text-rise-dark-green">BE56 0689 5456 3788</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="bg-rise-gold rounded-full py-3 px-8 text-center">
                <span className="font-bold text-2xl text-rise-dark-green">769 €</span>
                <p className="text-xs text-rise-dark-green">Possibilité de payer en<br />2 ou 3 fois</p>
              </div>
              
              <button className="bg-rise-dark-green hover:bg-rise-dark-green/90 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 w-full sm:w-auto text-center">
                JE RÉSERVE MAINTENANT
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ce que vous obtenez section */}
      <div className="bg-rise-dark-green py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-alta text-rise-gold mb-12 text-center">
            CE QUE VOUS OBTENEZ POUR 769 €
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="/public/lovable-uploads/9c4e4edb-bff0-4ee0-b0bb-8ab1f183ecbb.png" 
                alt="Méditation au coucher de soleil" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-rise-gold mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-white text-lg">2 jours et 1 nuit dans un lieu prestigieux</p>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-rise-gold mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-white text-lg">Séances personnalisées avec Laetitia</p>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-rise-gold mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-white text-lg">Séances personnalisées avec Sandra</p>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-rise-gold mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-white text-lg">Séances personnalisées avec Chris</p>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-rise-gold mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-white text-lg">Repas nutritionnels conçus par un expert</p>
              </div>
              
              <div className="flex items-start">
                <svg className="h-6 w-6 text-rise-gold mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-white text-lg">Accès exclusif à des techniques avancées de neuroperformance</p>
              </div>
              
              <div className="flex items-start mt-8">
                <div className="bg-rise-gold rounded-md px-4 py-1 text-rise-dark-green font-bold mr-4">
                  BONUS
                </div>
                <p className="text-white text-lg">Un guide post-retraite avec exercices et ressources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Offre Spéciale */}
      <div className="bg-rise-dark-green py-16 border-t border-rise-gold/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-1 h-16 bg-rise-gold mr-4"></div>
                <h2 className="text-4xl sm:text-5xl font-alta text-rise-gold">
                  OFFRE<br />SPÉCIALE
                </h2>
              </div>
              
              <div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src="/public/lovable-uploads/4ed81d03-d759-4b7a-87f2-7260a9d3fddb.png" 
                  alt="Nature" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <div className="rounded-lg overflow-hidden mb-8">
                <img 
                  src="/public/lovable-uploads/9c4e4edb-bff0-4ee0-b0bb-8ab1f183ecbb.png" 
                  alt="Jogging dans la nature" 
                  className="w-full h-auto"
                />
              </div>
              
              <h3 className="text-2xl font-alta text-rise-gold mb-4">Réservez avant le 31 mars et bénéficiez d'un bonnus exclusif !</h3>
              
              <p className="text-white mb-4">
                Et si votre transformation ne s'arrêtait pas à la retraite ?
              </p>
              <p className="text-white mb-6">
                En réservant votre place avant le 31 mars, vous accédez à un bonus exclusif : <span className="font-bold">une séance de suivi personnalisé avec nos 3 experts, spécialement conçue pour vous accompagner après l'événement et ancrer durablement vos progrès.</span>
              </p>
              
              <p className="text-white mb-6">
                Un accompagnement sur mesure pour intégrer pleinement les bienfaits de la méthode RISE et performer au meilleur de votre potentiel, jour après jour !
              </p>
              
              <p className="text-white mb-8">
                Ne manquez pas cette opportunité unique – <span className="font-bold">réservez avant le 31 mars</span> !
              </p>
              
              <div className="flex justify-center">
                <button className="bg-rise-gold hover:bg-rise-gold/90 text-rise-dark-green font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105">
                  JE RÉSERVE MAINTENANT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
