import { useEffect, useState } from 'react';

interface GithubStats {
  public_repos: number;
  followers: number;
  following: number;
}

/**
 * Pulls public repo/follower counts from the GitHub REST API.
 * Fails silently to `null` so the section can fall back to static copy
 * if the username doesn't exist yet or the request is rate-limited.
 */
export function useGithubStats(username: string) {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (!cancelled) {
          setStats({
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
          });
        }
      })
      .catch(() => {
        if (!cancelled) setStats(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return { stats, loading };
}
