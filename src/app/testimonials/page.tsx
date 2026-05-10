import type { Metadata } from 'next';
import { Testimonials } from '@/src/views/Testimonials';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'What our clients say about working with WBW.',
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
