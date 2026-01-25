
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="about">
      <div className="lg:col-span-5 relative group">
        <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
        <img 
          alt="Professional portrait of a software developer" 
          className="relative rounded-2xl w-full h-[450px] object-cover shadow-xl" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2rDyMD2YJTcEoETdzwhR-iBPJsNzQVB2TN3i11DVSogHEEe0mcWlHSvYbK7ISjHIzQjdFNSXMzdBN5vVaTnS2zOgOdAiODSmQuK4twhLFPsNbcr3U0meS0ZCjsBtGh4tZ9_7sRco6Fzc77944cSoa7SogihhEyWPVqy4HNsVh6pqcB2n9ANIgiTpHY2Okd0htD2aCZFdqy_NLgZCBFCcRco1odSxDvkVnN9PJkk9JsupT8WSg4KL_28qNjkWWs5O6wLO8FIafoBEt"
        />
      </div>
      <div className="lg:col-span-7 flex flex-col justify-center">
        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">My Story</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
          Building digital experiences with <span className="text-primary">precision</span> and <span className="text-primary">passion</span>.
        </h1>
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            I am a dedicated Full-Stack Developer with over 5 years of experience building scalable web applications. My journey started with a fascination for how things work under the hood, leading me to master the entire web development lifecycle.
          </p>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            My expertise spans across modern JavaScript frameworks like React and Vue, cloud infrastructure with AWS, and robust database design. I thrive on solving complex architectural challenges and delivering high-quality, user-centric products that solve real-world problems.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg px-6 py-3 font-bold transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg">download</span>
            <span>Download CV</span>
          </button>
          <button className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary text-slate-700 dark:text-white rounded-lg px-6 py-3 font-bold transition-all">
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
