import type { Metadata } from 'next';
import { IndustriesBS } from '@/src/views/bs/IndustriesBS';

export const metadata: Metadata = {
  title: 'Industrije | WBW Web Agencija',
  description:
    'Duboka stručnost u svakoj industriji. Prilagođavamo naš pristup kako bismo isporučili iznimne rezultate u vašem sektoru.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/industrije' },
  openGraph: {
    title: 'Industrije | WBW Web Agencija',
    description:
      'Duboka stručnost u svakoj industriji. Prilagođavamo naš pristup kako bismo isporučili iznimne rezultate u vašem sektoru.',
    url: 'https://www.webuildsites.net/bs/industrije',
  },
};

export default function IndustriesBSPage() {
  return <IndustriesBS />;
}
