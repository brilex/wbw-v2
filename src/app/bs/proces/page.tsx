import type { Metadata } from 'next';
import { ProcessBS } from '@/src/views/bs/ProcessBS';

export const metadata: Metadata = {
  title: 'Naš Proces | WBW Web Agencija',
  description:
    'Saznajte kako radimo — od otkrivanja i strategije do razvoja i lansiranja. Transparentan proces koji donosi rezultate.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/proces' },
  openGraph: {
    title: 'Naš Proces | WBW Web Agencija',
    description:
      'Saznajte kako radimo — od otkrivanja i strategije do razvoja i lansiranja. Transparentan proces koji donosi rezultate.',
    url: 'https://www.webuildsites.net/bs/proces',
  },
};

export default function ProcessBSPage() {
  return <ProcessBS />;
}
