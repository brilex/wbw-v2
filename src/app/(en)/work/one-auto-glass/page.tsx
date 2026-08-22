import type { Metadata } from 'next';
import { CaseStudyOneAutoGlass } from '@/src/views/CaseStudyOneAutoGlass';

export const metadata: Metadata = {
  title: 'One Auto Glass Case Study — Windshield Service Website | WBW',
  description:
    'How we built the website for One Auto Glass, a windshield repair and replacement service, focused on converting urgent searches into booked quotes.',
  alternates: { canonical: 'https://www.webuildsites.net/work/one-auto-glass' },
  openGraph: {
    title: 'One Auto Glass Case Study — Windshield Service Website | WBW',
    description:
      'How we built the website for One Auto Glass, a windshield repair and replacement service.',
    url: 'https://www.webuildsites.net/work/one-auto-glass',
  },
};

export default function OneAutoGlassPage() {
  return <CaseStudyOneAutoGlass />;
}
