import React from 'react';
import { Calendar, GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { aboutNarrative, education } = portfolioData;

  return (
    <section 
      id="about" 
      className="py-20 border-t border-slate-900/60 light:border-slate-200/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-accentTeal tracking-widest uppercase font-semibold mb-2 block">
            Biography
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-950 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentIndigo to-accentCyan">Me</span>
          </h2>
          <div className="w-12 h-1 bg-accentTeal mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-xl font-bold text-slate-100 light:text-slate-900 tracking-tight">
              B.Tech CSE Graduate specializing in Scalable Full Stack Systems
            </h3>
            <p className="text-base text-slate-400 light:text-slate-650 leading-relaxed">
              {aboutNarrative}
            </p>
            
            {/* Quick Metrics grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-900 light:border-slate-200">
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-900/60 light:bg-slate-50 light:border-slate-200 transition-all duration-150 hover:border-slate-800 dark:hover:border-slate-800">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-accentTeal">7.9</span>
                <span className="block text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-semibold">CGPA CSE</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-900/60 light:bg-slate-50 light:border-slate-200 transition-all duration-150 hover:border-slate-800 dark:hover:border-slate-800">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-accentIndigo">4+</span>
                <span className="block text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-semibold">Internships</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-900/60 light:bg-slate-50 light:border-slate-200 transition-all duration-150 hover:border-slate-800 dark:hover:border-slate-800">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-accentCyan">300+</span>
                <span className="block text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-semibold">DSA Solved</span>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-5 text-left">
            <div className="border border-slate-800/80 bg-slate-950/40 rounded-xl p-6 backdrop-blur shadow-xl hover:border-slate-700/80 transition-all duration-300 light:bg-white light:border-slate-200 light:shadow-slate-100">
              <h4 className="text-lg font-bold text-white light:text-slate-900 mb-6 flex items-center">
                <GraduationCap className="mr-2 text-accentTeal w-5 h-5" />
                Education
              </h4>

              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-slate-900 light:border-slate-200">
                    {/* Small Dot */}
                    <div className="absolute top-1.5 -left-[7px] w-3 h-3 rounded-full bg-accentIndigo border border-slate-950" />
                    
                    <div className="flex items-center space-x-2 text-slate-500 mb-1">
                      <Calendar size={12} className="text-slate-400" />
                      <span className="font-mono text-xs font-semibold">{edu.period}</span>
                    </div>

                    <h5 className="text-sm sm:text-base font-bold text-slate-200 light:text-slate-800">
                      {edu.degree}
                    </h5>
                    
                    <p className="text-xs sm:text-sm text-accentTeal font-medium mt-1">
                      {edu.institution}
                    </p>

                    <div className="inline-flex items-center space-x-1 px-2 py-0.5 mt-2 rounded bg-accentIndigo/10 text-accentIndigo border border-accentIndigo/10 font-mono text-[10px] font-semibold uppercase">
                      <Award size={10} className="mr-0.5" />
                      <span>{edu.cgpa}</span>
                    </div>

                    <p className="text-xs text-slate-400 light:text-slate-500 mt-2.5 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
