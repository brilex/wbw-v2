'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, MapPinIcon, ZapIcon, TrendingUpIcon, UsersIcon } from 'lucide-react';

const reasons = [
  {
    icon: MapPinIcon,
    title: 'Mi smo iz Tuzle',
    description: 'Nismo daljinska agencija koja se pretvara da je lokalna — mi smo zaista ovdje. Sastanak uživo je uvijek moguć, bez putovanja.',
  },
  {
    icon: UsersIcon,
    title: 'Radili smo sa tuzlanskim firmama',
    description: 'Neimax (proizvodnja kartonske ambalaže) i Multilab (akreditovana laboratorija) su naši klijenti iz Tuzle — znamo lokalno tržište iznutra.',
  },
  {
    icon: TrendingUpIcon,
    title: 'SEO ugrađen od prvog dana',
    description: 'Ne pravimo samo lijep sajt — gradimo ga tako da vas Google zaista pronađe kad neko u Tuzli traži vašu uslugu.',
  },
];

const faqs = [
  {
    q: 'Kolika je cijena izrade web stranice u Tuzli?',
    a: 'Starter paket kreće od 750 KM (5 stranica, osnovni SEO), Growth od 1.300 KM (puna SEO strategija), a Full Partnership od 2.200 KM (uključuje 6 mjeseci upravljanja). Pogledajte detaljan pregled na stranici cijena.',
  },
  {
    q: 'Da li se možemo naći uživo u Tuzli?',
    a: 'Da — pošto smo lokalni, sastanak uživo je uvijek opcija ako vam je lakše nego online poziv.',
  },
  {
    q: 'Koje firme iz Tuzle ste već radili?',
    a: 'Između ostalih, izradili smo sajtove za Neimax d.o.o. (proizvodnja) i Multilab (akreditovana laboratorija). Pogledajte studije slučaja u portfoliu.',
  },
];

export function WebTuzlaBS() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3 flex items-center gap-2">
              <MapPinIcon className="w-4 h-4" /> Tuzla
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Izrada web stranica za firme u Tuzli
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Web dizajn i izrada web stranica sa ugrađenim SEO temeljima — ručno kodirano, bez
              gotovih templata. Mi smo lokalna agencija iz Tuzle koja poznaje vaše tržište.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link href="/bs/kontakt"
                className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center">
                Zakažite besplatnu konsultaciju
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/bs/cijene"
                className="px-8 py-4 bg-white border-2 border-zinc-200 text-zinc-950 font-semibold rounded-xl hover:border-zinc-300 transition-colors inline-flex items-center justify-center">
                Pogledajte cijene
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-bold text-zinc-950 mb-4 text-center">
            Zašto firme u Tuzli biraju nas
          </motion.h2>
          <p className="text-xl text-zinc-600 text-center max-w-2xl mx-auto mb-16">
            Lokalna agencija sa iskustvom rada za proizvodne, laboratorijske i uslužne djelatnosti.
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
            <h2 className="text-3xl font-bold text-zinc-950 mb-3">Projekti za tuzlanske firme</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Neimax d.o.o.', category: 'Custom WordPress · Proizvodnja', href: '/bs/rad/neimax' },
              { title: 'Multilab', category: 'Custom WordPress · Laboratorija', href: '/bs/rad/multilab' },
            ].map((project) => (
              <Link key={project.title} href={project.href}
                className="group bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-zinc-950 mb-1 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 mb-4">{project.category}</p>
                <span className="inline-flex items-center text-blue-600 text-sm font-medium">
                  Pogledajte studiju slučaja <ArrowRightIcon className="ml-1 w-4 h-4" />
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
            Često postavljana pitanja
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
              Spremni za web stranicu koja donosi rezultate?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Recite nam o svom projektu — pošto smo lokalni, možemo se naći i uživo.
            </p>
            <Link href="/bs/kontakt"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
              Pokrenite projekt
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
