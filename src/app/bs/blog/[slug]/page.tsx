import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPostsBS, getPostBySlugBS } from '@/src/lib/blog-bs';
import { BlogPostBS } from '@/src/views/bs/BlogPostBS';

export function generateStaticParams() {
  return getAllPostsBS().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlugBS(slug);
  if (!post) return {};
  const url = `https://www.webuildsites.net/bs/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | WBW`,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostBSPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlugBS(slug);
  if (!post) notFound();

  return <BlogPostBS post={post} />;
}
