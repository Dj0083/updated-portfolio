import React from 'react';
import { Code, Database, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skills = {
    "Programming": { 
      items: ["Java", "Python", "JavaScript"], 
      icon: Code, 
      color: "purple" 
    },
    "Mobile Development": { 
      items: ["Flutter", "React Native"], 
      icon: Code, 
      color: "pink" 
    },
    "Web Development": { 
      items: ["HTML", "CSS", "PHP", "React", "Node.js"], 
      icon: Code, 
      color: "blue" 
    },
    "Databases": { 
      items: ["MySQL", "MongoDB"], 
      icon: Database, 
      color: "green" 
    },
    "UI/Design Tools": { 
      items: ["Figma", "Photoshop"], 
      icon: Palette, 
      color: "orange" 
    },
    "Tools/IDEs": { 
      items: ["GitHub", "VS Code", "Android Studio"], 
      icon: Code, 
      color: "cyan" 
    }
  };

  const colorClasses = {
    purple: { 
      bg: "bg-purple-600/20", 
      border: "border-purple-500", 
      text: "text-purple-400", 
      tag: "bg-purple-900/40 border-purple-700", 
      glow: "shadow-purple-500/50" 
    },
    pink: { 
      bg: "bg-pink-600/20", 
      border: "border-pink-500", 
      text: "text-pink-400", 
      tag: "bg-pink-900/40 border-pink-700", 
      glow: "shadow-pink-500/50" 
    },
    blue: { 
      bg: "bg-blue-600/20", 
      border: "border-blue-500", 
      text: "text-blue-400", 
      tag: "bg-blue-900/40 border-blue-700", 
      glow: "shadow-blue-500/50" 
    },
    green: { 
      bg: "bg-green-600/20", 
      border: "border-green-500", 
      text: "text-green-400", 
      tag: "bg-green-900/40 border-green-700", 
      glow: "shadow-green-500/50" 
    },
    orange: { 
      bg: "bg-orange-600/20", 
      border: "border-orange-500", 
      text: "text-orange-400", 
      tag: "bg-orange-900/40 border-orange-700", 
      glow: "shadow-orange-500/50" 
    },
    cyan: { 
      bg: "bg-cyan-600/20", 
      border: "border-cyan-500", 
      text: "text-cyan-400", 
      tag: "bg-cyan-900/40 border-cyan-700", 
      glow: "shadow-cyan-500/50" 
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, data], idx) => {
            const Icon = data.icon;
            const colors = colorClasses[data.color];
            
            return (
              <div 
                key={category} 
                className={`group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:${colors.border} transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${colors.glow} animate-fadeInScale`}
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${colors.bg} rounded-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    <Icon className={`${colors.text} group-hover:animate-spin-slow`} size={28} />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>{category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`${colors.tag} px-4 py-2 rounded-full text-sm border transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default hover:shadow-lg animate-fadeIn`}
                      style={{animationDelay: `${i * 0.05}s`}}
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
};

export default SkillsSection;