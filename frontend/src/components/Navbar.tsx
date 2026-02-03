import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mic } from 'lucide-react';
import clsx from 'clsx';

export type NavSection = 'overview' | 'features' | 'how-it-works' | 'users' | 'demo';

interface NavbarProps {
  onNavigate: (section: NavSection) => void;
  activeSection: NavSection | null;
}

const LINKS: { id: NavSection; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'users', label: 'Use Cases' },
  { id: 'demo', label: 'Live Demo' },
];

export function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: NavSection) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen ? "bg-surface/90 backdrop-blur-lg border-b border-white/10 shadow-lg" : "bg-transparent py-4"
      )}
      aria-label="Main navigation"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a
          href="#overview"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('overview');
          }}
          className="flex items-center gap-2 text-xl font-bold text-white hover:text-accentBright transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-2 py-1"
          aria-label="Go to overview"
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <Mic className="w-5 h-5 text-white" />
          </div>
          <span>VoiceAuto</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavClick(id)}
                className={clsx(
                  "relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeSection === id 
                    ? "text-white bg-white/10" 
                    : "text-textMuted hover:text-white hover:bg-white/5"
                )}
                aria-current={activeSection === id ? 'true' : undefined}
              >
                {label}
                {activeSection === id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full border border-white/10 bg-white/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-textMuted hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-surface/95 backdrop-blur-xl border-b border-white/10"
          >
            <ul className="flex flex-col p-4 gap-2">
              {LINKS.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className={clsx(
                      "w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      activeSection === id 
                        ? "bg-accent/20 text-accentBright" 
                        : "text-textMuted hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
