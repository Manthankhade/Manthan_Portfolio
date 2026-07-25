import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { profile } from '@/data/profile';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
            scrolled ? 'glass shadow-lg shadow-black/20' : ''
          }`}
        >
          <button
            onClick={() => goTo('home')}
            className="font-display font-semibold text-text tracking-tight flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/30 text-accent flex items-center justify-center text-xs font-mono">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`relative px-3.5 py-2 text-sm rounded-full transition-colors duration-200 ${
                  activeId === item.id ? 'text-text' : 'text-muted hover:text-text'
                }`}
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-surface-2 border border-line"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 text-sm font-medium rounded-full px-4 py-2 border border-line text-text hover:border-accent hover:text-accent transition-colors duration-200"
            >
              Resume <Download size={14} />
            </a>
          </div>

          <button
            className="md:hidden text-text p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden mx-6 mt-2"
          >
            <div className="glass rounded-2xl p-3 flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm ${
                    activeId === item.id ? 'text-accent bg-surface-2' : 'text-muted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
