import type { Metadata } from 'next';
import { ContactBS } from '@/src/views/bs/ContactBS';

export const metadata: Metadata = {
  title: 'Besplatna Konsultacija — Pokrenite Projekt | WBW',
  description:
    'Javite nam se i dobijte besplatnu konsultaciju u roku 24 sata. Izrada web stranica od 750 KM — WordPress, e-commerce, SEO.',
  alternates: {
    canonical: 'https://www.webuildsites.net/bs/kontakt',
    languages: {
      en: 'https://www.webuildsites.net/contact',
      bs: 'https://www.webuildsites.net/bs/kontakt',
    },
  },
  openGraph: {
    title: 'Besplatna Konsultacija — Pokrenite Projekt | WBW',
    description:
      'Javite nam se i dobijte besplatnu konsultaciju u roku 24 sata. Izrada web stranica od 750 KM — WordPress, e-commerce, SEO.',
    url: 'https://www.webuildsites.net/bs/kontakt',
  },
};

export default function ContactBSPage() {
  return <ContactBS />;
}
