import type { Metadata } from 'next';
import { TestimonialsBS } from '@/src/views/bs/TestimonialsBS';

export const metadata: Metadata = {
  title: 'Recenzije i Rezultati Klijenata | WBW Web Agencija',
  description:
    'Pogledajte šta klijenti kažu o radu s WBW-om. Stvarni projekti, stvarni rezultati — od PVC stolarije u BiH do developer alata širom svijeta.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/recenzije' },
  openGraph: {
    title: 'Recenzije i Rezultati Klijenata | WBW Web Agencija',
    description:
      'Pogledajte šta klijenti kažu o radu s WBW-om. Stvarni projekti, stvarni rezultati — od PVC stolarije u BiH do developer alata širom svijeta.',
    url: 'https://www.webuildsites.net/bs/recenzije',
  },
};

export default function TestimonialsBSPage() {
  return <TestimonialsBS />;
}
