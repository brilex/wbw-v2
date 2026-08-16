import type { Metadata } from 'next';
import { PricingBS } from '@/src/views/bs/PricingBS';

export const metadata: Metadata = {
  title: 'Cijene Izrade Web Stranica — Paketi od 750 KM | WBW',
  description:
    'Fiksne cijene, bez iznenađenja. Starter od 750 KM, Growth od 1.300 KM, Full Partnership od 2.200 KM. Ručno izrađene stranice, SEO uključen.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/cijene' },
  openGraph: {
    title: 'Cijene Izrade Web Stranica — Paketi od 750 KM | WBW',
    description:
      'Fiksne cijene, bez iznenađenja. Starter od 750 KM, Growth od 1.300 KM, Full Partnership od 2.200 KM. Ručno izrađene stranice, SEO uključen.',
    url: 'https://www.webuildsites.net/bs/cijene',
  },
};

export default function CijeneBSPage() {
  return <PricingBS />;
}
