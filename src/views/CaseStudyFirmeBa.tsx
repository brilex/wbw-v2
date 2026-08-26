'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  CheckIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '107.000+', label: 'Companies listed' },
  { value: '78', label: 'Business categories' },
  { value: '2,700+', label: 'SEO landing pages' },
  { value: 'SEO-first', label: 'Platform architecture' },
];

const HIGHLIGHTS = [
  {
    title: 'Built for scale',
    desc: 'The platform was designed to handle tens of thousands of company profiles while keeping navigation, search and page performance fast.',
  },
  {
    title: 'Programmatic SEO',
    desc: 'A scalable page architecture creates useful search landing pages across businesses, categories and locations without relying on manually written pages.',
  },
  {
    title: 'Search-friendly structure',
    desc: 'Clean URLs, structured data, metadata and internal linking were designed as part of the product architecture rather than added as an afterthought.',
  },
  {
    title: 'Quality over page count',
    desc: 'The system is designed to prioritise useful, relevant pages instead of blindly publishing every possible URL.',
  },
];

const FEATURES = [
  'Large-scale business directory',
  'Programmatic SEO architecture',
  'Company and category profiles',
  'Location-based landing pages',
  'Structured data implementation',
  'Search and filtering',
  'Scalable content architecture',
  'Performance-focused frontend',
  'Responsive experience across devices',
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
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-full border border-red-200">
                Directory
              </span>

              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                Programmatic SEO
              </span>

              <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-full border border-zinc-200">
                Next.js
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              firme.ba
            </h1>

            <p className="text-xl lg:text-2xl text-zinc-600 leading-relaxed max-w-3xl mb-8">
              A scalable business directory built to turn a large business
              dataset into a fast, searchable and SEO-focused web platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://firme.ba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Visit live site
                <ExternalLinkIcon className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-300 text-zinc-900 font-semibold rounded-xl hover:bg-zinc-50 transition-colors"
              >
                Discuss your project
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>

                <div className="text-zinc-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
                The project
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-6">
                Turning business data into a useful digital product
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-5">
                firme.ba is a business directory for Bosnia and Herzegovina,
                created to make company information easier to discover,
                browse and search online.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-5">
                The challenge was not simply displaying thousands of companies.
                The platform needed an architecture that could scale while
                remaining useful to visitors and search engines.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                We approached the project as a product rather than a collection
                of database records — combining scalable data architecture,
                search-friendly page structures and a fast frontend experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8"
            >
              <div className="text-sm font-semibold text-zinc-950 mb-6">
                Project focus
              </div>

              <div className="space-y-5">
                {[
                  {
                    title: 'Discoverability',
                    desc: 'Build pages and navigation around the way people actually search for businesses.',
                  },
                  {
                    title: 'Scalability',
                    desc: 'Create a foundation capable of supporting a large and continuously growing dataset.',
                  },
                  {
                    title: 'SEO',
                    desc: 'Make technical SEO part of the architecture from the beginning.',
                  },
                  {
                    title: 'User experience',
                    desc: 'Keep thousands of records easy to browse, search and understand.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />

                    <div>
                      <h3 className="font-semibold text-zinc-950 mb-1">
                        {item.title}
                      </h3>

                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
              What we built
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-5">
              A platform designed around growth
            </h2>

            <p className="text-lg text-zinc-600 leading-relaxed">
              The goal was to create a foundation that could grow with the
              directory instead of requiring the website architecture to be
              rebuilt as the amount of content increased.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-zinc-200 rounded-2xl p-8"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <CheckIcon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-semibold text-zinc-950 mb-3">
                  {item.title}
                </h3>

                <p className="text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SEO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
                SEO architecture
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-6">
                SEO built into the product
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-5">
                With a directory of this size, SEO cannot be treated as a
                final optimisation step. The page architecture, URL structure,
                internal linking and metadata all need to work together.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                We built firme.ba around a programmatic SEO model that can
                support a large number of useful search landing pages while
                keeping the underlying structure controlled and maintainable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-950 rounded-2xl p-8 lg:p-10"
            >
              <div className="text-zinc-400 text-sm font-semibold uppercase tracking-widest mb-6">
                SEO foundations
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  'Search-friendly URLs',
                  'Programmatic metadata',
                  'Structured data',
                  'Breadcrumb navigation',
                  'Internal linking',
                  'Location-based pages',
                  'Category architecture',
                  'Indexation controls',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-zinc-300"
                  >
                    <CheckIcon className="w-4 h-4 text-blue-400 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-3 gap-12">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Scope
              </div>

              <h2 className="text-4xl font-bold text-zinc-950 mb-5">
                From data to digital product
              </h2>

              <p className="text-zinc-600 leading-relaxed">
                The project combines product development, frontend engineering
                and technical SEO into one scalable platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="grid sm:grid-cols-2 gap-3">
                {FEATURES.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white border border-zinc-200 rounded-xl px-5 py-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3.5 h-3.5" />
                    </div>

                    <span className="text-sm font-medium text-zinc-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold uppercase tracking-widest text-blue-100 mb-5">
              Have a similar challenge?
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let&apos;s build something that can scale.
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you need a business directory, SEO-focused website or
              a custom web platform, we can help turn the idea into a
              production-ready product.
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
                View live site
                <ExternalLinkIcon className="w-4 h-4" />
              </a>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}