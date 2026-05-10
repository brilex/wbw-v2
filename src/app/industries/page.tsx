import type { Metadata } from 'next';
import { Industries } from '@/src/views/Industries';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Tailored web expertise across 16+ industry verticals. We understand your sector and build for it.',
};

export default function IndustriesPage() {
  return <Industries />;
}
