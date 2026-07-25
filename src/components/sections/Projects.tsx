import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Tag } from '@/components/ui/Tag';
import { ProjectCard } from '@/components/project/ProjectCard';
import { ProjectModal } from '@/components/project/ProjectModal';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

const CATEGORIES = ['All', 'Web', 'Mobile', 'Full Stack'] as const;

export function Projects() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've actually shipped."
          description="Four builds spanning real-time systems, mobile, e-commerce, and dashboards — each one end to end."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
            <div className="flex flex-wrap gap-2.5">
              {CATEGORIES.map((cat) => (
                <Tag key={cat} active={category === cat} onClick={() => setCategory(cat)}>
                  {cat}
                </Tag>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or tech…"
                className="w-full bg-surface border border-line rounded-full pl-9 pr-4 py-2.5 text-sm text-text placeholder:text-muted focus:border-accent outline-none transition-colors duration-200"
              />
            </div>
          </div>
        </Reveal>

        <motion.div layout className="mt-10 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} onOpen={() => setActive(project)} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted text-sm py-16 font-mono">
            No projects match "{query}" — try a different search.
          </p>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
