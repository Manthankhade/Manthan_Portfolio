import { useEffect, useRef } from 'react';

/**
 * A quiet circuit-grid background with a soft glow that follows the
 * pointer. CSS-driven (no canvas/WebGL) so it stays cheap and reliable.
 */
export function AmbientBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMove = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX - 260}px, ${e.clientY - 260}px, 0)`;
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg noise-fade opacity-70" />
      <div
        ref={glowRef}
        className="absolute w-[520px] h-[520px] rounded-full opacity-[0.12] blur-[90px] transition-transform duration-300 ease-out"
        style={{ background: 'radial-gradient(circle, var(--color-accent), transparent 70%)' }}
      />
      <div className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full bg-primary/10 blur-[110px]" />
    </div>
  );
}
