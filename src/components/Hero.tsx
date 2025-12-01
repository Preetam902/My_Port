import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import resume from '../public/PREETAM NODEJS.pdf.pdf'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to handle resume download
  const handleResumeDownload = () => {
    // Replace this with your actual resume file path
    const resumeUrl = resume; // Make sure to put your resume file in public folder
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Preetam_Sharma_Resume.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            PREETAM SHARMA
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Backend Developer | Node.js & javascript Specialist | 0-1 Years Experience
          </p>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Crafting scalable backend architectures with Node.js and modern technologies. Passionate about clean code, secure APIs, and high-performance server optimization.
          </p>
          
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <img 
                src="/src/assets/preetam.png" 
                alt="Preetam Sharma" 
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-center border-4 border-slate-800 group-hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: 'center top' }}
              />
            </div>
          </div>

          {/* Updated buttons section with resume download */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
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
            
            {/* Resume Download Button */}
            
          </div>

          {/* Social links with added resume icon */}
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Developer-Preetam"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
              title="My Github"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/preetam701"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
              title="My Linkdin"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:preetamsharmawps@gmail.com"
              className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
              title="Contact: preetamsharmawps@gmail.com"
            >
              <Mail size={24} />
            </a>
            
            {/* Resume download icon in social links */}
            <button
              onClick={handleResumeDownload}
              className="group p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-all transform hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30"
              title="Download Resume"
            >
              <Download size={24} className="group-hover:animate-bounce" />
            </button>
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