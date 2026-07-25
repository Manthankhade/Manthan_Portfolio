import { Suspense, lazy } from 'react';
import { Hero } from '@/components/sections/Hero';

// Hero renders eagerly (it's the first paint); everything below the fold
// is code-split so the initial bundle stays small.
const About = lazy(() => import('@/components/sections/About').then((m) => ({ default: m.About })));
const Skills = lazy(() => import('@/components/sections/Skills').then((m) => ({ default: m.Skills })));
const Projects = lazy(() => import('@/components/sections/Projects').then((m) => ({ default: m.Projects })));
const Education = lazy(() => import('@/components/sections/Education').then((m) => ({ default: m.Education })));
const GithubStats = lazy(() => import('@/components/sections/GithubStats').then((m) => ({ default: m.GithubStats })));
const Contact = lazy(() => import('@/components/sections/Contact').then((m) => ({ default: m.Contact })));

function SectionFallback() {
  return <div className="py-28" aria-hidden="true" />;
}

export function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Skills />
        <Projects />
        <Education />
        <GithubStats />
        <Contact />
      </Suspense>
    </>
  );
}
