import type { Metadata } from 'next';
import { CaseStudyJaberson } from '@/src/views/CaseStudyJaberson';

export const metadata: Metadata = {
  title: 'Jaberson & Associates Case Study — Accounting Firm Website | WBW',
  description:
    'How we built the website for Jaberson & Associates, an Edmonton tax and accounting firm with 20+ years of experience serving small and mid-sized businesses.',
  alternates: { canonical: 'https://www.webuildsites.net/work/jaberson' },
  openGraph: {
    title: 'Jaberson & Associates Case Study — Accounting Firm Website | WBW',
    description:
      'How we built the website for Jaberson & Associates, an Edmonton tax and accounting firm.',
    url: 'https://www.webuildsites.net/work/jaberson',
  },
};

export default function JabersonPage() {
  return <CaseStudyJaberson />;
}
