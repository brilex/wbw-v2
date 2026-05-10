import type { Metadata } from 'next';
import { About } from '@/src/views/About';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the WBW team — designers and developers building exceptional digital experiences.',
};

export default function AboutPage() {
  return <About />;
}
