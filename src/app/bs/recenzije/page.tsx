import type { Metadata } from 'next';
import { TestimonialsBS } from '@/src/views/bs/TestimonialsBS';

export const metadata: Metadata = {
  title: 'Rezultati Klijenata — +968% Rast Pretrage',
  description:
    'Bez izmišljenih citata. Pogledajte stvarne brojke: +968% organske pretrage, prva mušterija u prvoj sedmici, trojezični sajt za proizvođača — sa studijom slučaja iza svake.',
  alternates: {
    canonical: 'https://www.webuildsites.net/bs/recenzije',
    languages: {
      en: 'https://www.webuildsites.net/testimonials',
      bs: 'https://www.webuildsites.net/bs/recenzije',
    },
  },
  openGraph: {
    title: 'Rezultati Klijenata — +968% Rast Pretrage | WBW',
    description:
      'Bez izmišljenih citata. Pogledajte stvarne brojke: +968% organske pretrage, prva mušterija u prvoj sedmici, trojezični sajt za proizvođača.',
    url: 'https://www.webuildsites.net/bs/recenzije',
  },
};

export default function TestimonialsBSPage() {
  return <TestimonialsBS />;
}
