import React from 'react';
import { Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Profile
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="group animate-slideInLeft">
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-600/20 rounded-lg animate-pulse-slow">
                    <Briefcase className="text-purple-400" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-purple-400">About Me</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  IT student with hands-on experience in <span className="text-purple-400 font-semibold">React Native</span>, 
                  <span className="text-purple-400 font-semibold"> Node.js</span>, 
                  <span className="text-purple-400 font-semibold"> Flutter</span>, 
                  <span className="text-purple-400 font-semibold"> PHP</span>, and 
                  <span className="text-purple-400 font-semibold"> MySQL/MongoDB</span>, 
                  capable of building full-stack applications and responsive interfaces. Collaborative team player with strong 
                  problem-solving skills, eager to learn and contribute to real-world projects.
                </p>
                
                <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-700/50">
                  <p className="text-purple-300 font-semibold">
                    🎯 Currently seeking an internship to gain practical experience and apply technical knowledge in innovative development tasks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;