
import React from 'react';
import Harsh from '../imgs/Harsh.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero-shell grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center" id="about">
      <div className="lg:col-span-5 relative group">
        <div className="hero-photo-glow absolute inset-0 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
        <img 
          alt="Harsh Jayswal, Java Full-Stack Developer"
          className="hero-photo relative rounded-2xl w-full h-auto max-h-[560px] object-contain shadow-xl" 
          src={Harsh}
        />
      </div>
      <div className="hero-copy lg:col-span-7 flex flex-col justify-center">
        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Hello, I’m Harsh Jayswal</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
          Java Full-Stack Developer building <span className="text-primary">reliable</span> web applications.
        </h1>
        <div className="space-y-4">
       <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
  B.Tech Computer Science Engineering graduate and Java Full-Stack Developer, focused on building clean, scalable backend systems and modern web interfaces.
</p>


          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            I work with Java, Spring Boot, React.js, SQL and REST APIs. I enjoy solving practical problems with layered architecture, clean database design and user-friendly experiences.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="/Harsh_resume(1).pdf" download className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-3 font-bold transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">download</span>
            <span>Download CV</span>
          </a>
          <a href="#projects" className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-white rounded-lg px-6 py-3 font-bold transition-all">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
