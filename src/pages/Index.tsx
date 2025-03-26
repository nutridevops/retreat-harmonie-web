
import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import LieuSection from '../components/LieuSection';
import MethodeSection from '../components/MethodeSection';
import ObjectifSection from '../components/ObjectifSection';
import BeneficesSection from '../components/BeneficesSection';
import ProgrammeSection from '../components/ProgrammeSection';
import ActivitesSection from '../components/ActivitesSection';
import EquipeSection from '../components/EquipeSection';
import EquilibreSection from '../components/EquilibreSection';
import SejourSection from '../components/SejourSection';
import ReservationSection from '../components/ReservationSection';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ui/scroll-reveal';

const Index = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      <ScrollReveal>
        <LieuSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <MethodeSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ObjectifSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <BeneficesSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ProgrammeSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ActivitesSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <EquipeSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <EquilibreSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <SejourSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <ReservationSection />
      </ScrollReveal>
      
      <Footer />
    </div>
  );
};

export default Index;
