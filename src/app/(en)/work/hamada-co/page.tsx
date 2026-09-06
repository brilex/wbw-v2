import type { Metadata } from 'next';
import { CaseStudyHamada } from '@/src/views/CaseStudyHamada';

export const metadata: Metadata = {
  title: 'WordPress Redesign Case Study: Hamada & Co. | WBW',
  description:
    'See how our WordPress website redesign for Hamada & Co. achieved 100/100 Lighthouse speed scores, +968% organic traffic growth, and landed its first paying client in 7 days.',
  alternates: { canonical: 'https://www.webuildsites.net/work/hamada-co' },
  openGraph: {
    title: 'WordPress Website Redesign Case Study: Hamada & Co. | WBW',
    description:
      'How we rebuilt Hamada & Co. with custom WordPress & Bricks Builder — achieving 100/100 PageSpeed and +968% organic traffic growth.',
    url: 'https://www.webuildsites.net/work/hamada-co',
  },
};

export default function HamadaCaseStudyPage() {
  return <CaseStudyHamada />;
}