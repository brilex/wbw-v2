import type { Metadata } from 'next';
import { ServicesBS } from '@/src/views/bs/ServicesBS';

export const metadata: Metadata = {
  title: 'Izrada Web Stranica — Paketi od 750 KM | WBW Agencija',
  description:
    'WordPress, e-commerce, UI/UX dizajn, SEO optimizacija i migracije na Next.js. Fiksne cijene, bez iznenađenja. Besplatna konsultacija.',
  alternates: {
    canonical: 'https://www.webuildsites.net/bs/usluge',
    languages: {
      en: 'https://www.webuildsites.net/services',
      bs: 'https://www.webuildsites.net/bs/usluge',
    },
  },
  openGraph: {
    title: 'Izrada Web Stranica — Paketi od 750 KM | WBW Agencija',
    description:
      'WordPress, e-commerce, UI/UX dizajn, SEO optimizacija i migracije na Next.js. Fiksne cijene, bez iznenađenja.',
    url: 'https://www.webuildsites.net/bs/usluge',
  },
};

export default function ServicesBSPage() {
  return <ServicesBS />;
}
