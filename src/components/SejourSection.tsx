
import React from 'react';

const SejourSection = () => {
  return (
    <section className="bg-rise-dark-green section relative">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-alta text-rise-gold mb-16">
            VOTRE SÉJOUR<br />DANS UN LIEU TENU SECRET
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-12 h-12 text-rise-gold" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              ))}
            </div>
          </div>
          
          <p className="text-white text-2xl max-w-3xl mx-auto leading-relaxed font-montserrat">
            Un cadre d'exception, dévoilé uniquement aux participantes confirmées. Un endroit qui favorise une transformation profonde.
          </p>
          
          <div className="w-48 h-1 bg-rise-gold/30 mx-auto my-16"></div>
        </div>
      </div>
    </section>
  );
};

export default SejourSection;
