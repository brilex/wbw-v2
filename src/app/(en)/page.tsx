import type { Metadata } from 'next';
import { Home } from '@/src/views/Home';

export const metadata: Metadata = {
  title: 'WBW — Web Development Agency | Sites That Rank & Convert',
  description:
    'Hand-built websites with SEO from day one. WordPress, Next.js, e-commerce — packages from $400. +968% search growth for our last client. Free consultation.',
  alternates: {
    canonical: 'https://www.webuildsites.net',
    languages: {
      en: 'https://www.webuildsites.net',
      bs: 'https://www.webuildsites.net/bs',
    },
  },
  openGraph: {
    title: 'WBW — Web Development Agency | Sites That Rank & Convert',
    description:
      'Hand-built websites with SEO from day one. WordPress, Next.js, e-commerce — packages from $400. +968% search growth for our last client.',
    url: 'https://www.webuildsites.net',
  },
};

export default function HomePage() {
  return <Home />;
}
