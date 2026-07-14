import type { Metadata } from 'next';
import { AboutBS } from '@/src/views/bs/AboutBS';

export const metadata: Metadata = {
  title: 'O Nama | WBW Web Agencija',
  description:
    'Upoznajte tim iza WBW-a. Radimo s ambicioznim brendovima kako bismo izgradili web stranice koje donose stvarne poslovne rezultate.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/o-nama' },
  openGraph: {
    title: 'O Nama | WBW Web Agencija',
    description:
      'Upoznajte tim iza WBW-a. Radimo s ambicioznim brendovima kako bismo izgradili web stranice koje donose stvarne poslovne rezultate.',
    url: 'https://www.webuildsites.net/bs/o-nama',
  },
};

export default function AboutBSPage() {
  return <AboutBS />;
}
