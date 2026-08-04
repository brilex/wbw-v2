import type { Metadata } from 'next';
import { Pricing } from '@/src/views/Pricing';

export const metadata: Metadata = {
  title: 'Pricing | WBW Web Agency',
  description:
    'Transparent, fixed-price packages for professional websites. Starter from $400, Growth from $700, Full Partnership from $1,200. Every package includes a firme.ba Premium bonus.',
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
