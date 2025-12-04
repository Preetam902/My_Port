import { Github, Linkedin, Mail, MapPin, Send, Phone, Globe, Calendar } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="group-hover:scale-110 transition-transform" size={22} />,
      label: 'Email Address',
      value: 'preetamsharmawps@gmail.com',
      href: 'mailto:preetamsharmawps@gmail.com',
      color: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/25'
    },
    {
      icon: <MapPin className="group-hover:scale-110 transition-transform" size={22} />,
      label: 'Location',
      value: 'Jaipur, Rajasthan, India',
      href: null,
      color: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/25'
    },
    {
      icon: <Github className="group-hover:scale-110 transition-transform" size={22} />,
      label: 'GitHub Profile',
      value: '@Developer-Preetam',
      href: 'https://github.com/Developer-Preetam',
      color: 'from-gray-700 to-gray-900',
      glow: 'shadow-gray-500/25'
    },
    {
      icon: <Linkedin className="group-hover:scale-110 transition-transform" size={22} />,
      label: 'LinkedIn',
      value: '@preetam701',
      href: 'https://www.linkedin.com/in/preetam701',
      color: 'from-blue-600 to-blue-800',
      glow: 'shadow-blue-500/25'
    },
    {
      icon: <Globe className="group-hover:scale-110 transition-transform" size={22} />,
      label: 'Availability',
      value: 'Open to Opportunities',
      href: null,
      color: 'from-emerald-500 to-green-500',
      glow: 'shadow-emerald-500/25'
    },
    {
      icon: <Calendar className="group-hover:scale-110 transition-transform" size={22} />,
      label: 'Response Time',
      value: 'Within 24 Hours',
      href: null,
      color: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/25'
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black z-0" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(34, 211, 238, 0.5)' : 
                i % 3 === 1 ? 'rgba(59, 130, 246, 0.5)' : 
                'rgba(168, 85, 247, 0.5)'
              }, transparent)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Let's Connect
              </span>
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm" />
          </div>
          
          <p className="text-2xl text-slate-300 mt-8 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's create something 
            <span className="text-cyan-400 font-semibold mx-2">extraordinary</span>
            together
          </p>
          
          {/* Animated CTA Badge */}
          <div className="inline-flex items-center gap-3 mt-8 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full group">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 font-medium">Available for freelance & full-time positions</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Left Column - Contact Cards */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl">
                  <Mail size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                  <p className="text-slate-400">Multiple ways to reach out</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`group relative p-5 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 ${info.glow} hover:shadow-xl`}
                  >
                    {/* Corner accent */}
                    <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-br ${info.color} rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} mb-4`}>
                        {info.icon}
                      </div>
                      <p className="text-slate-400 text-sm mb-2 font-medium">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="block text-white hover:text-cyan-300 transition-colors text-lg font-medium truncate"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-lg font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="glass-card p-8 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20">
              <h4 className="text-xl font-bold text-white mb-6">Quick Stats</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">24h</div>
                  <div className="text-sm text-slate-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-sm text-slate-400">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">10+</div>
                  <div className="text-sm text-slate-400">Projects Done</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-30" />
                <div className="relative p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl">
                  <Send size={28} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                <p className="text-slate-400">I'll respond as soon as possible</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Name Field */}
              <div className="relative group">
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-3 transition-all ${
                    activeField === 'name' ? 'text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  Your Name
                </label>
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity ${
                    activeField === 'name' ? 'opacity-40' : ''
                  }`} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    required
                    className="relative w-full px-5 py-4 bg-slate-900/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all backdrop-blur-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-3 transition-all ${
                    activeField === 'email' ? 'text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity ${
                    activeField === 'email' ? 'opacity-40' : ''
                  }`} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    required
                    className="relative w-full px-5 py-4 bg-slate-900/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all backdrop-blur-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative group">
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-3 transition-all ${
                    activeField === 'message' ? 'text-cyan-400' : 'text-slate-400'
                  }`}
                >
                  Your Message
                </label>
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity ${
                    activeField === 'message' ? 'opacity-40' : ''
                  }`} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    required
                    rows={6}
                    className="relative w-full px-5 py-4 bg-slate-900/80 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all resize-none backdrop-blur-sm"
                    placeholder="Tell me about your project, timeline, and budget..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {/* Button Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                <div className="absolute inset-[1px] rounded-xl bg-slate-950" />
                
                {/* Button Content */}
                <div className="relative flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="font-bold text-lg text-white">Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={22} className="text-white group-hover:translate-x-1 transition-transform" />
                      <span className="font-bold text-lg text-white">Send Message</span>
                      <div className="absolute right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                        <Send size={18} className="text-white" />
                      </div>
                    </>
                  )}
                </div>
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="animate-fadeIn">
                  <div className="p-5 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <div className="w-5 h-5 bg-emerald-400 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-emerald-300">Message Sent Successfully!</p>
                        <p className="text-emerald-400/80 text-sm mt-1">I'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                PREETAM SHARMA
              </p>
              <p className="text-slate-500 mt-2">Node.js Developer • JavaScript</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Developer-Preetam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
              >
                <Github size={20} className="text-slate-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/preetam701"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800 transition-all group"
              >
                <Linkedin size={20} className="text-slate-400 group-hover:text-white" />
              </a>
              <a
                href="mailto:preetamsharmawps@gmail.com"
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group"
              >
                <Mail size={20} className="text-slate-400 group-hover:text-white" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-500">&copy; {new Date().getFullYear()} All rights reserved.</p>
              <p className="text-sm text-slate-600 mt-1">Built with passion in India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add to your global CSS */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .glass-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Contact;