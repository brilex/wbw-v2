import type { Metadata } from 'next';
import { CaseStudies } from '@/src/views/CaseStudies';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'See the websites and web applications we have built for clients across industries.',
};

export default function WorkPage() {
  return <CaseStudies />;
}
