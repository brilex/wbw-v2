import type { Metadata } from 'next';
import { getAllPosts } from '@/src/lib/blog';
import { Blog } from '@/src/views/Blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on web development, performance, SEO, and building better digital products.',
  alternates: { canonical: 'https://www.webuildsites.net/blog' },
  openGraph: {
    title: 'Blog | WBW',
    description:
      'Insights on web development, performance, SEO, and building better digital products.',
    url: 'https://www.webuildsites.net/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <Blog posts={posts} />;
}
