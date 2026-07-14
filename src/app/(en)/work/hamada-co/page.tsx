import type { Metadata } from 'next';
import { CaseStudyHamada } from '@/src/views/CaseStudyHamada';

export const metadata: Metadata = {
  title: 'Hamada & Co. — Case Study',
  description:
    'How we rebuilt the Hamada & Co. website from the ground up — turning a slow, invisible site into a fully SEO-optimised, high-converting presence that landed its first customer within a week.',
  alternates: { canonical: 'https://www.webuildsites.net/work/hamada-co' },
  openGraph: {
    title: 'Hamada & Co. Case Study | WBW',
    description:
      'How we rebuilt the Hamada & Co. website from the ground up — turning a slow, invisible site into a fully SEO-optimised, high-converting presence that landed its first customer within a week.',
    url: 'https://www.webuildsites.net/work/hamada-co',
  },
};

export default function HamadaCaseStudyPage() {
  return <CaseStudyHamada />;
}
