import type { Metadata } from 'next';
import { CaseStudyUnitedWorld } from '@/src/views/CaseStudyUnitedWorld';

export const metadata: Metadata = {
  title: 'United World Case Study — Nonprofit Website Design | WBW',
  description:
    'How we built the website for United World, a global health and humanitarian nonprofit delivering emergency relief and aid programs worldwide.',
  alternates: { canonical: 'https://www.webuildsites.net/work/united-world' },
  openGraph: {
    title: 'United World Case Study — Nonprofit Website Design | WBW',
    description:
      'How we built the website for United World, a global health and humanitarian nonprofit.',
    url: 'https://www.webuildsites.net/work/united-world',
  },
};

export default function UnitedWorldPage() {
  return <CaseStudyUnitedWorld />;
}
