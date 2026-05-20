import type { Metadata } from 'next';
import { CaseStudies } from '@/src/views/CaseStudies';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'See the websites and web applications we have built for clients across industries.',
  alternates: { canonical: 'https://www.webuildsites.net/work' },
  openGraph: {
    title: 'Our Work | WBW',
    description:
      'See the websites and web applications we have built for clients across industries.',
    url: 'https://www.webuildsites.net/work',
  },
};

export default function WorkPage() {
  return <CaseStudies />;
}
