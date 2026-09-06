import type { Metadata } from 'next';
import { CaseStudyHamada } from '@/src/views/CaseStudyHamada';

export const metadata: Metadata = {
  title: 'WordPress Redesign Case Study: Hamada & Co. | WBW',
  description:
    'See how our WordPress website redesign for Hamada & Co. achieved 100/100 Lighthouse speed scores, +968% organic traffic growth, and landed its first paying client in 7 days.',
  alternates: { canonical: 'https://www.webuildsites.net/work/hamada-co' },
  openGraph: {
    title: 'WordPress Website Redesign Case Study: Hamada & Co. | WBW',
    description:
      'How we rebuilt Hamada & Co. with custom WordPress & Bricks Builder — achieving 100/100 PageSpeed and +968% organic traffic growth.',
    url: 'https://www.webuildsites.net/work/hamada-co',
    images: [{ url: '/hamada-rad.jpg', width: 1200, height: 630, alt: 'Hamada & Co Search Console Growth' }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'WordPress Website Redesign: Hamada & Co. Case Study',
  description:
    'How a complete website overhaul for a PVC & aluminium joinery company increased search impressions by 968% and generated its first customer in week one.',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.webuildsites.net/work/hamada-co',
  },
  author: {
    '@type': 'Organization',
    name: 'WBW',
    url: 'https://www.webuildsites.net',
  },
  publisher: {
    '@type': 'Organization',
    name: 'WBW',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.webuildsites.net/logo.png', // Prilagodite putanju do logotipa ako postoji
    },
  },
  about: [
    { '@type': 'Thing', name: 'WordPress Redesign' },
    { '@type': 'Thing', name: 'Search Engine Optimization' },
  ],
};

export default function HamadaCaseStudyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyHamada />
    </>
  );
}