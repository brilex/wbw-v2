'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon } from 'lucide-react';
import { getIndustryBySlug } from '../../data/industries';
import { getIndustryBSBySlug } from '../../data/industries-bs';

interface Props { slug: string }

export function IndustryDetailBS({ slug }: Props) {
  const industry = getIndustryBySlug(slug)!;
  const bsIndustry = getIndustryBSBySlug(slug)!;
  const Icon = industry.icon;

  return (
    <main className="min-h-screen">
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_40%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/bs/industrije" className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors mb-8">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Sve industrije
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">{bsIndustry.tagline}</p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">{bsIndustry.title}</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">{bsIndustry.longDescription}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/bs/kontakt"
                className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center">
                Pokrenite projekt
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/bs/rad"
                className="px-8 py-4 bg-white border-2 border-zinc-200 text-zinc-950 font-semibold rounded-xl hover:border-zinc-300 transition-colors inline-flex items-center justify-center">
                Pogledajte naš rad
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {bsIndustry.stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Izazovi industrije</div>
              <h2 className="text-4xl font-bold text-zinc-950 mb-6">Razumijemo vaše specifične izazove</h2>
              <p className="text-zinc-600 leading-relaxed">
                Svaka industrija ima jedinstvene zahtjeve. Naše iskustvo u vašem sektoru znači da razumijemo
                specifična pitanja s kojima se suočavate i kako ih riješiti.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="space-y-3">
              {bsIndustry.challenges.map((challenge) => (
                <div key={challenge} className="flex items-start gap-3 bg-zinc-50 border border-zinc-200 rounded-xl p-4">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-zinc-700 text-sm">{challenge}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Naše sposobnosti</div>
            <h2 className="text-4xl font-bold text-zinc-950">Šta donosimo</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {bsIndustry.capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-zinc-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">{cap.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Spremi za pokretanje projekta?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Razgovarajmo o tome kako možemo pomoći vašem poslovanju da raste online.
            </p>
            <Link href="/bs/kontakt"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
              Kontaktirajte nas
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
