
import React from 'react';

const HeroSection = () => {
  return (
    <section id="accueil" className="hero-section">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 text-center relative z-10 py-20">
        <div className="flex justify-center mb-10">
          <img 
            src="/lovable-uploads/085c276e-2ff2-4122-8590-8c48682c78c8.png" 
            alt="Logo R.I.S.E" 
            className="h-24 w-24 animate-scale-in"
          />
        </div>
        
        <div className="divider"></div>
        
        <h1 className="text-9xl sm:text-[10rem] md:text-[12rem] font-alta text-white tracking-widest animate-fade-in" style={{ letterSpacing: "0.5em" }}>
          R I S E
        </h1>
        
        <div className="mt-10 max-w-4xl mx-auto animate-fade-in-slow">
          <p className="text-xl sm:text-2xl font-montserrat text-white uppercase tracking-wide">
            UNE <span className="font-bold">RETRAITE DE 2 JOURS</span> POUR EXCELLER DANS VOTRE CARRIÈRE <span className="font-bold">SANS SACRIFIER VOTRE BIEN-ÊTRE PERSONNEL</span>
          </p>
        </div>
        
        <div className="mt-16 text-3xl sm:text-4xl text-white font-alta animate-fade-in-slow">
          LES 24 & 25 MAI 2025
        </div>
        
        <div className="divider mt-12"></div>
        
        <a 
          href="#reservation" 
          className="mt-16 inline-block bg-rise-gold text-rise-dark-green px-8 py-4 rounded-full text-xl font-bold tracking-wide hover:bg-rise-gold/90 transform hover:scale-105 transition-all duration-300 animate-fade-in-slow"
        >
          JE RÉSERVE MA PLACE
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
