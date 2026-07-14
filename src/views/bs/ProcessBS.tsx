'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SearchIcon, PenToolIcon, CodeIcon, RocketIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';

export function ProcessBS() {
  const steps = [
    {
      number: '01', icon: SearchIcon, title: 'Otkrivanje', duration: 'Sedmica 1',
      description: 'Duboko se upoznajemo s vašim poslovnim ciljevima, ciljnom publikom i zahtjevima projekta kroz radionice i intervjue s dionicima.',
      deliverables: ['Radionica otkrivanja', 'Intervjui s dionicima', 'Analiza konkurencije', 'Brief i opseg projekta'],
    },
    {
      number: '02', icon: PenToolIcon, title: 'Dizajn', duration: 'Sedmice 2–4',
      description: 'Naši dizajneri kreiraju lijepa, korisnički centrirana sučelja usklađena s vašim brendom koja angažuju vašu publiku.',
      deliverables: ['Wireframeovi i korisnički tokovi', 'Mockupovi visoke vjernosti', 'Interaktivni prototipi', 'Dizajn sistem'],
    },
    {
      number: '03', icon: CodeIcon, title: 'Razvoj', duration: 'Sedmice 4–8',
      description: 'Razvijamo vaše rješenje koristeći najsuvremenije tehnologije, s kontinuiranim testiranjem i iteracijom tokom procesa.',
      deliverables: ['Frontend razvoj', 'Backend integracija', 'CMS konfiguracija', 'QA i testiranje'],
    },
    {
      number: '04', icon: RocketIcon, title: 'Lansiranje', duration: 'Sedmica 8+',
      description: 'Deployamo vaš projekt i pružamo kontinuiranu podršku, praćenje i optimizaciju za dugoročni uspjeh.',
      deliverables: ['Produkcijski deployment', 'Optimizacija performansi', 'Obuka tima', 'Kontinuirana podrška'],
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">Naš proces</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Dokazani, transparentan pristup isporuci iznimnih digitalnih proizvoda. Od prvog razgovora
              do lansiranja i dalje — evo tačno kako radimo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12">
          {steps.map((step, index) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: index * 0.1 }}
              className="bg-white p-8 lg:p-12 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-blue-600/20 mb-2">{step.number}</div>
                  <h2 className="text-3xl font-bold text-zinc-950 mb-2">{step.title}</h2>
                  <p className="text-sm font-semibold text-blue-600">{step.duration}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-lg text-zinc-600 leading-relaxed mb-6">{step.description}</p>
                  <h3 className="text-sm font-semibold text-zinc-950 mb-3 uppercase tracking-wide">Isporuke</h3>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-center text-zinc-700">
                        <CheckIcon className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Spremi za pokretanje projekta?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Razgovarajmo o vašim ciljevima i kreirajmo mapu puta da ih dostignete.
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
