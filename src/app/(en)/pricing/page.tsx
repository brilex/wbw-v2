import type { Metadata } from 'next';
import { Pricing } from '@/src/views/Pricing';

export const metadata: Metadata = {
  title: 'Pricing | WBW Web Agency',
  description:
    'Transparent, fixed-price packages for professional websites. Starter from $400, Growth from $700, Full Partnership from $1,200. Copywriting, performance setup, and SEO included.',
  alternates: { canonical: 'https://www.webuildsites.net/pricing' },
  openGraph: {
    title: 'Pricing | WBW Web Agency',
    description:
      'Transparent, fixed-price packages for professional websites. Starter from $400, Growth from $700, Full Partnership from $1,200.',
    url: 'https://www.webuildsites.net/pricing',
  },
};

export default function PricingPage() {
  return <Pricing />;
}
