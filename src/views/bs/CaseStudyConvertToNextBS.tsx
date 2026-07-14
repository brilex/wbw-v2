'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, CheckIcon } from 'lucide-react';

const STATS = [
  { value: '< 60s', label: 'Vrijeme konverzije' },
  { value: '27+', label: 'Blog postova indeksirano' },
  { value: '8', label: 'Vrsta transformacija' },
  { value: '$0', label: 'Cijena za korisnike' },
];

const TRANSFORMS = [
  'React Router → Next.js App Router struktura datoteka',
  'react-router-dom importi → next/link & next/navigation',
  'useEffect dohvaćanje podataka → async Server Components',
  '<img> tagovi → next/image s auto-konfiguracijom remotePatterns',
  'VITE_* env varijable → NEXT_PUBLIC_* kroz cijeli codebase',
  "'use client' ubačen u komponente zavisne od hookova",
  'Framer Motion komponente označene kao client komponente',
  'Tailwind config ažuriran za App Router putanje direktorija',
];

const TECH = [
  { name: 'Next.js 15', desc: 'App Router, SSR, Server Components' },
  { name: 'TypeScript', desc: 'Tipska sigurnost s kraja na kraj' },
  { name: 'Turborepo', desc: 'Monorepo: web app + core engine' },
  { name: 'Vercel', desc: 'Serverless deployment' },
  { name: 'Supabase', desc: 'Analitika i logovanje konverzija' },
  { name: 'Tailwind CSS', desc: 'Utility-first stilizovanje' },
];

export function CaseStudyConvertToNextBS() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-32 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/bs/rad"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-10">
            <ArrowLeftIcon className="w-4 h-4" />
            Sve studije slučaja
          </Link>
        </div>
      </div>

      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">Developer alat</span>
              <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">SaaS</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">ConvertToNext</h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl mb-8">
              Automatizovani konverzijski engine koji transformiše Vite + React projekte u
              produkcijski-spreman Next.js 15 App Router — rješavajući problem SEO nevidljivosti
              AI-generiranih web stranica.
            </p>
            <a href="https://converttonext.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              Posjetite live sajt
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Problem</div>
              <h2 className="text-4xl font-bold text-zinc-950 mb-6">AI-izgrađene web stranice su nevidljive za Google</h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Alati poput Bolt.new, Lovable, v0 i Cursor generišu React aplikacije koristeći Vite — brz,
                moderan build alat. Ali Vite po defaultu proizvodi client-side rendered (CSR) aplikacije.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4">
                Kada Googlebot posjeti CSR aplikaciju, dobiva prazan HTML shell. Sav stvarni
                sadržaj živi u JavaScriptu. Google ga može izvršiti, ali obrađuje ovo u odgođenom
                redoslijedu renderiranja — stranice mogu ostati neindeksirane nedeljama.
              </p>
              <p className="text-zinc-600 leading-relaxed">
                Developeri satima grade proizvod, lansiraju ga i pitaju se zašto se nikada ne pojavi
                u pretrazi. Sadržaj je tu — Google ga jednostavno ne vidi.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">
                  Šta Googlebot vidi — CSR (Vite)
                </div>
                <pre className="font-mono text-sm text-red-800 whitespace-pre-wrap">{`<body>
  <div id="root"></div>
  <script src="/assets/index.js"></script>
</body>`}</pre>
                <p className="text-xs text-red-600 mt-3">Prazan shell. Nije indeksirano.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-3">
                  Šta Googlebot vidi — SSR (Next.js)
                </div>
                <pre className="font-mono text-sm text-emerald-800 whitespace-pre-wrap">{`<body>
  <nav>...</nav>
  <main>
    <h1>Stvarni naslov vaše stranice</h1>
    <p>Pravi sadržaj, potpuno renderiran.</p>
  </main>
</body>`}</pre>
                <p className="text-xs text-emerald-700 mt-3">Cijeli HTML. Indeksirano odmah.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Rješenje</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-950 mb-4">Automatizovana migracija za manje od 60 sekundi</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              ConvertToNext čita cijeli projekt odjednom, gradi graf zavisnosti i primjenjuje
              determinističke transformacije na svaku datoteku istovremeno.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { step: '01', title: 'Upload', desc: 'Korisnik uploaduje zip svog Bolt, Lovable ili Vite projekta. Bez potrebe za računom.' },
              { step: '02', title: 'Transformacija', desc: 'Engine analizira rute, importe, dohvaćanje podataka, slike i konfiguraciju — zatim sve prepišuje za Next.js.' },
              { step: '03', title: 'Download', desc: 'Kompletan Next.js 15 App Router projekt se vraća kao zip. Deploy na Vercel za nekoliko minuta.' },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-zinc-200 rounded-2xl p-8">
                <div className="text-blue-600 font-mono text-xs font-bold mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-white border border-zinc-200 rounded-2xl p-8">
            <h3 className="font-semibold text-zinc-950 mb-6">Šta se automatski konvertuje</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {TRANSFORMS.map((item) => (
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <div className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">Tehnička implementacija</div>
            <h2 className="text-4xl font-bold text-zinc-950 mb-4">Izgrađeno kao Turborepo monorepo</h2>
            <p className="text-zinc-600 max-w-2xl leading-relaxed">
              Dva paketa: core konverzijski engine (TypeScript AST transformacije) i Next.js web
              aplikacija. Engine se može testirati i objaviti neovisno od UI-a.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
              <div className="font-mono text-xs text-zinc-400 mb-4">packages/core</div>
              <h3 className="font-semibold text-zinc-950 mb-3">Konverzijski Engine</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                AST-baziran transform pipeline. Čita ulazne datoteke, identificira React Router konfiguraciju,
                useEffect fetchove, img tagove i env var reference — zatim isporučuje transformisane
                Next.js datoteke bez ručne intervencije.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                {['Analiza ruta i App Router mapiranje', 'Konstrukcija import grafa', 'AST-level code transformacije', 'Generacija konfiguracijskih datoteka (next.config.ts, package.json)'].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-blue-600">→</span>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
              <div className="font-mono text-xs text-zinc-400 mb-4">apps/web</div>
              <h3 className="font-semibold text-zinc-950 mb-3">Web Aplikacija</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                Next.js 15 App Router sajt sa serverless API rutom koja obrađuje zip uploadove,
                pokreće konverzijski engine i vraća output kao downloadabilni zip. Bez pisanja
                na disk — sve u memoriji.
              </p>
              <ul className="space-y-2 text-sm text-zinc-600">
                {['Serverless obrada datoteka na Vercelu', 'Samo u memoriji — nula disk pisanja', 'Supabase analitika (anonimizovana)', '27+ SEO-ciljanih tehničkih blog postova'].map((i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-blue-600">→</span>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {TECH.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Želite nešto ovako izgrađeno?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Dizajniramo i razvijamo web proizvode, SaaS alate i visoko-performansne sajtove.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/bs/kontakt"
                className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
                Pokrenite projekt
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://converttonext.com" target="_blank" rel="noopener noreferrer"
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
