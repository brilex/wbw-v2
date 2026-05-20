import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold text-blue-600 mb-4">404</p>
        <h1 className="text-3xl font-bold text-zinc-950 mb-4">
          Page not found
        </h1>
        <p className="text-zinc-600 mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all">
            Go home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-zinc-200 text-zinc-950 font-semibold rounded-xl hover:border-zinc-300 transition-colors">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
