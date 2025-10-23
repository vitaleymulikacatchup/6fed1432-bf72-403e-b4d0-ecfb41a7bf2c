import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieModal from './components/CookieModal';
import MobileMenu from './components/MobileMenu';

function App() {
  const [showCookieModal, setShowCookieModal] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="App">
      <Header 
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <Hero />
      <Stats />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      
      {showCookieModal && (
        <CookieModal onClose={() => setShowCookieModal(false)} />
      )}
      
      {showMobileMenu && (
        <MobileMenu 
          isOpen={showMobileMenu}
          onClose={() => setShowMobileMenu(false)}
        />
      )}
    </div>
  );
}

export default App;