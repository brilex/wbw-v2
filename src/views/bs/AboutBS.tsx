'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TargetIcon, HeartIcon, ZapIcon, ArrowRightIcon } from 'lucide-react';

export function AboutBS() {
  const values = [
    { icon: TargetIcon, title: 'Fokus na rezultate', description: 'Fokusiramo se na isporuku mjerljivih ishoda koji pokreću vaše poslovanje naprijed.' },
    { icon: HeartIcon, title: 'Klijent na prvom mjestu', description: 'Vaš uspjeh je naš uspjeh. Gradimo dugotrajna partnerstva zasnovana na povjerenju.' },
    { icon: ZapIcon, title: 'Inovacija kao prioritet', description: 'Ostajemo ispred krivulje, koristeći najsuvremenije tehnologije i najbolje prakse.' },
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Gradimo digitalne izvrsnosti od 2016.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-8">
              WBW je web development studio osnovan u Bosni i Hercegovini, specijalizovan za
              custom WordPress i Next.js projekte za firme kojima treba više od šablona.
              Svaki projekat se vodi lično — od dizajna do deploya do SEO-a.
            </p>
            <p className="text-xl text-zinc-600 leading-relaxed mb-8">
              Pomogli smo firmama u regiji da povećaju organsku pretragu do 968%,
              dobiju prvu online mušteriju unutar sedmice od lansiranja, i zamijene
              generičke šablone web stranicama koje zaista pretvaraju posjetioce u upite.
            </p>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Sjedište imamo u{' '}
              <Link href="/bs/izrada-web-stranica-tuzla" className="text-blue-600 font-medium hover:underline">
                Tuzli
              </Link>, ali radimo daljinski sa klijentima širom Bosne i Hercegovine —
              uključujući{' '}
              <Link href="/bs/izrada-web-stranica-sarajevo" className="text-blue-600 font-medium hover:underline">
                Sarajevo
              </Link>.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">Naše vrijednosti</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">Principi koji vode sve što radimo</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">{value.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Radimo zajedno</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Spremi za pokretanje sljedećeg projekta? Kontaktirajte nas i kreirajmo nešto nevjerovatno.
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
