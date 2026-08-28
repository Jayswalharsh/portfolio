
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const app = appRef.current;
    if (!app) return;
    const bounds = app.getBoundingClientRect();
    app.style.setProperty('--mouse-x', `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
    app.style.setProperty('--mouse-y', `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
  };

  return (
    <div ref={appRef} onPointerMove={handlePointerMove} className="portfolio-app relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="portfolio-background" aria-hidden="true" />
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="site-content relative z-10 flex flex-1 flex-col items-center px-4 pb-12 pt-28 sm:px-6 md:px-10 md:pb-16 md:pt-32 lg:px-12">
        <div className="w-full max-w-[1100px] flex flex-col gap-16 md:gap-24">
          <div className="section-hero"><Hero /></div>
          <hr className="section-divider" />
          <div className="section-projects"><Projects /></div>
          <hr className="section-divider" />
          <div className="section-skills"><Skills /></div>
          <hr className="section-divider" />
          <div className="section-certifications"><Certifications /></div>
          <hr className="section-divider" />
          <div className="section-journey"><Journey /></div>
          <hr className="section-divider" />
          <div className="section-contact"><Contact /></div>
        </div>
      </main>
      <Footer />
      <GeminiChat />
    </div>
  );
};

export default App;
