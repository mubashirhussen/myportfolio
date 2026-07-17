import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { featured, others } = portfolioData.projects;
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section 
      id="projects" 
      className="py-20 bg-slate-950/20 border-t border-slate-900/60 light:bg-slate-50/20 light:border-slate-200/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-accentTeal tracking-widest uppercase font-semibold mb-2 block">
            Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-950 tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentIndigo to-accentCyan">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-accentTeal mx-auto mt-4 rounded-full" />
        </div>

        {/* 1. Flagship Featured Project */}
        <div className="mb-12 text-left">
          <span className="font-mono text-xs font-bold text-accentTeal uppercase tracking-widest mb-4 block">
            Featured Project
          </span>
          
          <div 
            className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/60 backdrop-blur shadow-2xl transition-all duration-500 hover:border-slate-700/80 light:bg-white light:border-slate-200 light:shadow-slate-100"
          >
            {/* Ambient background accent */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accentTeal/5 rounded-full blur-3xl pointer-events-none group-hover:bg-accentTeal/10 transition-all duration-500" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10 items-center">
              
              {/* Info Block */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white light:text-slate-900 group-hover:text-accentTeal transition-colors">
                    {featured.title}
                  </h4>
                  <span className="font-mono text-xs text-slate-500 tracking-wide mt-0.5 block uppercase">
                    {featured.subtitle}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-400 light:text-slate-650 leading-relaxed">
                  {featured.description}
                </p>

                <div className="space-y-2.5 bg-slate-900/60 border border-slate-850 p-4 rounded-xl light:bg-slate-50 light:border-slate-200">
                  <span className="font-mono text-[10px] text-accentTeal uppercase tracking-widest font-semibold block">Problem Solved</span>
                  <p className="text-xs text-slate-400 light:text-slate-500 leading-normal">
                    {featured.problem}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {featured.tech.slice(0, 7).map((techName, idx) => (
                    <span key={idx} className="font-mono text-[10px] px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-350 light:bg-slate-100 light:border-slate-200 light:text-slate-600">
                      {techName}
                    </span>
                  ))}
                  {featured.tech.length > 7 && (
                    <span className="font-mono text-[10px] px-2.5 py-1 text-slate-500">
                      +{featured.tech.length - 7} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <button 
                    onClick={() => openModal(featured)}
                    className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-accentIndigo hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all duration-300"
                  >
                    View Details
                    <ChevronRight size={14} className="ml-1" />
                  </button>
                  {featured.githubLink && (
                    <a 
                      href={featured.githubLink}
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-800 hover:border-slate-700 bg-slate-900/60 backdrop-blur rounded-lg text-xs sm:text-sm font-semibold text-slate-300 hover:text-white active:scale-[0.98] transition-all duration-300 light:bg-white light:border-slate-200 light:text-slate-700 light:hover:bg-slate-50"
                    >
                      <FaGithub size={16} className="mr-2 text-accentTeal" />
                      View Code
                    </a>
                  )}
                </div>
              </div>

              {/* System Architecture Flow Graphic */}
              <div className="lg:col-span-5 flex justify-center lg:pl-6">
                <div className="w-full max-w-[320px] aspect-square rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl relative flex flex-col justify-between overflow-hidden group-hover:border-slate-700 transition-all duration-300 light:bg-slate-50 light:border-slate-200 light:shadow-none">
                  
                  {/* Glowing core blobs */}
                  <div className="absolute -top-10 -left-10 w-28 h-28 bg-accentTeal/5 rounded-full blur-2xl" />
                  <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-accentIndigo/5 rounded-full blur-2xl" />

                  {/* Header visual */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-900 light:border-slate-200">
                    <span className="font-mono text-[10px] text-slate-500">SYSTEM_ARCHITECTURE // FLOW</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* Tech stack blocks */}
                  <div className="my-auto space-y-3 font-sans text-xs">
                    
                    {/* Ingestion Layer */}
                    <div className="p-3 bg-slate-900 border border-slate-850/80 rounded-xl flex items-center space-x-3 light:bg-white light:border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-accentIndigo" />
                      <div className="text-left">
                        <span className="block font-mono text-[8px] text-slate-500 uppercase font-semibold">01 // INGESTION</span>
                        <span className="text-slate-300 font-medium light:text-slate-800 text-[11px]">Gmail API & OAuth 2.0</span>
                      </div>
                    </div>

                    {/* Analysis Layer */}
                    <div className="p-3 bg-slate-900 border border-slate-850/80 rounded-xl flex items-center space-x-3 light:bg-white light:border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-accentTeal" />
                      <div className="text-left">
                        <span className="block font-mono text-[8px] text-slate-500 uppercase font-semibold">02 // ANALYSIS</span>
                        <span className="text-slate-300 font-medium light:text-slate-800 text-[11px]">OCR & GPT-4o Threat Intel</span>
                      </div>
                    </div>

                    {/* Output Layer */}
                    <div className="p-3 bg-slate-900 border border-slate-850/80 rounded-xl flex items-center space-x-3 light:bg-white light:border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-accentCyan" />
                      <div className="text-left">
                        <span className="block font-mono text-[8px] text-slate-500 uppercase font-semibold">03 // OUTPUT</span>
                        <span className="text-slate-300 font-medium light:text-slate-800 text-[11px]">Evidence & Legal Reports</span>
                      </div>
                    </div>

                  </div>

                  {/* Footer visual */}
                  <div className="pt-3 border-t border-slate-900 light:border-slate-200 flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span>SECURITY COMPLIANT</span>
                    <span className="text-accentTeal font-bold">100% PRIVATE</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 2. Grid of other projects */}
        <div className="text-left mt-16">
          <span className="font-mono text-xs font-bold text-accentTeal uppercase tracking-widest mb-6 block">
            More Projects
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {others.map((project, idx) => (
              <div 
                key={idx}
                className="group flex flex-col justify-between p-6 rounded-2xl border border-slate-800/80 bg-slate-950/40 backdrop-blur shadow-xl hover:border-slate-700/80 light:bg-white light:border-slate-200 light:shadow-slate-100 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top metadata line */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-900 light:border-slate-100">
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-accentTeal light:bg-slate-50 light:border-slate-200">
                      Full Stack Development
                    </span>
                    <span className="font-mono text-[9px] text-slate-500">
                      ID: 0{idx + 2}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-accentTeal transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 light:text-slate-655 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Problem snippet */}
                  <div className="p-3 bg-slate-900/60 border border-slate-850 rounded-lg text-[11px] text-slate-400 light:bg-slate-50 light:border-slate-200 light:text-slate-500">
                    <span className="font-mono text-[9px] text-slate-500 uppercase font-semibold block mb-0.5">Problem</span>
                    <p className="line-clamp-2">{project.problem}</p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.slice(0, 5).map((techName, tIdx) => (
                      <span key={tIdx} className="font-mono text-[9px] px-2 py-0.5 rounded bg-slate-900/60 border border-slate-850 text-slate-450 light:bg-slate-100 light:border-slate-200">
                        {techName}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="font-mono text-[9px] px-2 py-0.5 text-slate-500">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3 pt-6 mt-6 border-t border-slate-900/60 light:border-slate-100">
                  <button 
                    onClick={() => openModal(project)}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-accentIndigo hover:bg-indigo-700 active:scale-[0.98] shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-150 cursor-pointer"
                  >
                    View Details
                  </button>
                  {/* Hides View Code button conditionally for E-Commerce project */}
                  {project.githubLink ? (
                    <a 
                      href={project.githubLink}
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-slate-800 hover:border-slate-700 bg-slate-900/40 rounded-lg text-xs font-semibold text-slate-350 hover:text-white active:scale-[0.98] transition-all duration-150 light:bg-white light:border-slate-200 light:text-slate-700"
                    >
                      <FaGithub size={14} className="mr-1.5 text-accentTeal" />
                      View Code
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Detail modal dialog overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
              onClick={closeModal}
            >
              <motion.div 
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col text-left light:bg-white light:border-slate-200"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-900 light:border-slate-200">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs text-accentTeal font-bold">// DETAILS</span>
                    <h5 className="text-base sm:text-lg font-bold text-white light:text-slate-900">
                      {selectedProject.title}
                    </h5>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 light:hover:text-slate-900 light:hover:bg-slate-100 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Body scrollable content */}
                <div className="p-6 overflow-y-auto space-y-6">
                  {/* Description */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-accentTeal uppercase tracking-widest font-semibold">Overview</span>
                    <p className="text-xs sm:text-sm text-slate-350 light:text-slate-700 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Problem statement */}
                  <div className="p-4 bg-slate-900 border border-slate-850 rounded-xl space-y-2 light:bg-slate-50 light:border-slate-200">
                    <span className="font-mono text-[10px] text-accentIndigo uppercase tracking-widest font-semibold flex items-center">
                      The Problem
                    </span>
                    <p className="text-xs sm:text-sm text-slate-400 light:text-slate-655 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Highlights/Bullet details */}
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] text-accentTeal uppercase tracking-widest font-semibold">Key Capabilities</span>
                    <ul className="space-y-2.5">
                      {selectedProject.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-400 light:text-slate-650 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-accentTeal mr-3 mt-2 flex-shrink-0 rounded-full" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack badge full view */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-accentCyan uppercase tracking-widest font-semibold">Complete Tech Stack</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((techName, idx) => (
                        <span key={idx} className="font-mono text-[10px] px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-350 light:bg-slate-100 light:border-slate-200 light:text-slate-600">
                          {techName}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="px-6 py-4 border-t border-slate-900 flex justify-end space-x-3 light:border-slate-200">
                  <button 
                    onClick={closeModal}
                    className="px-4 py-2 border border-slate-800 hover:border-slate-750 bg-slate-900/60 rounded-lg text-xs font-semibold text-slate-400 hover:text-white light:bg-white light:border-slate-200 light:text-slate-700 light:hover:bg-slate-50"
                  >
                    Close
                  </button>
                  {selectedProject.githubLink ? (
                    <a 
                      href={selectedProject.githubLink}
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-xs font-semibold text-white bg-accentIndigo hover:bg-indigo-700 active:scale-[0.98] transition-all"
                    >
                      <FaGithub size={14} className="mr-1.5 text-accentTeal" />
                      View Code
                    </a>
                  ) : null}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
