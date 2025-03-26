
import React from 'react';

const ActivitesSection = () => {
  return (
    <section id="activites" className="bg-rise-dark-green section relative">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-16">
          <img 
            src="/public/lovable-uploads/085c276e-2ff2-4122-8590-8c48682c78c8.png" 
            alt="Logo R.I.S.E" 
            className="h-16 w-16 mr-6"
          />
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-alta text-rise-gold">
            ACTIVITÉS
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Neurofitness */}
          <div className="flex flex-col items-center">
            <div className="w-56 h-56 rounded-full overflow-hidden mb-6">
              <img 
                src="/public/lovable-uploads/7900804e-071d-48ea-a157-db6bb600b8a8.png" 
                alt="Neurofitness" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-alta text-rise-gold mb-2">NEUROFITNESS</h3>
            <div className="w-full max-w-[200px] h-[2px] bg-rise-gold/40 mb-4"></div>
          </div>
          
          {/* Neuroperformance */}
          <div className="flex flex-col items-center">
            <div className="w-56 h-56 rounded-full overflow-hidden mb-6">
              <img 
                src="/public/lovable-uploads/b01791d3-2fa7-465a-9a40-8f5d896c6f6b.png" 
                alt="Neuroperformance" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-alta text-rise-gold mb-2">NEUROPERFORMANCE</h3>
            <div className="w-full max-w-[200px] h-[2px] bg-rise-gold/40 mb-4"></div>
          </div>
          
          {/* Neuro Nutrition */}
          <div className="flex flex-col items-center">
            <div className="w-56 h-56 rounded-full overflow-hidden mb-6">
              <img 
                src="/public/lovable-uploads/d1520ffd-cd97-4438-97a6-56f53639858c.png" 
                alt="Neuro Nutrition" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-alta text-rise-gold mb-2">NEURO NUTRITION</h3>
            <div className="w-full max-w-[200px] h-[2px] bg-rise-gold/40 mb-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitesSection;
