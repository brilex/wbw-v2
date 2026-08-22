'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, TagIcon } from 'lucide-react';
import type { PostMetaBS } from '@/src/lib/blog-bs';

interface Props {
  posts: PostMetaBS[];
}

export function BlogBS({ posts }: Props) {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">Blog</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Vodiči o izradi web stranica, cijenama, SEO optimizaciji i web dizajnu za firme u Bosni i Hercegovini.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-zinc-500 text-center py-20">Uskoro stižu novi članci.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}>
                  <Link
                    href={`/bs/blog/${post.slug}`}
                    className="group block bg-white rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg transition-all h-full p-8">
                    {post.tags.length > 0 && (
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <TagIcon className="w-3 h-3 text-blue-600" />
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6 line-clamp-3">{post.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        <CalendarIcon className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('bs-BA', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </div>
                      <span className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                        Pročitaj
                        <ArrowRightIcon className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
