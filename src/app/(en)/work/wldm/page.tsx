import type { Metadata } from 'next';
import { CaseStudyWldm } from '@/src/views/CaseStudyWldm';

export const metadata: Metadata = {
  title: 'WLDM — Case Study',
  description:
    'WordPress website for WLDM, a backlinks and AI citation engineering agency — featuring interactive SEO tools, 3D data visualisations, and conversion-focused design.',
  alternates: { canonical: 'https://www.webuildsites.net/work/wldm' },
  openGraph: {
    title: 'WLDM Case Study | WBW',
    description:
      'WordPress website for WLDM, a backlinks and AI citation engineering agency — featuring interactive SEO tools, 3D data visualisations, and conversion-focused design.',
    url: 'https://www.webuildsites.net/work/wldm',
  },
};

export default function WldmCaseStudyPage() {
  return <CaseStudyWldm />;
}
