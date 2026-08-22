import type { Metadata } from 'next';
import { WebCalgary } from '@/src/views/WebCalgary';

export const metadata: Metadata = {
  title: 'Website Design Calgary | WBW Agency',
  description:
    'Custom, responsive website design for Calgary businesses. SEO built in from day one, fixed pricing, free consultation.',
  alternates: { canonical: 'https://www.webuildsites.net/web-design-calgary' },
  openGraph: {
    title: 'Website Design Calgary | WBW Agency',
    description:
      'Custom, responsive website design for Calgary businesses. SEO built in from day one, fixed pricing.',
    url: 'https://www.webuildsites.net/web-design-calgary',
  },
};

export default function WebDesignCalgaryPage() {
  return <WebCalgary />;
}
