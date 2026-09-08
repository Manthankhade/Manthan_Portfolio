import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', level: 90 },
  { name: 'TypeScript', category: 'Frontend', level: 80 },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 88 },
  { name: 'HTML5 / CSS3', category: 'Frontend', level: 92 },
  { name: 'Bootstrap', category: 'Frontend', level: 75 },

  // Mobile
  { name: 'React Native', category: 'Mobile', level: 82 },
  { name: 'Expo', category: 'Mobile', level: 78 },

  // Backend
  { name: 'Node.js', category: 'Backend', level: 85 },
  { name: 'Express.js', category: 'Backend', level: 85 },
  { name: 'REST APIs', category: 'Backend', level: 88 },
  { name: 'Socket.IO', category: 'Backend', level: 78 },

  // Database
  { name: 'MongoDB', category: 'Database', level: 85 },
  { name: 'Firebase', category: 'Database', level: 80 },
  { name: 'MySQL', category: 'Database', level: 72 },

  // Authentication
  { name: 'JWT', category: 'Authentication', level: 82 },
  { name: 'Bcrypt', category: 'Authentication', level: 80 },

  // Tools
  { name: 'Git & GitHub', category: 'Tools', level: 88 },
  { name: 'VS Code', category: 'Tools', level: 95 },
  { name: 'Postman', category: 'Tools', level: 82 },
  { name: 'Figma', category: 'Tools', level: 70 },
  { name: 'Wordpress', category: 'Tools', level: 60 },
];

export const skillCategories = [
  'Frontend',
  'Mobile',
  'Backend',
  'Database',
  'Authentication',
  'Tools',
] as const;
