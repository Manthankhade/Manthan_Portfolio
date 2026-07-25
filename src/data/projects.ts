import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'chessmaster',
    title: 'ChessMaster',
    tagline: 'Real-time multiplayer chess with live move sync.',
    overview:
      'A multiplayer chess application where two players connect into a live game room, authenticate, and play in real time. Board state, turns, and captures sync instantly across both clients over a persistent socket connection.',
    challenges:
      'Keeping board state authoritative on the server so a refresh or a dropped connection never desyncs the two players — every move is validated server-side before either client renders it, and reconnects rehydrate from the last known game state.',
    architecture:
      'React front end talks to an Express API for auth and game history, while a Socket.IO layer handles the live channel: move events, turn timers, and room presence. MongoDB stores users, game records, and JWT-issued sessions.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT'],
    features: [
      'Login / Register with JWT auth',
      'Real-time multiplayer gameplay',
      'Live move & turn synchronization',
      'Responsive board for desktop and mobile',
    ],
    category: 'Full Stack',
    github: 'https://github.com/manthankhade/chessmaster',
    demo: '',
    accent: '#f97316',
  },
  {
    slug: 'mychat',
    title: 'MyChat',
    tagline: 'A real-time mobile chat app built on React Native.',
    overview:
      'A modern messaging app for mobile, built with React Native and Firebase. Conversations, presence, and profile updates all sync live, so the app feels immediate rather than polled.',
    challenges:
      'Making presence ("online now") accurate without draining battery — status is written on connect/disconnect events through Firebase rather than a constant heartbeat, and the UI optimistically renders sent messages before server confirmation.',
    architecture:
      'React Native (Expo) front end backed directly by Firebase: Auth for sign-in, Firestore for messages and profiles, and Realtime Database for lightweight presence state.',
    tech: ['React Native', 'Firebase', 'Expo'],
    features: [
      'Authentication',
      'Real-time messaging',
      'User profiles',
      'Online status indicators',
      'Responsive mobile UI',
    ],
    category: 'Mobile',
    github: 'https://github.com/manthankhade/mychat',
    demo: '',
    accent: '#fb923c',
  },
  {
    slug: 'exploretrends',
    title: 'ExploreTrends',
    tagline: 'A trending-products storefront with category browsing.',
    overview:
      'An e-commerce front end for discovering trending products by category, with authenticated accounts and a responsive shopping layout across breakpoints.',
    challenges:
      'Structuring product and category data so filtering feels instant client-side, without over-fetching — categories are indexed on load and filtered in memory rather than re-querying per click.',
    architecture:
      'A React SPA with route-based views for listings and categories, authentication guarding user-specific views, and a component library shared between the storefront grid and product detail views.',
    tech: ['React', 'JavaScript', 'REST APIs'],
    features: [
      'Product listing & browsing',
      'Category filtering',
      'Authentication',
      'Responsive design',
    ],
    category: 'Web',
    github: 'https://github.com/manthankhade/exploretrends',
    demo: '',
    accent: '#f59e0b',
  },
  {
    slug: 'trackexpense',
    title: 'TrackExpense',
    tagline: 'Personal expense tracking with a live analytics dashboard.',
    overview:
      'An expense-management app for logging spending, viewing it broken down by category, and reviewing trends over time through a dashboard built for quick daily use.',
    challenges:
      'Designing a data model that supports fast add/delete without recomputing the whole dashboard — totals and category breakdowns update incrementally rather than re-aggregating every record on each change.',
    architecture:
      'React front end with a component-driven dashboard (charts, summary cards, entry list) backed by a REST API and a document store for per-user expense records.',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Add & delete expenses',
      'Analytics dashboard',
      'Category breakdown reports',
      'Responsive layout',
    ],
    category: 'Full Stack',
    github: 'https://github.com/manthankhade/trackexpense',
    demo: '',
    accent: '#21C07A',
  },
];
