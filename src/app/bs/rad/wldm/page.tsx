import type { Metadata } from 'next';
import { CaseStudyWldmBS } from '@/src/views/bs/CaseStudyWldmBS';

export const metadata: Metadata = {
  title: 'WLDM — Studija Slučaja | WBW',
  description:
    'WordPress web stranica za WLDM, agenciju za backlinks i AI citation engineering — sa interaktivnim SEO alatima, 3D vizualizacijama i dizajnom fokusiranim na konverziju.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/rad/wldm' },
  openGraph: {
    title: 'WLDM — Studija Slučaja | WBW',
    description:
      'WordPress web stranica za WLDM, agenciju za backlinks i AI citation engineering — sa interaktivnim SEO alatima i dizajnom fokusiranim na konverziju.',
    url: 'https://www.webuildsites.net/bs/rad/wldm',
  },
};

export default function WldmBSPage() {
  return <CaseStudyWldmBS />;
}
