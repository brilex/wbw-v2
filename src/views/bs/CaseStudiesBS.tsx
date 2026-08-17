'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';

interface CaseStudy {
  title: string; client: string; category: string; description: string;
  results: { metric: string; value: string }[];
  color: string; tags: string[]; href?: string; image?: string;
  ctaLabel?: string; external?: boolean;
}

export function CaseStudiesBS() {
  const caseStudies: CaseStudy[] = [
    {
      title: 'firme.ba', client: 'Interni proizvod', category: 'Poslovni direktorij · Platforma',
      description: 'Poslovni direktorij za cijelu Bosnu i Hercegovinu. Firme dobijaju profil s logom, lokacijom, kategorijom i opisom, a posjetioci ih pronalaze po nazivu, djelatnosti ili gradu — kroz kategorije od građevinarstva i auto industrije, preko IT-a, nekretnina i zdravstva, do ljepote i poslovnih usluga.',
      results: [{ metric: 'Pokrivenost', value: 'Cijela BiH' }, { metric: 'Kategorija', value: '9+' }, { metric: 'Vrste oglasa', value: 'Besplatni + Premium' }],
      color: 'from-red-500 to-red-700', tags: ['Poslovni direktorij', 'Pretraga i filteri', 'Profili firmi', 'Korisnički nalozi', 'SEO'],
      href: '/bs/rad/firme-ba', image: '/firme-ba.webp',
    },
    {
      title: 'ConvertToNext', client: 'Interni proizvod', category: 'Developer alat · SaaS',
      description: 'Izgradili smo automatizovani konverzijski engine koji transformiše Vite + React projekte (Bolt.new, Lovable, v0 exportovi) u produkcijski-spreman Next.js 15 App Router — rješavajući problem SEO nevidljivosti AI-generiranih sajtova za manje od 60 sekundi.',
      results: [{ metric: 'Vrijeme konverzije', value: '< 60s' }, { metric: 'Vrste transformacija', value: '8' }, { metric: 'Cijena za korisnike', value: 'Besplatno' }],
      color: 'from-emerald-500 to-emerald-700', tags: ['Next.js 15', 'TypeScript', 'Turborepo', 'Vercel', 'Supabase'],
      href: '/bs/rad/converttonext', image: '/ConverttoNext.webp',
    },
    {
      title: 'Hamada & Co.', client: 'PVC & Aluminijska stolarija', category: 'Web dizajn · SEO',
      description: 'Kompletna rekonstrukcija web stranice za firmu za stolariju u Bosni i Hercegovini — moderan dizajn, potpuna SEO optimizacija i konverzijski fokusirane forme koje su donijele prvog platećeg kupca u prvoj sedmici od lansiranja.',
      results: [{ metric: 'Pojavljivanja u pretrazi', value: '+968%' }, { metric: 'Klikovi s Googlea', value: '+395%' }, { metric: 'Prvi kupac', value: 'Sedmica 1' }],
      color: 'from-blue-500 to-blue-700', tags: ['WordPress', 'Bricks Builder', 'SEO'],
      href: '/bs/rad/hamada-co', image: '/hamada&co.webp',
    },
    {
      title: 'Neimax d.o.o.', client: 'Valoviti karton i ambalaža', category: 'Custom WordPress · Proizvodnja',
      description: 'Custom WordPress tema za jednog od vodećih proizvođača ambalaže u BiH — trojezična (BA/EN/DE), Figma-to-code, sa katalogom proizvoda i galerijom fabrike.',
      results: [{ metric: 'Jezika', value: '3' }, { metric: 'Tip teme', value: 'Custom' }, { metric: 'Izvor dizajna', value: 'Figma' }],
      color: 'from-amber-500 to-amber-700', tags: ['WordPress', 'PHP', 'WPML', 'Figma'],
      href: '/bs/rad/neimax', image: '/Neimax.webp',
    },
    {
      title: 'WLDM', client: 'Backlinks i AI Citation agencija', category: 'WordPress + Bricks · SEO Agencija',
      description: 'Premium agencijski sajt za kompaniju za backlinks i AI citation engineering — sa interaktivnim SEO audit alatima, 3D vizualizacijama podataka i tokom zakazivanja strategijskih sesija.',
      results: [{ metric: 'Ugrađenih alata', value: '2' }, { metric: 'Vizualni stil', value: '3D Podaci' }, { metric: 'Cilj konverzije', value: 'Zakazivanja' }],
      color: 'from-lime-500 to-lime-700', tags: ['WordPress', 'Bricks Builder', 'JavaScript'],
      href: '/bs/rad/wldm', image: '/wldm.webp',
    },
    {
      title: 'Multilab d.o.o.', client: 'Laboratorijske i sigurnosne usluge', category: 'Custom WordPress · Zdravstvo',
      description: 'Custom WordPress tema za ISO-akreditovani laboratorij u Tuzli — pokrivajući laboratorijske analize, DDD usluge, zaštitu na radu i protupožarnu zaštitu kroz četiri poslovna sektora.',
      results: [{ metric: 'Sektora', value: '4' }, { metric: 'Tip teme', value: 'Custom' }, { metric: 'Akreditovan', value: 'ISO' }],
      color: 'from-teal-500 to-teal-700', tags: ['WordPress', 'PHP', 'Vanilla JS'],
      href: '/bs/rad/multilab', image: '/multilab.webp',
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">Odabrane studije slučaja</h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Stvarni projekti, stvarni rezultati. Istražite kako smo pomogli ambicioznim brendovima
              da transformišu svoju digitalnu prisutnost i ostvare mjerljive poslovne ishode.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {caseStudies.map((study, index) => (
            <motion.article key={study.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.05 }}
              className="group bg-white rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-xl transition-all overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''}`}>
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  {study.image ? (
                    <Link
                      href={study.href ?? '#'}
                      {...(study.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="block w-full h-full">
                      <Image src={study.image} alt={study.title} fill
                        className="object-contain group-hover:scale-105 transition-transform duration-700" />
                    </Link>
                  ) : (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-br ${study.color} group-hover:scale-105 transition-transform duration-700`} />
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                    </>
                  )}
                  <div className="absolute top-6 left-6">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-sm font-semibold text-blue-600 mb-2">{study.client}</p>
                  {study.href ? (
                    <Link href={study.href}>
                      <h2 className="text-3xl font-bold text-zinc-950 mb-4 group-hover:text-blue-600 transition-colors hover:text-blue-600">{study.title}</h2>
                    </Link>
                  ) : (
                    <h2 className="text-3xl font-bold text-zinc-950 mb-4 group-hover:text-blue-600 transition-colors">{study.title}</h2>
                  )}
                  <p className="text-zinc-600 leading-relaxed mb-6">{study.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-zinc-100">
                    {study.results.map((result) => (
                      <div key={result.metric}>
                        <div className="text-2xl font-bold text-zinc-950 mb-1">{result.value}</div>
                        <div className="text-xs text-zinc-500 leading-tight">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-full">{tag}</span>
                    ))}
                  </div>
                  {study.href ? (
                    <Link
                      href={study.href}
                      {...(study.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all w-fit">
                      {study.ctaLabel ?? 'Pogledajte studiju slučaja'}
                      <ArrowUpRightIcon className="ml-1 w-5 h-5" />
                    </Link>
                  ) : (
                    <button className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all w-fit">
                      Pogledajte studiju slučaja
                      <ArrowUpRightIcon className="ml-1 w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">Želite ovakve rezultate?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Razgovarajmo o tome kako možemo pomoći da postignete stvarne ishode za vaš biznis.
            </p>
            <Link href="/bs/kontakt"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
              Pokrenite vaš projekt
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
