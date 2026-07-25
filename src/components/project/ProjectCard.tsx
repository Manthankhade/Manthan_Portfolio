import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="group glass rounded-2xl overflow-hidden glow-border flex flex-col"
    >
      <button
        onClick={onOpen}
        className="relative h-44 w-full flex items-center justify-center overflow-hidden text-left"
        style={{
          background: `linear-gradient(135deg, ${project.accent}22, transparent 70%)`,
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />
        <span
          className="font-display font-semibold text-3xl tracking-tight relative z-10 transition-transform duration-300 group-hover:scale-105"
          style={{ color: project.accent }}
        >
          {project.title}
        </span>
      </button>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-display font-medium text-text">{project.title}</p>
            <p className="text-sm text-muted mt-1">{project.tagline}</p>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wide text-muted border border-line rounded-full px-2.5 py-1 shrink-0">
            {project.category}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] uppercase tracking-wide text-muted border border-line rounded-full px-2 py-1"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="font-mono text-[10px] text-muted px-2 py-1">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-line flex items-center justify-between">
          <button
            onClick={onOpen}
            className="text-sm text-accent font-medium inline-flex items-center gap-1 hover:gap-1.5 transition-all duration-200"
          >
            View details <ArrowUpRight size={14} />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="text-muted hover:text-text transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
