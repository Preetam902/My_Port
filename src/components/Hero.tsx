import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code, Cpu } from 'lucide-react';
import { useEffect, useState } from 'react';
import profileImage from '../assets/preetam.png'; // ✅ Correct import

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = "Node.js & JavaScript Specialist";

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    const typingInterval = setInterval(() => {
      if (textIndex < fullText.length) {
        setText(fullText.substring(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      } else {
        setTimeout(() => {
          setText('');
          setTextIndex(0);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [textIndex]);

  const scrollToNext = () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // If resume is in public folder
    const resumeUrl = '/PREETAM NODEJS.pdf.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Preetam_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black px-4 pt-20"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(34, 211, 238, 0.1)' : 
                i % 3 === 1 ? 'rgba(59, 130, 246, 0.1)' : 
                'rgba(168, 85, 247, 0.1)'
              }, transparent)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#4f4f4f2a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2a_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-cyan-300">Available for Opportunities</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  PREETAM
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  SHARMA
                </span>
              </h1>

              {/* Animated Title */}
              <div className="mb-6">
                <div className="text-2xl md:text-3xl font-semibold text-slate-300 mb-2 h-12 flex items-center">
                  {text}
                  <span className="inline-block w-[2px] h-6 bg-cyan-400 ml-1 animate-pulse"></span>
                </div>
                <p className="text-slate-400 text-lg">
                  1+ Years Experience | Full Stack Developer
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
                I build high-performance backend systems and scalable applications with 
                <span className="text-cyan-400 font-medium"> Node.js</span>. Passionate about creating 
                <span className="text-blue-400 font-medium"> efficient APIs</span>, 
                <span className="text-purple-400 font-medium"> clean architecture</span>, and 
                <span className="text-green-400 font-medium"> robust solutions</span>.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Code className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-sm text-slate-400">Projects</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Cpu className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-slate-400">Efficiency</div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="#contact"
                  className="group relative px-8 py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2 font-semibold text-white">
                    <Mail size={18} />
                    Get In Touch
                  </span>
                </a>
                
                <a
                  href="#projects"
                  className="group relative px-8 py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-cyan-500/50"
                >
                  <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" />
                  <span className="relative flex items-center gap-2 font-semibold text-slate-300 group-hover:text-white">
                    View Projects
                    <ArrowDown size={18} className="group-hover:animate-bounce" />
                  </span>
                </a>
                
                <button
                  onClick={handleResumeDownload}
                  className="group relative px-8 py-3 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2 font-semibold text-white">
                    <Download size={18} className="group-hover:animate-bounce" />
                    Resume
                  </span>
                </button>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                {/* Outer glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-xl opacity-50" />
                
                {/* Inner border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-75" />
                
                {/* Image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-900 bg-gradient-to-br from-slate-800 to-slate-900 p-1">
                  <img 
                    src={profileImage}
                    alt="Preetam Sharma" 
                    className="w-full h-full rounded-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: 'center top' }}
                    onError={(e) => {
                      console.error("Image failed to load:", e.currentTarget.src);
                      e.currentTarget.src = "Hello";
                    }}
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-ping" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                <Sparkles className="absolute -top-6 -right-6 text-yellow-400 animate-pulse" size={24} />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-12">
            <a
              href="https://github.com/Developer-Preetam"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl" />
              <Github size={22} className="relative text-slate-300 group-hover:text-white" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/preetam701"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-blue-900/30 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl" />
              <Linkedin size={22} className="relative text-slate-300 group-hover:text-white" />
            </a>
            
            <a
              href="mailto:preetamsharmawps@gmail.com"
              className="group relative p-4 rounded-xl backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-cyan-900/30 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl" />
              <Mail size={22} className="relative text-slate-300 group-hover:text-white" />
            </a>
            
            <button
              onClick={handleResumeDownload}
              className="group relative p-4 rounded-xl backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-900/30 hover:shadow-lg hover:shadow-emerald-500/30"
              title="Download Resume"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl" />
              <Download size={22} className="relative text-slate-300 group-hover:text-emerald-400 group-hover:animate-bounce" />
            </button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 group"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-slate-500 group-hover:text-cyan-400 transition-colors">
              Explore More
            </span>
            <div className="w-10 h-16 rounded-full border-2 border-slate-700/50 flex justify-center p-2 group-hover:border-cyan-500 transition-colors">
              <div className="w-2 h-4 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full animate-bounce" />
            </div>
          </div>
        </button>
      </div>

      {/* Add these styles to your global CSS file (index.css) */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .glass-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Hero;