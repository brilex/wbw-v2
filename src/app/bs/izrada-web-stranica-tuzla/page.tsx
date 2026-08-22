import type { Metadata } from 'next';
import { WebTuzlaBS } from '@/src/views/bs/WebTuzlaBS';

export const metadata: Metadata = {
  title: 'Izrada Web Stranica Tuzla — Paketi od 750 KM | WBW',
  description:
    'Izrada web stranica za firme u Tuzli — lokalna agencija, ručno kodirano, SEO ugrađen od prvog dana. Fiksne cijene od 750 KM. Besplatna konsultacija.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/izrada-web-stranica-tuzla' },
  openGraph: {
    title: 'Izrada Web Stranica Tuzla — Paketi od 750 KM | WBW',
    description:
      'Izrada web stranica za firme u Tuzli — lokalna agencija, ručno kodirano, SEO ugrađen od prvog dana. Fiksne cijene od 750 KM.',
    url: 'https://www.webuildsites.net/bs/izrada-web-stranica-tuzla',
  },
};

export default function IzradaWebStranicaTuzlaPage() {
  return <WebTuzlaBS />;
}
