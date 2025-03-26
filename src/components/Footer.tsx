
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-rise-dark-green relative">
      <div className="container mx-auto px-4 py-16">
        <div className="divider mb-12"></div>
        
        <div className="flex flex-col items-center justify-center">
          <img 
            src="/public/lovable-uploads/085c276e-2ff2-4122-8590-8c48682c78c8.png" 
            alt="Logo R.I.S.E" 
            className="h-32 w-32 mb-8"
          />
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center text-white">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.84C22 20.36 21.8 20.86 21.43 21.22C21.05 21.58 20.55 21.75 20.03 21.74C16.81 21.45 13.7 20.34 10.97 18.53C8.42 16.87 6.23 14.68 4.57 12.13C2.75 9.39 1.64 6.27 1.36 3.03C1.35 2.52 1.52 2.02 1.88 1.65C2.24 1.27 2.73 1.07 3.24 1.06H6.28C7.19 1.05 7.97 1.67 8.13 2.56C8.29 3.57 8.57 4.56 8.97 5.5C9.24 6.12 9.07 6.84 8.56 7.29L7.16 8.48C8.71 11.14 10.82 13.25 13.48 14.8L14.67 13.4C15.12 12.89 15.84 12.72 16.46 12.99C17.4 13.39 18.39 13.67 19.4 13.83C20.31 13.99 20.93 14.78 20.92 15.7L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +32 465 38 74 51
            </div>
            
            <div className="flex items-center text-white">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="currentColor"/>
              </svg>
              <a href="mailto:info.neuroperformancetraining@gmail.com" className="hover:text-rise-gold transition-colors">
                info.neuroperformancetraining@gmail.com
              </a>
            </div>
            
            <div className="flex items-center text-white">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.79086 2 3 3.79086 3 6V18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V6C21 3.79086 19.2091 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="https://instagram.com/laetitia.neuroperformance" className="hover:text-rise-gold transition-colors" target="_blank" rel="noopener noreferrer">
                @laetitia.neuroperformance
              </a>
            </div>
          </div>
        </div>
        
        <div className="divider mt-12"></div>
        
        <p className="text-white text-center text-sm mt-8">
          © {new Date().getFullYear()} R.I.S.E. - Retraite pour la Résilience, l'Intuition, la Force et l'Énergie. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
