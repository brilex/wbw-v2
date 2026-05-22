import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'WBW',
  url: 'https://www.webuildsites.net',
  logo: 'https://www.webuildsites.net/icon.png',
  description:
    'We build websites that convert. Custom web development, UI/UX design, e-commerce, and SEO for ambitious brands.',
  email: 'info@webuildsites.net',
  telephone: '+38762827306',
  areaServed: 'Worldwide',
  priceRange: '$$',
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimization' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'WordPress Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CSR to SSR / SSG Migration' } },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.webuildsites.net'),
  title: {
    default: 'WBW — Premium Web Development Agency',
    template: '%s | WBW',
  },
  description:
    'We build websites that convert. Custom web development, UI/UX design, e-commerce, and SEO for ambitious brands.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'WBW',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-full">
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
