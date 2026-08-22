'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, CheckIcon } from 'lucide-react';

const STATS = [
  { value: '25+', label: 'Years in business' },
  { value: '500+', label: 'Projects completed' },
  { value: 'Custom', label: 'WordPress build' },
  { value: 'Edmonton', label: 'Alberta' },
];

const SOLUTIONS = [
  'Custom WordPress build — clean, professional design for a home renovation audience',
  'Service pages by offering — painting, drywall, kitchen & bathroom remodeling, tile work',
  'Portfolio-driven layout — past projects front and center to build trust before the first call',
  'Clear calls to action — quote requests are never more than a click away',
  'Copywriting that builds credibility — 25+ years and 500+ projects communicated clearly',
  'Mobile-first design — homeowners researching contractors browse from their phones',
  'SEO foundations — meta tags, structured headings, and clean URLs throughout',
  'Fast page loads — no visitor waits around for a slow renovation site',
];

const TECH = [
  { name: 'WordPress', desc: 'CMS powering the full site' },
  { name: 'Custom theme', desc: 'Built for a home renovation audience' },
  { name: 'Contact forms', desc: 'Quote request flow' },
];

export function CaseStudySuperEdge() {
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
                Custom WordPress
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                General Contractor
              </span>
              <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-full border border-zinc-200">
                Edmonton, Canada
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Super Edge Contracting
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mb-4">
              An Edmonton-based general contractor with 25+ years of experience
              and 500+ completed projects — painting, drywall, kitchen and
              bathroom renovations — with a website built to turn quote requests into booked jobs.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-8">
              <span>General Contracting & Renovation</span>
              <span className="w-1 h-1 bg-zinc-300 rounded-full" />
              <span>Edmonton, Alberta</span>
            </div>
            <a
              href="https://superedge.ca"
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
            <Image src="/Superedge.webp" alt="Super Edge Contracting website" fill className="object-contain" priority />
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
              <h2 className="text-4xl font-bold text-zinc-950 mb-6">A contractor's site has to win the job before the quote call</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Homeowners comparing renovation contractors make snap judgments
                based on a site's first impression — before they ever pick up
                the phone. A dated or generic-looking site loses jobs to
                competitors who simply look more credible online.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Super Edge Contracting had 25+ years of real experience and
                500+ completed projects behind them, but needed a site that
                actually communicated that track record instead of burying it.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                The site also needed clear service pages across several distinct
                offerings — painting, drywall, kitchen and bathroom remodeling,
                and tile work — each with its own path to a quote request.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-8 space-y-4">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">
                Key requirements
              </div>
              {[
                'Professional design that builds instant trust',
                'Clear service pages for each offering',
                '25+ years of experience communicated credibly',
                'Simple, prominent quote request flow',
                'Mobile-friendly for homeowners researching on the go',
                'Fast load times and clean SEO foundations',
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
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">A site that reads as established, not generic</h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              We built a custom WordPress site structured around Super Edge's
              actual services, with credibility front and center on every page.
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Need a website that wins more jobs?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We build general contractor and home services websites designed
              to turn visitors into booked quotes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
                Start a project
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://superedge.ca" target="_blank" rel="noopener noreferrer"
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
