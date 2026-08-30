export interface PersonalInfo {
  name: string;
  headline: string;
  title: string;
  experienceYears: string;
  workType: string;
  bio: string;
  email: string;
  whatsapp: string;
  whatsappRaw: string;
  facebook: string;
  messenger: string;
  telegram: string;
  githubNote: string;
  education: {
    degree: string;
    institution: string;
    passingYear: string;
  };
  avatarUrl: string;
  cvPath: string;
}

export type ProjectCategory = 'all' | 'bots' | 'web' | 'security';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'bots' | 'web' | 'security';
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  externalUrl?: string;
  externalLabel?: string;
  isExternalLink?: boolean;
  connectedPage?: {
    name: string;
    url: string;
    buttonLabel: string;
  };
  hasLiveUrl: boolean;
  featured?: boolean;
  badge?: string;
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'database';

export interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database';
  levelDescription: string;
  iconName: string;
  color: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  period: string;
  type: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  passingYear: string;
  status: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
  iconName: string;
}
