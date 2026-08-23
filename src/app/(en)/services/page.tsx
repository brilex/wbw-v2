import type { Metadata } from 'next';
import { Services } from '@/src/views/Services';

export const metadata: Metadata = {
  title: 'Web Development Services — Packages from $400',
  description:
    'Custom web development, UI/UX design, e-commerce, SEO, WordPress, and CSR-to-SSR migrations. Fixed-price packages, no surprises.',
  alternates: {
    canonical: 'https://www.webuildsites.net/services',
    languages: {
      en: 'https://www.webuildsites.net/services',
      bs: 'https://www.webuildsites.net/bs/usluge',
    },
  },
  openGraph: {
    title: 'Web Development Services — Packages from $400 | WBW',
    description:
      'Custom web development, UI/UX design, e-commerce, SEO, WordPress, and CSR-to-SSR migrations. Fixed-price packages, no surprises.',
    url: 'https://www.webuildsites.net/services',
  },
};

export default function ServicesPage() {
  return <Services />;
}
