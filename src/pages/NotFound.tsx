import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { AmbientBackground } from '@/components/ui/AmbientBackground';

export function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <AmbientBackground />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative glass rounded-2xl p-8 max-w-md w-full text-center"
      >
        <p className="font-mono text-xs text-accent tracking-[0.25em] uppercase mb-4">
          Error 404
        </p>
        <div className="font-mono text-left text-sm text-muted bg-surface rounded-xl p-4 mb-6 leading-relaxed">
          <p><span className="text-accent">❯</span> resolve route --path="{typeof window !== 'undefined' ? window.location.pathname : ''}"</p>
          <p className="text-warn mt-1">✗ route not found</p>
          <p className="mt-1">❯ redirecting to a known route is recommended</p>
        </div>
        <p className="text-text font-display text-xl font-semibold mb-2">
          This page didn't compile.
        </p>
        <p className="text-muted text-sm mb-6">
          The route you followed doesn't exist. Let's get you back somewhere real.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-primary text-white hover:bg-primary-soft transition-colors duration-200"
        >
          <ArrowLeft size={15} /> Back to home
        </Link>
      </motion.div>
    </section>
  );
}
