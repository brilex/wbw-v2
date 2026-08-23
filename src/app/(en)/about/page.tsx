import type { Metadata } from 'next';
import { About } from '@/src/views/About';

export const metadata: Metadata = {
  title: 'About WBW — Web Agency, Bosnia & Herzegovina',
  description:
    'We build hand-coded websites that rank on Google and convert visitors into customers. Based in BiH, working worldwide. See our process and results.',
  alternates: {
    canonical: 'https://www.webuildsites.net/about',
    languages: {
      en: 'https://www.webuildsites.net/about',
      bs: 'https://www.webuildsites.net/bs/o-nama',
    },
  },
  openGraph: {
    title: 'About WBW — Web Agency, Bosnia & Herzegovina',
    description:
      'We build hand-coded websites that rank on Google and convert visitors into customers. Based in BiH, working worldwide.',
    url: 'https://www.webuildsites.net/about',
  },
};

export default function AboutPage() {
  return <About />;
}
