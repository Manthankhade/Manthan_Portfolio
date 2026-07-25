import { useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Tag } from '@/components/ui/Tag';
import { skills, skillCategories } from '@/data/skills';

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} className="py-3">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-text font-medium">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-surface-2 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 0.9, delay: index * 0.04, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const [filter, setFilter] = useState<string>('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return skills;
    return skills.filter((s) => s.category === filter);
  }, [filter]);

  return (
    <section id="skills" className="relative py-28 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="The stack, categorized honestly."
          description="Proficiency reflects hands-on project use, not just exposure — organized the way I actually reach for these tools."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            <Tag active={filter === 'All'} onClick={() => setFilter('All')}>
              All
            </Tag>
            {skillCategories.map((cat) => (
              <Tag key={cat} active={filter === cat} onClick={() => setFilter(cat)}>
                {cat}
              </Tag>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-2 gap-x-12 gap-y-1">
          {filtered.map((skill, i) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
