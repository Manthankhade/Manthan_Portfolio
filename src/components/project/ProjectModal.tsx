import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative glass rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          >
            <div
              className="h-32 flex items-center justify-between px-6"
              style={{ background: `linear-gradient(135deg, ${project.accent}30, transparent 80%)` }}
            >
              <h3
                className="font-display text-2xl sm:text-3xl font-semibold"
                style={{ color: project.accent }}
              >
                {project.title}
              </h3>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-text hover:border-accent transition-colors duration-200 shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] uppercase tracking-wide text-muted border border-line rounded-full px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">
                  Overview
                </p>
                <p className="text-muted leading-relaxed text-sm">{project.overview}</p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">
                  Features
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <CheckCircle2 size={15} className="text-good mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">
                  Architecture
                </p>
                <p className="text-muted leading-relaxed text-sm">{project.architecture}</p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">
                  Challenges
                </p>
                <p className="text-muted leading-relaxed text-sm">{project.challenges}</p>
              </div>

              <div className="flex gap-3 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium border border-line text-text hover:border-accent hover:text-accent transition-colors duration-200"
                  >
                    <FaGithub size={15} /> Source
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium bg-primary text-white hover:bg-primary-soft transition-colors duration-200"
                  >
                    <ExternalLink size={15} /> Live demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
