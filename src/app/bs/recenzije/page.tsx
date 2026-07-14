import type { Metadata } from 'next';
import { TestimonialsBS } from '@/src/views/bs/TestimonialsBS';

export const metadata: Metadata = {
  title: 'Recenzije Klijenata | WBW Web Agencija',
  description:
    'Šta klijenti kažu o WBW-u. Pročitajte iskustva kompanija koje su transformisale svoju digitalnu prisutnost uz naš tim.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/recenzije' },
  openGraph: {
    title: 'Recenzije Klijenata | WBW Web Agencija',
    description:
      'Šta klijenti kažu o WBW-u. Pročitajte iskustva kompanija koje su transformisale svoju digitalnu prisutnost uz naš tim.',
    url: 'https://www.webuildsites.net/bs/recenzije',
  },
};

export default function TestimonialsBSPage() {
  return <TestimonialsBS />;
}
