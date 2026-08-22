'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, CheckIcon } from 'lucide-react';

const STATS = [
  { value: 'Custom', label: 'AI rewriter plugin' },
  { value: '500-600', label: 'Words per rewritten article' },
  { value: '7', label: 'Content categories' },
  { value: 'Hourly', label: 'Automated publishing cron' },
];

const SOLUTIONS = [
  'WordPress + Bricks Builder — aggregator layout with "Go Deeper" article cards',
  'Custom "News Rewriter" plugin — built from scratch, now on v1.2.0',
  'OpenRouter API integration — auto-routing to free-tier models after direct model IDs proved unreliable',
  'RSS-to-article expansion — short Feedzy excerpts rewritten into 500-600 word structured posts with H2/H3 headings',
  'Editorial guardrails — regex cleanup to strip duplicate AI-generated H1s from output',
  'Mandatory "Lebanon Context" section — every article ties crypto news back to local banking restrictions, LBP inflation, and capital controls',
  'Rate-limit handling — 15s delay between API calls and extended cURL timeouts to survive 429 errors',
  'Custom CoinGecko and Fear & Greed Index widgets — live market data built directly into the theme',
  'Image sourcing — kept original Feedzy image URLs with proper "Image Source" attribution instead of generic stock or AI-generated images',
  'Category-level SEO — Rank Math + WP Rocket, with category descriptions written for a Lebanese audience across Bitcoin, Altcoins, DeFi, Solana, Ethereum, and Market Updates',
];

const TECH = [
  { name: 'WordPress', desc: 'CMS powering the full site' },
  { name: 'Bricks Builder', desc: 'Custom aggregator layout and templates' },
  { name: 'Feedzy', desc: 'RSS ingestion as draft posts' },
  { name: 'Custom PHP plugin', desc: 'News Rewriter — AI rewriting pipeline' },
  { name: 'OpenRouter API', desc: 'AI model routing for article rewriting' },
  { name: 'Rank Math + WP Rocket', desc: 'SEO and performance' },
];

export function CaseStudyCryptoLeb() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-10">
            <ArrowLeftIcon className="w-4 h-4" />
            All case studies
          </Link>
        </div>
      </div>

      <section className="pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                WordPress + Bricks
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                Custom AI Plugin
              </span>
              <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-full border border-zinc-200">
                News Aggregator
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              CryptoLeb
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mb-4">
              A crypto news platform for a Lebanese audience — built on WordPress
              and Bricks Builder with a custom-coded AI rewriting plugin that
              transforms raw RSS feeds into original, locally-contextualized articles automatically.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-8">
              <span>News & Media</span>
              <span className="w-1 h-1 bg-zinc-300 rounded-full" />
              <span>Cryptocurrency · Lebanon</span>
            </div>
            <a
              href="https://cryptoleb.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              Visit live site
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
            <Image src="/cryptoleb.webp" alt="CryptoLeb website" fill className="object-contain" priority />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">The Challenge</div>
              <h2 className="text-4xl font-bold text-zinc-950 mb-6">Generic crypto news doesn't serve a local audience</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Raw RSS feeds give you volume, not relevance. A Lebanese reader
                following crypto markets cares about a different angle than a
                US or European reader — banking restrictions, LBP inflation,
                remittances, and capital controls shape how that news actually matters to them.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Simply republishing wire content wasn't an option — it needed to
                be rewritten into original, well-structured articles, automatically,
                at a pace no small editorial team could sustain manually.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                On top of content, the site needed live market data — price
                tracking and sentiment indicators — presented natively rather
                than through an embedded third-party widget.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-8 space-y-4">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
                Key requirements
              </div>
              {[
                'Automated rewriting of RSS content into original articles',
                'Consistent local context tying global crypto news to Lebanon',
                'Reliable AI pipeline that survives rate limits and model changes',
                'Native market data widgets, not third-party embeds',
                'Clean image sourcing with proper attribution',
                'Category-level SEO built for a Lebanese audience',
              ].map((req) => (
                <div key={req} className="flex items-start gap-3 text-sm text-blue-800">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  {req}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">The Solution</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">A custom-built AI rewriting pipeline, not a plugin off the shelf</h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              We built a bespoke WordPress plugin — News Rewriter — from scratch,
              now on its third iteration, handling everything from API routing to
              editorial cleanup automatically.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {SOLUTIONS.map((solution, i) => (
              <motion.div key={solution} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-white border border-zinc-200 rounded-xl p-5 text-sm text-zinc-700">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                {solution}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">Tech stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TECH.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-zinc-200 rounded-xl p-5">
                <div className="font-semibold text-zinc-950 text-sm mb-1">{item.name}</div>
                <div className="text-zinc-500 text-xs">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Need a custom plugin, not just a website?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We build bespoke WordPress functionality — AI pipelines, automation,
              custom widgets — when off-the-shelf plugins can't do what you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
                Start a project
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://cryptoleb.ai" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                View live site <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
