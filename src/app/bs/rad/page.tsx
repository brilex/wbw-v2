import type { Metadata } from 'next';
import { CaseStudiesBS } from '@/src/views/bs/CaseStudiesBS';

export const metadata: Metadata = {
  title: 'Studije Slučaja — Stvarni Projekti, Dokazani Rezultati | WBW',
  description:
    'Pogledajte šta smo izgradili i kakve je rezultate donijelo — sa dokazima iz Google Search Console. +968% pojavljivanja, +395% klikova za klijenta iz BiH.',
  alternates: {
    canonical: 'https://www.webuildsites.net/bs/rad',
    languages: {
      en: 'https://www.webuildsites.net/work',
      bs: 'https://www.webuildsites.net/bs/rad',
    },
  },
  openGraph: {
    title: 'Studije Slučaja — Stvarni Projekti, Dokazani Rezultati | WBW',
    description:
      'Pogledajte šta smo izgradili i kakve je rezultate donijelo — sa dokazima iz Google Search Console. +968% pojavljivanja, +395% klikova.',
    url: 'https://www.webuildsites.net/bs/rad',
  },
};

export default function CaseStudiesBSPage() {
  return <CaseStudiesBS />;
}
