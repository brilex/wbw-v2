import type { Metadata } from 'next';
import { PricingBS } from '@/src/views/bs/PricingBS';

export const metadata: Metadata = {
  title: 'Cijene | WBW Web Agencija',
  description:
    'Transparentni, fiksni paketi za profesionalne web stranice. Starter od 750 KM, Growth od 1.300 KM, Full Partnership od 2.200 KM. Svaki paket uključuje firme.ba Premium bonus.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/cijene' },
  openGraph: {
    title: 'Cijene | WBW Web Agencija',
    description:
      'Transparentni, fiksni paketi za profesionalne web stranice. Starter od 750 KM, Growth od 1.300 KM, Full Partnership od 2.200 KM.',
    url: 'https://www.webuildsites.net/bs/cijene',
  },
};

export default function CijeneBSPage() {
  return <PricingBS />;
}
