
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-10 px-10 text-center">
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        © {new Date().getFullYear()} DevPortfolio. Built with precision for the modern web.
      </p>
    </footer>
  );
};

export default Footer;
