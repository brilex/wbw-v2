'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CalendarIcon, UserIcon, TagIcon, ArrowRightIcon } from 'lucide-react';
import type { PostBS } from '@/src/lib/blog-bs';

interface Props {
  post: PostBS;
}

export function BlogPostBS({ post }: Props) {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            href="/bs/blog"
            className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors mb-8">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Svi članci
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {post.tags.length > 0 && (
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <TagIcon className="w-3 h-3 text-blue-600" />
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-zinc-600 leading-relaxed mb-8">{post.description}</p>

            <div className="flex items-center gap-6 text-sm text-zinc-500 pb-8 border-b border-zinc-100">
              <span className="flex items-center gap-2">
                <UserIcon className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('bs-BA', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-zinc prose-lg max-w-none
              prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-zinc-950
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-zinc-600 prose-p:leading-relaxed
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-zinc-950
              prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-zinc-950 prose-pre:text-zinc-100 prose-pre:rounded-xl prose-pre:p-6
              prose-blockquote:border-l-blue-600 prose-blockquote:text-zinc-600
              prose-ul:text-zinc-600 prose-ol:text-zinc-600
              prose-li:my-1
              prose-hr:border-zinc-100
              prose-table:text-sm
              prose-th:text-zinc-950 prose-th:font-semibold
              prose-td:text-zinc-600"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
              Spremni da poboljšate svoju web stranicu?
            </h2>
            <p className="text-xl text-blue-100 mb-8">Javite nam se i pokazaćemo vam šta je moguće.</p>
            <Link
              href="/bs/kontakt"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
              Pokrenite projekt
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
