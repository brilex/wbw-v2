import type { Metadata } from 'next';
import { Testimonials } from '@/src/views/Testimonials';

export const metadata: Metadata = {
  title: 'Client Reviews & Results',
  description:
    'See what clients say about working with WBW. Real projects, real feedback — from PVC joinery in Bosnia to developer tools used worldwide.',
  alternates: { canonical: 'https://www.webuildsites.net/testimonials' },
  openGraph: {
    title: 'Client Reviews & Results | WBW',
    description:
      'See what clients say about working with WBW. Real projects, real feedback — from PVC joinery in Bosnia to developer tools used worldwide.',
    url: 'https://www.webuildsites.net/testimonials',
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
