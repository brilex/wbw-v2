import type { Metadata } from 'next';
import { CaseStudyNeimax } from '@/src/views/CaseStudyNeimax';

export const metadata: Metadata = {
  title: 'Neimax — Case Study',
  description:
    'Custom WordPress theme for Neimax d.o.o. — a trilingual website for one of Bosnia\'s leading corrugated cardboard and packaging manufacturers.',
  alternates: { canonical: 'https://www.webuildsites.net/work/neimax' },
  openGraph: {
    title: 'Neimax Case Study | WBW',
    description:
      'Custom WordPress theme for Neimax d.o.o. — a trilingual website for one of Bosnia\'s leading corrugated cardboard and packaging manufacturers.',
    url: 'https://www.webuildsites.net/work/neimax',
  },
};

export default function NeimaxCaseStudyPage() {
  return <CaseStudyNeimax />;
}
