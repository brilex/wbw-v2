import type { Metadata } from 'next';
import { CaseStudyFirmeBa } from '@/src/views/CaseStudyFirmeBa';

export const metadata: Metadata = {
  title: 'firme.ba — Programmatic Business Directory | WBW Case Study',
  description:
    'How we turned 88,000 raw FIA registry records into a searchable, indexable directory of Bosnian companies — threshold-gated page generation, a custom pSEO audit CLI, and a 93.9% cut in duplicate meta descriptions.',
  alternates: { canonical: 'https://www.webuildsites.net/work/firme-ba' },
  openGraph: {
    title: 'firme.ba — Programmatic Business Directory | WBW Case Study',
    description:
      'Turning 88,000 raw government registry records into a searchable, indexable directory — without generating a single thin-content page.',
    url: 'https://www.webuildsites.net/work/firme-ba',
    images: ['/firme-ba.webp'],
  },
};

export default function FirmeBaCaseStudyPage() {
  return <CaseStudyFirmeBa />;
}
