'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, CheckIcon, XIcon } from 'lucide-react';

const STATS = [
  { value: '+968%', label: 'Pojavljivanja u pretrazi (3 mj.)' },
  { value: '+395%', label: 'Klikova s Googlea (3 mj.)' },
  { value: '100', label: 'Desktop Lighthouse' },
  { value: 'Sedmica 1', label: 'Prvi plativi kupac' },
];

const PROBLEMS = [
  'Nema organske vidljivosti — sajt je bio nevidljiv za Google',
  'Loš vizuelni dizajn — zastarjeli izgled, nedosljedna tipografija',
  'Nikakva SEO strategija — nedostajući meta opisi, duplirani naslovi stranica',
  'Tanak sadržaj — stranice su imale gotovo nula teksta za Google da indeksira',
  'Sporo učitavanje — neoptimizovane slike i nema podešavanja performansi',
  'Nema konverzijskih elemenata — nema formi, nema jasnih poziva na akciju',
  'Nema strukturiranih podataka — Google nije imao kontekst o poslovanju',
];

const SOLUTIONS = [
  'Potpuni redizajn — moderni, čisti UI koji odmah gradi povjerenje',
  'Jedinstven meta naslov i opis na svakoj stranici',
  'Bogat sadržaj na svim stranicama usluga i lokacija',
  'Slike optimizovane s lazy loadingom, savršeni Lighthouse rezultati',
  'Forme za traženje ponude postavljene na ključnim stranicama usluga',
  'Schema markup — LocalBusiness, Service i FAQ strukturirani podaci',
  'Stranice specifične za lokaciju koje ciljaju gradove širom BiH',
  'Blog s edukativnim sadržajem koji donosi organski promet',
];

const TECH = [
  { name: 'WordPress', desc: 'CMS koji pokreće cijeli sajt' },
  { name: 'Bricks Builder', desc: 'Vizualni graditelj za prilagođene izglede' },
  { name: 'WP Rocket', desc: 'Keširanje i optimizacija performansi' },
  { name: 'Rank Math SEO', desc: 'On-page SEO, sitemapovi, meta tagovi' },
  { name: 'Schema.org', desc: 'LocalBusiness, Service, FAQ strukturirani podaci' },
  { name: 'Google Search Console', desc: 'Praćenje performansi i indeksiranja' },
];

export function CaseStudyHamadaBS() {
  return (
    <main className="min-h-screen bg-white">

      {/* Nazad */}
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/bs/rad"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-10">
            <ArrowLeftIcon className="w-4 h-4" />
            Sve studije slučaja
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">Web Dizajn</span>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">SEO</span>
              <span className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-semibold rounded-full border border-zinc-200">Generacija upita</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">Hamada & Co.</h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mb-4">
              Kompletna rekonstrukcija web stranice za firmu za PVC i aluminijsku stolariju u Bosni i
              Hercegovini — pretvaranje sporog, nevidljivog sajta u mašinu za generiranje potencijalnih
              kupaca koja je donijela prvog kupca u prvoj sedmici od lansiranja.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mb-8">
              <span>PVC i aluminijska stolarija</span>
              <span className="w-1 h-1 bg-zinc-300 rounded-full" />
              <span>Maglaj, Bosna i Hercegovina</span>
            </div>
            <a href="https://hamadaco.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              Posjetite live sajt
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hero slika */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 shadow-lg">
            <Image src="/hamada&co.webp" alt="Hamada & Co. web stranica" fill className="object-contain" priority />
          </motion.div>
        </div>
      </section>

      {/* Statistika */}
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

      {/* Izazov */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Izazov</div>
              <h2 className="text-4xl font-bold text-zinc-950 mb-6">Nema upita sa sajta, nema organske vidljivosti na Googleu</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Hamada & Co. imao je solidnu ponudu proizvoda i pravu zanatsku vještinu — ali njihova web
                stranica govorila je drugačiju priču. Izgledala je zastarjelo, učitavala se sporo i davala
                Googleu gotovo ništa za rad.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Duplirani naslovi stranica značili su da Google nije mogao razlikovati stranice. Tanak sadržaj
                značio je da nema ničega za rangiranje. Nema formi značilo je da zainteresovani posjetioci
                nisu imali lak način da stupe u kontakt. Sajt je bio mrtva ulica.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Na konkurentnom lokalnom tržištu, prvi utisci su važni. Potencijalni kupci koji bi sletjeli
                na stari sajt napuštali su ga prije nego što su uopšte vidjeli šta firma može ponuditi.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="bg-red-50 border border-red-200 rounded-2xl p-8 space-y-3">
              <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-4">Problemi sa starim sajtom</div>
              {PROBLEMS.map((problem) => (
                <div key={problem} className="flex items-start gap-3 text-sm text-red-800">
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

      {/* Rješenje */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Rješenje</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">Izgraditi SEO-optimizovan sajt od nule</h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              Svaka odluka — od strukture stranice do optimizacije slika — donesena je s jednim ciljem:
              pretvoriti posjetioce u upite.
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

      {/* Rezultati */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Rezultati</div>
            <h2 className="text-4xl font-bold text-zinc-950 mb-4">Prvi kupac u prvoj sedmici — a brojevi su nastavili rasti</h2>
            <p className="text-zinc-600 max-w-2xl leading-relaxed">
              Već u prvim danima od lansiranja, sajt je već radio. Kupac je pronašao firmu kroz novi sajt
              i obavio kupovinu. Ali prava priča je ono što se desilo u narednim mjesecima — potvrđeno
              kroz Google Search Console.
            </p>
          </motion.div>

          {/* Veliki outcome brojevi */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { value: '+968%', label: 'Rast pojavljivanja u pretrazi', sub: 'Posljednja 3 mjeseca u odnosu na prethodni period', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
              { value: '+395%', label: 'Rast klikova s Googlea', sub: 'Posljednja 3 mjeseca u odnosu na prethodni period', color: 'bg-blue-50 border-blue-200 text-blue-700' },
              { value: 'Sedmica 1', label: 'Prvi plativi kupac', sub: 'Pronašao firmu kroz Google, konvertovao na sajtu', color: 'bg-zinc-950 border-zinc-800 text-white' },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-8 ${item.color}`}>
                <div className="text-4xl lg:text-5xl font-bold mb-3">{item.value}</div>
                <div className="text-lg font-semibold mb-1">{item.label}</div>
                <div className="text-sm opacity-70 leading-relaxed">{item.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* GSC dokaz */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-zinc-200 overflow-hidden shadow-lg">
              <div className="bg-zinc-50 border-b border-zinc-200 px-6 py-4">
                <p className="text-sm font-semibold text-zinc-950">Google Search Console — Uspješnost (6 mjeseci)</p>
                <p className="text-xs text-zinc-500 mt-1">524 klikova · 12.600 pojavljivanja · 4,1% CTR · 8,7 prosječna pozicija</p>
              </div>
              <div className="relative w-full aspect-[16/6]">
                <Image
                  src="/hamada-rad.jpg"
                  alt="Google Search Console graf performansi — rast nakon preuzimanja od WBW, 524 klikova, 12.600 pojavljivanja za 6 mjeseci"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-zinc-200 overflow-hidden shadow-lg">
              <div className="bg-zinc-50 border-b border-zinc-200 px-6 py-4">
                <p className="text-sm font-semibold text-zinc-950">Google Search Console — Uvidi (posljednja 3 mjeseca)</p>
                <p className="text-xs text-zinc-500 mt-1">436 klikova (+395%) · 11.600 pojavljivanja (+968%)</p>
              </div>
              <div className="relative w-full aspect-[16/4]">
                <Image
                  src="/hamada-uvidi.png"
                  alt="Google Search Console uvidi — +395% klikova i +968% pojavljivanja za 3 mjeseca"
                  fill
                  className="object-contain bg-white"
                />
              </div>
            </motion.div>
          </div>

          {/* Dodatni statistički red */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '524', label: 'Ukupno klikova (6 mj.)' },
              { value: '12,6K', label: 'Ukupno pojavljivanja (6 mj.)' },
              { value: '4,1%', label: 'Prosječni CTR' },
              { value: '8,7', label: 'Prosječna pozicija' },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-zinc-50 border border-zinc-200 rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-zinc-950 mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">Tech stack</h3>
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

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Želite ovakve rezultate?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Web stranica koja izgleda odlično i dobro funkcioniše u pretrazi nije luksuz — to je osnova.
              Izgradimo vašu.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/bs/kontakt"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
                Pokrenite projekt
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://hamadaco.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                Posjetite live sajt <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
