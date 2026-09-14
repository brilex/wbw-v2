import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
}

export interface Post extends PostMeta {
  contentHtml: string;
  faqs: { question: string; answer: string }[];
}

function extractFaqs(markdown: string): { question: string; answer: string }[] {
  const section = markdown.match(
    /##\s*Frequently asked questions([\s\S]*?)(\n##\s|\n*$)/i,
  );
  if (!section) return [];

  const faqs: { question: string; answer: string }[] = [];
  const regex = /\*\*(.+?\?)\*\*\s*([^\n]+)/g;
  let match;
  while ((match = regex.exec(section[1])) !== null) {
    faqs.push({ question: match[1].trim(), answer: match[2].trim() });
  }
  return faqs;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        description: data.description ?? "",
        author: data.author ?? "WBW Team",
        tags: data.tags ?? [],
      } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);
  const contentHtml = processed.toString();
  const faqs = extractFaqs(content);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    description: data.description ?? "",
    author: data.author ?? "WBW Team",
    tags: data.tags ?? [],
    contentHtml,
    faqs,
  };
}
