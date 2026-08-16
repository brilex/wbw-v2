import type { Metadata } from 'next';
import { Industries } from '@/src/views/Industries';

export const metadata: Metadata = {
  title: 'Web Design by Industry — Healthcare, E-commerce, Real Estate & More',
  description:
    'Industry-specific websites that convert. We design for healthcare, e-commerce, construction, law firms, restaurants, and 10+ other sectors.',
  alternates: { canonical: 'https://www.webuildsites.net/industries' },
  openGraph: {
    title: 'Web Design by Industry | WBW',
    description:
      'Industry-specific websites that convert. We design for healthcare, e-commerce, construction, law firms, restaurants, and 10+ other sectors.',
    url: 'https://www.webuildsites.net/industries',
  },
};

export default function IndustriesPage() {
  return <Industries />;
}
