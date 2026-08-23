import type { Metadata } from 'next';
import { AboutBS } from '@/src/views/bs/AboutBS';

export const metadata: Metadata = {
  title: 'O Nama — Web Agencija iz Bosne i Hercegovine | WBW',
  description:
    'WBW je web agencija iz BiH. Gradimo ručno kodirane sajtove koji se rangiraju na Googleu i pretvaraju posjetioce u kupce. Pogledajte naš proces i rezultate.',
  alternates: {
    canonical: 'https://www.webuildsites.net/bs/o-nama',
    languages: {
      en: 'https://www.webuildsites.net/about',
      bs: 'https://www.webuildsites.net/bs/o-nama',
    },
  },
  openGraph: {
    title: 'O Nama — Web Agencija iz Bosne i Hercegovine | WBW',
    description:
      'WBW je web agencija iz BiH. Gradimo ručno kodirane sajtove koji se rangiraju na Googleu i pretvaraju posjetioce u kupce.',
    url: 'https://www.webuildsites.net/bs/o-nama',
  },
};

export default function AboutBSPage() {
  return <AboutBS />;
}
