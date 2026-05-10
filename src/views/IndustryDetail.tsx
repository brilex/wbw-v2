'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon } from 'lucide-react';
import { getIndustryBySlug, industries } from '../data/industries';

interface Props {
  slug: string;
}

export function IndustryDetail({ slug }: Props) {
  const industry = getIndustryBySlug(slug)!;
  const related = industries.filter((i) => i.slug !== industry.slug).slice(0, 3);
  const Icon = industry.icon;

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_40%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/industries"
            className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors mb-8">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            All industries
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
              {industry.tagline}
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              {industry.title}
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              {industry.longDescription}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center">
                Start a project
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 bg-white border-2 border-zinc-200 text-zinc-950 font-semibold rounded-xl hover:border-zinc-300 transition-colors inline-flex items-center justify-center">
                See our work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {industry.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
                What we solve
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-6">
                Industry challenges we tackle
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Every vertical has unique demands. Here are the ones we solve
                for {industry.title.toLowerCase()} clients every day.
              </p>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4">
              {industry.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex items-start bg-zinc-50 p-5 rounded-xl border border-zinc-100">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-zinc-700 leading-relaxed">
                    {challenge}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
              How we help
            </h2>
            <p className="text-xl text-zinc-600">
              Capabilities tuned to the specific demands of your industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {industry.capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">
                  {cap.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
              More industries
            </h2>
            <Link
              href="/industries"
              className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
              View all
              <ArrowRightIcon className="ml-1 w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {related.map((i, index) => {
              const RelatedIcon = i.icon;
              return (
                <motion.div
                  key={i.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="group block p-6 bg-white border border-zinc-200 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all h-full">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <RelatedIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors">
                      {i.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {i.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Let's build for your industry
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Tell us about your project and we'll show you what we can do.
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
