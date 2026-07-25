import { BookMarked, Users, GitBranch } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { useGithubStats } from '@/hooks/useGithubStats';
import { profile } from '@/data/profile';

const username = profile.github.split('/').filter(Boolean).pop() ?? '';

export function GithubStats() {
  const { stats, loading } = useGithubStats(username);

  const items = [
    { icon: BookMarked, label: 'Public repos', value: stats?.public_repos },
    { icon: Users, label: 'Followers', value: stats?.followers },
    { icon: GitBranch, label: 'Following', value: stats?.following },
  ];

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="GitHub" title="Live from GitHub." align="center" />

        <Reveal delay={0.1}>
          <div className="mt-10 glass rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <FaGithub size={18} className="text-accent" />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-muted hover:text-accent transition-colors duration-200"
              >
                github.com/{username}
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {items.map((item) => (
                <div key={item.label} className="text-center">
                  <item.icon size={18} className="text-accent mx-auto mb-2" />
                  <p className="font-display text-2xl font-semibold text-text">
                    {loading ? '—' : item.value ?? '—'}
                  </p>
                  <p className="text-xs text-muted font-mono mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            {!loading && !stats && (
              <p className="text-center text-xs text-muted mt-6 font-mono">
                Live stats unavailable right now — check the profile directly.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
