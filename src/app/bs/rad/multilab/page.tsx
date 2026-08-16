import type { Metadata } from 'next';
import { CaseStudyMultilabBS } from '@/src/views/bs/CaseStudyMultilabBS';

export const metadata: Metadata = {
  title: 'Multilab — Studija Slučaja | WBW',
  description:
    'Custom WordPress tema za Multilab d.o.o. — akreditovani laboratorij i višesektorska uslužna kompanija u Tuzli, BiH.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/rad/multilab' },
  openGraph: {
    title: 'Multilab — Studija Slučaja | WBW',
    description:
      'Custom WordPress tema za Multilab d.o.o. — akreditovani laboratorij i višesektorska uslužna kompanija u Tuzli, BiH.',
    url: 'https://www.webuildsites.net/bs/rad/multilab',
  },
};

export default function MultilabBSPage() {
  return <CaseStudyMultilabBS />;
}
