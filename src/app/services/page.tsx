import type { Metadata } from 'next';
import { Services } from '@/src/views/Services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive digital solutions: web development, UI/UX design, e-commerce, SEO, WordPress, and Next.js migrations.',
  alternates: { canonical: 'https://www.webuildsites.net/services' },
  openGraph: {
    title: 'Services | WBW',
    description:
      'Comprehensive digital solutions: web development, UI/UX design, e-commerce, SEO, WordPress, and Next.js migrations.',
    url: 'https://www.webuildsites.net/services',
  },
};

export default function ServicesPage() {
  return <Services />;
}
