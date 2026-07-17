import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-darkBg/80 border-b border-slate-900/60 transition-all duration-300 light:bg-lightBg/80 light:border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollTo('home')}>
            <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-accentIndigo">
              &lt;
              <span className="text-white light:text-slate-900 transition-colors duration-300">Mubashir</span>
              <span className="text-accentTeal font-medium">.ai</span>
              &nbsp;/&gt;
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1 sm:space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium font-sans tracking-wide transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-accentTeal font-semibold'
                    : 'text-slate-400 hover:text-white light:text-slate-650 light:hover:text-slate-950'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 ml-4 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-accentTeal transition-all duration-300 light:bg-slate-100 light:border-slate-200 light:text-slate-600 light:hover:text-accentTeal"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu & Dark Mode Toggles */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 light:bg-slate-100 light:border-slate-200 light:text-slate-600"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none light:text-slate-600 light:hover:text-slate-950 light:hover:bg-slate-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-darkBg border-b border-slate-900 light:bg-lightBg light:border-slate-200 transition-colors duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-md text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'bg-slate-900 text-accentTeal font-semibold border-l-4 border-accentTeal light:bg-slate-100'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-white light:text-slate-650 light:hover:bg-slate-100 light:hover:text-slate-950'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
