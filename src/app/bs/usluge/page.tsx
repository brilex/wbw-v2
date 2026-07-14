import type { Metadata } from 'next';
import { ServicesBS } from '@/src/views/bs/ServicesBS';

export const metadata: Metadata = {
  title: 'Usluge Web Razvoja | WBW Agencija',
  description:
    'Od web razvoja do SEO-a i e-commerce-a — pružamo sveobuhvatna digitalna rješenja prilagođena vašim poslovnim potrebama.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/usluge' },
  openGraph: {
    title: 'Usluge Web Razvoja | WBW Agencija',
    description:
      'Od web razvoja do SEO-a i e-commerce-a — pružamo sveobuhvatna digitalna rješenja prilagođena vašim poslovnim potrebama.',
    url: 'https://www.webuildsites.net/bs/usluge',
  },
};

export default function ServicesBSPage() {
  return <ServicesBS />;
}
