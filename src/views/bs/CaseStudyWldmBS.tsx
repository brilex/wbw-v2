'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, CheckIcon } from 'lucide-react';

const STATS = [
  { value: 'Custom', label: 'WordPress tema' },
  { value: '2', label: 'Ugrađena SEO alata' },
  { value: '3D', label: 'Vizualizacije podataka' },
  { value: 'Komplet', label: 'Brend identitet' },
];

const SOLUTIONS = [
  'WordPress + Bricks Builder — custom layouti sa vizualnom preciznošću',
  'Interaktivna 3D hero vizualizacija — topografski pejzaž baziran na podacima',
  'AI Citations Audit alat — ugrađena analiza domena za AI grafove preporuka',
  'Backlink Relevance Cosine Scorer — alat za ocjenu semantičke relevantnosti',
  'Dizajn fokusiran na konverziju — tok zakazivanja strategijske sesije',
  'Prezentacija tehničkog sadržaja — koncepti data science-a učinjeni pristupačnim',
  'SEO osnove — meta tagovi, strukturirani podaci, optimizacija performansi',
  'Responzivni dizajn — uglađeno iskustvo na svim uređajima',
];

const TECH = [
  { name: 'WordPress', desc: 'CMS koji pokreće cijeli sajt' },
  { name: 'Bricks Builder', desc: 'Vizualni page builder za custom layoute' },
  { name: 'JavaScript', desc: 'Interaktivni alati i 3D vizualizacije' },
  { name: 'HTML / CSS', desc: 'Custom stilizacija i responzivni dizajn' },
];

export function CaseStudyWldmBS() {
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
                WordPress + Bricks
              </span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                SEO Agencija
              </span>
              <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-full border border-zinc-200">
                Interaktivni alati
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              WLDM
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mb-4">
              Custom WordPress tema za agenciju za backlinks i AI citation
              engineering — sa interaktivnim vizualizacijama podataka, ugrađenim
              SEO audit alatima i dizajnom fokusiranim na konverziju, napravljenim
              da privuče enterprise klijente.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-8">
              <span>Backlinks i AI Citation Engineering</span>
              <span className="w-1 h-1 bg-zinc-300 rounded-full" />
              <span>SEO Agencija</span>
            </div>
            <a
              href="https://wldm.io"
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
            <Image src="/wldm.webp" alt="WLDM web stranica" fill className="object-contain" priority />
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
              <h2 className="text-4xl font-bold text-zinc-950 mb-6">Data science agencija treba sajt koji dokazuje njihovu tehničku dubinu</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                WLDM nije tipična SEO agencija — pozicioniraju se na presjecištu
                data science-a i search engineeringa. Njihova web stranica trebala
                je odraziti taj nivo sofisticiranosti bez odbijanja potencijalnih
                klijenata.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Sajt je trebao komunicirati složene koncepte — 3D vektorski autoritet,
                harmonijski centralitet, AI grafove citiranja — na način koji gradi
                kredibilitet i pokreće zakazivanje strategijskih sesija.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Osim sadržaja, klijent je želio interaktivne alate ugrađene direktno
                u sajt: AI Citations Audit i Backlink Relevance Scorer koje potencijalni
                klijenti mogu koristiti prije zakazivanja poziva.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-8 space-y-4">
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-4">Ključni zahtjevi</div>
              {[
                'Premium, vizualni identitet baziran na podacima sa 3D elementima',
                'Ugrađeni AI Citations Audit alat za generisanje leadova',
                'Backlink Relevance Cosine Scorer kao interaktivna funkcionalnost',
                'Tehnički sadržaj koji gradi povjerenje kod enterprise klijenata',
                'Zakazivanje strategijske sesije kao primarni cilj konverzije',
                'Mobilno responzivan sa konzistentnim premium osjećajem',
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
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">Premium agencijski sajt sa ugrađenim SEO alatima</h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              Izgradili smo custom WordPress temu koja spaja upečatljiv vizualni dizajn
              sa funkcionalnim alatima — pretvarajući samu web stranicu u mašinu za
              generisanje leadova.
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Trebate web stranicu koja prodaje vašu stručnost?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Gradimo agencijske i SaaS web stranice koje pretvaraju tehničku dubinu
              u povjerenje klijenata — custom kodirane, fokusirane na konverziju.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/bs/kontakt"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
                Pokrenite projekt
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wldm.io"
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
