
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1 flex flex-col items-center py-16 px-4 md:px-10 lg:px-40">
        <div className="w-full max-w-[1100px] flex flex-col gap-24">
          <Hero />
          <hr className="border-slate-200 dark:border-slate-800" />
          <Skills />
          <hr className="border-slate-200 dark:border-slate-800" />
          <Certifications />
          <hr className="border-slate-200 dark:border-slate-800" />
          <Contact />
        </div>
      </main>
      <Footer />
      <GeminiChat />
    </div>
  );
};

export default App;
