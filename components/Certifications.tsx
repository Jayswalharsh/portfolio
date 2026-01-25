
import React, { useRef } from 'react';

const Certifications: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const certs = [
    {
      title: 'AWS Certified Solutions Architect',
      org: 'Amazon Web Services',
      date: 'Earned Jan 2023',
      icon: 'verified',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Meta Front-End Developer',
      org: 'Meta Platforms, Inc.',
      date: 'Earned March 2023',
      icon: 'workspace_premium',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Professional Scrum Master I',
      org: 'Scrum.org',
      date: 'Earned June 2023',
      icon: 'code',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'Google Cloud Associate',
      org: 'Google Cloud',
      date: 'Earned Sept 2023',
      icon: 'cloud_done',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop'
    },
    {
      title: 'CompTIA Security+',
      org: 'CompTIA',
      date: 'Earned Nov 2023',
      icon: 'security',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="flex flex-col gap-10" id="certifications">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Learning Path</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Professional Certifications</h3>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => scroll('left')}
            className="size-12 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:text-primary transition-all bg-white dark:bg-slate-900 shadow-sm"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="size-12 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:text-primary transition-all bg-white dark:bg-slate-900 shadow-sm"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 snap-x snap-mandatory"
        >
          {certs.map((cert, idx) => (
            <div key={idx} className="min-w-[300px] md:min-w-[360px] snap-start">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-b-4 border-b-transparent hover:border-b-primary group-hover:opacity-100">
                <div className="h-40 w-full relative overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 size-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-lg">
                    <span className="material-symbols-outlined">{cert.icon}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div>
                    <h4 className="text-xl font-bold mb-1 leading-tight text-slate-900 dark:text-white">{cert.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">{cert.org}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-2 text-xs font-semibold text-slate-400">
                    <span className="material-symbols-outlined text-lg">calendar_today</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent pointer-events-none hidden md:block"></div>
      </div>
    </section>
  );
};

export default Certifications;
