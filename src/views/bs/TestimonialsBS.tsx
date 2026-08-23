'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUpIcon, GlobeIcon, ArrowRightIcon, SearchIcon, ZapIcon } from 'lucide-react';

export function TestimonialsBS() {
  const results = [
    {
      icon: TrendingUpIcon,
      metric: '+968%',
      title: 'Rast organske pretrage',
      description: 'Hamada & Co. je prešao od gotovo nulte vidljivosti do 968% rasta organske pretrage nakon što smo izgradili stranicu s ugrađenim on-page SEO-om od prvog dana.',
      project: 'Hamada & Co.',
      href: '/bs/rad/hamada-co',
    },
    {
      icon: ZapIcon,
      metric: '1. sedmica',
      title: 'Prva online mušterija',
      description: 'firme.ba je dobio prvu mušteriju unutar prve sedmice od lansiranja — prije bilo kakvog plaćenog oglašavanja.',
      project: 'firme.ba',
      href: '/bs/rad/firme-ba',
    },
    {
      icon: GlobeIcon,
      metric: '3 jezika',
      title: 'Trojezični korporativni sajt',
      description: 'Neimax je trebao profesionalnu prisutnost na bosanskom, engleskom i njemačkom. Isporučili smo custom WordPress temu s bezprijekornim prebacivanjem jezika.',
      project: 'Neimax d.o.o.',
      href: '/bs/rad/neimax',
    },
    {
      icon: SearchIcon,
      metric: 'Stranica 1',
      title: 'Google pozicije od lansiranja',
      description: 'WLDM.io je lansiran s SEO-spremnom arhitekturom uključujući interaktivne alate i strukturirane podatke — odmah rankirajući za konkurentne backlink ključne riječi.',
      project: 'WLDM',
      href: '/bs/rad/wldm',
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Stvarni rezultati, ne obećanja
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Puštamo brojke da govore. Evo mjerljivih rezultata iz nedavnih projekata
              — bez lažnih citata, bez izmišljenih imena.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg transition-all flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <result.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600">{result.metric}</div>
                </div>
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">{result.title}</h3>
                <p className="text-zinc-600 leading-relaxed mb-6 flex-1">{result.description}</p>
                <div className="pt-6 border-t border-zinc-100">
                  <Link href={result.href} className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all">
                    Pogledajte {result.project} studiju slučaja <ArrowRightIcon className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Želite ovakve rezultate?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Razgovarajmo o tome kako možemo razviti vaše poslovanje online.
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
