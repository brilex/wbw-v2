'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  CheckIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '107.000+', label: 'Registrovanih firmi' },
  { value: '78', label: 'Kategorija' },
  { value: '2.767', label: 'Lokalnih landing stranica' },
  { value: 'SEO-first', label: 'Arhitektura platforme' },
];

const FEATURES = [
  {
    title: 'Skalabilna struktura',
    desc: 'Arhitektura napravljena da podrži veliki broj firmi, kategorija, gradova i lokalnih pretraga bez ručnog kreiranja svake stranice.',
  },
  {
    title: 'Programski SEO',
    desc: 'Stranice se generišu iz stvarnih podataka i organizuju tako da korisnici mogu pronaći relevantne firme po djelatnosti i lokaciji.',
  },
  {
    title: 'Lokalna pretraga',
    desc: 'Kombinacija kategorija i gradova omogućava stvaranje korisnih lokalnih stranica koje odgovaraju stvarnim načinima pretrage.',
  },
  {
    title: 'Struktura spremna za rast',
    desc: 'Platforma je projektovana tako da se nove kategorije, lokacije i funkcionalnosti mogu dodavati bez promjene osnovne arhitekture.',
  },
  {
    title: 'SEO tehnička osnova',
    desc: 'Dinamički metadata, strukturirani podaci, breadcrumbs, sitemap i interna povezanost stranica ugrađeni su u samu platformu.',
  },
  {
    title: 'Brzo i moderno korisničko iskustvo',
    desc: 'Fokus na brzo učitavanje, jasnu navigaciju i jednostavan pronalazak relevantne firme.',
  },
];

const RESULTS = [
  '107.000+ firmi organizovano u jedinstven poslovni direktorij',
  '78 poslovnih kategorija',
  '2.767 lokalnih stranica kategorija i gradova',
  'Automatizovano upravljanje velikim brojem SEO stranica',
  'Struktura spremna za dalje širenje platforme',
  'Jednostavnije pronalaženje firmi prema djelatnosti i lokaciji',
];

const TECH = [
  'Next.js',
  'PostgreSQL',
  'Programmatic SEO',
  'Schema.org',
  'Server-side rendering',
  'ISR / caching',
];

export function CaseStudyFirmeBaBS() {
  return (
    <main className="min-h-screen bg-white">

      {/* Back */}
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/bs/rad"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-10"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Sve studije slučaja
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-full border border-red-200">
                Poslovni direktorij
              </span>

              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                Programmatic SEO
              </span>

              <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-full border border-zinc-200">
                Next.js
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Firme.ba
            </h1>

            <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl mb-8">
              Skalabilan poslovni direktorij za Bosnu i Hercegovinu,
              izgrađen za pretragu velikog broja firmi, lokalni SEO i
              jednostavno širenje na nove kategorije i lokacije.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://firme.ba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Posjeti sajt
                <ExternalLinkIcon className="w-4 h-4" />
              </a>

              <Link
                href="/bs/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 text-zinc-900 font-semibold rounded-xl hover:bg-zinc-50 transition-colors"
              >
                Započnimo projekt
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
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

                <div className="text-zinc-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Izazov
              </div>

              <h2 className="text-4xl font-bold text-zinc-950 mb-6">
                Kako napraviti direktorij koji može rasti?
              </h2>

              <p className="text-zinc-600 leading-relaxed mb-4">
                Poslovni direktorij nije samo lista firmi. Kada platforma
                treba da podrži desetine hiljada zapisa, stotine kategorija
                i veliki broj lokalnih pretraga, struktura sistema postaje
                jednako važna kao i sam dizajn.
              </p>

              <p className="text-zinc-600 leading-relaxed mb-4">
                Cilj Firme.ba bio je napraviti platformu koja korisnicima
                omogućava brzo pronalaženje relevantnih firmi, a istovremeno
                pruža čvrstu tehničku i SEO osnovu za dugoročni rast.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Umjesto ručnog kreiranja hiljada stranica, ključne stranice
                platforme organizovane su programski na osnovu stvarnih
                podataka.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-950 rounded-3xl p-8 lg:p-10"
            >
              <div className="text-zinc-400 text-sm font-semibold uppercase tracking-widest mb-6">
                Fokus projekta
              </div>

              <div className="space-y-5">
                {[
                  'Velika količina poslovnih podataka',
                  'Organizacija po kategorijama i lokacijama',
                  'Programski generisane SEO stranice',
                  'Jednostavna navigacija i pretraga',
                  'Arhitektura spremna za buduće funkcionalnosti',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-white"
                  >
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon className="w-3.5 h-3.5 text-white" />
                    </div>

                    <span className="text-zinc-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-16"
          >
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
              Rješenje
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-6">
              Platforma napravljena da raste zajedno s podacima
            </h2>

            <p className="text-xl text-zinc-600 leading-relaxed">
              Firme.ba koristi programsku arhitekturu koja omogućava da se
              veliki broj poslovnih podataka pretvori u korisne stranice,
              kategorije i lokalne rezultate bez ručnog održavanja svake
              pojedinačne stranice.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-zinc-200 rounded-2xl p-8"
              >
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                  <CheckIcon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-semibold text-zinc-950 mb-3">
                  {item.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Results */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Rezultat
              </div>

              <h2 className="text-4xl font-bold text-zinc-950 mb-6">
                Jedna platforma. Desetine hiljada poslovnih zapisa.
              </h2>

              <p className="text-zinc-600 leading-relaxed">
                Projekat je postavljen tako da Firme.ba može nastaviti rasti
                bez proporcionalnog povećanja ručnog rada. Nove firme,
                kategorije i lokacije mogu se uključivati u postojeću
                strukturu platforme.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {RESULTS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-white" />
                  </div>

                  <p className="text-zinc-700">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
            <div>
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
                Tehnologija
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-950">
                Moderna tehnička osnova
              </h2>
            </div>

            <p className="text-zinc-600 max-w-xl">
              Odabrane tehnologije omogućavaju brz razvoj, dobro korisničko
              iskustvo i arhitekturu koja može podržati dalji razvoj proizvoda.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {TECH.map((item) => (
              <div
                key={item}
                className="px-4 py-2 bg-white border border-zinc-200 rounded-lg text-sm font-medium text-zinc-700"
              >
                {item}
              </div>
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
              Imate ideju za web platformu?
            </h2>

            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Razvijamo poslovne web stranice, direktorije, web aplikacije
              i platforme napravljene za dugoročni rast.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

              <Link
                href="/bs/kontakt"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl"
              >
                Započnite projekt
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://firme.ba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Pogledaj Firme.ba
                <ExternalLinkIcon className="w-4 h-4" />
              </a>

            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}