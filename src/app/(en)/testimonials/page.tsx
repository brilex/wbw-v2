import type { Metadata } from 'next';
import { Testimonials } from '@/src/views/Testimonials';

export const metadata: Metadata = {
  title: 'Client Results — +968% Search Growth, Verified',
  description:
    'No stock quotes. See the actual numbers: +968% organic traffic, first customer in week 1, a trilingual manufacturing site — each with the case study behind it.',
  alternates: {
    canonical: 'https://www.webuildsites.net/testimonials',
    languages: {
      en: 'https://www.webuildsites.net/testimonials',
      bs: 'https://www.webuildsites.net/bs/recenzije',
    },
  },
  openGraph: {
    title: 'Client Results — +968% Search Growth, Verified | WBW',
    description:
      'No stock quotes. See the actual numbers: +968% organic traffic, first customer in week 1, a trilingual manufacturing site.',
    url: 'https://www.webuildsites.net/testimonials',
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
