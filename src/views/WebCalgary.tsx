'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, MapPinIcon, ZapIcon, TrendingUpIcon, BuildingIcon } from 'lucide-react';
import { FaqSchema } from '../components/FaqSchema';

const reasons = [
  {
    icon: ZapIcon,
    title: 'A fully remote process, done right',
    description: 'Calls, screen sharing, and regular updates — the entire build happens online without sacrificing communication or quality.',
  },
  {
    icon: BuildingIcon,
    title: 'Track record across Western Canada',
    description: 'We\'ve built sites for contractors, accounting firms, and a business directory serving clients across Alberta — real work, not a portfolio of mockups.',
  },
  {
    icon: TrendingUpIcon,
    title: 'SEO built in, not bolted on',
    description: 'Every site ships with clean metadata, fast load times, and a content structure built to rank — not just look good.',
  },
];

const faqs = [
  {
    q: 'Do you need to be in Calgary to build our website?',
    a: 'No. We run the entire process remotely — calls, screen sharing, and regular updates by email. We\'ve delivered projects for Alberta businesses entirely online.',
  },
  {
    q: 'How much does website design cost in Calgary?',
    a: 'Our fixed packages start around $700 for a 5-page custom-built site with SEO foundations, up to full packages with ongoing SEO management. See our pricing page for exact tiers.',
  },
  {
    q: 'Do you offer responsive web design?',
    a: 'Yes — every site we build is mobile-first and fully responsive by default, not an afterthought bolted on at the end.',
  },
];

export function WebCalgary() {
  return (
    <main className="min-h-screen">
      <FaqSchema id="calgary" faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3 flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" /> Calgary, Alberta
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Website Design for Calgary Businesses
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Custom-built, responsive websites with SEO built in from day one.
              We work remotely with Calgary businesses that need a site built to convert, not just look nice.
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
            Why Calgary businesses work with us
          </motion.h2>
          <p className="text-xl text-zinc-600 text-center max-w-2xl mx-auto mb-16">
            We're a remote team with real delivery experience across Alberta.
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
              <Link href="/seo-kelowna" className="text-blue-600 font-medium hover:underline">Kelowna, BC</Link>.
              See our full{' '}
              <Link href="/work" className="text-blue-600 font-medium hover:underline">portfolio of recent work</Link>
              {' '}for real examples.
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
              Ready for a website built to convert?
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
