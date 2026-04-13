export type Role = 'admin' | 'client' | 'candidate';
export type View = 'landing' | 'dashboard' | 'profile' | 'admin' | 'portal' | 'applications' | 'vault' | 'jobs';

export interface Candidate {
  id: string;
  name: string;
  initials: string;
  location: string;
  role: string;
  matchScore: number;
  riskLevel: 'Negligible' | 'Minimal' | 'Standard' | 'High';
}

export interface Stat {
  label: string;
  value: string | number;
  trend?: string;
  icon: string;
  color?: string;
}
