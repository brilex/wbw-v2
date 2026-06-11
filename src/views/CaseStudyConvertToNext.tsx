'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, CheckIcon } from 'lucide-react';

const STATS = [
  { value: '< 60s', label: 'Conversion time' },
  { value: '27+', label: 'Blog posts indexed' },
  { value: '8', label: 'Transform types' },
  { value: '$0', label: 'Cost to users' },
];

const TRANSFORMS = [
  'React Router → Next.js App Router file structure',
  'react-router-dom imports → next/link & next/navigation',
  'useEffect data fetching → async Server Components',
  '<img> tags → next/image with remotePatterns auto-config',
  'VITE_* env vars → NEXT_PUBLIC_* throughout codebase',
  '\'use client\' injected on hook-dependent components',
  'Framer Motion components marked as client components',
  'Tailwind config updated for App Router directory paths',
];

const TECH = [
  { name: 'Next.js 15', desc: 'App Router, SSR, Server Components' },
  { name: 'TypeScript', desc: 'End-to-end type safety' },
  { name: 'Turborepo', desc: 'Monorepo: web app + core engine' },
  { name: 'Vercel', desc: 'Serverless deployment' },
  { name: 'Supabase', desc: 'Analytics and conversion logging' },
  { name: 'Tailwind CSS', desc: 'Utility-first styling' },
];

export function CaseStudyConvertToNext() {
  return (
    <main className="min-h-screen bg-white">

      {/* Back */}
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-10"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            All case studies
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                Developer Tool
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                SaaS
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              ConvertToNext
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mb-8">
              An automated conversion engine that transforms Vite + React projects into
              production-ready Next.js 15 App Router apps — solving the SEO invisibility
              problem of AI-generated websites.
            </p>
            <a
              href="https://converttonext.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Visit live site
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">The Problem</div>
              <h2 className="text-4xl font-bold text-zinc-950 mb-6">AI-built websites are invisible to Google</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Tools like Bolt.new, Lovable, v0, and Cursor generate React apps using Vite — a fast,
                modern build tool. But Vite produces client-side rendered (CSR) apps by default.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                When Googlebot visits a CSR app, it receives an empty HTML shell. All the actual
                content lives in JavaScript. Google can execute it, but processes this in a delayed
                rendering queue — pages can sit unindexed for weeks.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Developers spend hours building a product, launch it, and wonder why it never shows
                up in search. The content is there — Google just can&apos;t see it.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">
                  What Googlebot sees — CSR (Vite)
                </div>
                <pre className="font-mono text-sm text-red-800 whitespace-pre-wrap">{`<body>
  <div id="root"></div>
  <script src="/assets/index.js"></script>
</body>`}</pre>
                <p className="text-xs text-red-600 mt-3">Empty shell. Not indexed.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">
                  What Googlebot sees — SSR (Next.js)
                </div>
                <pre className="font-mono text-sm text-emerald-800 whitespace-pre-wrap">{`<body>
  <nav>...</nav>
  <main>
    <h1>Your actual page title</h1>
    <p>Real content, fully rendered.</p>
  </main>
</body>`}</pre>
                <p className="text-xs text-emerald-700 mt-3">Full HTML. Indexed immediately.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">The Solution</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">Automated migration in under 60 seconds</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              ConvertToNext reads the entire project at once, builds a dependency graph, and applies
              deterministic transforms to every file simultaneously.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { step: '01', title: 'Upload', desc: 'User uploads a zip of their Bolt, Lovable, or Vite project. No account needed.' },
              { step: '02', title: 'Transform', desc: 'The engine analyzes routes, imports, data fetching, images, and config — then rewrites everything for Next.js.' },
              { step: '03', title: 'Download', desc: 'A complete Next.js 15 App Router project is returned as a zip. Deploy to Vercel in minutes.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-zinc-200 rounded-2xl p-8"
              >
                <div className="text-blue-600 font-mono text-xs font-bold mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white border border-zinc-200 rounded-2xl p-8">
            <h3 className="font-semibold text-zinc-950 mb-6">What gets converted automatically</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {TRANSFORMS.map(item => (
                <div key={item} className="flex items-start gap-3 text-sm text-zinc-600">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Technical Implementation</div>
            <h2 className="text-4xl font-bold text-zinc-950 mb-4">Built as a Turborepo monorepo</h2>
            <p className="text-zinc-600 max-w-2xl leading-relaxed">
              Two packages: a core conversion engine (TypeScript AST transforms) and a Next.js web
              application. The engine can be tested and published independently of the UI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
              <div className="font-mono text-xs text-zinc-400 mb-4">packages/core</div>
              <h3 className="font-semibold text-zinc-950 mb-3">Conversion Engine</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                AST-based transform pipeline. Reads input files, identifies React Router config,
                useEffect fetches, img tags, and env var references — then outputs transformed
                Next.js files with no manual intervention.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                {['Route analysis and App Router mapping', 'Import graph construction', 'AST-level code transforms', 'Config file generation (next.config.ts, package.json)'].map(i => (
                  <li key={i} className="flex items-center gap-2"><span className="text-blue-600">→</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
              <div className="font-mono text-xs text-zinc-400 mb-4">apps/web</div>
              <h3 className="font-semibold text-zinc-950 mb-3">Web Application</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Next.js 15 App Router site with a serverless API route that handles zip uploads,
                runs the conversion engine, and returns the output as a downloadable zip. No files
                written to disk — everything in memory.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                {['Serverless file processing on Vercel', 'In-memory only — zero disk writes', 'Supabase analytics (anonymized)', '27+ SEO-targeted technical blog posts'].map(i => (
                  <li key={i} className="flex items-center gap-2"><span className="text-blue-600">→</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {TECH.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-zinc-50 border border-zinc-200 rounded-xl p-5"
              >
                <div className="font-semibold text-zinc-950 text-sm mb-1">{item.name}</div>
                <div className="text-zinc-500 text-xs">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Want something like this built?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We design and develop web products, SaaS tools, and high-performance sites.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl"
              >
                Start a project
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://converttonext.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                View live site <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
