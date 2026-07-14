import type { Metadata } from 'next';
import { ContactBS } from '@/src/views/bs/ContactBS';

export const metadata: Metadata = {
  title: 'Kontakt | WBW Web Agencija',
  description:
    'Pokrenite vaš projekt danas. Kontaktirajte WBW tim za besplatnu konsultaciju o izradi web stranice, dizajnu ili SEO-u.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/kontakt' },
  openGraph: {
    title: 'Kontakt | WBW Web Agencija',
    description:
      'Pokrenite vaš projekt danas. Kontaktirajte WBW tim za besplatnu konsultaciju o izradi web stranice, dizajnu ili SEO-u.',
    url: 'https://www.webuildsites.net/bs/kontakt',
  },
};

export default function ContactBSPage() {
  return <ContactBS />;
}
