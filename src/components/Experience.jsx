import React from 'react';
import { Calendar, Building2, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section 
      id="experience" 
      className="py-20 border-t border-slate-900/60 light:border-slate-200/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-accentTeal tracking-widest uppercase font-semibold mb-2 block">
            History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-950 tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentIndigo to-accentCyan">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-accentTeal mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto text-left">
          {/* Vertical connector line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-0.5 bg-slate-900 light:bg-slate-200 -translate-x-1/2" />

          {/* Timeline cards */}
          <div className="space-y-12">
            {experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col sm:flex-row sm:justify-between items-start">
                  
                  {/* Circle node indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-accentTeal z-10 shadow-lg light:bg-white light:border-slate-200">
                    <Briefcase size={14} />
                  </div>

                  {/* Details block */}
                  <div className={`w-full sm:w-[45%] pl-12 sm:pl-0 ${isEven ? 'sm:text-right' : 'sm:order-last'}`}>
                    <div 
                      className="p-6 rounded-2xl border border-slate-800/80 bg-slate-950/40 backdrop-blur shadow-xl hover:border-slate-700/80 transition-all duration-300 light:bg-white light:border-slate-200 light:shadow-slate-100"
                    >
                      {/* Metadata */}
                      <div className={`flex flex-col mb-4 ${isEven ? 'sm:items-end' : 'sm:items-start'}`}>
                        <div className="flex items-center space-x-1.5 text-slate-500 mb-1">
                          <Calendar size={12} className="text-slate-400" />
                          <span className="font-mono text-xs font-semibold">{exp.period}</span>
                        </div>
                        
                        <h4 className="text-base sm:text-lg font-bold text-white light:text-slate-900">
                          {exp.role}
                        </h4>

                        <div className="flex items-center space-x-1 text-accentTeal font-medium text-sm mt-1">
                          <Building2 size={12} />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* Detail points */}
                      <ul className={`space-y-2 text-xs sm:text-sm text-slate-400 light:text-slate-650 ${isEven ? 'sm:text-right' : 'text-left'}`}>
                        {exp.details.map((bullet, bIdx) => (
                          <li key={bIdx} className={`flex items-start ${isEven ? 'sm:flex-row-reverse sm:text-right' : 'text-left'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full bg-accentTeal mt-2 flex-shrink-0 ${isEven ? 'sm:ml-3 sm:mr-0 mr-3 ml-0' : 'mr-3'}`} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden sm:block w-[45%]" />

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
