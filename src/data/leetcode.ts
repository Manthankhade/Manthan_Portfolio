export type LeetCodeDifficulty = 'Easy' | 'Medium' | 'Hard';

export interface LeetCodeStat {
  difficulty: LeetCodeDifficulty;
  solved: number;
  color: string;
}

export const leetcodeStats: LeetCodeStat[] = [
  { difficulty: 'Easy', solved: 7, color: 'var(--color-good)' },
  { difficulty: 'Medium', solved: 5, color: 'var(--color-warn)' },
  { difficulty: 'Hard', solved: 1, color: 'var(--color-primary-soft)' },
];

export const leetcodeTotal = leetcodeStats.reduce((total, stat) => total + stat.solved, 0);