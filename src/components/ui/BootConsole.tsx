import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BootLine {
  text: string;
  status?: 'ok' | 'pending';
}

const LINES: BootLine[] = [
  { text: 'booting profile.tsx' },
  { text: 'loading stack: react, node, mongodb, react-native' },
  { text: 'connecting socket.io … ok', status: 'ok' },
  { text: 'auth: jwt + bcrypt … verified', status: 'ok' },
  { text: 'compiling manthan_khade.dev' },
];

/**
 * The page's signature moment: a compiler-style boot log that types itself
 * out line by line, then resolves into a "ready" state — a nod to what
 * this person actually builds, rather than a generic stat block.
 */
export function BootConsole() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisibleLines(LINES.length);
      setReady(true);
      return;
    }

    if (visibleLines < LINES.length) {
      const t = setTimeout(() => setVisibleLines((n) => n + 1), 420);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setReady(true), 350);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="glass rounded-2xl p-5 font-mono text-[13px] leading-6 w-full max-w-md">
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-muted text-[11px]">status.sh</span>
      </div>

      <div className="min-h-[132px]">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <motion.p
            key={line.text}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="text-muted"
          >
            <span className="text-accent">❯</span> {line.text}
            {line.status === 'ok' && <span className="text-good"> ✓</span>}
            {i === visibleLines - 1 && !ready && (
              <span className="inline-block w-1.5 h-3.5 bg-accent ml-1 align-middle animate-pulse" />
            )}
          </motion.p>
        ))}

        {ready && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-good mt-1"
          >
            <span className="text-accent">❯</span> build ready — 0 errors
            <span className="inline-block w-1.5 h-3.5 bg-accent ml-1 align-middle animate-pulse" />
          </motion.p>
        )}
      </div>
    </div>
  );
}
