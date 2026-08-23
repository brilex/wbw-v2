import type { Metadata } from 'next';
import { Contact } from '@/src/views/Contact';

export const metadata: Metadata = {
  title: 'Free Consultation — Start Your Web Project',
  description:
    'Tell us about your project and get a free, no-obligation consultation within 24 hours. Web development packages from $400.',
  alternates: {
    canonical: 'https://www.webuildsites.net/contact',
    languages: {
      en: 'https://www.webuildsites.net/contact',
      bs: 'https://www.webuildsites.net/bs/kontakt',
    },
  },
  openGraph: {
    title: 'Free Consultation — Start Your Web Project | WBW',
    description:
      'Tell us about your project and get a free, no-obligation consultation within 24 hours. Web development packages from $400.',
    url: 'https://www.webuildsites.net/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}
