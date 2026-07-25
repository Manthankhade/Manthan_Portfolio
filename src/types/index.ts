export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Mobile'
  | 'Tools'
  | 'Authentication';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 0-100, used for the proficiency bar
}

export interface ProjectFeature {
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  challenges: string;
  architecture: string;
  tech: string[];
  features: string[];
  category: 'Web' | 'Mobile' | 'Full Stack';
  github?: string;
  demo?: string;
  accent: string; // hex used for the card's gradient identity
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  detail: string;
}

export interface Achievement {
  title: string;
  detail: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
}
