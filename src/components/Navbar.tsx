import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-[var(--color-cyber-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <Shield className="h-8 w-8 text-[var(--color-cyber-accent)] group-hover:animate-pulse" />
              <span className="font-bold text-xl tracking-wider text-white">
                CYBER<span className="text-[var(--color-cyber-accent)]">SHIELD</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent-glow)]'
                      : 'text-gray-300 hover:text-white hover:bg-[var(--color-cyber-border)]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/dashboard" className="cyber-button px-4 py-2 rounded">
                User Panel
              </Link>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[var(--color-cyber-border)] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel border-b border-[var(--color-cyber-border)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-[var(--color-cyber-accent)] bg-[var(--color-cyber-accent-glow)]'
                    : 'text-gray-300 hover:text-white hover:bg-[var(--color-cyber-border)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
