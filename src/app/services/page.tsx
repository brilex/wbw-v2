import type { Metadata } from 'next';
import { Services } from '@/src/views/Services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive digital solutions: web development, UI/UX design, e-commerce, SEO, WordPress, and maintenance.',
};

export default function ServicesPage() {
  return <Services />;
}
