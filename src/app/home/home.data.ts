import { ActivityItem, HowStep, PipelineStep, Project } from './home.models';

export const PROJECTS: Project[] = [
  {
    avatar: 'BB',
    name: 'BacklogBurner',
    author: '@backlogburner \u00b7 self-hosted',
    rank: 1,
    description:
      'This platform, running on itself. Shape its future by funding features you want to see.',
    tokens: '24.8k',
    features: 47,
    shipped: 12,
    featured: true,
    backlog: [
      { feature: 'GitHub OAuth integration', votes: 892, priority: 'high' },
      { feature: 'Email digest for watched projects', votes: 341, priority: 'mid' },
      { feature: 'Dark mode API for integrations', votes: 88, priority: 'low' },
    ],
  },
  {
    avatar: '\u25c8',
    avatarColor: 'text-green',
    name: 'typesync',
    author: '@marek-kowalski',
    rank: 2,
    description:
      'Real-time type-safe data sync library for distributed apps. Conflict-free, offline-first.',
    tokens: '18.2k',
    features: 31,
    shipped: 8,
    tags: ['typescript', 'sync', 'crdt'],
  },
  {
    avatar: '\u2b21',
    avatarColor: 'text-blue',
    name: 'gridlang',
    author: '@s-nakamura',
    rank: 3,
    description: 'Visual programming language for data pipelines. Compiles to efficient Rust.',
    tokens: '12.4k',
    features: 19,
    shipped: 5,
    tags: ['rust', 'visual', 'data'],
  },
  {
    avatar: '\u25ce',
    avatarColor: 'text-accent',
    name: 'sentinel-log',
    author: '@ops-collective',
    rank: 4,
    description:
      'Lightweight structured logging with anomaly detection. Self-hostable, no vendor lock-in.',
    tokens: '9.7k',
    features: 26,
    shipped: 14,
    tags: ['go', 'logging', 'observability'],
  },
];

export const HOW_STEPS: HowStep[] = [
  {
    num: '01',
    key: 'propose',
    label: 'Propose',
    description:
      "Submit a feature request following the project's Definition of Ready template",
  },
  {
    num: '02',
    key: 'validate',
    label: 'Validate',
    description:
      'Auto-screening filters spam & dupes. Community validators verify quality & scope',
  },
  {
    num: '03',
    key: 'boost',
    label: 'Boost',
    description:
      'Buy tokens to raise priority. Hit the threshold \u2014 the dev commits to shipping it',
  },
  {
    num: '04',
    key: 'verify',
    label: 'Verify',
    description:
      'Community confirms delivery. Funds release on approval. No delivery \u2014 full refund',
  },
];

export const ACTIVITY_ITEMS: ActivityItem[] = [
  {
    time: '2m ago',
    type: 'boost',
    project: 'BacklogBurner',
    description: '\u201cGitHub OAuth\u201d boosted by 120 tokens',
  },
  {
    time: '8m ago',
    type: 'new',
    project: 'typesync',
    description: 'new feature \u201cWebSocket transport layer\u201d validated',
  },
  {
    time: '14m ago',
    type: 'shipped',
    project: 'gridlang',
    description: '\u201cExport to Python\u201d verified & funds released',
  },
  {
    time: '21m ago',
    type: 'boost',
    project: 'sentinel-log',
    description: '\u201cPrometheus exporter\u201d hit threshold (!) \u2014 dev committed',
  },
];

export const PIPELINE_STEPS: PipelineStep[] = [
  { key: 'proposeFeature', label: 'propose feature' },
  { key: 'communityValidates', label: 'community validates' },
  { key: 'boostPriority', label: 'boost priority' },
  { key: 'devImplements', label: 'dev implements' },
  { key: 'verifiedPaid', label: 'verified & paid', isLast: true, highlight: true },
];
