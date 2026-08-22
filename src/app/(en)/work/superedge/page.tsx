import type { Metadata } from 'next';
import { CaseStudySuperEdge } from '@/src/views/CaseStudySuperEdge';

export const metadata: Metadata = {
  title: 'Super Edge Contracting Case Study — General Contractor Website | WBW',
  description:
    'How we built the website for Super Edge Contracting, an Edmonton general contractor with 25+ years of experience and 500+ completed renovation projects.',
  alternates: { canonical: 'https://www.webuildsites.net/work/superedge' },
  openGraph: {
    title: 'Super Edge Contracting Case Study — General Contractor Website | WBW',
    description:
      'How we built the website for Super Edge Contracting, an Edmonton general contractor with 25+ years of experience.',
    url: 'https://www.webuildsites.net/work/superedge',
  },
};

export default function SuperEdgePage() {
  return <CaseStudySuperEdge />;
}
