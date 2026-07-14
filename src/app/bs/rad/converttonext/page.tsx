import type { Metadata } from 'next';
import { CaseStudyConvertToNextBS } from '@/src/views/bs/CaseStudyConvertToNextBS';

export const metadata: Metadata = {
  title: 'ConvertToNext — Studija Slučaja | WBW',
  description:
    'Kako smo izgradili automatizovani engine koji konvertuje Vite + React projekte u Next.js 15 App Router za manje od 60 sekundi.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/rad/converttonext' },
  openGraph: {
    title: 'ConvertToNext — Studija Slučaja | WBW',
    description:
      'Kako smo izgradili automatizovani engine koji konvertuje Vite + React projekte u Next.js 15 App Router za manje od 60 sekundi.',
    url: 'https://www.webuildsites.net/bs/rad/converttonext',
  },
};

export default function ConvertToNextBSPage() {
  return <CaseStudyConvertToNextBS />;
}
