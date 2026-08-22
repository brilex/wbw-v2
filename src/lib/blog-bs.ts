import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const POSTS_DIR = path.join(process.cwd(), 'src/content/blog-bs');

export interface PostMetaBS {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
}

export interface PostBS extends PostMetaBS {
  contentHtml: string;
}

export function getAllPostsBS(): PostMetaBS[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? '',
        date: data.date ?? '',
        description: data.description ?? '',
        author: data.author ?? 'WBW Tim',
        tags: data.tags ?? [],
      } as PostMetaBS;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlugBS(slug: string): Promise<PostBS | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    description: data.description ?? '',
    author: data.author ?? 'WBW Tim',
    tags: data.tags ?? [],
    contentHtml,
  };
}
