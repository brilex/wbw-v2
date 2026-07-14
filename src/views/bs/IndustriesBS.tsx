'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { industries } from '../../data/industries';
import { industriesBS } from '../../data/industries-bs';

export function IndustriesBS() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Rad po industrijama</p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Duboka stručnost u svakoj industriji
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Svaka industrija ima svoj jezik, publiku i KPI-eve. Istražite kako prilagođavamo
              naš pristup kako bismo isporučili iznimne rezultate u vašem sektoru.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const bsIndustry = industriesBS.find((i) => i.slug === industry.slug);
              const Icon = industry.icon;
              return (
                <motion.div key={industry.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: (index % 6) * 0.05 }}>
                  <Link href={`/bs/industrije/${industry.slug}`}
                    className="group block bg-white p-6 lg:p-8 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/5 transition-all h-full">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                      {bsIndustry?.title ?? industry.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                      {bsIndustry?.description ?? industry.description}
                    </p>
                    <span className="inline-flex items-center text-blue-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Istražite
                      <ArrowRightIcon className="ml-1 w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ne vidite svoju industriju?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Radimo u mnogo više sektora. Razgovarajmo o vašem projektu.
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
