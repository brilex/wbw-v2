import type { Metadata } from 'next';
import { IndustriesBS } from '@/src/views/bs/IndustriesBS';

export const metadata: Metadata = {
  title: 'Web Dizajn po Industrijama — Zdravstvo, E-commerce, Nekretnine | WBW',
  description:
    'Sajtovi prilagođeni vašoj industriji. Radimo za zdravstvo, e-commerce, građevinu, advokate, restorane i 10+ drugih sektora u BiH.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/industrije' },
  openGraph: {
    title: 'Web Dizajn po Industrijama — Zdravstvo, E-commerce, Nekretnine | WBW',
    description:
      'Sajtovi prilagođeni vašoj industriji. Radimo za zdravstvo, e-commerce, građevinu, advokate, restorane i 10+ drugih sektora u BiH.',
    url: 'https://www.webuildsites.net/bs/industrije',
  },
};

export default function IndustriesBSPage() {
  return <IndustriesBS />;
}
