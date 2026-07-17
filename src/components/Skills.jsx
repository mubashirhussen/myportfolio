import React from 'react';
import { Terminal, Cpu, Database, BarChart3, Brain, Wrench, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Terminal: Terminal,
  Cpu: Cpu,
  Database: Database,
  BarChart3: BarChart3,
  Brain: Brain,
  Wrench: Wrench,
  Cloud: Cloud
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section 
      id="skills" 
      className="py-20 border-t border-slate-900/60 light:border-slate-200/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-accentTeal tracking-widest uppercase font-semibold mb-2 block">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-950 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentIndigo to-accentCyan">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-accentTeal mx-auto mt-4 rounded-full" />
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {skills.map((group, index) => {
            const IconComponent = iconMap[group.icon] || Terminal;
            return (
              <div 
                key={index}
                className="p-6 rounded-xl border border-slate-800/80 bg-slate-950/40 backdrop-blur shadow-xl hover:border-slate-700/80 hover:shadow-2xl hover:shadow-accentTeal/5 transition-all duration-300 light:bg-white light:border-slate-200 light:shadow-slate-100"
              >
                {/* Category Header */}
                <div className="flex items-center pb-4 mb-4 border-b border-slate-900 light:border-slate-100">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800/60 text-accentTeal light:bg-slate-50 light:border-slate-200">
                    <IconComponent size={20} />
                  </div>
                  <h4 className="text-base font-bold text-slate-100 light:text-slate-800 ml-3">
                    {group.category}
                  </h4>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="font-mono text-xs px-3 py-1.5 rounded-md bg-slate-900/60 border border-slate-800/80 hover:border-accentTeal/50 text-slate-350 hover:text-white transition-all duration-205 select-none light:bg-slate-50 light:border-slate-200 light:text-slate-700 light:hover:border-accentTeal/50 light:hover:text-accentTeal"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
