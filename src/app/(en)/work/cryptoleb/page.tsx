import type { Metadata } from 'next';
import { CaseStudyCryptoLeb } from '@/src/views/CaseStudyCryptoLeb';

export const metadata: Metadata = {
  title: 'CryptoLeb Case Study — Custom AI News Rewriter Plugin | WBW',
  description:
    'How we built CryptoLeb, a crypto news platform for a Lebanese audience powered by a custom-built WordPress plugin that rewrites RSS content with AI automatically.',
  alternates: { canonical: 'https://www.webuildsites.net/work/cryptoleb' },
  openGraph: {
    title: 'CryptoLeb Case Study — Custom AI News Rewriter Plugin | WBW',
    description:
      'How we built CryptoLeb, a crypto news platform powered by a custom-built AI rewriting WordPress plugin.',
    url: 'https://www.webuildsites.net/work/cryptoleb',
  },
};

export default function CryptoLebPage() {
  return <CaseStudyCryptoLeb />;
}
