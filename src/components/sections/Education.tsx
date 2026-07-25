import { GraduationCap, Award, Trophy } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { education, certificates, achievements } from '@/data/education';

function EmptyState({ text }: { text: string }) {
  return (
    <div className="border border-dashed border-line rounded-2xl p-6 text-center">
      <p className="text-sm text-muted font-mono">{text}</p>
    </div>
  );
}

export function Education() {
  return (
    <section id="education" className="relative py-28 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education & Growth" title="Foundation, credentials, and wins." />

        <div className="mt-14 grid lg:grid-cols-3 gap-10">
          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={17} className="text-accent" />
              <p className="font-display font-medium text-text">Education</p>
            </div>
            <div className="space-y-4">
              {education.map((item, i) => (
                <Reveal key={item.institution} delay={i * 0.08}>
                  <div className="glass rounded-2xl p-5 border-l-2 border-l-primary">
                    <p className="font-medium text-text text-sm">{item.degree}</p>
                    <p className="text-muted text-sm mt-1">{item.institution}</p>
                    <p className="font-mono text-[11px] text-accent mt-2">{item.period}</p>
                    <p className="text-muted text-xs mt-3 leading-relaxed">{item.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Award size={17} className="text-accent" />
              <p className="font-display font-medium text-text">Certificates</p>
            </div>
            {certificates.length === 0 ? (
              <EmptyState text="No certificates added yet — this section updates as they're earned." />
            ) : (
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div key={cert.title} className="glass rounded-2xl p-5">
                    <p className="font-medium text-text text-sm">{cert.title}</p>
                    <p className="text-muted text-xs mt-1">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Trophy size={17} className="text-accent" />
              <p className="font-display font-medium text-text">Achievements</p>
            </div>
            {achievements.length === 0 ? (
              <EmptyState text="No achievements added yet — this section updates as they're earned." />
            ) : (
              <div className="space-y-4">
                {achievements.map((item) => (
                  <div key={item.title} className="glass rounded-2xl p-5">
                    <p className="font-medium text-text text-sm">{item.title}</p>
                    <p className="text-muted text-xs mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
