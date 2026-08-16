'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, CheckIcon } from 'lucide-react';

const STATS = [
  { value: '4', label: 'Poslovna sektora' },
  { value: 'Custom', label: 'WordPress tema' },
  { value: 'Akreditovan', label: 'Laboratorij (ISO)' },
  { value: 'Tuzla, BiH', label: 'Lokacija' },
];

const SOLUTIONS = [
  'Custom WordPress tema — dizajnirana i kodirana od nule, bez templeta',
  'Navigacija po sektorima — laboratorij, DDD, zaštita na radu, protupožarna zaštita',
  'Sekcija vijesti i blog — informisanje klijenata o industrijskim novostima',
  'Prikaz akreditacija — certifikati i ISO dokumentacija na prvom mjestu',
  'Profili tima i rukovodstva — građenje povjerenja kod korporativnih klijenata',
  'Foto galerija — laboratorijska oprema, terenski rad i prostorije',
  'SEO osnove — jedinstveni meta naslovi, opisi i strukturirani podaci',
  'Mobile-first responzivni dizajn za pristup u pokretu',
];

const TECH = [
  { name: 'WordPress', desc: 'CMS koji pokreće cijeli sajt' },
  { name: 'PHP', desc: 'Razvoj custom teme' },
  { name: 'Vanilla JavaScript', desc: 'Interaktivne komponente' },
  { name: 'HTML / CSS', desc: 'Semantički markup, responzivni stilovi' },
];

export function CaseStudyMultilabBS() {
  return (
    <main className="min-h-screen bg-white">

      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/bs/rad"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-10">
            <ArrowLeftIcon className="w-4 h-4" />
            Sve studije slučaja
          </Link>
        </div>
      </div>

      <section className="pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                Custom WordPress
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                Zdravstvo
              </span>
              <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-full border border-zinc-200">
                Laboratorij
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Multilab d.o.o.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mb-4">
              Custom WordPress tema za akreditovani laboratorij i višesektorsku
              uslužnu kompaniju u Tuzli — pokrivajući laboratorijske analize,
              dezinsekciju, zaštitu na radu i protupožarnu zaštitu pod jednim
              profesionalnim krovom.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-8">
              <span>Laboratorijske i sigurnosne usluge</span>
              <span className="w-1 h-1 bg-zinc-300 rounded-full" />
              <span>Tuzla, Bosna i Hercegovina</span>
            </div>
            <a
              href="https://multilab.ba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              Posjetite sajt
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
            <Image src="/multilab.webp" alt="Multilab web stranica" fill className="object-contain" priority />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Izazov</div>
              <h2 className="text-4xl font-bold text-zinc-950 mb-6">Četiri poslovna sektora, jedna koherentna web stranica</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Multilab posluje u četiri različita sektora — laboratorijske analize,
                dezinfekcija/dezinsekcija/deratizacija (DDD), zaštita na radu i
                protupožarna zaštita. Svaki sektor ima svoje usluge, klijente i
                regulatorne zahtjeve.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Izazov je bio izgraditi web stranicu koja jasno predstavlja sva četiri
                sektora bez zatrpavanja posjetilaca, uz održavanje profesionalnog
                kredibiliteta koji se očekuje od ISO-akreditovanog laboratorija.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Sajt je također trebao prikazati njihove akreditacije, stručnost tima
                i najnovije vijesti — dajući korporativnim klijentima povjerenje prije
                nego što uopšte podignu telefon.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-8 space-y-4">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">Pokriveni sektori</div>
              {[
                'Laboratorijske analize — ispitivanje hrane, vode i uzoraka iz okoline',
                'DDD usluge — dezinfekcija, dezinsekcija i deratizacija',
                'Zaštita na radu — zdravlje na radnom mjestu i mikroklimatska mjerenja',
                'Protupožarna zaštita — servisiranje i prodaja opreme',
                'Prikaz akreditacija — ISO certifikati i regulatorna usklađenost',
                'Blog i vijesti — industrijski updateovi za klijente',
              ].map((req) => (
                <div key={req} className="flex items-start gap-3 text-sm text-blue-800">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  {req}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Rješenje</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">Custom tema koja organizuje kompleksnost</h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              Dizajnirali smo i izgradili WordPress temu od nule koja svakom sektoru
              daje svoj prostor, a iskustvo održava ujedinjenim i profesionalnim.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-4">
            {SOLUTIONS.map((solution, i) => (
              <motion.div key={solution} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-white border border-zinc-200 rounded-xl p-5 text-sm text-zinc-700">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon className="w-3 h-3 text-white" />
                </div>
                {solution}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">Tehnološki stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TECH.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-zinc-200 rounded-xl p-5">
                <div className="font-semibold text-zinc-950 text-sm mb-1">{item.name}</div>
                <div className="text-zinc-500 text-xs">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Trebate profesionalnu web stranicu za vaš biznis?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Gradimo custom WordPress teme koje jasno predstavljaju složene biznise
              — bez templeta, bez kompromisa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/bs/kontakt"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
                Pokrenite projekt
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://multilab.ba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                Posjetite sajt <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
