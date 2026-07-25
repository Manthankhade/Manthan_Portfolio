import { Reveal } from '@/components/ui/Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}>
      <Reveal>
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-3">
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-text tracking-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className="mt-4 text-muted leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
