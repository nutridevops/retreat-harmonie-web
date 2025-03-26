
import React from 'react';

const ObjectifSection = () => {
  return (
    <section className="bg-rise-medium-green section relative">
      <div className="container mx-auto">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-alta text-rise-gold text-center mb-12">
          OBJECTIF
        </h2>
        
        <div className="bg-rise-gold/80 py-6 px-8 rounded-md mb-20 max-w-4xl mx-auto text-center">
          <p className="text-rise-dark-green text-xl font-semibold">
            Avec la méthode R.I.S.E. renforcez votre résilience, affinez votre intuition et optimisez votre énergie au travers des 3 cerveaux
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="h-32 w-32 mb-8 flex items-center justify-center">
              <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10C29.5 10 13 26.5 13 47C13 67.5 29.5 84 50 84C70.5 84 87 67.5 87 47C87 26.5 70.5 10 50 10ZM50 18C66.5 18 79 30.5 79 47C79 63.5 66.5 76 50 76C33.5 76 21 63.5 21 47C21 30.5 33.5 18 50 18Z" fill="currentColor"/>
                <path d="M50 26C38.9 26 30 34.9 30 46C30 57.1 38.9 66 50 66C61.1 66 70 57.1 70 46C70 34.9 61.1 26 50 26ZM50 34C56.6 34 62 39.4 62 46C62 52.6 56.6 58 50 58C43.4 58 38 52.6 38 46C38 39.4 43.4 34 50 34Z" fill="currentColor"/>
                <path d="M58 46C58 50.4 54.4 54 50 54C45.6 54 42 50.4 42 46C42 41.6 45.6 38 50 38C54.4 38 58 41.6 58 46Z" fill="currentColor"/>
                <path d="M50 4C25.7 4 6 23.7 6 48C6 72.3 25.7 92 50 92C74.3 92 94 72.3 94 48C94 23.7 74.3 4 50 4ZM50 12C69.9 12 86 28.1 86 48C86 67.9 69.9 84 50 84C30.1 84 14 67.9 14 48C14 28.1 30.1 12 50 12Z" fill="currentColor"/>
                <path d="M33 25C33 25 46 32 50 32C54 32 67 25 67 25" stroke="currentColor" strokeWidth="2"/>
                <path d="M25 33C25 33 32 46 32 50C32 54 25 67 25 67" stroke="currentColor" strokeWidth="2"/>
                <path d="M33 75C33 75 46 68 50 68C54 68 67 75 67 75" stroke="currentColor" strokeWidth="2"/>
                <path d="M75 67C75 67 68 54 68 50C68 46 75 33 75 33" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 4V12M6 48H14M50 84V92M86 48H94" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-white text-2xl font-alta mb-3">Cerveau tête</h3>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="h-32 w-32 mb-8 flex items-center justify-center">
              <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 50C35 41.7 41.7 35 50 35C58.3 35 65 41.7 65 50C65 58.3 58.3 65 50 65C41.7 65 35 58.3 35 50Z" fill="currentColor"/>
                <path d="M20 50C20 30.1 33.4 14.1 50 14.1C66.6 14.1 80 30.1 80 50C80 69.9 66.6 85.9 50 85.9C33.4 85.9 20 69.9 20 50Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M35 50C35 41.7 41.7 35 50 35" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-white text-2xl font-alta mb-3">Cerveau coeur</h3>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="h-32 w-32 mb-8 flex items-center justify-center">
              <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 10C40.6 10 33 17.6 33 27V33H38V27C38 20.4 43.4 15 50 15C56.6 15 62 20.4 62 27V33H67V27C67 17.6 59.4 10 50 10Z" fill="currentColor"/>
                <path d="M70 30H30C25.6 30 22 33.6 22 38V72C22 76.4 25.6 80 30 80H70C74.4 80 78 76.4 78 72V38C78 33.6 74.4 30 70 30Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M50 45V65" stroke="currentColor" strokeWidth="2"/>
                <path d="M60 55H40" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="text-white text-2xl font-alta mb-3">Cerveau intestin</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectifSection;
