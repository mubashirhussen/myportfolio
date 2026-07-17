import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

// Custom LeetCode icon
function LeetCodeIcon({ className }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      width="1em" 
      height="1em"
    >
      <path d="M13.483 0a1.39 1.39 0 0 0-.961.438L7.116 5.85a1.38 1.38 0 0 0-.015 1.963 1.378 1.378 0 0 0 1.95 0l5.408-5.41a.436.436 0 0 1 .616 0l7.5 7.5a.436.436 0 0 1 0 .615l-11.83 11.83a1.378 1.378 0 0 1-1.951 0l-4.093-4.09a1.38 1.38 0 0 0-1.95 0 1.38 1.38 0 0 0 0 1.95l4.093 4.09a3.746 3.746 0 0 0 5.302 0l11.83-11.83a3.75 3.75 0 0 0 0-5.302L14.444.438A1.388 1.388 0 0 0 13.482 0zm-7.79 6.84a1.76 1.76 0 0 0-1.246.518L.487 11.319a2.535 2.535 0 0 0 0 3.585l4.053 4.053a1.76 1.76 0 0 0 2.49 0 1.76 1.76 0 0 0 0-2.49l-3.056-3.057a.782.782 0 0 1 0-1.106l3.626-3.626a1.76 1.76 0 0 0 0-2.49c-.34-.339-.8-.518-1.247-.518z" />
    </svg>
  );
}

export default function Footer() {
  const { name, github, linkedin, leetcode, email } = portfolioData.personal;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900/60 py-12 light:bg-slate-50 light:border-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Branding */}
          <div className="text-center md:text-left">
            <span className="font-mono text-lg font-bold tracking-tight text-accentIndigo">
              &lt;
              <span className="text-white light:text-slate-900 transition-colors">Mubashir</span>
              <span className="text-accentTeal font-medium">.de</span>
              &nbsp;/&gt;
            </span>
            <p className="text-xs text-slate-550 light:text-slate-500 mt-1">
              Building scalable full-stack web and backend applications.
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center space-x-3.5">
            <a href={github} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300 light:bg-white light:border-slate-200 light:text-slate-600 light:hover:text-slate-950" aria-label="GitHub">
              <FaGithub size={16} />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300 light:bg-white light:border-slate-200 light:text-slate-600 light:hover:text-slate-950" aria-label="LinkedIn">
              <FaLinkedin size={16} />
            </a>
            <a href={leetcode} target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300 light:bg-white light:border-slate-200 light:text-slate-600 light:hover:text-slate-950" aria-label="LeetCode">
              <LeetCodeIcon className="text-base" />
            </a>
            <a href={`mailto:${email}`} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300 light:bg-white light:border-slate-200 light:text-slate-600 light:hover:text-slate-950" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-accentTeal hover:border-slate-700 transition-all duration-300 cursor-pointer light:bg-white light:border-slate-200 light:text-slate-600 light:hover:text-accentTeal"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-900/60 light:border-slate-200/60" />

        {/* Copy lines */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-550 light:text-slate-500 gap-4">
          <p>© {currentYear} Sheik Mubashir Hussen. All rights reserved.</p>
          <div className="flex space-x-4">
            <span>Portfolio v1.0.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
