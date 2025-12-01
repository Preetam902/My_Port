import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400/20 rounded-full animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            MD Atiqur Rahman
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Fullstack Developer | React Native & Web Specialist | 2+ Years Experience
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Crafting seamless mobile and web experiences with modern technologies.
            Passionate about clean code, beautiful UI, and performance optimization.
          </p>
          
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img 
                src="/src/assets/Gemini_Generated_Image_di9lwndi9lwndi9l.png" 
                alt="MD Atiqur Rahman" 
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-center border-4 border-slate-800 group-hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>

          <div className="flex gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-slate-700 rounded-full font-semibold hover:bg-slate-800 transition-all transform hover:scale-105"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/atiqaz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahman-atiqur-atiq"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:atiqur.mdrahaman@gmail.com"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowDown size={32} />
          
        </button>
      </div>
    </section>
  );
};

export default Hero;
