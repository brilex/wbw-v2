import type { Metadata } from 'next';
import { CaseStudyConvertToNext } from '@/src/views/CaseStudyConvertToNext';

export const metadata: Metadata = {
  title: 'ConvertToNext — Case Study | WBW',
  description:
    'How we built ConvertToNext — an automated tool that converts AI-generated Vite/React websites to production-ready Next.js SSR apps in under 60 seconds.',
  alternates: { canonical: 'https://www.webuildsites.net/work/converttonext' },
  openGraph: {
    title: 'ConvertToNext Case Study | WBW',
    description:
      'How we built ConvertToNext — an automated tool that converts AI-generated Vite/React websites to production-ready Next.js SSR apps in under 60 seconds.',
    url: 'https://www.webuildsites.net/work/converttonext',
  },
};

export default function ConvertToNextCaseStudyPage() {
  return <CaseStudyConvertToNext />;
}
