'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';

interface CaseStudy {
  title: string;
  client: string;
  category: string;
  description: string;
  results: { metric: string; value: string }[];
  color: string;
  tags: string[];
  href?: string;
  image?: string;
  ctaLabel?: string;
  external?: boolean;
}

export function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      title: 'firme.ba',
      client: 'In-house Product',
      category: 'Business Directory · Platform',
      description:
        'A nationwide business directory for Bosnia & Herzegovina. Companies get a searchable profile with logo, location, category and description; visitors find them by company name, activity or city across categories spanning construction, automotive, IT, real estate, healthcare, beauty and business services.',
      results: [
        { metric: 'Coverage', value: 'BiH-wide' },
        { metric: 'Categories', value: '9+' },
        { metric: 'Listing tiers', value: 'Free + Premium' },
      ],
      color: 'from-red-500 to-red-700',
      tags: ['Business Directory', 'Search & Filtering', 'Company Profiles', 'User Accounts', 'SEO'],
      href: '/work/firme-ba',
      image: '/firme-ba.webp',
    },
    {
      title: 'ConvertToNext',
      client: 'In-house Product',
      category: 'Developer Tool · SaaS',
      description: 'Built an automated conversion engine that transforms Vite + React projects (Bolt.new, Lovable, v0 exports) into production-ready Next.js 15 App Router apps — solving the SEO invisibility problem of AI-generated websites in under 60 seconds.',
      results: [
        { metric: 'Conversion time', value: '< 60s' },
        { metric: 'Transform types', value: '8' },
        { metric: 'Cost to users', value: 'Free' },
      ],
      color: 'from-emerald-500 to-emerald-700',
      tags: ['Next.js 15', 'TypeScript', 'Turborepo', 'Vercel', 'Supabase'],
      href: '/work/converttonext',
      image: '/ConverttoNext.webp',
    },
    {
      title: 'Hamada & Co.',
      client: 'PVC & Aluminium Joinery',
      category: 'Web Design · SEO',
      description: 'Complete website overhaul for a joinery company in Bosnia & Herzegovina — modern design, full SEO optimisation, and conversion-focused forms that landed the first paying customer within a week of launch.',
      results: [
        { metric: 'Search impressions', value: '+968%' },
        { metric: 'Clicks from Google', value: '+395%' },
        { metric: 'First customer', value: 'Week 1' },
      ],
      color: 'from-blue-500 to-blue-700',
      tags: ['WordPress', 'Bricks Builder', 'SEO'],
      href: '/work/hamada-co',
      image: '/hamada&co.webp',
    },
    {
      title: 'Neimax d.o.o.',
      client: 'Corrugated Cardboard & Packaging',
      category: 'Custom WordPress · Manufacturing',
      description: 'Custom WordPress theme for one of Bosnia\'s leading packaging manufacturers — trilingual (BA/EN/DE), Figma-to-code, with product catalogue and factory gallery.',
      results: [{ metric: 'Languages', value: '3' }, { metric: 'Theme type', value: 'Custom' }, { metric: 'Design source', value: 'Figma' }],
      color: 'from-amber-500 to-amber-700',
      tags: ['WordPress', 'PHP', 'WPML', 'Figma'],
      href: '/work/neimax',
      image: '/Neimax.webp',
    },
    {
      title: 'WLDM',
      client: 'Backlinks & AI Citation Agency',
      category: 'WordPress + Bricks · SEO Agency',
      description: 'A premium agency website for a backlinks and AI citation engineering company — with interactive SEO audit tools, 3D data visualisations, and a conversion-focused strategy session booking flow.',
      results: [{ metric: 'Built-in tools', value: '2' }, { metric: 'Visual style', value: '3D Data' }, { metric: 'Conversion goal', value: 'Bookings' }],
      color: 'from-lime-500 to-lime-700',
      tags: ['WordPress', 'Bricks Builder', 'JavaScript'],
      href: '/work/wldm',
      image: '/wldm.webp',
    },
    {
      title: 'Multilab d.o.o.',
      client: 'Laboratory & Safety Services',
      category: 'Custom WordPress · Healthcare',
      description: 'Custom WordPress theme for an ISO-accredited laboratory in Tuzla — covering lab analysis, DDD services, workplace safety, and fire protection across four business sectors.',
      results: [{ metric: 'Sectors', value: '4' }, { metric: 'Theme type', value: 'Custom' }, { metric: 'Accredited', value: 'ISO' }],
      color: 'from-teal-500 to-teal-700',
      tags: ['WordPress', 'PHP', 'Vanilla JS'],
      href: '/work/multilab',
      image: '/multilab.webp',
    },
    {
      title: 'Super Edge Contracting',
      client: 'General Contractor',
      category: 'WordPress · Home Renovation',
      description: 'Website for an Edmonton-based renovation and construction contractor — painting, drywall, kitchen and bathroom remodeling — built to turn quote requests into booked jobs.',
      results: [{ metric: 'Years in business', value: '25+' }, { metric: 'Projects completed', value: '500+' }, { metric: 'Location', value: 'Edmonton, AB' }],
      color: 'from-orange-500 to-orange-700',
      tags: ['WordPress', 'Lead Capture', 'Construction'],
      external: true,
      href: 'https://superedge.ca',
    },
    {
      title: 'Jaberson & Associates',
      client: 'Tax & Accounting Firm',
      category: 'Custom WordPress · Finance',
      description: 'Website for an Edmonton tax and accounting firm with 20+ years of experience — clear service pages, industry-specific messaging, and a straightforward consultation booking flow.',
      results: [{ metric: 'Years of experience', value: '20+' }, { metric: 'Theme type', value: 'Custom' }, { metric: 'Location', value: 'Edmonton, AB' }],
      color: 'from-sky-500 to-sky-700',
      tags: ['WordPress', 'Custom Theme', 'Finance'],
      href: '/work/jaberson',
      image: '/jaberson.webp',
    },
    {
      title: 'United First',
      client: 'Business Directory Platform',
      category: 'Custom WordPress · Directory',
      description: 'A Canada-wide business directory platform — 25+ categories, location-based search, and review features, built on custom directory architecture that scales.',
      results: [{ metric: 'Categories', value: '25+' }, { metric: 'Coverage', value: 'Canada-wide' }, { metric: 'Search', value: 'Geolocation' }],
      color: 'from-violet-500 to-violet-700',
      tags: ['WordPress', 'Custom PHP', 'Geolocation'],
      href: '/work/united-first',
      image: '/unitedfirst.webp',
    },
    {
      title: 'United World',
      client: 'Global Health Nonprofit',
      category: 'Custom WordPress · Nonprofit',
      description: 'Website for a humanitarian organization delivering emergency relief, clean water, and education programs worldwide — structured around programs and time-sensitive crisis appeals.',
      results: [{ metric: 'Founded', value: '2014' }, { metric: 'Reach via partners', value: '90+ countries' }, { metric: 'Theme type', value: 'Custom' }],
      color: 'from-rose-500 to-rose-700',
      tags: ['WordPress', 'ACF', 'Nonprofit'],
      href: '/work/united-world',
      image: '/unitedwestand.webp',
    },
    {
      title: 'Crypto News Canada',
      client: 'Crypto News Aggregator',
      category: 'WordPress + Bricks · News',
      description: 'An automated cryptocurrency news aggregator — Feedzy RSS integration pulls in fresh content automatically, with a fast, scannable layout built for headline-skimming readers.',
      results: [{ metric: 'Content updates', value: 'Automated' }, { metric: 'Builder', value: 'Bricks' }, { metric: 'RSS engine', value: 'Feedzy' }],
      color: 'from-yellow-500 to-yellow-700',
      tags: ['WordPress', 'Bricks Builder', 'Feedzy'],
      href: '/work/crypto-news-canada',
      image: '/cryptocanada.webp',
    },
    {
      title: 'CryptoLeb',
      client: 'Crypto News Platform',
      category: 'WordPress + Bricks · Custom AI Plugin',
      description: 'A crypto news platform for a Lebanese audience, powered by a custom-built WordPress plugin that rewrites RSS content into original, locally-contextualized articles automatically via the OpenRouter API.',
      results: [{ metric: 'Rewriter version', value: 'v1.2.0' }, { metric: 'Article length', value: '500-600 words' }, { metric: 'Publishing', value: 'Hourly cron' }],
      color: 'from-cyan-500 to-cyan-700',
      tags: ['WordPress', 'Bricks Builder', 'Custom PHP Plugin', 'OpenRouter API'],
      href: '/work/cryptoleb',
      image: '/cryptoleb.webp',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Selected case studies
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Real projects, real results. Explore how we've helped ambitious
              brands transform their digital presence and drive measurable
              business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="group bg-white rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-xl transition-all overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''}`}>
                {/* Visual */}
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  {study.image ? (
                    <Link
                      href={study.href ?? '#'}
                      {...(study.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="block w-full h-full">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.color} group-hover:scale-105 transition-transform duration-700`} />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                    </>
                  )}
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-blue-600 mb-2">{study.client}</p>
                  {study.href ? (
                    <Link href={study.href}>
                      <h2 className="text-3xl font-bold text-zinc-950 mb-4 group-hover:text-blue-600 transition-colors hover:text-blue-600">
                        {study.title}
                      </h2>
                    </Link>
                  ) : (
                    <h2 className="text-3xl font-bold text-zinc-950 mb-4 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h2>
                  )}
                  <p className="text-zinc-600 leading-relaxed mb-6">{study.description}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-zinc-100">
                    {study.results.map((result) => (
                      <div key={result.metric}>
                        <div className="text-2xl font-bold text-zinc-950 mb-1">{result.value}</div>
                        <div className="text-xs text-zinc-500 leading-tight">{result.metric}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {study.href ? (
                    <Link
                      href={study.href}
                      {...(study.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all w-fit">
                      {study.ctaLabel ?? 'View case study'}
                      <ArrowUpRightIcon className="ml-1 w-5 h-5" />
                    </Link>
                  ) : (
                    <button className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all w-fit">
                      View case study
                      <ArrowUpRightIcon className="ml-1 w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
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
              Want results like these?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's talk about how we can help drive real outcomes for your business.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
              Start your project
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
