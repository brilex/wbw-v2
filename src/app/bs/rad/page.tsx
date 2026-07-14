import type { Metadata } from 'next';
import { CaseStudiesBS } from '@/src/views/bs/CaseStudiesBS';

export const metadata: Metadata = {
  title: 'Naš Rad | WBW Web Agencija',
  description:
    'Stvarni projekti, stvarni rezultati. Istražite studije slučaja i pogledajte kako smo pomogli brendovima da transformišu svoju digitalnu prisutnost.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/rad' },
  openGraph: {
    title: 'Naš Rad | WBW Web Agencija',
    description:
      'Stvarni projekti, stvarni rezultati. Istražite studije slučaja i pogledajte kako smo pomogli brendovima da transformišu svoju digitalnu prisutnost.',
    url: 'https://www.webuildsites.net/bs/rad',
  },
};

export default function CaseStudiesBSPage() {
  return <CaseStudiesBS />;
}
