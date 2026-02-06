export interface BacklogItem {
  feature: string;
  votes: number;
  priority: 'high' | 'mid' | 'low';
}

export interface Project {
  avatar: string;
  avatarColor?: string;
  name: string;
  author: string;
  rank: number;
  description: string;
  tokens: string;
  features: number;
  shipped: number;
  tags?: string[];
  featured?: boolean;
  backlog?: BacklogItem[];
}

export interface HowStep {
  num: string;
  key: string;
  label: string;
  description: string;
}

export interface ActivityItem {
  time: string;
  type: 'boost' | 'new' | 'shipped';
  project: string;
  description: string;
}

export interface PipelineStep {
  key: string;
  label: string;
  isLast?: boolean;
  highlight?: boolean;
}
