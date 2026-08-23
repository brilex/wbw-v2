'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, MapPinIcon, ZapIcon, TrendingUpIcon, SearchIcon } from 'lucide-react';
import { FaqSchema } from '../components/FaqSchema';

const reasons = [
  {
    icon: ZapIcon,
    title: 'Fully remote, fully accountable',
    description: 'Calls, screen sharing, and regular updates — the entire build and SEO process happens online, with clear communication throughout.',
  },
  {
    icon: SearchIcon,
    title: 'SEO is our specialty, not an add-on',
    description: 'We don\'t just build sites — we optimize them for search from day one, with keyword research and on-page SEO built into every project.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Real, verified results',
    description: 'One client saw a 968% increase in organic search traffic after we rebuilt their site with SEO foundations done right.',
  },
];

const faqs = [
  {
    q: 'Do you need to be based in Kelowna to work with us?',
    a: 'No. We work remotely with clients across Canada — calls, screen sharing, and regular updates handle everything an in-person meeting would.',
  },
  {
    q: 'How much does SEO cost in Kelowna?',
    a: 'SEO is included in our Growth and Full Partnership packages, covering keyword research, on-page optimization, and technical audits. See our pricing page for exact tiers.',
  },
  {
    q: 'How long until SEO results show up?',
    a: 'Technical fixes can show results within weeks. Sustainable ranking growth typically takes 3-6 months of consistent work — we\'re upfront about that timeline from the start.',
  },
];

export function WebKelowna() {
  return (
    <main className="min-h-screen">
      <FaqSchema id="kelowna" faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3 flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" /> Kelowna, BC
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Web Design &amp; SEO for Kelowna Businesses
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Custom-built websites and SEO strategy that actually gets you found.
              We work remotely with Kelowna businesses that want more than a template.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/contact"
                className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center">
                Book a free consultation
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/pricing"
                className="px-8 py-4 bg-white border-2 border-zinc-200 text-zinc-950 font-semibold rounded-xl hover:border-zinc-300 transition-colors inline-flex items-center justify-center">
                See pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-bold text-zinc-950 mb-4 text-center">
            Why Kelowna businesses work with us
          </motion.h2>
          <p className="text-xl text-zinc-600 text-center max-w-2xl mx-auto mb-16">
            SEO-first web design, delivered remotely with real accountability.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-950 mb-3">{reason.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-10 text-center">
            <p className="text-zinc-700 leading-relaxed">
              We're also active in{' '}
              <Link href="/web-design-alberta" className="text-blue-600 font-medium hover:underline">Edmonton &amp; Alberta</Link>
              {' '}and{' '}
              <Link href="/web-design-calgary" className="text-blue-600 font-medium hover:underline">Calgary</Link>.
              See our{' '}
              <Link href="/services/seo-optimization" className="text-blue-600 font-medium hover:underline">SEO service page</Link>
              {' '}for exactly what's included.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-bold text-zinc-950 mb-12 text-center">
            Frequently asked questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-zinc-200 rounded-2xl p-6">
                <h3 className="font-semibold text-zinc-950 mb-2">{faq.q}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to get found by the right people?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Tell us about your project and we'll recommend the right package.
            </p>
            <Link href="/contact"
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
