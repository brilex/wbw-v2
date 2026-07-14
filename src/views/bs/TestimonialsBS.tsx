'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { QuoteIcon, StarIcon, ArrowRightIcon } from 'lucide-react';

export function TestimonialsBS() {
  const testimonials = [
    { quote: 'WBW je potpuno transformirao naš online prisustvo. Pažnja prema detaljima i tehnička stručnost su nenadmašni. Isporučili su prije roka, a rezultati su premašili naša očekivanja.', author: 'Sarah Chen', role: 'CEO', company: 'TechFlow', rating: 5 },
    { quote: 'Saradnja s WBW-om je bila besprijekorna od početka do kraja. Isporučili su prekrasnu, visoko-performantnu web stranicu koja je dramatično poboljšala naše stope konverzije. Toplo preporučujem.', author: 'Michael Rodriguez', role: 'Marketing Director', company: 'Innovate Labs', rating: 5 },
    { quote: 'WBW tim je oživio našu viziju s nevjerovatnim dizajnom i besprijekornim izvođenjem. Njihov proces je transparentan i saradnički — tačno ono što nam je trebalo.', author: 'Emily Watson', role: 'Osnivač', company: 'Nexus Digital', rating: 5 },
    { quote: 'Osim što su izgradili web stranicu, WBW je postao strateški partner. Razumjeli su naš biznis i to preveli u digitalno iskustvo koje istinski predstavlja naš brend.', author: 'David Park', role: 'CMO', company: 'Quantum Finance', rating: 5 },
    { quote: 'Sama poboljšanja performansi su isplatila projekt deset puta. Naš tim i dalje ostaje impresioniran kvalitetom i kontinuiranom podrškom koju primamo.', author: 'Jessica Lee', role: 'VP Engineering', company: 'LearnHub', rating: 5 },
    { quote: 'Zaista svjetska klasa rada. WBW kombinuje osjećaj za dizajn s tehničkom izvrsnosti na način koji nisam vidio kod drugih agencija. Sada su naš primarni partner.', author: 'Marcus Thompson', role: 'Osnivač', company: 'Zenith Studio', rating: 5 },
  ];

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Šta kažu naši klijenti
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Uspjeh naših klijenata mjerimo kao vlastiti. Evo šta oni kažu o saradnji s nama.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-zinc-100">
            {[
              { value: '4.9/5', label: 'Prosječna ocjena' },
              { value: '98%', label: 'Zadržavanje klijenata' },
              { value: '120+', label: 'Isporučenih projekata' },
              { value: '45+', label: 'Zadovoljnih klijenata' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: (index % 3) * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg transition-all flex flex-col">
                <QuoteIcon className="w-10 h-10 text-blue-600 mb-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-blue-600 fill-blue-600" />
                  ))}
                </div>
                <p className="text-zinc-700 mb-6 leading-relaxed flex-1">"{testimonial.quote}"</p>
                <div className="pt-6 border-t border-zinc-100">
                  <p className="font-semibold text-zinc-950">{testimonial.author}</p>
                  <p className="text-sm text-zinc-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Pridružite se našim zadovoljnim klijentima
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Kreirajmo nešto iznimno zajedno.
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
