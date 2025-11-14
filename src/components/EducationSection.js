import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  // Removed scroll-based transform for a simpler, predictable animation

  const [openIndex, setOpenIndex] = useState(null);

  const education = [
    {
      degree: "National Diploma in Technology – Information Technology",
      institution: "Institute of Technology, University of Moratuwa",
      period: "2024 – 2027 (Expected)",
      status: "current"
    },
    {
      degree: "G.C.E. Advanced Level",
      institution: "Sripalee College, Horana",
      period: "2021",
      status: "completed",
      results: "Subjects: 3C passes. Stream: Physical Science."
    },
    {
      degree: "G.C.E. Ordinary Level",
      institution: "Sripalee College, Horana",
      period: "2017",
      status: "completed",
      results: "A6 , B2, C1."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fadeInUp">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="group animate-fadeInUp">
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-purple-500/10">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-purple-600/20 rounded-lg animate-bounce-subtle">
                    <GraduationCap className="text-purple-400" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-purple-400">Academic Background</h3>
                </div>
                
                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <div 
                      key={idx}
                      className="relative pl-6 border-l-2 border-purple-500/50 hover:border-purple-500 transition-colors"
                    >
                      <div className={`absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full ${edu.status === 'current' ? 'animate-bounce-subtle' : ''}`}></div>

                      <button
                        type="button"
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        aria-expanded={openIndex === idx}
                        className="w-full text-left cursor-pointer"
                      >
                        <p className="font-semibold text-lg text-white">{edu.degree}</p>
                        <p className="text-gray-400">{edu.institution}</p>
                        <p className="text-sm text-purple-400 mt-1">{edu.period}</p>
                      </button>

                      {openIndex === idx && (
                        <div className="mt-3 pl-4 text-sm text-gray-300 animate-slideDown">
                          {edu.results ? (
                            <div>{edu.results}</div>
                          ) : (
                            <div className="italic text-gray-400">Results not provided</div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;