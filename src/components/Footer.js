import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 px-4 border-t border-slate-800 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm currently seeking internship opportunities to gain practical experience and contribute to innovative projects. 
            Feel free to reach out!
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/Dj0083" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-5 rounded-full transition-all transform hover:scale-125 hover:-translate-y-2 hover:rotate-12 hover:shadow-2xl shadow-purple-500/50 border border-slate-700 hover:border-transparent"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-slate-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-5 rounded-full transition-all transform hover:scale-125 hover:-translate-y-2 hover:rotate-12 hover:shadow-2xl shadow-purple-500/50 border border-slate-700 hover:border-transparent"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:dulanijayakody596@gmail.com" 
              className="bg-slate-800/50 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-5 rounded-full transition-all transform hover:scale-125 hover:-translate-y-2 hover:rotate-12 hover:shadow-2xl shadow-purple-500/50 border border-slate-700 hover:border-transparent"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p className="flex items-center gap-2">
              © {currentYear} Dulani Jayakody. Built with 
              <Heart size={16} className="text-pink-500 animate-pulse" /> 
              using React & Tailwind CSS
            </p>
            
            <div className="flex gap-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-purple-400 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-purple-400 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
          
          <p className="text-center text-xs text-gray-500 mt-4">
            Crafted with passion and purpose | Horana, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;