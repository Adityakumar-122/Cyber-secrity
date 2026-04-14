import { Shield, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-cyber-border)] bg-[var(--color-cyber-card)] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-[var(--color-cyber-accent)]" />
              <span className="font-bold text-lg tracking-wider text-white">
                CYBER<span className="text-[var(--color-cyber-accent)]">SHIELD</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Protecting Your Digital World 24/7. We provide advanced cyber security solutions to protect your data, privacy, and online identity from modern threats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[var(--color-cyber-accent)] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-cyber-accent)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-cyber-accent)] transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[var(--color-cyber-accent)] transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[var(--color-cyber-accent)] transition-colors text-sm">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-[var(--color-cyber-accent)] transition-colors text-sm">Services</a></li>
              <li><a href="/dashboard" className="text-gray-400 hover:text-[var(--color-cyber-accent)] transition-colors text-sm">User Panel</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-[var(--color-cyber-accent)]" />
                support@cybershield.com
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4 text-[var(--color-cyber-accent)]" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-[var(--color-cyber-accent)]" />
                India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[var(--color-cyber-border)] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CyberShield Security Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
