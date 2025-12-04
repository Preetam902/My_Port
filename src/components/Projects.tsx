import { ExternalLink, Github, Sparkles, Eye, Code, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  category: string;
}

const projects: Project[] = [
  {
    title: 'APNASHATHI',
    description: 'A modern matrimonial platform with real-time video calling, AI-powered matching, and secure communication features for meaningful connections.',
    technologies: ['Node.js', 'Agora', 'WebSocket', 'MongoDB', 'Redis', 'JWT'],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2094&auto=format&fit=crop',
    highlights: ['Real-time video calling with Agora', 'AI-powered matchmaking algorithm', 'End-to-end encrypted messaging', 'Advanced profile verification system'],
    category: 'Full Stack Platform'
  },
  {
    title: 'DHANTAG',
    description: 'Comprehensive financial management dashboard with integrated payment gateway, utility bill payments, and real-time transaction tracking.',
    technologies: ['React', 'Node.js', 'Razorpay', 'MongoDB', 'Express', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop',
    highlights: ['Multi-utility payment processing', 'Real-time transaction monitoring', 'KYC verification system', 'Wallet & rewards management'],
    category: 'FinTech Solution'
  },
  {
    title: 'ALSAKHAA',
    description: 'Enterprise workflow automation platform with role-based access control, certificate generation, and project lifecycle management.',
    technologies: ['React', 'Express', 'MongoDB', 'RBAC', 'Cron Jobs', 'PDF Kit'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    highlights: ['Role-Based Access Control (RBAC)', 'Automated certificate generation', 'Real-time workflow monitoring', 'Customizable approval processes'],
    category: 'Enterprise SaaS'
  },
  {
    title: 'AUTONIX',
    description: 'Performance-based reward engine with automated rank progression, achievement tracking, and gamification features.',
    technologies: ['Node.js', 'MongoDB', 'Redis', 'JWT', 'Cron', 'SendGrid'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    highlights: ['Automated reward distribution', 'Multi-tier ranking system', 'Achievement tracking dashboard', 'Performance analytics'],
    category: 'Reward System'
  }
];

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(new Array(projects.length).fill(false));
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

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
              }, index * 150);
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400 font-medium">PORTFOLIO</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-x">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Building digital experiences that <span className="text-cyan-400 font-semibold">solve real problems</span> with cutting-edge technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800/50 border border-slate-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`transition-all duration-1000 ${
                visibleProjects[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Card */}
              <div className="group relative h-full">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/50 rounded-3xl overflow-hidden h-full hover:border-cyan-500/30 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm rounded-full text-sm font-medium text-cyan-400 border border-cyan-500/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-cyan-400" />
                          <span className="text-sm text-slate-400">{project.highlights.length} key features</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-400 mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.highlights.map((highlight, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-colors duration-300"
                          >
                            <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" />
                            <span className="text-sm text-slate-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-slate-400 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-gradient-to-br from-slate-800 to-slate-900 text-cyan-400 rounded-lg text-sm border border-slate-700 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4 border-t border-slate-800/50">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 group/btn relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                          <div className="relative flex items-center justify-center gap-2 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-transparent transition-all duration-300">
                            <Eye className="w-4 h-4 text-cyan-400 group-hover/btn:text-white" />
                            <span className="font-semibold group-hover/btn:text-white">Live Demo</span>
                          </div>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 group/btn relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                          <div className="relative flex items-center justify-center gap-2 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-transparent transition-all duration-300">
                            <Code className="w-4 h-4 text-slate-400 group-hover/btn:text-white" />
                            <span className="font-semibold group-hover/btn:text-white">View Code</span>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-slate-900/50 to-slate-950/50 rounded-2xl border border-slate-800/50 backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-2">Want to see more?</h3>
              <p className="text-slate-400">Check out my GitHub for more projects and contributions</p>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105"
            >
              Explore GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;