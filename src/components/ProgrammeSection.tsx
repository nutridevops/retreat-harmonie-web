
import React from 'react';

const ProgrammeSection = () => {
  return (
    <section id="programme" className="bg-rise-dark-green section relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-16">
          <img 
            src="/public/lovable-uploads/085c276e-2ff2-4122-8590-8c48682c78c8.png" 
            alt="Logo R.I.S.E" 
            className="h-16 w-16 mr-6"
          />
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-alta text-rise-gold">
            PROGRAMME
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="space-y-6">
            <div className="bg-rise-dark-green rounded-lg border border-rise-gold/30 p-6">
              <h3 className="text-2xl sm:text-3xl font-alta text-rise-gold mb-4">
                JOUR 1 – ACCUEIL / PRÉSENTATION
              </h3>
            </div>
            
            <div className="bg-rise-dark-green rounded-lg border border-rise-gold/30 p-6 space-y-4">
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">8h45</span> – Accueil et installation</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">9h30</span> – Petit-déjeuner de bienvenue</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">10h30</span> – Atelier Neuroperformance avec Laetitia : Reprogrammer son mental pour une résilience inébranlable</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">12h45</span> – Lunch revitalisant préparé avec Chris : Aligner son alimentation avec son bien-être</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">15h00</span> – Session de fitness et mouvement avec Sandra : Activer le cerveau-cœur et renforcer son endurance</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">17h00</span> – Temps libre / Exploration / Bien-être</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">19h30</span> – Dîner</p>
              </div>
            </div>
          </div>
          
          {/* Day 2 */}
          <div className="space-y-6">
            <div className="bg-rise-dark-green rounded-lg border border-rise-gold/30 p-6">
              <h3 className="text-2xl sm:text-3xl font-alta text-rise-gold mb-4">
                JOUR 2 – ÉNERGIE ET TRANSFORMATION
              </h3>
            </div>
            
            <div className="bg-rise-dark-green rounded-lg border border-rise-gold/30 p-6 space-y-4">
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">7h30</span> – Yoga & Breathwork avec Sandra : Ancrage, respiration et connexion corps-esprit</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">8h30</span> – Petit-déjeuner nutritionnel avec Chris : Optimiser son énergie grâce à l'alimentation</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">10h00</span> – Atelier neurohacking avec Laetitia</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">12h00</span> – Lunch équilibré & échanges</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">14h00</span> – Atelier smoothie & alimentation fonctionnelle avec Chris : L'alimentation comme levier de performance</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">15h30</span> – Session de renforcement & mobilité avec Sandra</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">17h00</span> – Cérémonie de clôture & cadeaux</p>
              </div>
              
              <div className="flex items-start">
                <div className="text-rise-gold mr-3">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-white"><span className="font-bold">18h00</span> – Départ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammeSection;
