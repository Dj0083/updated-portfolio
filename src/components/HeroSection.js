import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, User } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  const [text, setText] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = 'Full-Stack Developer | Mobile App Developer | UI/UX Enthusiast';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-purple-500 rounded-full animate-float"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          />
        ))}
      </div>

      {/* Parallax cursor effect */}
      <div 
        className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Profile Image with 3D effect */}
        <div className="opacity-0 animate-fadeInScale mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-spin-slow"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-6 shadow-2xl">
              {/* Placeholder for profile image - Replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <User size={96} className="text-white/80" />
              </div>
              {/* Uncomment and use this when you have an actual image */}
              {/* <img src="/profile.jpg" alt="Dulani Jayakody" className="w-full h-full object-cover" /> */}
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity animate-pulse"></div>
          </div>
        </div>
        
        <div className="opacity-0 animate-fadeInUp">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 perspective-text">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-move">Dulani Jayakody</span>
          </h1>
        </div>
        
        <div className="opacity-0 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
            {text}<span className="animate-blink">|</span>
          </p>
        </div>
        
        <div className="opacity-0 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            IT student with hands-on experience in React Native, Node.js, Flutter, PHP, and MySQL/MongoDB. 
            Passionate about building innovative solutions and creating seamless user experiences.
          </p>
          
          <div className="flex justify-center gap-6 mb-12 flex-wrap text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-purple-400" />
              <a href="mailto:dulanijayakody596@gmail.com" className="hover:text-purple-400 transition-colors">
                dulanijayakody596@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-purple-400" />
              <a href="tel:+94711960738" className="hover:text-purple-400 transition-colors">
                +94 71 1960738
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-purple-400" />
              <span>Horana, Sri Lanka</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 flex-wrap opacity-0 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-110 shadow-lg hover:shadow-2xl shadow-purple-500/50 group"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="relative overflow-hidden border-2 border-purple-400 hover:bg-purple-400/20 px-8 py-4 rounded-full font-semibold transition-all hover:shadow-2xl shadow-purple-500/50 group"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-purple-400/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
        </div>
        
        <div className="flex justify-center gap-6 mt-12 opacity-0 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          <a href="https://github.com/Dj0083" target="_blank" rel="noopener noreferrer" 
             className="hover:text-purple-400 transition-all transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
            <Github size={32} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
             className="hover:text-purple-400 transition-all transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
            <Linkedin size={32} />
          </a>
          <a href="mailto:dulanijayakody596@gmail.com" 
             className="hover:text-purple-400 transition-all transform hover:scale-125 hover:-translate-y-2 hover:rotate-12">
            <Mail size={32} />
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown size={32} className="text-purple-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;