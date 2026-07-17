import React from 'react';
import { Award, Trophy, Target, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications, achievements } = portfolioData;

  return (
    <section 
      id="certifications" 
      className="py-20 bg-slate-950/20 border-t border-slate-900/60 light:bg-slate-50/20 light:border-slate-200/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-accentTeal tracking-widest uppercase font-semibold mb-2 block">
            Credentials & Honors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-950 tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentIndigo to-accentCyan">Achievements</span>
          </h2>
          <div className="w-12 h-1 bg-accentTeal mx-auto mt-4 rounded-full" />
        </div>

        {/* 1. Certifications Grid */}
        <div className="text-left mb-16">
          <span className="font-mono text-xs font-bold text-accentTeal uppercase tracking-widest mb-6 block">
            Professional Certifications
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="group p-5 rounded-xl border border-slate-800/80 bg-slate-950/40 backdrop-blur shadow-xl hover:border-slate-700/80 hover:shadow-2xl hover:shadow-accentIndigo/5 transition-all duration-300 light:bg-white light:border-slate-200 light:shadow-slate-100"
              >
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-accentTeal light:bg-slate-50 light:border-slate-200 group-hover:bg-slate-900 group-hover:text-accentTeal transition-colors">
                    <Award size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white light:text-slate-900 group-hover:text-accentTeal transition-colors">
                      {cert.name}
                    </h4>
                    <span className="font-mono text-[10px] text-slate-500 mt-0.5 block uppercase">
                      Issued by {cert.issuer}
                    </span>
                    <p className="text-xs text-slate-400 light:text-slate-500 mt-2.5 leading-relaxed">
                      {cert.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Achievements Grid */}
        <div className="text-left">
          <span className="font-mono text-xs font-bold text-accentTeal uppercase tracking-widest mb-6 block">
            Selected Honors & Benchmarks
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((ach, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden p-6 rounded-xl border border-slate-850 bg-slate-950/60 backdrop-blur-md shadow-xl hover:border-slate-800 hover:shadow-accentTeal/5 transition-all duration-300 light:bg-white light:border-slate-200 light:shadow-slate-100"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accentTeal via-accentCyan to-accentIndigo opacity-70" />

                <div className="flex items-center space-x-3.5 mb-4">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-850 text-accentTeal light:bg-slate-50 light:border-slate-200">
                    {idx === 0 ? <Sparkles size={18} /> : idx === 1 ? <Trophy size={18} /> : <Target size={18} />}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white light:text-slate-900 group-hover:text-accentTeal transition-colors">
                      {ach.title}
                    </h4>
                    <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block mt-0.5">
                      {ach.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 light:text-slate-650 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
