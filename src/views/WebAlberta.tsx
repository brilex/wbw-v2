'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, MapPinIcon, ZapIcon, HardHatIcon, BuildingIcon } from 'lucide-react';

const reasons = [
  {
    icon: ZapIcon,
    title: 'We work remotely without losing quality',
    description: 'The entire process — from consultation to launch — runs online. Alberta clients get the same level of attention and communication as if we were down the street.',
  },
  {
    icon: BuildingIcon,
    title: 'Real experience with Edmonton businesses',
    description: 'We\'ve built sites for contractors, accounting firms, and a business directory serving Alberta clients — not a generic template pitch.',
  },
  {
    icon: HardHatIcon,
    title: 'Built for the industries that hire us most',
    description: 'General contractors and professional services firms need sites that convert inquiries into leads, not just look good — that\'s what we build.',
  },
];

const clients = [
  { name: 'Super Edge Contracting', category: 'General Contractor · Edmonton', href: 'https://superedge.ca/', external: true },
  { name: 'Jaberson & Associates', category: 'Tax & Accounting · Edmonton', href: '/work/jaberson', external: false },
  { name: 'United First', category: 'Business Directory · Canada', href: '/work/united-first', external: false },
];

const faqs = [
  {
    q: 'Do you need to be based in Alberta to work with local businesses?',
    a: 'No. We run the entire process remotely — calls, screen sharing, and regular updates by email. We\'ve delivered projects for contractors and professional service firms in the Edmonton area entirely online.',
  },
  {
    q: 'Do you have experience with general contractor websites?',
    a: 'Yes — we built the site for Super Edge Contracting, an Edmonton-based renovation and construction company. See our general contractor website design page for what that typically includes.',
  },
  {
    q: 'What industries in Alberta have you worked with?',
    a: 'Construction and general contracting, tax and accounting firms, and a Canada-wide business directory platform. If your industry isn\'t listed, get in touch — we can still help.',
  },
];

export function WebAlberta() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3 flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" /> Alberta, Canada
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Web Design for Alberta &amp; Edmonton Businesses
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Custom-built websites with SEO built in from day one. We work remotely with
              contractors, accounting firms, and service businesses across Alberta, including Edmonton.
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
            Why Alberta businesses work with us
          </motion.h2>
          <p className="text-xl text-zinc-600 text-center max-w-2xl mx-auto mb-16">
            We're not a local agency pretending to be everywhere — we're a remote team with a track record in your market.
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-950 mb-3">Recent Alberta &amp; Canada projects</h2>
            <p className="text-zinc-600">A sample of the businesses we've built for.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client) => (
              <Link key={client.name} href={client.href} {...(client.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-zinc-950 mb-1 group-hover:text-blue-600 transition-colors">
                  {client.name}
                </h3>
                <p className="text-zinc-600 mb-4">{client.category}</p>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium">
                  {client.external ? 'Visit site' : 'View case study'} <ArrowRightIcon className="ml-1 w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
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
              Ready for a website built for your business?
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
