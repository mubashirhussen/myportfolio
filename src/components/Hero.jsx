import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, FileText, ArrowRight, Code } from 'lucide-react';
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

export default function Hero() {
  const { name, subtitle, pitch, github, linkedin, leetcode, email, phone, cvLink, location } = portfolioData.personal;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
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
    <section 
      id="home" 
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden tech-grid transition-colors duration-300"
    >
      {/* Background glow meshes */}
      <div className="absolute top-[15%] left-[5%] w-[35rem] h-[35rem] rounded-full glow-blur-indigo opacity-70 pointer-events-none" />
      <div className="absolute bottom-[5%] right-[5%] w-[30rem] h-[30rem] rounded-full glow-blur-teal opacity-60 pointer-events-none" />
      <div className="absolute top-[45%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[25rem] h-[25rem] rounded-full glow-blur-cyan opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Column */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800/80 px-3.5 py-1.5 rounded-full w-fit mb-6 light:bg-white light:border-slate-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentTeal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accentTeal"></span>
              </span>
              <span className="font-mono text-[10px] text-accentTeal tracking-wider uppercase font-semibold">
                Available for Opportunities
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="font-sans text-base sm:text-lg font-medium text-slate-400 light:text-slate-650 tracking-wide">
                Hi, I'm
              </h2>
              <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white light:text-slate-950 leading-none">
                {name}
              </h1>
              <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accentIndigo via-accentCyan to-accentTeal mt-3">
                {subtitle}
              </h3>
            </motion.div>

            {/* Pitch Text */}
            <motion.p 
              variants={itemVariants} 
              className="mt-6 font-sans text-base sm:text-lg text-slate-400 light:text-slate-600 leading-relaxed max-w-2xl"
            >
              {pitch}
            </motion.p>

            {/* Actions */}
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-4 items-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-accentIndigo hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href={cvLink}
                download
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-800 hover:border-slate-700 bg-slate-900/60 backdrop-blur rounded-lg text-sm font-semibold text-slate-350 hover:text-white hover:bg-slate-900 active:scale-[0.98] transition-all duration-300 light:bg-white light:border-slate-200 light:text-slate-700 light:hover:bg-slate-50 light:hover:text-slate-950"
              >
                <FileText className="mr-2 w-4 h-4 text-accentTeal" />
                Download Resume
              </a>

              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-all duration-300 light:text-slate-600 light:hover:text-slate-950"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Connections */}
            <motion.div 
              variants={itemVariants} 
              className="mt-10 pt-8 border-t border-slate-900/60 light:border-slate-200/60 flex items-center space-x-6"
            >
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold">Connect //</span>
              <div className="flex items-center space-x-4">
                <a href={github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800 transition-all duration-300 light:bg-slate-50 light:border-slate-200 light:text-slate-600 light:hover:text-slate-950" aria-label="GitHub">
                  <FaGithub size={18} />
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800 transition-all duration-300 light:bg-slate-50 light:border-slate-200 light:text-slate-600 light:hover:text-slate-950" aria-label="LinkedIn">
                  <FaLinkedin size={18} />
                </a>
                <a href={leetcode} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800 transition-all duration-300 light:bg-slate-50 light:border-slate-200 light:text-slate-600 light:hover:text-slate-950" aria-label="LeetCode">
                  <LeetCodeIcon className="text-lg" />
                </a>
                <a href={`mailto:${email}`} className="p-2 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800 transition-all duration-300 light:bg-slate-50 light:border-slate-200 light:text-slate-600 light:hover:text-slate-950" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href={`tel:${phone}`} className="p-2 rounded-lg bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:border-slate-800 transition-all duration-300 light:bg-slate-50 light:border-slate-200 light:text-slate-600 light:hover:text-slate-950" aria-label="Phone">
                  <Phone size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Column Console Profile */}
          <motion.div 
            className="lg:col-span-5 flex justify-center relative mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            {/* Glowing circle behind photo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accentIndigo/10 blur-3xl pointer-events-none" />
            
            {/* Console frame */}
            <div className="relative w-full max-w-[340px] rounded-2xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-md p-5 shadow-2xl transition-all duration-300 hover:border-slate-700/80 light:bg-white light:border-slate-200 light:shadow-slate-100">
              
              {/* Fake Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-900 light:border-slate-100">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[10px] text-slate-500 select-none">profile.sh</span>
              </div>

              {/* Photo Area */}
              <div className="relative mt-6 rounded-xl overflow-hidden bg-slate-900 border border-slate-900 group aspect-square light:bg-slate-50 light:border-slate-100">
                <img 
                  src="/profile_img.png" 
                  alt={name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/profile.kpg.jpg';
                  }}
                />
                
                {/* Floating terminal indicator */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-slate-950/80 border border-slate-850/60 rounded-md backdrop-blur-sm font-mono text-[9px] text-accentTeal tracking-wide flex items-center space-x-1 select-none">
                  <Code size={10} className="animate-pulse" />
                  <span>react.js</span>
                </div>
              </div>

              {/* Console log outputs */}
              <div className="mt-5 space-y-2 text-left font-mono text-xs select-none">
                <div className="flex items-start space-x-1">
                  <span className="text-accentTeal">&gt;</span>
                  <span className="text-slate-400 light:text-slate-500">Mubashir.focus</span>
                </div>
                <div className="text-slate-350 light:text-slate-705 pl-4 font-semibold">
                  ['Full_Stack', 'Python', 'Web_systems']
                </div>
                <div className="flex items-start space-x-1">
                  <span className="text-accentIndigo">&gt;</span>
                  <span className="text-slate-400 light:text-slate-500">Mubashir.location</span>
                </div>
                <div className="text-accentTeal pl-4">
                  "{location}"
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
