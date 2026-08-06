'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, CheckIcon } from 'lucide-react';

const STATS = [
  { value: '88,400+', label: 'Companies listed' },
  { value: '78', label: 'Categories' },
  { value: '2,767', label: 'Category × city pages' },
  { value: '−93.9%', label: 'Duplicate meta descriptions' },
];

const AUDIT = [
  {
    title: 'Duplicate meta descriptions',
    before: '98,363',
    after: '5,986',
    delta: '−93.9%',
    desc: 'Meta templates rewritten to use company-specific fields — name, category, city, address, phone, size, year registered — instead of the shared registry activity text. High-severity findings fell from 84,402 to 188 (−99.8%).',
  },
  {
    title: 'Slug inconsistencies',
    before: '88,388',
    after: '0',
    delta: '−100%',
    desc: 'A transliteration layer normalises Bosnian diacritics (č, ć, ž, š, đ) into stable, collision-free URL slugs — applied once at ingest and enforced on every build.',
  },
  {
    title: 'Missing schema fields',
    before: '37,457',
    after: '119',
    delta: '−99.7%',
    desc: 'Organization and WebSite/SearchAction on the root, BreadcrumbList across all three category levels, LocalBusiness on every company profile.',
  },
];

const TECH = [
  { name: 'Next.js 15', desc: 'App Router, ISR with on-demand revalidation' },
  { name: 'PostgreSQL', desc: 'Registry ingest, dedup, and query layer' },
  { name: 'Contabo VPS', desc: 'Nginx reverse proxy + Certbot TLS' },
  { name: 'GitHub Actions', desc: 'CI/CD with audit gate on every build' },
  { name: 'Schema.org JSON-LD', desc: 'Organization, LocalBusiness, BreadcrumbList' },
  { name: 'Custom pSEO audit CLI', desc: 'Node.js — duplicate, slug, and schema checks' },
];

export function CaseStudyFirmeBa() {
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
              <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-full border border-red-200">
                Directory
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                Programmatic SEO
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              firme.ba
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mb-8">
              A programmatic business directory turning 88,000 raw government registry
              records into a searchable, indexable directory of Bosnian companies — without
              generating a single thin-content page.
            </p>
            <a
              href="https://firme.ba"
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
              <h2 className="text-4xl font-bold text-zinc-950 mb-6">Public business data that nobody can use</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                The FIA registry contains every registered company in Bosnia &amp; Herzegovina.
                But the data arrives raw: zero descriptive copy, roughly 42% of records missing
                an address or phone number, and an activity description that is byte-identical
                across hundreds of companies in the same category.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                The naive programmatic-SEO approach — one page per record — turns 88,000 rows
                into tens of thousands of pages sharing the same meta description. That is
                exactly what Google classifies as thin and duplicate content.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Scale is not the hard part. Making each page worth indexing is.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">
                  What the registry gives you
                </div>
                <pre className="font-mono text-sm text-red-800 whitespace-pre-wrap">{`naziv:     "A.N. GRADNJA D.O.O."
adresa:    null
telefon:   null
djelatnost_opis:
  "Gradnja stambenih i
   nestambenih zgrada"`}</pre>
                <p className="text-xs text-red-600 mt-3">
                  Same activity text on 1,000+ records. Nothing to index.
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">
                  What the page renders
                </div>
                <pre className="font-mono text-sm text-emerald-800 whitespace-pre-wrap">{`<title>A.N. GRADNJA d.o.o. —
  Građevinarstvo, Zavidovići</title>

<meta name="description" content=
  "A.N. GRADNJA d.o.o., Sinanovići b.b,
   Zavidovići. Građevinarstvo." />`}</pre>
                <p className="text-xs text-emerald-700 mt-3">
                  Company-specific. Distinct from every sibling page.
                </p>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">Threshold-gated page generation</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Pages are not generated because a URL is possible. They are generated when there
              is enough real data behind them to be worth reading.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: '01',
                title: 'Threshold',
                desc: 'A category × city combination earns its own page only at 3+ companies. Below that, the page is noindex. Of 3,972 possible combinations, 2,767 (69.7%) qualify.',
              },
              {
                step: '02',
                title: 'Revalidate',
                desc: 'Next.js ISR with on-demand revalidation. When a combination crosses the threshold, the page, the sitemap, and the internal links update without a redeploy.',
              },
              {
                step: '03',
                title: 'Audit',
                desc: 'A custom Node.js CLI checks every build for duplicate meta (Jaccard and cosine similarity), slug consistency, and LocalBusiness schema completeness.',
              },
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
            <h3 className="font-semibold text-zinc-950 mb-6">What the threshold protects against</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Pages with one listing and no comparative value',
                'Near-identical meta across sibling category pages',
                'Crawl budget spent on combinations nobody searches',
                'Internal links pointing at effectively empty pages',
                'Sitemap entries Google will later drop as soft 404s',
                'Category pages that outrank the profiles they link to',
              ].map(item => (
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
            <h2 className="text-4xl font-bold text-zinc-950 mb-4">Every build has to pass the audit</h2>
            <p className="text-zinc-600 max-w-2xl leading-relaxed">
              The audit CLI runs in CI and reports findings by severity. These are the three
              categories that mattered most, measured before and after the fixes landed.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {AUDIT.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8"
              >
                <h3 className="font-semibold text-zinc-950 mb-4">{item.title}</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-bold text-zinc-400 line-through">{item.before}</span>
                  <span className="text-zinc-400">→</span>
                  <span className="text-3xl font-bold text-zinc-950">{item.after}</span>
                  <span className="text-sm font-semibold text-emerald-600">{item.delta}</span>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
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
              We design and develop web products, directories, and high-performance sites at scale.
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
                href="https://firme.ba"
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
