
import React from 'react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      icon: 'web',
      skills: [
        { name: 'React & Next.js', icon: 'javascript' },
        { name: 'Tailwind & CSS3', icon: 'css' },
        { name: 'TypeScript', icon: 'terminal' },
      ]
    },
    {
      title: 'Backend',
      icon: 'database',
      skills: [
        { name: 'Node.js & Express', icon: 'dns' },
        { name: 'PostgreSQL & Redis', icon: 'storage' },
        { name: 'GraphQL & REST APIs', icon: 'hub' },
      ]
    },
    {
      title: 'Tools',
      icon: 'build',
      skills: [
        { name: 'Docker & Kubernetes', icon: 'developer_board' },
        { name: 'AWS & Vercel', icon: 'cloud' },
        { name: 'Git & CI/CD', icon: 'history' },
      ]
    }
  ];

  return (
    <section className="flex flex-col gap-12" id="skills">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Capabilities</h2>
        <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Expertise</h3>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          I specialize in building robust and scalable applications using a modern stack of technologies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">{group.icon}</span>
              </div>
              <h4 className="text-xl font-bold">{group.title}</h4>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-transparent hover:border-primary/30 transition-all cursor-default">
                  <span className="material-symbols-outlined text-primary text-xl">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
