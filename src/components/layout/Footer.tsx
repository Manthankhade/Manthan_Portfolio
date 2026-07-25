import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '@/data/profile';

const QUICK_LINKS = ['About', 'Skills', 'Projects', 'Education', 'Contact'];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-line mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-semibold text-lg text-text">{profile.name}</p>
          <p className="text-muted text-sm mt-2 leading-relaxed max-w-xs">
            {profile.summary}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-4">
            Quick links
          </p>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() =>
                    document
                      .getElementById(link.toLowerCase())
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-sm text-muted hover:text-accent transition-colors duration-200"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-4">
            Elsewhere
          </p>
          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors duration-200"
            >
              <FaGithub size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors duration-200"
            >
              <FaLinkedin size={17} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors duration-200"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <p className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} {profile.name}. Built from scratch.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors duration-200"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
