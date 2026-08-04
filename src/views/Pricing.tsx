'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, StarIcon, ZapIcon } from 'lucide-react';

const packages = [
  {
    id: 1,
    name: 'Starter',
    tagline: '5-Page Website',
    price: '$400',
    description: 'A complete, professional website — built fast, built right. Perfect for small businesses ready to establish a credible online presence.',
    bonus: { months: 6, label: '6 months firme.ba Premium — free' },
    features: [
      'Full website build in WordPress / Bricks Builder',
      'Pages: Home, About, Services, Portfolio, Contact',
      'Copywriting for all 5 pages',
      'Image sourcing and integration',
      'WP Rocket configured for performance',
      'Rank Math SEO setup (meta tags, sitemap, robots.txt)',
      'Contact form',
    ],
    cta: 'Get started',
    highlight: false,
  },
  {
    id: 2,
    name: 'Growth',
    tagline: 'Website + SEO Foundation',
    price: '$700',
    description: 'Everything in Starter, plus a complete SEO strategy built into the site from day one — so Google can actually find you.',
    bonus: { months: 12, label: '12 months firme.ba Premium — free' },
    features: [
      'Everything in Starter',
      'Keyword research (Semrush + Google Keyword Planner)',
      'Dedicated main SEO page for your core service',
      '3 service sub-pages built around target keywords',
      'Full content optimisation across all pages',
      'Dynamic portfolio / gallery with admin panel',
      '~11–13 pages total',
    ],
    cta: 'Get started',
    highlight: true,
  },
  {
    id: 3,
    name: 'Full Partnership',
    tagline: 'Website + SEO + 6 Months Management',
    price: '$1,200',
    description: 'Everything in Growth, plus 6 months of active management. We run the site like it\'s our own — you focus on the business.',
    bonus: { months: 18, label: '18 months firme.ba Premium — free' },
    features: [
      'Everything in Growth',
      'Monthly SEO monitoring (Search Console + GA4)',
      'Monthly performance report with insights',
      'New pages and content added as needed',
      'Plugin updates, security checks, maintenance',
      'If something breaks — we handle it',
      'Proactive approach for 6 full months',
    ],
    cta: 'Get started',
    highlight: false,
  },
];

const faqs = [
  {
    q: 'What is firme.ba?',
    a: 'firme.ba is our business directory portal for Bosnia and Herzegovina. A Premium listing gives your business increased visibility, featured placement, and enhanced profile options.',
  },
  {
    q: 'Do I need to pay for hosting?',
    a: 'Yes — hosting and domain are managed on your end. We recommend and help configure managed WordPress hosting, but the ongoing cost is yours. We handle everything else.',
  },
  {
    q: 'Can I start with Starter and upgrade later?',
    a: 'Absolutely. Many clients start with Starter and add SEO or management later. We structure the site so upgrading is straightforward.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Starter: 2–3 weeks. Growth: 4–5 weeks. Full Partnership: 5–6 weeks for the build, then 6 months of active management begins.',
  },
  {
    q: 'Are prices fixed or do they vary by project?',
    a: 'These are fixed packages for typical projects. If your business has specific requirements outside the scope above, we\'ll quote accordingly after a free consultation.',
  },
];

export function Pricing() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Transparent pricing</p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Simple packages.<br />No surprises.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Every package includes copywriting, performance setup, and basic SEO out of the box.
              Choose how deep you want to go.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border p-8 flex flex-col gap-6 ${
                  pkg.highlight
                    ? 'bg-zinc-950 border-zinc-800 shadow-2xl'
                    : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all'
                }`}>
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest flex items-center gap-1">
                      <StarIcon className="w-3 h-3" /> Most popular
                    </span>
                  </div>
                )}

                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${pkg.highlight ? 'text-blue-400' : 'text-blue-600'}`}>
                    Package {pkg.id}
                  </p>
                  <h2 className={`text-2xl font-bold mb-1 ${pkg.highlight ? 'text-white' : 'text-zinc-950'}`}>{pkg.name}</h2>
                  <p className={`text-sm ${pkg.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>{pkg.tagline}</p>
                </div>

                <div>
                  <div className={`text-5xl font-bold tracking-tight ${pkg.highlight ? 'text-white' : 'text-zinc-950'}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-sm mt-2 leading-relaxed ${pkg.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {pkg.description}
                  </p>
                </div>

                {/* firme.ba bonus */}
                <div className={`flex items-start gap-3 rounded-xl p-4 ${pkg.highlight ? 'bg-blue-600/20 border border-blue-500/30' : 'bg-blue-50 border border-blue-200'}`}>
                  <ZapIcon className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${pkg.highlight ? 'text-blue-400' : 'text-blue-600'}`}>
                      Included bonus
                    </p>
                    <p className={`text-sm font-semibold ${pkg.highlight ? 'text-white' : 'text-zinc-950'}`}>
                      {pkg.bonus.label}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.highlight ? 'bg-blue-600' : 'bg-blue-50'}`}>
                        <CheckIcon className={`w-3 h-3 ${pkg.highlight ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                      <span className={`text-sm leading-snug ${pkg.highlight ? 'text-zinc-300' : 'text-zinc-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact"
                  className={`group w-full text-center py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    pkg.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-zinc-950 text-white hover:bg-zinc-800'
                  }`}>
                  {pkg.cta}
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center text-sm text-zinc-500 mt-8">
            Not sure which package fits? <Link href="/contact" className="text-blue-600 font-medium hover:underline">Book a free consultation →</Link>
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-bold text-zinc-950 mb-12 text-center">
            Frequently asked questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to get started?</h2>
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
