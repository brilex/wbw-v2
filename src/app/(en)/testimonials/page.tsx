import type { Metadata } from 'next';
import { Testimonials } from '@/src/views/Testimonials';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'What our clients say about working with WBW — real results from real projects.',
  alternates: { canonical: 'https://www.webuildsites.net/testimonials' },
  openGraph: {
    title: 'Testimonials | WBW',
    description:
      'What our clients say about working with WBW — real results from real projects.',
    url: 'https://www.webuildsites.net/testimonials',
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
