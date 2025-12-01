import { Code2, Database, Smartphone, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Smartphone size={32} />,
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Middleware', 'Error Handling'],
    color: 'from-cyan-400 to-blue-500'
  },
  {
    icon: <Code2 size={32} />,
    title: 'Web Development Basics',
    skills: ['HTML', 'CSS', 'JavaScript', 'EJS / Handlebars', 'React.js', 'Form Validation'],
    color: 'from-blue-400 to-purple-500'
  },
  {
    icon: <Database size={32} />,
    title: 'Backend & Database',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'WebSocket', 'Real-time Chat', 'REST APIs'],
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: <Zap size={32} />,
    title: 'DevOps & Tools',
    skills: ['Server Management', 'Linux', 'Git', 'Privacy & Security', 'Deployment', 'Database Admin'],
    color: 'from-pink-400 to-red-500'
  }
];

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(skillCategories.length).fill(false));
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 150);
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
    <section id="skills" className="min-h-screen py-20 px-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">
          Technologies and tools I work with daily
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all hover:shadow-2xl group h-full">
                <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform`}>
                  <div className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">
                  {category.title}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-slate-800/50 rounded-lg px-4 py-3 text-slate-300 text-center hover:bg-slate-800 transition-all hover:scale-105 hover:text-white border border-slate-700/50 hover:border-slate-600"
                      style={{
                        animationDelay: `${skillIndex * 50}ms`
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Continuous Learning
          </h3>
          <p className="text-slate-300 text-center max-w-3xl mx-auto leading-relaxed">
            I'm constantly expanding my skill set by exploring new backend technologies, following industry best practices, and improving application performance and security. Currently diving deeper into scalable Node.js architectures, real-time communication systems, and high-performance API and database optimization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
