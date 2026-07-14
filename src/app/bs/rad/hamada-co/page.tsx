import type { Metadata } from 'next';
import { CaseStudyHamadaBS } from '@/src/views/bs/CaseStudyHamadaBS';

export const metadata: Metadata = {
  title: 'Hamada & Co. — Studija Slučaja | WBW',
  description:
    'Kako smo transformisali web stranicu PVC i aluminijske stolarije u Bosni i Hercegovini — Lighthouse 100/95 i prvi kupac u prvoj sedmici.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/rad/hamada-co' },
  openGraph: {
    title: 'Hamada & Co. — Studija Slučaja | WBW',
    description:
      'Kako smo transformisali web stranicu PVC i aluminijske stolarije u Bosni i Hercegovini — Lighthouse 100/95 i prvi kupac u prvoj sedmici.',
    url: 'https://www.webuildsites.net/bs/rad/hamada-co',
  },
};

export default function HamadaBSPage() {
  return <CaseStudyHamadaBS />;
}
