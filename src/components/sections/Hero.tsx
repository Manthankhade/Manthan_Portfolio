import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTypewriter } from '@/hooks/useTypewriter';
import { profile } from '@/data/profile';
import { AmbientBackground } from '@/components/ui/AmbientBackground';
import { BootConsole } from '@/components/ui/BootConsole';
import { StatsRow } from '@/components/sections/StatsRow';

export function Hero() {
  const role = useTypewriter({ words: profile.roles });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <AmbientBackground />

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-5 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-good animate-pulse" />
              Open to Software / React Native / Full Stack roles
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-display font-semibold text-5xl sm:text-6xl lg:text-[3.6rem] leading-[1.05] text-text tracking-tight"
            >
              {profile.name.split(' ')[0]}{' '}
              <span className="text-gradient">{profile.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-4 h-8 font-mono text-lg sm:text-xl text-muted"
            >
              <span className="text-text">{role}</span>
              <span className="inline-block w-2 h-5 bg-accent ml-1 align-middle animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-xl"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium bg-primary text-white hover:bg-primary-soft transition-colors duration-200 shadow-[0_8px_30px_-8px_rgba(37,99,235,0.6)]"
              >
                View Projects <ArrowRight size={15} />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium border border-line text-text hover:border-accent hover:text-accent transition-colors duration-200"
              >
                Download Resume <Download size={15} />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors duration-200"
              >
                <FaGithub size={17} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-colors duration-200"
              >
                <FaLinkedin size={17} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <BootConsole />
          </motion.div>
        </div>

        <StatsRow />
      </div>
    </section>
  );
}
