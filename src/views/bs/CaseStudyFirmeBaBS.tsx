'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, CheckIcon } from 'lucide-react';

const STATS = [
  { value: '88.400+', label: 'Registrovanih firmi' },
  { value: '78', label: 'Kategorija' },
  { value: '2.767', label: 'Stranica kategorija × grad' },
  { value: '−93,9%', label: 'Duplikata meta opisa' },
];

const AUDIT = [
  {
    title: 'Duplikati meta opisa',
    before: '98.363',
    after: '5.986',
    delta: '−93,9%',
    desc: 'Meta šabloni prepisani da koriste podatke specifične za firmu — naziv, kategorija, grad, adresa, telefon, veličina, godina registracije — umjesto zajedničkog teksta djelatnosti iz registra. Nalazi visokog prioriteta pali su sa 84.402 na 188 (−99,8%).',
  },
  {
    title: 'Nekonzistentni slugovi',
    before: '88.388',
    after: '0',
    delta: '−100%',
    desc: 'Sloj za transliteraciju normalizuje bosanske dijakritike (č, ć, ž, š, đ) u stabilne URL slugove bez kolizija — primijenjen jednom pri unosu i provjeravan na svakom buildu.',
  },
  {
    title: 'Nedostajuća schema polja',
    before: '37.457',
    after: '119',
    delta: '−99,7%',
    desc: 'Organization i WebSite/SearchAction na rootu, BreadcrumbList na sva tri nivoa kategorija, LocalBusiness na svakom profilu firme.',
  },
];

const TECH = [
  { name: 'Next.js 15', desc: 'App Router, ISR s revalidacijom na zahtjev' },
  { name: 'PostgreSQL', desc: 'Unos registra, deduplikacija i upiti' },
  { name: 'Contabo VPS', desc: 'Nginx reverse proxy + Certbot TLS' },
  { name: 'GitHub Actions', desc: 'CI/CD s audit provjerom na svakom buildu' },
  { name: 'Schema.org JSON-LD', desc: 'Organization, LocalBusiness, BreadcrumbList' },
  { name: 'Vlastiti pSEO audit CLI', desc: 'Node.js — provjera duplikata, slugova i scheme' },
];

export function CaseStudyFirmeBaBS() {
  return (
    <main className="min-h-screen bg-white">

      {/* Nazad */}
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
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-semibold rounded-full border border-red-200">
                Direktorij
              </span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                Programski SEO
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              firme.ba
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mb-8">
              Programski poslovni direktorij koji pretvara 88.000 sirovih zapisa iz državnog
              registra u pretraživ i indeksabilan direktorij bosanskih firmi — bez ijedne
              stranice tankog sadržaja.
            </p>
            <a
              href="https://firme.ba"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Posjeti sajt
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Statistika */}
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
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Problem</div>
              <h2 className="text-4xl font-bold text-zinc-950 mb-6">Javni podaci koje niko ne može koristiti</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                FIA registar sadrži svaku registrovanu firmu u Bosni i Hercegovini. Ali podaci
                dolaze sirovi: nula opisnih tekstova, oko 42% zapisa bez adrese ili telefona, i
                opis djelatnosti koji je identičan za stotine firmi u istoj kategoriji.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Naivan programski SEO pristup — jedna stranica po zapisu — pretvara 88.000 redova
                u desetine hiljada stranica s istim meta opisom. Upravo ono što Google tretira
                kao tanak i duplikatni sadržaj.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Obim nije težak dio. Teško je učiniti da svaka stranica zaslužuje indeksiranje.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">
                  Šta registar daje
                </div>
                <pre className="font-mono text-sm text-red-800 whitespace-pre-wrap">{`naziv:     "A.N. GRADNJA D.O.O."
adresa:    null
telefon:   null
djelatnost_opis:
  "Gradnja stambenih i
   nestambenih zgrada"`}</pre>
                <p className="text-xs text-red-600 mt-3">
                  Isti tekst na 1.000+ zapisa. Nema šta da se indeksira.
                </p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">
                  Šta stranica prikaže
                </div>
                <pre className="font-mono text-sm text-emerald-800 whitespace-pre-wrap">{`<title>A.N. GRADNJA d.o.o. —
  Građevinarstvo, Zavidovići</title>

<meta name="description" content=
  "A.N. GRADNJA d.o.o., Sinanovići b.b,
   Zavidovići. Građevinarstvo." />`}</pre>
                <p className="text-xs text-emerald-700 mt-3">
                  Specifično za firmu. Različito od svake srodne stranice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rješenje */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Rješenje</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">Generisanje stranica s pragom</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Stranice se ne generišu zato što je URL moguć. Generišu se kad iza njih stoji
              dovoljno stvarnih podataka da ih vrijedi čitati.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: '01',
                title: 'Prag',
                desc: 'Kombinacija kategorija × grad dobija vlastitu stranicu tek s 3+ firme. Ispod praga stranica je noindex. Od 3.972 mogućih kombinacija, 2.767 (69,7%) prolazi.',
              },
              {
                step: '02',
                title: 'Revalidacija',
                desc: 'Next.js ISR s revalidacijom na zahtjev. Kad kombinacija pređe prag, stranica, sitemap i interni linkovi se ažuriraju bez redeploya.',
              },
              {
                step: '03',
                title: 'Audit',
                desc: 'Vlastiti Node.js CLI provjerava svaki build na duplikate meta opisa (Jaccard i kosinusna sličnost), konzistentnost slugova i kompletnost LocalBusiness scheme.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-zinc-200 rounded-2xl p-8"
              >
                <div className="text-blue-600 font-mono text-xs font-bold mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white border border-zinc-200 rounded-2xl p-8">
            <h3 className="font-semibold text-zinc-950 mb-6">Od čega prag štiti</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Stranica s jednim oglasom i bez vrijednosti poređenja',
                'Gotovo identičnih meta opisa na srodnim stranicama',
                'Trošenja crawl budžeta na kombinacije koje niko ne traži',
                'Internih linkova koji vode na praktično prazne stranice',
                'Sitemap unosa koje Google kasnije odbaci kao soft 404',
                'Kategorijskih stranica koje nadmašuju profile koje linkuju',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 text-sm text-zinc-600">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckIcon className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tehnička implementacija */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Tehnička implementacija</div>
            <h2 className="text-4xl font-bold text-zinc-950 mb-4">Svaki build mora proći audit</h2>
            <p className="text-zinc-600 max-w-2xl leading-relaxed">
              Audit CLI se pokreće u CI-ju i prijavljuje nalaze po ozbiljnosti. Ovo su tri
              kategorije koje su najviše značile, mjerene prije i poslije ispravki.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {AUDIT.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8"
              >
                <h3 className="font-semibold text-zinc-950 mb-4">{item.title}</h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-2xl font-bold text-zinc-400 line-through">{item.before}</span>
                  <span className="text-zinc-400">→</span>
                  <span className="text-3xl font-bold text-zinc-950">{item.after}</span>
                  <span className="text-sm font-semibold text-emerald-600">{item.delta}</span>
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {TECH.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-zinc-50 border border-zinc-200 rounded-xl p-5"
              >
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Želite ovako nešto izgrađeno?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Dizajniramo i razvijamo web proizvode, direktorije i sajtove visokih performansi.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/bs/kontakt"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl"
              >
                Pokrenite projekt
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://firme.ba"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                Posjeti sajt <ExternalLinkIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
