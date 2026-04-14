import { motion } from 'motion/react';
import { Shield, Lock, Eye, Server, Activity, AlertTriangle, Bug, FileWarning, CheckCircle2, Users, ShieldCheck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.1)_0%,rgba(5,5,5,1)_60%)]"></div>
          {/* Grid background */}
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(34, 34, 34, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 34, 34, 0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Stay Safe in the </span>
              <br className="hidden md:block" />
              <span className="cyber-glitch-text text-[var(--color-cyber-accent)]" data-text="Digital World">Digital World</span>
            </h1>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              We provide advanced cyber security solutions to protect your data, privacy, and online identity from modern threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard" className="cyber-button-solid px-8 py-4 rounded font-bold tracking-widest">
                Get Started
              </Link>
              <button className="cyber-button px-8 py-4 rounded font-bold tracking-widest">
                Check Your Security
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, value: '10,000+', label: 'Users Protected' },
              { icon: ShieldCheck, value: '500+', label: 'Attacks Prevented' },
              { icon: Activity, value: '99.9%', label: 'Security Uptime' },
              { icon: Clock, value: '24/7', label: 'Monitoring' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center p-4"
              >
                <stat.icon className="h-8 w-8 text-[var(--color-cyber-accent)] mb-4" />
                <div className="text-3xl font-mono font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                About <span className="text-[var(--color-cyber-accent)]">CyberShield</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                CyberShield Security is a modern cyber security company focused on protecting individuals and businesses from digital threats.
              </p>
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">We specialize in:</h3>
                <ul className="space-y-3">
                  {['Data protection', 'Threat detection', 'Security awareness'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-[var(--color-cyber-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border border-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent-glow)] rounded-lg">
                <h3 className="text-[var(--color-cyber-accent)] font-bold mb-2 uppercase tracking-wider text-sm">Our Mission</h3>
                <p className="text-white text-lg italic">"To make the internet a safer place for everyone."</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-full border border-[var(--color-cyber-border)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,65,0.05)_0%,transparent_70%)]"></div>
                <Shield className="h-48 w-48 text-[var(--color-cyber-accent)] opacity-80" />
                {/* Decorative elements */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[var(--color-cyber-accent)] rounded-full animate-ping"></div>
                <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[var(--color-cyber-accent)] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[var(--color-cyber-card)] border-y border-[var(--color-cyber-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive security solutions tailored for modern digital infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Server, title: 'Network Security', desc: 'Protect your network from hackers and unauthorized access.' },
              { icon: Bug, title: 'Ethical Hacking', desc: 'Find and fix vulnerabilities before attackers exploit them.' },
              { icon: Lock, title: 'Data Protection', desc: 'Secure sensitive information with encryption techniques.' },
              { icon: Shield, title: 'Web Security', desc: 'Protect websites from attacks like XSS and SQL injection.' },
              { icon: Eye, title: 'Security Monitoring', desc: '24/7 monitoring of systems to detect threats instantly.' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-8 rounded-xl hover:border-[var(--color-cyber-accent)] transition-colors group"
              >
                <service.icon className="h-10 w-10 text-[var(--color-cyber-accent)] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threats & Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Threats */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                Common Cyber Threats
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Phishing Attack', desc: 'Fake emails stealing user data', icon: FileWarning },
                  { title: 'Malware', desc: 'Harmful software damaging system', icon: Bug },
                  { title: 'Ransomware', desc: 'Locks files and demands money', icon: Lock },
                ].map((threat, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-red-900/30 bg-red-950/10 rounded-lg">
                    <div className="p-2 bg-red-900/20 rounded text-red-500">
                      <threat.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{threat.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{threat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-[var(--color-cyber-accent)]" />
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Real-time protection',
                  'AI-based threat detection',
                  'Secure login system',
                  'Data encryption'
                ].map((feature, index) => (
                  <div key={index} className="p-6 glass-panel rounded-lg flex flex-col items-center text-center justify-center min-h-[120px]">
                    <CheckCircle2 className="h-6 w-6 text-[var(--color-cyber-accent)] mb-3" />
                    <span className="text-gray-300 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[var(--color-cyber-card)] border-t border-[var(--color-cyber-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { text: "CyberShield saved our business from a major cyber attack!", author: "Rahul Sharma" },
              { text: "Best security platform for beginners and professionals.", author: "Priya Verma" }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 glass-panel rounded-xl relative"
              >
                <div className="text-[var(--color-cyber-accent)] text-4xl absolute top-4 left-4 opacity-20">"</div>
                <p className="text-gray-300 text-lg italic mb-6 relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-cyber-border)] flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <span className="text-white font-medium">{testimonial.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
