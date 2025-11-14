import React from 'react';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "4th International Research Conference",
      organization: "Institute of Technology, University of Moratuwa",
      description: "Presented research paper titled: 'Empowering Village Self-Entrepreneurs in Sri Lanka through a Digital Marketplace – Quantitative Study.'",
      year: "2025"
    },
    {
      title: "Diploma in Human Resource Management",
      organization: "",
      description: "",
      year: "2023"
    },
    {
      title: "Diploma in English",
      organization: "",
      description: "",
      year: "2023"
    },
    {
      title: "Certificate in Graphic Design",
      organization: "",
      description: "",
      year: "2022"
    },
    {
      title: "Certificate in Computer Science",
      organization: "",
      description: "",
      year: "2022"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certifications & Achievements
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="group animate-slideInRight">
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-pink-500 transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-pink-600/20 rounded-lg animate-pulse-slow">
                    <Award className="text-pink-400" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-pink-400">Professional Development</h3>
                </div>
                
                <div className="space-y-4">
                  {certifications.map((cert, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300 transform hover:translate-x-2 hover:scale-105 border border-slate-700/50 hover:border-pink-500/50"
                    >
                      <Award size={24} className="text-pink-400 mt-1 flex-shrink-0 animate-bounce-subtle" style={{animationDelay: `${idx * 0.1}s`}} />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg text-white mb-1">{cert.title}</h4>
                        {cert.organization && (
                          <p className="text-sm text-gray-400 mb-1">{cert.organization}</p>
                        )}
                        {cert.description && (
                          <p className="text-sm text-gray-300 mb-2">{cert.description}</p>
                        )}
                        <span className="inline-block px-3 py-1 bg-pink-900/30 text-pink-400 rounded-full text-xs font-semibold">
                          {cert.year}
                        </span>
                      </div>
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

export default CertificationsSection;