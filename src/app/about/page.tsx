import type { Metadata } from 'next';
import { About } from '@/src/views/About';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the WBW team — designers and developers building exceptional digital experiences for ambitious brands.',
  alternates: { canonical: 'https://www.webuildsites.net/about' },
  openGraph: {
    title: 'About | WBW',
    description:
      'Meet the WBW team — designers and developers building exceptional digital experiences for ambitious brands.',
    url: 'https://www.webuildsites.net/about',
  },
};

export default function AboutPage() {
  return <About />;
}
