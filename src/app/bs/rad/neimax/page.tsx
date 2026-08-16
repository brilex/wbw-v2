import type { Metadata } from 'next';
import { CaseStudyNeimaxBS } from '@/src/views/bs/CaseStudyNeimaxBS';

export const metadata: Metadata = {
  title: 'Neimax — Studija Slučaja | WBW',
  description:
    'Custom WordPress tema za Neimax d.o.o. — trojezična web stranica za jednog od vodećih proizvođača valovitog kartona i ambalaže u BiH.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/rad/neimax' },
  openGraph: {
    title: 'Neimax — Studija Slučaja | WBW',
    description:
      'Custom WordPress tema za Neimax d.o.o. — trojezična web stranica za jednog od vodećih proizvođača valovitog kartona i ambalaže u BiH.',
    url: 'https://www.webuildsites.net/bs/rad/neimax',
  },
};

export default function NeimaxBSPage() {
  return <CaseStudyNeimaxBS />;
}
