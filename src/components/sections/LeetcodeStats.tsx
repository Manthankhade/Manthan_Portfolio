import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { leetcodeStats, leetcodeTotal } from '@/data/leetcode';

function DifficultyBar({ difficulty, solved, color, index }: (typeof leetcodeStats)[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const percentage = (solved / leetcodeTotal) * 100;

  return (
    <div ref={ref} className="py-3">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-text font-medium">{difficulty}</span>
        <span className="font-mono text-xs text-muted">{solved} solved</span>
      </div>
      <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${percentage}%` : 0 }}
          transition={{ duration: 0.9, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>
    </div>
  );
}

export function LeetcodeStats() {
  return (
    <section id="leetcode" className="relative py-28 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="LeetCode"
          title="Problem solving, tracked by difficulty."
          description="A snapshot of the questions I've solved across the three core difficulty levels."
        />

        <Reveal delay={0.1}>
          <div className="mt-10 glass rounded-2xl p-6 sm:p-8 max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-accent">
                <Code2 size={19} />
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-text">{leetcodeTotal}</p>
                <p className="text-xs text-muted font-mono uppercase tracking-wide">Total solved</p>
              </div>
            </div>

            <div>
              {leetcodeStats.map((stat, index) => (
                <DifficultyBar key={stat.difficulty} {...stat} index={index} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}