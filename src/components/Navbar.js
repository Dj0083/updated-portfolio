import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection, scrollToSection, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['home', 'about', 'education', 'projects', 'skills', 'certifications', 'references', 'contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
            DJ
          </div>
          
          <div className="hidden md:flex space-x-6">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize relative group transition-all duration-300 text-sm ${activeSection === section ? 'text-purple-400' : 'text-gray-300'}`}
              >
                {section}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full ${activeSection === section ? 'w-full' : ''}`}></span>
              </button>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((section) => (
              <button
                key={section}
                onClick={() => { scrollToSection(section); setIsMenuOpen(false); }}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-purple-900/50 rounded-lg transition-all"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;