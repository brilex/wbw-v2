import type { Metadata } from 'next';
import { WebSarajevoBS } from '@/src/views/bs/WebSarajevoBS';

export const metadata: Metadata = {
  title: 'Izrada Web Stranica Sarajevo — Paketi od 750 KM | WBW',
  description:
    'Izrada web stranica za firme u Sarajevu — ručno kodirano, SEO ugrađen od prvog dana. Fiksne cijene od 750 KM. Besplatna konsultacija.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/izrada-web-stranica-sarajevo' },
  openGraph: {
    title: 'Izrada Web Stranica Sarajevo — Paketi od 750 KM | WBW',
    description:
      'Izrada web stranica za firme u Sarajevu — ručno kodirano, SEO ugrađen od prvog dana. Fiksne cijene od 750 KM.',
    url: 'https://www.webuildsites.net/bs/izrada-web-stranica-sarajevo',
  },
};

export default function IzradaWebStranicaSarajevoPage() {
  return <WebSarajevoBS />;
}
