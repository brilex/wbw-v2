import type { Metadata } from 'next';
import { Contact } from '@/src/views/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Have a project in mind? Get in touch and let's discuss how we can help.",
};

export default function ContactPage() {
  return <Contact />;
}
