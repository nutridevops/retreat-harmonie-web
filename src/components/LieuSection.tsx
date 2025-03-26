
import React from 'react';

const LieuSection = () => {
  return (
    <section className="relative py-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-rise-medium-green h-auto py-20 px-8 md:px-12 lg:px-16 flex items-center justify-center">
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-alta text-rise-gold mb-10 tracking-wide animate-fade-in">
              UNE RETRAITE DE HAUT STANDING DANS UN LIEU D'EXCEPTION
            </h2>
            <p className="text-rise-cream font-montserrat text-lg leading-relaxed mb-8 animate-fade-in-slow">
              Plongez au cœur d'une retraite exceptionnelle de deux jours, une expérience unique pour bénéficier d'outils pour développer votre résilience, intuition, votre force, et votre énergie à travers l'équilibre de vos trois cerveaux : tête, cœur et intestin.
            </p>
            <p className="text-rise-cream font-montserrat text-lg leading-relaxed animate-fade-in-slow">
              Cette immersion de haut standing va bien au-delà de la simple détente : c'est un moment pour reprogrammer votre mental, revitaliser votre corps, et optimiser votre bien-être. Vous repartirez aligné, énergisé, et prêt à performer à votre meilleur niveau, tout en restant en harmonie avec vous-même.
            </p>
          </div>
        </div>
        <div 
          className="h-[600px] md:h-auto bg-cover bg-center" 
          style={{ backgroundImage: "url('/public/lovable-uploads/13e44e06-beb1-4b49-ab74-6a055de29068.png')" }}
        ></div>
      </div>
    </section>
  );
};

export default LieuSection;
