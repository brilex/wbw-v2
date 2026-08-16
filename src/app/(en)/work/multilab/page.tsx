import type { Metadata } from 'next';
import { CaseStudyMultilab } from '@/src/views/CaseStudyMultilab';

export const metadata: Metadata = {
  title: 'Multilab — Case Study',
  description:
    'Custom WordPress theme for Multilab d.o.o. — an accredited laboratory and multi-sector service company in Tuzla, Bosnia & Herzegovina.',
  alternates: { canonical: 'https://www.webuildsites.net/work/multilab' },
  openGraph: {
    title: 'Multilab Case Study | WBW',
    description:
      'Custom WordPress theme for Multilab d.o.o. — an accredited laboratory and multi-sector service company in Tuzla, Bosnia & Herzegovina.',
    url: 'https://www.webuildsites.net/work/multilab',
  },
};

export default function MultilabCaseStudyPage() {
  return <CaseStudyMultilab />;
}
