import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-transparent backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-slate-800/50'
        : 'bg-transparent backdrop-blur-sm'
    }`}>
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <div className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="relative p-1">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-x">
              Preetam
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2 p-1 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-2.5 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {activeSection === item.id && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full" />
                  </>
                )}
                <span className="relative flex items-center gap-2">
                  {item.label}
                  {activeSection === item.id && (
                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-3 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isMenuOpen ? (
              <X className="relative w-5 h-5 text-cyan-400 transform transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="relative w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-slideDown">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/50 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
              {/* Menu background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
              
              <div className="relative p-4 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20'
                        : 'hover:bg-slate-800/50 hover:border-slate-700/50'
                    } border border-transparent`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-400/30'
                          : 'bg-slate-600 group-hover:bg-slate-500'
                      }`} />
                      <span className={`font-medium transition-colors duration-300 ${
                        activeSection === item.id
                          ? 'text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'
                          : 'text-slate-400 group-hover:text-white'
                      }`}>
                        {item.label}
                      </span>
                    </div>
                    
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    )}
                    
                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;