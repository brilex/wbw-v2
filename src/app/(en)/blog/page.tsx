import type { Metadata } from 'next';
import { getAllPosts } from '@/src/lib/blog';
import { Blog } from '@/src/views/Blog';

export const metadata: Metadata = {
  title: 'Blog — SEO, Core Web Vitals & Web Dev Guides',
  description:
    'Practical guides on fixing React SEO problems, Core Web Vitals, CSR vs SSR, and building websites that Google actually indexes.',
  alternates: { canonical: 'https://www.webuildsites.net/blog' },
  openGraph: {
    title: 'Blog — SEO, Core Web Vitals & Web Dev Guides | WBW',
    description:
      'Practical guides on fixing React SEO problems, Core Web Vitals, CSR vs SSR, and building websites that Google actually indexes.',
    url: 'https://www.webuildsites.net/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <Blog posts={posts} />;
}
