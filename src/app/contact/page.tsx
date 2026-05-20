import type { Metadata } from 'next';
import { Contact } from '@/src/views/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Have a project in mind? Get in touch and let's discuss how we can help bring your vision to life.",
  alternates: { canonical: 'https://www.webuildsites.net/contact' },
  openGraph: {
    title: 'Contact | WBW',
    description:
      "Have a project in mind? Get in touch and let's discuss how we can help bring your vision to life.",
    url: 'https://www.webuildsites.net/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}
