"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  CheckIcon,
  XIcon,
} from "lucide-react";

const STATS = [
  { value: "+968%", label: "Search impressions (3 mo.)" },
  { value: "+395%", label: "Clicks from Google (3 mo.)" },
  { value: "100", label: "Desktop Lighthouse" },
  { value: "Week 1", label: "First paying customer" },
];

const PROBLEMS = [
  "No organic visibility — the site was invisible to Google",
  "Poor visual design — outdated layout, inconsistent typography",
  "No SEO — missing meta descriptions, duplicate page titles across the site",
  "Thin content — pages had almost no text for Google to index",
  "Slow load times — unoptimised images and no performance tuning",
  "No conversion elements — no forms, no clear calls to action",
  "No structured data — Google had no context about the business",
];

const SOLUTIONS = [
  "Full redesign — modern, clean UI that builds trust instantly",
  "Unique meta title and description on every page",
  "Rich content across all service and location pages",
  "Images optimised with lazy loading, perfect Lighthouse scores",
  "Quote request forms placed on key service pages",
  "Schema markup — LocalBusiness, Service, and FAQ structured data",
  "Location-specific pages targeting cities across Bosnia & Herzegovina",
  "Blog with educational content driving organic traffic",
];

const TECH = [
  { name: "WordPress", desc: "CMS powering the full site" },
  { name: "Bricks Builder", desc: "Visual page builder for custom layouts" },
  { name: "WP Rocket", desc: "Caching and performance optimisation" },
  { name: "Rank Math SEO", desc: "On-page SEO, sitemaps, meta tags" },
  { name: "Schema.org", desc: "LocalBusiness, Service, FAQ structured data" },
  { name: "Google Search Console", desc: "Performance tracking and indexing" },
];

export function CaseStudyHamada() {
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
      <section className="pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                Web Design
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                SEO
              </span>
              <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-full border border-zinc-200">
                Lead Generation
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              WordPress Website Redesign:{" "}
              <span className="text-blue-600">Hamada & Co.</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mb-4">
              A complete website overhaul for a PVC & aluminium joinery company
              in Bosnia & Herzegovina — turning a slow, invisible site into a
              lead-generating machine that landed its first customer within the
              first week of launch.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-8">
              <span>PVC & Aluminium Joinery</span>
              <span className="w-1 h-1 bg-zinc-300 rounded-full" />
              <span>Maglaj, Bosnia & Herzegovina</span>
            </div>
            <a
              href="https://hamadaco.com"
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

      {/* Hero image */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 shadow-lg"
          >
            <Image
              src="/hamada&co.webp"
              alt="Hamada & Co. website"
              fill
              className="object-contain"
              priority
            />
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
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
                The Challenge
              </div>
              <h2 className="text-4xl font-bold text-zinc-950 mb-6">
                No website leads, no organic visibility on Google
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Hamada & Co. had a solid product and real craftsmanship — but
                their website told a different story. It looked outdated, loaded
                slowly, and gave Google almost nothing to work with.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Duplicate page titles meant Google couldn&apos;t distinguish
                between pages. Thin content meant there was nothing to rank. No
                forms meant interested visitors had no easy way to reach out.
                The site was a dead end.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                In a competitive local market, first impressions matter.
                Potential customers landing on the old site were bouncing before
                they ever saw what the company could do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 border border-red-200 rounded-2xl p-8 space-y-3"
            >
              <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-4">
                Issues with the old site
              </div>
              {PROBLEMS.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3 text-sm text-red-800"
                >
                  <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <XIcon className="w-3 h-3 text-white" />
                  </div>
                  {problem}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
              The Solution
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">
              Build out an SEO-optimised website from scratch
            </h2>
            <p className="text-zinc-600 max-w-2xl leading-relaxed mt-4">
              Want to know how much a similar project costs and how our rebuild
              process works? Read our in-depth guide on{" "}
              <Link
                href="/blog/wordpress-website-redesign-services"
                className="text-blue-600 underline font-medium hover:text-blue-800"
              >
                WordPress website redesign services & pricing
              </Link>
              .
            </p>
            <p className="text-xl text-zinc-600 max-w-2xl">
              Every decision — from the page structure to the image optimisation
              — was made with one goal: turn visitors into enquiries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {SOLUTIONS.map((solution, i) => (
              <motion.div
                key={solution}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-white border border-zinc-200 rounded-xl p-5 text-sm text-zinc-700"
              >
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                {solution}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Outcome */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
              The Outcome
            </div>
            <h2 className="text-4xl font-bold text-zinc-950 mb-4">
              First customer in week one — and the numbers kept climbing
            </h2>
            <p className="text-zinc-600 max-w-2xl leading-relaxed">
              Within days of launching, the site was already working. A customer
              found the business through the new site and made a purchase. But
              the real story is what happened over the following months —
              verified through Google Search Console.
            </p>
          </motion.div>

          {/* Big outcome numbers */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                value: "+968%",
                label: "Increase in search impressions",
                sub: "Last 3 months vs. previous period",
                color: "bg-emerald-50 border-emerald-200 text-emerald-700",
              },
              {
                value: "+395%",
                label: "Increase in clicks from Google",
                sub: "Last 3 months vs. previous period",
                color: "bg-blue-50 border-blue-200 text-blue-700",
              },
              {
                value: "Week 1",
                label: "First paying customer",
                sub: "Found through Google, converted on-site",
                color: "bg-zinc-950 border-zinc-800 text-white",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-8 ${item.color}`}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-3">
                  {item.value}
                </div>
                <div className="text-lg font-semibold mb-1">{item.label}</div>
                <div className="text-sm opacity-70 leading-relaxed">
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* GSC Performance proof */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-200 overflow-hidden shadow-lg"
            >
              <div className="bg-zinc-50 border-b border-zinc-200 px-6 py-4">
                <p className="text-sm font-semibold text-zinc-950">
                  Google Search Console — Performance (6 months)
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  524 clicks · 12,600 impressions · 4.1% CTR · 8.7 avg. position
                </p>
              </div>
              <div className="relative w-full aspect-[16/6]">
                <Image
                  src="/hamada-rad.jpg"
                  alt="Google Search Console performance graph showing growth after WBW took over — 524 clicks, 12,600 impressions over 6 months"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-200 overflow-hidden shadow-lg"
            >
              <div className="bg-zinc-50 border-b border-zinc-200 px-6 py-4">
                <p className="text-sm font-semibold text-zinc-950">
                  Google Search Console — Insights (last 3 months)
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  436 clicks (+395%) · 11,600 impressions (+968%)
                </p>
              </div>
              <div className="relative w-full aspect-[16/4]">
                <Image
                  src="/hamada-uvidi.png"
                  alt="Google Search Console insights showing +395% clicks and +968% impressions over 3 months"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </motion.div>
          </div>

          {/* Additional stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "524", label: "Total clicks (6 mo.)" },
              { value: "12.6K", label: "Total impressions (6 mo.)" },
              { value: "4.1%", label: "Average CTR" },
              { value: "8.7", label: "Average position" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 text-center"
              >
                <div className="text-2xl font-bold text-zinc-950 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">
            Tech stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TECH.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-zinc-200 rounded-xl p-5"
              >
                <div className="font-semibold text-zinc-950 text-sm mb-1">
                  {item.name}
                </div>
                <div className="text-zinc-500 text-xs">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Need a similar WordPress website redesign?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              If your current site is slow, outdated, or failing to convert
              traffic into paying customers, let's fix it. We offer free
              pre-redesign audits and fixed pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl"
              >
                Get a Free Audit
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://hamadaco.com"
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
