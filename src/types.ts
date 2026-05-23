export type Lang = 'EN' | 'FR' | 'AR';

export interface Milestone {
  year?: string;
  ongoing?: boolean;
  accent: 'blue' | 'green';
  tag: string;
  title: string;
  desc: string;
  stat?: { n: string; l: string };
}
