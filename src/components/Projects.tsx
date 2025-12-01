import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: 'APNASHATHI - Matrimonial Platform',
    description: 'Advanced matrimonial platform with video calling, real-time messaging, and comprehensive matching system.',
    technologies: ['Node.js', 'Agora APIs', 'WebSocket', 'MongoDB', 'Agora Calling', 'Real-time Chat'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Video calling with Agora', 'Real-time messaging with WebSocket', 'Advanced user matching', 'Complete backend & Server Deployment']
  },
  {
    title: 'DHANTAG – Finance & Utility Management',
    description: 'A financial dashboard managing wallet, utilities, orders, and KYC, Order creation, approval flow, and tracking API modules.',
    technologies: ['Node.js', 'User KYC', 'Payment Gateway', 'Order Buying', 'Cart System'],
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Utility workflows', 'Mobile Recharge', 'Bill Payments', 'Payment Gateway']
  },
  {
    title: 'ALSAKHAA – Workflow management',
    description: 'A workflow automation system for handling certificate creation, project assignments, and multi-role operational processes',
    technologies: ['RBAC', 'Node.js', 'Express', 'MongoDB', 'Cron Jobs'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Role-Based Access Control', 'Job Creation', 'Status Tracking', 'Real-time monitoring']
  },
  {
    title: 'AUTONIX – Team & Reward Engine',
    description: 'A structured, performance-based user reward platform',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Payment Gateway'],
    image: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Automated reward engine for rank', 'Cron jobs', 'Email services', 'Privacy & security focused']
  }
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(new Array(projects.length).fill(false));
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = projectRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleProjects((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 100);
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
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-slate-400 mb-16 text-lg">
          Showcase of my recent work and side projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`transition-all duration-700 ${
                visibleProjects[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/10 group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <span className="text-cyan-400">✓</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-sm border border-slate-700 hover:border-cyan-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all transform hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition-all transform hover:scale-105"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
