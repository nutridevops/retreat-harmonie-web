
import React from 'react';

const BeneficesSection = () => {
  return (
    <section id="benefices" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="bg-cover bg-center min-h-[600px]" style={{ backgroundImage: "url('/public/lovable-uploads/f78781cf-c5e9-427e-890d-8a3df947c5d9.png')" }}>
          <div className="bg-gradient-to-r from-rise-dark-green/80 to-rise-dark-green/80 h-full p-12 flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-alta text-rise-gold mb-12">
              BÉNÉFICES
            </h2>
            
            <p className="text-white text-2xl font-semibold mb-6">
              Transformez votre quotidien.
            </p>
            <p className="text-white leading-relaxed mb-8">
              Que ce soit pour renforcer votre résilience, affiner votre intuition, ou optimiser votre énergie, chaque apprentissage vous aidera à <span className="font-bold">élever votre performance tout en préservant votre bien-être.</span>
            </p>
          </div>
        </div>
        
        {/* Right Side - First Benefit */}
        <div className="bg-white p-12 flex items-center">
          <div className="max-w-xl mx-auto">
            <div className="flex items-start mb-8">
              <svg className="h-10 w-10 text-rise-gold mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl sm:text-3xl font-alta text-rise-gold">
                AUGMENTEZ VOTRE RÉSILIENCE FACE AUX DÉFIS
              </h3>
            </div>
            
            <p className="font-bold text-xl mb-4">Vous repartirez avec :</p>
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>Une capacité accrue à gérer les situations de haute pression.</li>
              <li>Une méthode pour rester concentré sur vos objectifs sans vous épuiser mentalement.</li>
            </ul>
            
            <div className="flex justify-end">
              <div className="w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#0A291C" strokeWidth="1.5"/>
                  <path d="M12 15V16.5M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#0A291C" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#0A291C" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="bg-white p-12 flex items-center order-2 lg:order-1">
          <div className="max-w-xl mx-auto">
            <div className="flex items-start mb-8">
              <svg className="h-10 w-10 text-rise-gold mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl sm:text-3xl font-alta text-rise-gold">
                DÉVELOPPEZ VOTRE INTUITION POUR DES DÉCISIONS PLUS RAPIDES ET PLUS JUSTES
              </h3>
            </div>
            
            <p className="font-bold text-xl mb-4">Vous repartirez avec :</p>
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>Des outils concrets pour améliorer votre santé intestinale et renforcer votre intuition.</li>
              <li>Une plus grande clarté dans vos choix, tant personnels que professionnels.</li>
            </ul>
            
            <div className="flex justify-end">
              <div className="w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" stroke="#0A291C" strokeWidth="2"/>
                  <path d="M35 50C35 41.7 41.7 35 50 35C58.3 35 65 41.7 65 50C65 58.3 58.3 65 50 65C41.7 65 35 58.3 35 50Z" fill="#0A291C"/>
                  <path d="M50 35V30M65 50H70M50 70V65M30 50H35" stroke="#0A291C" strokeWidth="2"/>
                  <circle cx="50" cy="50" r="5" fill="#0A291C"/>
                  <path d="M43 43L30 30M57 43L70 30M57 57L70 70M43 57L30 70" stroke="#0A291C" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="bg-cover bg-center min-h-[600px] order-1 lg:order-2" style={{ backgroundImage: "url('/public/lovable-uploads/f78781cf-c5e9-427e-890d-8a3df947c5d9.png')" }}>
          <div className="bg-gradient-to-r from-rise-dark-green/80 to-rise-dark-green/80 h-full p-12 flex flex-col justify-center">
            <div className="mb-8">
              <svg className="h-24 w-24 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10C29.5 10 13 26.5 13 47C13 67.5 29.5 84 50 84C70.5 84 87 67.5 87 47C87 26.5 70.5 10 50 10ZM50 18C66.5 18 79 30.5 79 47C79 63.5 66.5 76 50 76C33.5 76 21 63.5 21 47C21 30.5 33.5 18 50 18Z" fill="currentColor"/>
                <path d="M50 26C38.9 26 30 34.9 30 46C30 57.1 38.9 66 50 66C61.1 66 70 57.1 70 46C70 34.9 61.1 26 50 26ZM50 34C56.6 34 62 39.4 62 46C62 52.6 56.6 58 50 58C43.4 58 38 52.6 38 46C38 39.4 43.4 34 50 34Z" fill="currentColor"/>
                <path d="M58 46C58 50.4 54.4 54 50 54C45.6 54 42 50.4 42 46C42 41.6 45.6 38 50 38C54.4 38 58 41.6 58 46Z" fill="currentColor"/>
              </svg>
            </div>
            
            <p className="text-white leading-relaxed">
              Que ce soit pour renforcer votre résilience, affiner votre intuition, ou optimiser votre énergie, chaque apprentissage vous aidera à <span className="font-bold">élever votre performance tout en préservant votre bien-être.</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Third Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="bg-cover bg-center min-h-[600px]" style={{ backgroundImage: "url('/public/lovable-uploads/f78781cf-c5e9-427e-890d-8a3df947c5d9.png')" }}>
          <div className="bg-gradient-to-r from-rise-dark-green/80 to-rise-dark-green/80 h-full p-12 flex flex-col justify-center">
            <div className="mb-8">
              <svg className="h-24 w-24 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65 30C65 18.95 56.05 10 45 10C33.95 10 25 18.95 25 30C25 41.05 33.95 50 45 50V55C45 55 65 50 65 30Z" fill="currentColor"/>
                <path d="M85 40C85 31.7 78.3 25 70 25V45C70 45 85 48.3 85 40Z" fill="currentColor"/>
                <path d="M70 25C70 25 65 25 60 30" stroke="currentColor" strokeWidth="2"/>
                <path d="M45 60V65C45 72.5 51.5 80 60 80C68.5 80 75 72.5 75 65V55" stroke="currentColor" strokeWidth="2"/>
                <path d="M55 65H65" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            
            <p className="text-white leading-relaxed">
              Que ce soit pour renforcer votre résilience, affiner votre intuition, ou optimiser votre énergie, chaque apprentissage vous aidera à <span className="font-bold">élever votre performance tout en préservant votre bien-être.</span>
            </p>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="bg-white p-12 flex items-center">
          <div className="max-w-xl mx-auto">
            <div className="flex items-start mb-8">
              <svg className="h-10 w-10 text-rise-gold mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl sm:text-3xl font-alta text-rise-gold">
                RENFORCEZ VOTRE FORCE MENTALE ET PHYSIQUE POUR DURER DANS LA PERFORMANCE
              </h3>
            </div>
            
            <p className="font-bold text-xl mb-4">Vous repartirez avec :</p>
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>Une meilleure gestion du stress et des émotions, même dans les moments les plus difficiles.</li>
              <li>Une routine physique et mentale pour soutenir votre performance au quotidien.</li>
            </ul>
            
            <div className="flex justify-end">
              <div className="w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 50C30 38.95 38.95 30 50 30C61.05 30 70 38.95 70 50C70 61.05 61.05 70 50 70C38.95 70 30 61.05 30 50Z" stroke="#0A291C" strokeWidth="2"/>
                  <path d="M50 30V10" stroke="#0A291C" strokeWidth="2"/>
                  <path d="M50 90V70" stroke="#0A291C" strokeWidth="2"/>
                  <path d="M70 50H90" stroke="#0A291C" strokeWidth="2"/>
                  <path d="M10 50H30" stroke="#0A291C" strokeWidth="2"/>
                  <path d="M65 35L80 20" stroke="#0A291C" strokeWidth="2"/>
                  <path d="M20 80L35 65" stroke="#0A291C" strokeWidth="2"/>
                  <path d="M35 35L20 20" stroke="#0A291C" strokeWidth="2"/>
                  <path d="M80 80L65 65" stroke="#0A291C" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fourth Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="bg-white p-12 flex items-center order-2 lg:order-1">
          <div className="max-w-xl mx-auto">
            <div className="flex items-start mb-8">
              <svg className="h-10 w-10 text-rise-gold mr-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl sm:text-3xl font-alta text-rise-gold">
                APPRENDRE À MAINTENIR UNE ÉNERGIE CONSTANTE TOUT AU LONG D'UNE JOURNÉE
              </h3>
            </div>
            
            <p className="font-bold text-xl mb-4">Vous repartirez avec :</p>
            <ul className="list-disc pl-5 space-y-2 mb-8">
              <li>Une routine personnalisée pour gérer et conserver votre énergie, même dans les périodes intenses.</li>
              <li>Des outils pour aligner votre énergie mentale et physique, et éviter les coups de fatigue.</li>
            </ul>
            
            <div className="flex justify-end">
              <div className="w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="40" stroke="#0A291C" strokeWidth="2"/>
                  <path d="M50 10V20M90 50H80M50 90V80M10 50H20" stroke="#0A291C" strokeWidth="2"/>
                  <path d="M50 30V50L70 70" stroke="#0A291C" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="bg-cover bg-center min-h-[600px] order-1 lg:order-2" style={{ backgroundImage: "url('/public/lovable-uploads/f78781cf-c5e9-427e-890d-8a3df947c5d9.png')" }}>
          <div className="bg-gradient-to-r from-rise-dark-green/80 to-rise-dark-green/80 h-full p-12 flex flex-col justify-center">
            <div className="mb-8">
              <svg className="h-24 w-24 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="10" fill="currentColor"/>
                <path d="M50 20V10" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 90V80" stroke="currentColor" strokeWidth="2"/>
                <path d="M80 50H90" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 50H20" stroke="currentColor" strokeWidth="2"/>
                <path d="M72 28L79 21" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 79L28 72" stroke="currentColor" strokeWidth="2"/>
                <path d="M72 72L79 79" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21L28 28" stroke="currentColor" strokeWidth="2"/>
                <path d="M60 50H70" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
                <path d="M30 50H40" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
                <path d="M50 60V70" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
                <path d="M50 30V40" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
                <path d="M60 60L67 67" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
                <path d="M33 67L40 60" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
                <path d="M60 40L67 33" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
                <path d="M33 33L40 40" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"/>
              </svg>
            </div>
            
            <p className="text-white leading-relaxed">
              Que ce soit pour renforcer votre résilience, affiner votre intuition, ou optimiser votre énergie, chaque apprentissage vous aidera à <span className="font-bold">élever votre performance tout en préservant votre bien-être.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficesSection;
