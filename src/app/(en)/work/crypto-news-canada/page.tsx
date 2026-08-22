import type { Metadata } from 'next';
import { CaseStudyCryptoCanada } from '@/src/views/CaseStudyCryptoCanada';

export const metadata: Metadata = {
  title: 'Crypto News Canada Case Study — WordPress News Aggregator | WBW',
  description:
    'How we built Crypto News Canada, an automated cryptocurrency news aggregator on WordPress and Bricks Builder with Feedzy RSS integration.',
  alternates: { canonical: 'https://www.webuildsites.net/work/crypto-news-canada' },
  openGraph: {
    title: 'Crypto News Canada Case Study — WordPress News Aggregator | WBW',
    description:
      'How we built Crypto News Canada, an automated cryptocurrency news aggregator on WordPress and Bricks Builder.',
    url: 'https://www.webuildsites.net/work/crypto-news-canada',
  },
};

export default function CryptoNewsCanadaPage() {
  return <CaseStudyCryptoCanada />;
}
