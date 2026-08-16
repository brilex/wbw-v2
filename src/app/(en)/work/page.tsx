import type { Metadata } from 'next';
import { CaseStudies } from '@/src/views/CaseStudies';

export const metadata: Metadata = {
  title: 'Case Studies — Real Projects, Verified Results',
  description:
    'See exactly what we built and the results it drove — with Google Search Console proof. +968% impressions, +395% clicks, first customer in week 1.',
  alternates: { canonical: 'https://www.webuildsites.net/work' },
  openGraph: {
    title: 'Case Studies — Real Projects, Verified Results | WBW',
    description:
      'See exactly what we built and the results it drove — with Google Search Console proof. +968% impressions, +395% clicks, first customer in week 1.',
    url: 'https://www.webuildsites.net/work',
  },
};

export default function WorkPage() {
  return <CaseStudies />;
}
