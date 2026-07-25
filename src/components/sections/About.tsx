import { Code2, Smartphone, Server, GraduationCap } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { profile } from '@/data/profile';

const PILLARS = [
  {
    icon: Code2,
    title: 'Web Development',
    detail: 'React and TypeScript front ends, built component-first and shipped responsive by default.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    detail: 'React Native + Expo apps that reuse the same product thinking as the web, tuned for touch.',
  },
  {
    icon: Server,
    title: 'Full Stack Systems',
    detail: 'Node.js and Express APIs backed by MongoDB or Firebase, with auth done properly — JWT and bcrypt, not shortcuts.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Studying computer science. Shipping real products."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_0.85fr] gap-14 items-start">
          <Reveal>
            <div className="space-y-5 text-muted leading-relaxed text-base sm:text-lg">
              <p>
                I'm {profile.name}, a third-year Computer Science student at PICT, Pune. What
                pulled me into engineering wasn't the theory — it was the moment a project I
                built started responding to a second person in real time, over a socket
                connection I'd wired up myself.
              </p>
              <p>
                Since then most of what I build sits at that intersection: real-time systems,
                clean auth, and interfaces that feel considered rather than assembled. I've
                worked across the stack — React and React Native on the front, Node and
                Express behind it, MongoDB or Firebase underneath — because shipping something
                end to end is the fastest way to actually understand it.
              </p>
              <p>
                I'm currently looking for Software Development, React Native, Frontend, Full
                Stack, and Mobile Application Developer roles where I can keep building things
                people actually use.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-5 flex gap-4 items-start glow-border">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-accent">
                    <pillar.icon size={19} />
                  </div>
                  <div>
                    <p className="font-display font-medium text-text">{pillar.title}</p>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{pillar.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <div className="glass rounded-2xl p-5 flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-accent">
                  <GraduationCap size={19} />
                </div>
                <div>
                  <p className="font-display font-medium text-text">B.E. Computer Science</p>
                  <p className="text-sm text-muted mt-1 leading-relaxed">
                    Pune Institute of Computer Technology (PICT) — currently in third year.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
