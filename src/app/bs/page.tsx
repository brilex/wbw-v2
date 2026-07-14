import type { Metadata } from 'next';
import { HomeBS } from '@/src/views/bs/HomeBS';

export const metadata: Metadata = {
  title: 'WBW — Web Agencija | Izrada Web Stranica BiH',
  description:
    'Gradimo web stranice koje konvertuju. Prilagođeni web razvoj, UI/UX dizajn, e-commerce i SEO za ambiciozne brendove u BiH.',
  alternates: { canonical: 'https://www.webuildsites.net/bs' },
  openGraph: {
    title: 'WBW — Web Agencija | Izrada Web Stranica BiH',
    description:
      'Gradimo web stranice koje konvertuju. Prilagođeni web razvoj, UI/UX dizajn, e-commerce i SEO za ambiciozne brendove u BiH.',
    url: 'https://www.webuildsites.net/bs',
  },
};

export default function HomeBSPage() {
  return <HomeBS />;
}
