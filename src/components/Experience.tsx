import { Briefcase, Calendar } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Backend Developer & Server Management',
    company: 'FzeeTechz Pvt Ltd, Jaipur',
    period: 'May 2025 - Present',
    description: [
      'Developing scalable backend applications using Node.js and Express',
      'Managing server infrastructure and deployment processes',
      'Building secure and lightning-fast REST APIs for web and mobile apps',
      'Integrating databases and optimizing queries with MongoDB',
      // 'Working on matrimonial platform (ApnaShathi) - complete backend and mobile app development'
    ],
    technologies: ['Node.js', 'React.js', 'Express', 'MongoDB', 'Git', 'Web Services', 'Server Management']
  },
  {
    title: 'FullStack Developer Intern',
    company: 'Technoglobe, Jaipur',
    period: 'Nov 2024 - May-2025',
    description: [
      'Gained hands-on experience in full-stack web development',
      'Built responsive applications using HTML, CSS, JavaScript, and React.js',
      'Collaborated with senior developers on backend API and UI projects',
      'Learned industry best practices & coding standards'

    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Git', 'Node.js']
  }
];

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(experiences.length).fill(false));
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
        { threshold: 0.2 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Experience
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">
          My professional journey in software development
        </p>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative transition-all duration-1000 ${
                  visibleItems[index]
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`
                }`}
              >
                <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2" />

                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full -translate-x-[7px] border-4 border-slate-950 shadow-lg shadow-cyan-500/50 animate-pulse" style={{ top: '24px' }} />

                  <div className="md:w-1/2 pl-16 md:pl-0">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                          <Briefcase className="text-cyan-400" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-cyan-400 font-semibold mb-2">
                            {exp.company}
                          </p>
                          <div className="flex items-center gap-2 text-slate-400 text-sm">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-slate-300 flex gap-2">
                            <span className="text-cyan-400 mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-sm border border-slate-700 hover:border-cyan-500/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
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
