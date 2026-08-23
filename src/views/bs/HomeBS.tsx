'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon, PhoneIcon, MessageCircleIcon } from 'lucide-react';
import { services } from '../../data/services';
import { servicesBS } from '../../data/services-bs';

export function HomeBS() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-block mb-6">
                <span className="px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full">
                  WordPress i Next.js
                </span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-950 mb-6 leading-[1.1]">
                Izrada web stranica koje Google zaista pronađe.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="text-xl text-zinc-600 mb-4 leading-relaxed max-w-xl">
                Većina agencija napravi nešto što lijepo izgleda i nada se da će posjete doći same.
                Kod nas web dizajn i SEO optimizacija idu zajedno od prve linije koda —
                ručno pisano, bez šablona, fiksna cijena.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-sm text-zinc-500 mb-10">
                Izrada web stranica za firme u{' '}
                <Link href="/bs/izrada-web-stranica-tuzla" className="text-blue-600 hover:underline">Tuzli</Link>,{' '}
                <Link href="/bs/izrada-web-stranica-sarajevo" className="text-blue-600 hover:underline">Sarajevu</Link>
                {' '}i širom BiH.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4">
                <Link href="/bs/kontakt"
                  className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center">
                  Pokreni projekt
                  <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/bs/rad"
                  className="px-8 py-4 bg-white border-2 border-zinc-200 text-zinc-950 font-semibold rounded-xl hover:border-zinc-300 transition-colors inline-flex items-center justify-center">
                  Pogledajte naš rad
                </Link>
              </motion.div>

              {/* Direct contact — most people here would rather call or message than fill a form */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <span className="text-zinc-500">Ili nas jednostavno nazovite:</span>
                <a href="tel:+38762827306"
                  className="inline-flex items-center gap-2 font-semibold text-zinc-950 hover:text-blue-600 transition-colors">
                  <PhoneIcon className="w-4 h-4 text-blue-600" />
                  062 827 306
                </a>
                <a href="viber://chat?number=%2B38762827306"
                  className="inline-flex items-center gap-2 font-semibold text-zinc-950 hover:text-blue-600 transition-colors">
                  <MessageCircleIcon className="w-4 h-4 text-blue-600" />
                  Viber
                </a>
                <a href="https://wa.me/38762827306" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-zinc-950 hover:text-blue-600 transition-colors">
                  <MessageCircleIcon className="w-4 h-4 text-blue-600" />
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }} className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-[480px] mx-auto">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl" />
                <motion.div animate={{ y: [0, -16, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-8 right-0 z-20 w-56 bg-white rounded-2xl shadow-2xl border border-zinc-100 overflow-hidden">
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-zinc-50 border-b border-zinc-100">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    <div className="ml-3 flex-1 h-4 bg-white rounded-md border border-zinc-200" />
                  </div>
                  <div className="p-4 space-y-2">
                    <motion.div animate={{ width: ['40%', '70%', '40%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-2 bg-blue-600 rounded" />
                    <div className="h-2 bg-zinc-200 rounded w-full" />
                    <div className="h-2 bg-zinc-200 rounded w-5/6" />
                    <div className="h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mt-3" />
                  </div>
                </motion.div>
                <motion.div animate={{ y: [0, -10, 0], rotate: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-32 left-0 px-3 py-1.5 rounded-full bg-white shadow-lg border border-zinc-100 text-xs font-semibold text-blue-600">
                  ⚡ 99 PageSpeed
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { title: 'Ručno kodirano', detail: 'Bez AI šablona i page buildera koje prerastete' },
              { title: 'SEO od prvog dana', detail: 'Građeno da vas pronađu, ne naknadno dodano' },
              { title: 'Fiksne cijene', detail: 'Znate cijenu prije nego krenemo' },
              { title: 'Sve je vaše', detail: 'Domena, hosting i kod ostaju na vaše ime' },
            ].map((point) => (
              <div key={point.title}>
                <div className="text-lg font-bold text-zinc-950 mb-2">{point.title}</div>
                <div className="text-sm text-zinc-500 leading-relaxed">{point.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
              Šta radimo
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl">
              Sveobuhvatna digitalna rješenja prilagođena vašim poslovnim ciljevima.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => {
              const bsService = servicesBS.find((s) => s.slug === service.slug);
              const Icon = service.icon;
              return (
                <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                  <Link href={`/bs/usluge/${service.slug}`}
                    className="group block bg-zinc-50 p-6 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:bg-white hover:shadow-lg transition-all h-full">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors">
                      {bsService?.title ?? service.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {bsService?.description ?? service.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/bs/usluge" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
              Sve usluge <ArrowRightIcon className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">Odabrani radovi</h2>
              <p className="text-xl text-zinc-600">Projekti na koje smo ponosni</p>
            </div>
            <Link href="/bs/rad" className="hidden md:flex items-center text-blue-600 font-medium hover:gap-2 transition-all">
              Svi projekti <ArrowRightIcon className="ml-1 w-5 h-5" />
            </Link>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'WLDM', category: 'WordPress + Bricks · SEO Agencija', image: '/wldm.webp', href: '/bs/rad/wldm' },
              { title: 'Hamada & Co.', category: 'Web dizajn · SEO', image: '/hamada&co.webp', href: '/bs/rad/hamada-co' },
              { title: 'Neimax d.o.o.', category: 'Custom WordPress · Proizvodnja', image: '/Neimax.webp', href: '/bs/rad/neimax' },
              { title: 'firme.ba', category: 'Poslovni direktorij · Platforma', image: '/firme-ba.webp', href: '/bs/rad/firme-ba' },
            ].map((project, index) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <Link href={project.href} className="block w-full h-full">
                    <Image src={project.image} alt={project.title} fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500" />
                  </Link>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <Link href={project.href}>
                      <h3 className="text-xl font-semibold text-zinc-950 mb-1 group-hover:text-blue-600 transition-colors hover:text-blue-600">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-zinc-600">{project.category}</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">Kako radimo</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Dokazani, transparentan pristup isporuci iznimnih digitalnih proizvoda.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Otkrivanje', desc: 'Razumijevamo vaše ciljeve, publiku i zahtjeve projekta.' },
              { num: '02', title: 'Dizajn', desc: 'Kreiramo lijepa, korisnički centrirana sučelja.' },
              { num: '03', title: 'Razvoj', desc: 'Gradimo brzo, pristupačno i skalabilno.' },
              { num: '04', title: 'Lansiranje', desc: 'Deployamo i pružamo kontinuiranu podršku.' },
            ].map((step, index) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-blue-600 transition-all">
                <div className="text-4xl font-bold text-blue-600/20 mb-2">{step.num}</div>
                <h3 className="text-xl font-bold text-zinc-950 mb-3">{step.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/bs/proces" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
              Pogledajte cijeli proces <ArrowRightIcon className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Spremi za pokretanje projekta?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Kontaktirajte nas danas i razgovarajmo o tome kako možemo pomoći vašem poslovanju da raste online.
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
