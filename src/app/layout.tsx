import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
