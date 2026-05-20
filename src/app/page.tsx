import type { Metadata } from 'next';
import { Home } from '@/src/views/Home';

export const metadata: Metadata = {
  title: 'WBW — Premium Web Development Agency',
  description:
    'We build websites that convert. Custom web development, UI/UX design, e-commerce, and SEO for ambitious brands.',
  alternates: { canonical: 'https://www.webuildsites.net' },
  openGraph: {
    title: 'WBW — Premium Web Development Agency',
    description:
      'We build websites that convert. Custom web development, UI/UX design, e-commerce, and SEO for ambitious brands.',
    url: 'https://www.webuildsites.net',
  },
};

export default function HomePage() {
  return <Home />;
}
