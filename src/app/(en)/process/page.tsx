import type { Metadata } from 'next';
import { Process } from '@/src/views/Process';

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'How we work: a clear, collaborative process from discovery to launch and beyond.',
  alternates: { canonical: 'https://www.webuildsites.net/process' },
  openGraph: {
    title: 'Our Process | WBW',
    description:
      'How we work: a clear, collaborative process from discovery to launch and beyond.',
    url: 'https://www.webuildsites.net/process',
  },
};

export default function ProcessPage() {
  return <Process />;
}
