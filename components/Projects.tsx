import React from 'react';

const projects = [
  { title: 'Food Order Management System', stack: 'Spring Boot · MySQL', points: ['Developed RESTful APIs to manage customers, food items and order details.', 'Implemented layered Controller, Service and Repository architecture.', 'Used Spring Data JPA and Hibernate for ORM, validation, exception handling and API testing with Postman.'] },
  { title: 'Product Catalog Management System', stack: 'Spring Boot · MySQL', points: ['Developed CRUD REST APIs using Spring Boot and Spring Data JPA.', 'Integrated MySQL and implemented MVC architecture.', 'Used REST Controller, Dependency Injection and layered architecture.'] },
  { title: 'Dream Property — Real Estate Management System', stack: 'Spring Boot · MySQL', points: ['Built a backend application for managing real-estate properties.', 'Designed RESTful CRUD APIs with Spring Data JPA.', 'Implemented layered architecture, Dependency Injection and efficient MySQL data storage.'] }
];

const Projects: React.FC = () => <section id="projects" className="scroll-mt-28">
  <div className="mb-10 text-center"><p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Selected Work</p><h2 className="text-3xl sm:text-4xl font-bold">Projects</h2></div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {projects.map((project) => <article key={project.title} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
      <span className="material-symbols-outlined text-primary mb-5">deployed_code</span><h3 className="text-xl font-bold leading-tight">{project.title}</h3><p className="mt-2 text-sm font-semibold text-primary">{project.stack}</p>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.points.map(point => <li key={point} className="flex gap-2"><span className="text-primary">•</span><span>{point}</span></li>)}</ul>
    </article>)}
  </div>
</section>;
export default Projects;
