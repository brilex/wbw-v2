import type { Metadata } from 'next';
import { HomeBS } from '@/src/views/bs/HomeBS';

export const metadata: Metadata = {
  title: 'WBW — Izrada Web Stranica | Web Agencija BiH',
  description:
    'Ručno izrađene web stranice sa SEO-om od prvog dana. WordPress, e-commerce, Next.js — paketi od 750 KM. +968% rast pretrage za našeg klijenta. Besplatna konsultacija.',
  alternates: {
    canonical: 'https://www.webuildsites.net/bs',
    languages: {
      en: 'https://www.webuildsites.net',
      bs: 'https://www.webuildsites.net/bs',
    },
  },
  openGraph: {
    title: 'WBW — Izrada Web Stranica | Web Agencija BiH',
    description:
      'Ručno izrađene web stranice sa SEO-om od prvog dana. WordPress, e-commerce, Next.js — paketi od 750 KM. Besplatna konsultacija.',
    url: 'https://www.webuildsites.net/bs',
  },
};

export default function HomeBSPage() {
  return <HomeBS />;
}
