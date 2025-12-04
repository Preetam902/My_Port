import { Briefcase, Calendar, Cpu, Code } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Backend Developer & Server Management',
      company: 'FzeeTechz Pvt Ltd, Jaipur',
      period: 'May 2025 - Present',
      description: [
        'Developing scalable backend applications using Node.js and Express',
        'Managing server infrastructure and deployment processes',
        'Building secure and lightning-fast REST APIs for web and mobile apps',
        'Integrating databases and optimizing queries with MongoDB',
        'Working on high-performance applications with 99.9% uptime'
      ],
      technologies: ['Node.js', 'Express', 'MongoDB', 'AWS', 'Docker', 'REST API', 'Git', 'Nginx']
    },
    {
      title: 'FullStack Developer Intern',
      company: 'Technoglobe, Jaipur',
      period: 'Nov 2024 - May 2025',
      description: [
        'Gained hands-on experience in full-stack web development',
        'Built responsive applications using HTML, CSS, JavaScript, and React.js',
        'Collaborated with senior developers on backend API and UI projects',
        'Learned industry best practices & coding standards',
        'Contributed to multiple client projects'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Git', 'Redux', 'Tailwind']
    }
  ];

  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(experiences.length).fill(false));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="experience" className="relative min-h-screen py-20 px-4 md:px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#4f4f4f2a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2a_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative mb-4">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl" />
            <h2 className="relative text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          
          <p className="text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            My journey in building scalable applications and mastering modern technologies
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <Calendar className="text-emerald-400" size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">1+ Years</div>
                <div className="text-sm text-slate-400">Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <Briefcase className="text-cyan-400" size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-sm text-slate-400">Positions</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <Code className="text-purple-400" size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-slate-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />
          
          {/* Experience Items */}
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                className={`relative transition-all duration-1000 ease-out ${
                  visibleItems[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-0 md:left-1/2 w-6 h-6 -translate-x-3 bg-gradient-to-br from-slate-900 to-slate-950 rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/30 z-10" 
                  style={{ top: '40px' }}
                >
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${
                    index === 0 ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'
                  } transition-all duration-300 ${
                    activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`} />
                </div>

                {/* Content Card */}
                <div className={`relative ml-10 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:pr-12'
                }`}>
                  {/* Background Glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-br ${
                    index === 0 ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'
                  } rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Card */}
                  <div className="relative group">
                    {/* Card Decoration */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${
                      index === 0 ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'
                    } rounded-2xl blur opacity-30 group-hover:opacity-70 transition-all duration-500`} />
                    
                    <div className="relative bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-start gap-6 mb-6">
                        <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${
                          index === 0 ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'
                        } group-hover:scale-110 transition-transform duration-300`}>
                          {index === 0 ? (
                            <svg 
                              width="24" 
                              height="24" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              className="text-white"
                            >
                              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                              <line x1="6" y1="6" x2="6" y2="6"></line>
                              <line x1="6" y1="18" x2="6" y2="18"></line>
                            </svg>
                          ) : (
                            <Code className="text-white" size={24} />
                          )}
                          <div className={`absolute -inset-2 bg-gradient-to-br ${
                            index === 0 ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'
                          } rounded-2xl blur opacity-30`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                            <h3 className="text-2xl font-bold text-white">
                              {exp.title}
                            </h3>
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800/50 rounded-full text-sm text-cyan-300">
                              <Calendar size={14} />
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-3 mb-8">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className={`mt-1.5 p-1 rounded-full bg-gradient-to-br ${
                              index === 0 ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'
                            }`}>
                              <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            </div>
                            <span className="text-slate-300 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <Cpu size={20} className="text-slate-400" />
                          <span className="text-slate-400 font-medium">Technologies Used</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech, i) => (
                            <div
                              key={i}
                              className="relative group/tech"
                            >
                              <div className={`absolute -inset-0.5 bg-gradient-to-br ${
                                index === 0 ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'
                              } rounded-xl blur opacity-0 group-hover/tech:opacity-50 transition-opacity duration-300`} />
                              <span className="relative px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl text-slate-300 group-hover/tech:text-white transition-colors duration-300">
                                {tech}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mt-8 pt-6 border-t border-slate-800">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-slate-400">Experience Growth</span>
                          <span className="text-sm font-semibold text-cyan-400">Level</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${
                              index === 0 ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'
                            } rounded-full transition-all duration-1000`}
                            style={{ width: `${(1.8) * 50}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Line Extension */}
                  <div className={`absolute top-12 ${
                    index % 2 === 0 ? '-left-10' : '-right-10'
                  } w-10 h-px bg-gradient-to-r ${
                    index === 0 ? 'from-cyan-500 to-blue-500' : 'from-purple-500 to-pink-500'
                  } ${index % 2 === 0 ? 'to-transparent' : 'from-transparent'}`} />
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Experience;