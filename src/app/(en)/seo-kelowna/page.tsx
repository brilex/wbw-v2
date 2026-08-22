import type { Metadata } from 'next';
import { WebKelowna } from '@/src/views/WebKelowna';

export const metadata: Metadata = {
  title: 'SEO & Web Design Kelowna | WBW Agency',
  description:
    'SEO-first web design for Kelowna businesses. Keyword research, on-page optimization, and custom-built sites — free consultation.',
  alternates: { canonical: 'https://www.webuildsites.net/seo-kelowna' },
  openGraph: {
    title: 'SEO & Web Design Kelowna | WBW Agency',
    description:
      'SEO-first web design for Kelowna businesses. Keyword research, on-page optimization, and custom-built sites.',
    url: 'https://www.webuildsites.net/seo-kelowna',
  },
};

export default function SeoKelownaPage() {
  return <WebKelowna />;
}
