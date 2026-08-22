import type { Metadata } from 'next';
import { WebAlberta } from '@/src/views/WebAlberta';

export const metadata: Metadata = {
  title: 'Web Design Alberta & Edmonton | WBW Agency',
  description:
    'Custom website design for businesses in Alberta and Edmonton — general contractors, accounting firms, and service businesses. SEO built in. Free consultation.',
  alternates: { canonical: 'https://www.webuildsites.net/web-design-alberta' },
  openGraph: {
    title: 'Web Design Alberta & Edmonton | WBW Agency',
    description:
      'Custom website design for businesses in Alberta and Edmonton — general contractors, accounting firms, and service businesses. SEO built in.',
    url: 'https://www.webuildsites.net/web-design-alberta',
  },
};

export default function WebDesignAlbertaPage() {
  return <WebAlberta />;
}
