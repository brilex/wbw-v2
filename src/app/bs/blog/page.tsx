import type { Metadata } from 'next';
import { getAllPostsBS } from '@/src/lib/blog-bs';
import { BlogBS } from '@/src/views/bs/BlogBS';

export const metadata: Metadata = {
  title: 'Blog — Izrada Web Stranica, Cijene & SEO Vodiči',
  description:
    'Praktični vodiči o izradi web stranica, cijenama, SEO optimizaciji i web dizajnu za firme u Bosni i Hercegovini.',
  alternates: { canonical: 'https://www.webuildsites.net/bs/blog' },
  openGraph: {
    title: 'Blog — Izrada Web Stranica, Cijene & SEO Vodiči | WBW',
    description:
      'Praktični vodiči o izradi web stranica, cijenama, SEO optimizaciji i web dizajnu za firme u Bosni i Hercegovini.',
    url: 'https://www.webuildsites.net/bs/blog',
  },
};

export default function BlogBSPage() {
  const posts = getAllPostsBS();
  return <BlogBS posts={posts} />;
}
