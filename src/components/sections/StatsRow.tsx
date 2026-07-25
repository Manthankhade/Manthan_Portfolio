import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { profile } from '@/data/profile';

function Stat({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const count = useCountUp(value, inView);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="font-display text-3xl sm:text-4xl font-semibold text-text">
        {count}
        <span className="text-accent">+</span>
      </p>
      <p className="text-xs text-muted mt-1 font-mono uppercase tracking-wide">{label}</p>
    </div>
  );
}

export function StatsRow() {
  return (
    <div className="mt-20 pt-8 border-t border-line grid grid-cols-2 sm:grid-cols-4 gap-8">
      {profile.stats.map((stat) => (
        <Stat key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </div>
  );
}
