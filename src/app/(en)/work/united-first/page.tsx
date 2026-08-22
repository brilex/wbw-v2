import type { Metadata } from 'next';
import { CaseStudyUnitedFirst } from '@/src/views/CaseStudyUnitedFirst';

export const metadata: Metadata = {
  title: 'United First Case Study — Business Directory Platform | WBW',
  description:
    'How we built United First, a Canada-wide business directory platform with 25+ categories, location-based search, and scalable custom WordPress architecture.',
  alternates: { canonical: 'https://www.webuildsites.net/work/united-first' },
  openGraph: {
    title: 'United First Case Study — Business Directory Platform | WBW',
    description:
      'How we built United First, a Canada-wide business directory platform with 25+ categories and location-based search.',
    url: 'https://www.webuildsites.net/work/united-first',
  },
};

export default function UnitedFirstPage() {
  return <CaseStudyUnitedFirst />;
}
