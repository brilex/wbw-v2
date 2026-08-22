'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUpIcon, GlobeIcon, ArrowRightIcon, SearchIcon, ZapIcon } from 'lucide-react';

export function Testimonials() {
  const results = [
    {
      icon: TrendingUpIcon,
      metric: '+968%',
      title: 'Search traffic growth',
      description: 'Hamada & Co. went from near-zero visibility to 968% organic growth after we rebuilt their site with on-page SEO baked in from day one.',
      project: 'Hamada & Co.',
      href: '/work/hamada-co',
    },
    {
      icon: ZapIcon,
      metric: 'Week 1',
      title: 'First online customer',
      description: 'firme.ba received its first paying customer within the first week of launch — before any paid advertising.',
      project: 'firme.ba',
      href: '/work/firme-ba',
    },
    {
      icon: GlobeIcon,
      metric: '3 languages',
      title: 'Trilingual corporate site',
      description: 'Neimax needed a professional presence in Bosnian, English, and German. We delivered a custom WordPress theme with seamless language switching.',
      project: 'Neimax d.o.o.',
      href: '/work/neimax',
    },
    {
      icon: SearchIcon,
      metric: 'Page 1',
      title: 'Google rankings from launch',
      description: 'WLDM.io launched with SEO-ready architecture including interactive tools and structured data — ranking for competitive backlink keywords immediately.',
      project: 'WLDM',
      href: '/work/wldm',
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Real results, not promises
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We let the numbers speak. Here are measurable outcomes from
              recent projects — no stock quotes, no made-up names.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-zinc-100">
            {[
              { value: '7+', label: 'Years experience' },
              { value: '8', label: 'Websites delivered' },
              { value: '+968%', label: 'Search growth (client)' },
              { value: 'Week 1', label: 'First customer for client' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg transition-all flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <result.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600">{result.metric}</div>
                </div>

                <h3 className="text-xl font-semibold text-zinc-950 mb-3">{result.title}</h3>
                <p className="text-zinc-600 leading-relaxed mb-6 flex-1">
                  {result.description}
                </p>
                <div className="pt-6 border-t border-zinc-100">
                  <Link href={result.href} className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all">
                    View {result.project} case study <ArrowRightIcon className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Want results like these?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can grow your business online.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
              Start a project
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
