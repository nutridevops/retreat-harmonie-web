
import React from 'react';

const EquilibreSection = () => {
  return (
    <section className="bg-rise-dark-green section relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-alta text-rise-gold mb-8">
            R.I.S.E LA CLÉ D'UN ÉQUILIBRE DURABLE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-rise-beige/5 backdrop-blur-sm p-6 rounded-lg">
              <p className="text-white text-xl font-semibold mb-4">
                Après ces 2 jours, vous ne serez plus la même personne.
              </p>
              <p className="text-white">
                Vous repartirez avec une <span className="font-bold">clarté mentale, une énergie</span> et une <span className="font-bold">sérénité</span> qui changeront votre façon d'affronter les défis.
              </p>
            </div>
            
            <div></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/public/lovable-uploads/4b9d00fc-cd67-4bc8-9074-00e15f314f65.png" 
                alt="Groupe d'échange" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/public/lovable-uploads/335440c4-ded8-44a1-9f69-ed797925128e.png" 
                alt="Relaxation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/public/lovable-uploads/014e0f1d-a955-45a5-8411-7bf108142775.png" 
                alt="Discussion de groupe" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            <p className="text-white flex items-start">
              <span className="inline-block w-2 h-2 bg-rise-gold rounded-full mt-2 mr-3"></span>
              Ce n'est pas une dépense, <span className="font-bold">c'est un investissement sur votre performance et votre sérénité durable.</span>
            </p>
            <p className="text-white flex items-start">
              <span className="inline-block w-2 h-2 bg-rise-gold rounded-full mt-2 mr-3"></span>
              En appliquant cette méthode, <span className="font-bold">vous gagnerez en clarté mentale et en productivité</span>, ce qui vous permettra de <span className="font-bold">mieux gérer votre carrière et votre vie personnelle.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquilibreSection;
