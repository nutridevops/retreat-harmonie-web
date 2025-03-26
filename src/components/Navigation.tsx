
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-rise-dark-green/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/public/lovable-uploads/085c276e-2ff2-4122-8590-8c48682c78c8.png" 
            alt="Logo R.I.S.E" 
            className="h-12 w-12 mr-2"
          />
          <h2 className={`text-rise-gold font-alta text-2xl tracking-wider ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'} transition-opacity duration-300`}>R.I.S.E</h2>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#accueil" className="nav-link text-rise-gold hover:text-rise-gold/80 transition-colors">Accueil</a>
          <a href="#methode" className="nav-link text-rise-gold hover:text-rise-gold/80 transition-colors">La Méthode</a>
          <a href="#benefices" className="nav-link text-rise-gold hover:text-rise-gold/80 transition-colors">Bénéfices</a>
          <a href="#programme" className="nav-link text-rise-gold hover:text-rise-gold/80 transition-colors">Programme</a>
          <a href="#activites" className="nav-link text-rise-gold hover:text-rise-gold/80 transition-colors">Activités</a>
          <a href="#equipe" className="nav-link text-rise-gold hover:text-rise-gold/80 transition-colors">L'Équipe</a>
          <a href="#reservation" className="nav-link text-rise-gold hover:text-rise-gold/80 transition-colors">Réservation</a>
        </nav>
        
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-rise-gold">
            <Menu size={24} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-rise-dark-green/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#accueil" 
              className="text-rise-gold py-2 px-4 hover:bg-rise-light-green/20 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accueil
            </a>
            <a 
              href="#methode" 
              className="text-rise-gold py-2 px-4 hover:bg-rise-light-green/20 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              La Méthode
            </a>
            <a 
              href="#benefices" 
              className="text-rise-gold py-2 px-4 hover:bg-rise-light-green/20 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bénéfices
            </a>
            <a 
              href="#programme" 
              className="text-rise-gold py-2 px-4 hover:bg-rise-light-green/20 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Programme
            </a>
            <a 
              href="#activites" 
              className="text-rise-gold py-2 px-4 hover:bg-rise-light-green/20 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Activités
            </a>
            <a 
              href="#equipe" 
              className="text-rise-gold py-2 px-4 hover:bg-rise-light-green/20 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              L'Équipe
            </a>
            <a 
              href="#reservation" 
              className="text-rise-gold py-2 px-4 hover:bg-rise-light-green/20 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Réservation
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
