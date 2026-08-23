'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckIcon, ArrowRightIcon, StarIcon, ZapIcon } from 'lucide-react';
import { FaqSchema } from '../../components/FaqSchema';

const packages = [
  {
    id: 1,
    name: 'Starter',
    tagline: '5 stranica',
    price: '750 KM',
    description: 'Kompletan, profesionalan sajt — brzo urađen, urađen kako treba. Idealno za mala preduzeća koja žele ozbiljno prisustvo na internetu.',
    bonus: { months: 6, label: '6 mjeseci firme.ba Premium — besplatno' },
    features: [
      'Kompletan sajt u WordPress / Bricks Builderu',
      'Stranice: Naslovna, O nama, Usluge, Portfolio, Kontakt',
      'Copywriting za svih 5 stranica',
      'Pronalaženje i dodavanje slika',
      'WP Rocket konfigurisan za performanse',
      'Rank Math SEO podešavanje (meta tagovi, sitemap, robots.txt)',
      'Kontakt forma',
    ],
    cta: 'Pokrenite projekt',
    highlight: false,
  },
  {
    id: 2,
    name: 'Growth',
    tagline: 'Sajt + SEO temelji',
    price: '1.300 KM',
    description: 'Sve iz Starter paketa, plus kompletna SEO strategija ugrađena u sajt od prvog dana — da vas Google zaista pronađe.',
    bonus: { months: 12, label: '12 mjeseci firme.ba Premium — besplatno' },
    features: [
      'Sve iz Starter paketa',
      'Istraživanje ključnih riječi (Semrush + Google Keyword Planner)',
      'Posebna SEO stranica za vašu glavnu uslugu',
      '3 podstranice usluga bazirane na ključnim riječima',
      'Optimizacija sadržaja na svim stranicama',
      'Dinamični portfolio / galerija s admin paneom',
      '~11–13 stranica ukupno',
    ],
    cta: 'Pokrenite projekt',
    highlight: true,
  },
  {
    id: 3,
    name: 'Full Partnership',
    tagline: 'Sajt + SEO + 6 mj. upravljanja',
    price: '2.200 KM',
    description: 'Sve iz Growth paketa, plus 6 mjeseci aktivnog upravljanja. Mi vodimo sajt kao da je naš — vi se fokusirate na posao.',
    bonus: { months: 18, label: '18 mjeseci firme.ba Premium — besplatno' },
    features: [
      'Sve iz Growth paketa',
      'Mjesečni SEO monitoring (Search Console + GA4)',
      'Mjesečni izvještaj s uvidima i sljedećim koracima',
      'Nove stranice i sadržaj po potrebi',
      'Ažuriranja pluginova, sigurnosne provjere, održavanje',
      'Ako nešto ne radi — mi to rješavamo',
      'Proaktivan pristup punih 6 mjeseci',
    ],
    cta: 'Pokrenite projekt',
    highlight: false,
  },
];

const faqs = [
  {
    q: 'Kolika je cijena izrade web stranice u BiH?',
    a: 'Cijena izrade web stranice kod nas kreće od 750 KM za Starter paket od 5 stranica. Za sajt sa punom SEO strategijom cijena je 1.300 KM (Growth), a za sajt s 6 mjeseci upravljanja nakon lansiranja 2.200 KM (Full Partnership). Sve cijene su fiksne — nema skrivenih troškova.',
  },
  {
    q: 'Kolika je cijena web dizajna?',
    a: 'Web dizajn je uključen u sve naše pakete — ne naplaćujemo ga posebno. Svaka stranica se ručno dizajnira i kodira prema vašem brendu, uz copywriting i optimizaciju performansi u cijeni paketa.',
  },
  {
    q: 'Šta je firme.ba?',
    a: 'firme.ba je naš poslovni direktorij portal za Bosnu i Hercegovinu. Premium oglas vam daje veću vidljivost, istaknuto mjesto u pretrazi i napredne opcije profila.',
  },
  {
    q: 'Da li trebam platiti hosting?',
    a: 'Da — hosting i domena se vode na vašoj strani. Preporučujemo i pomažemo konfigurirati managed WordPress hosting, ali trošak je vaš. Mi se brinemo za sve ostalo.',
  },
  {
    q: 'Mogu li početi sa Starter paketom i nadograditi kasnije?',
    a: 'Apsolutno. Mnogi klijenti počnu sa Starterom i dodaju SEO ili upravljanje kasnije. Sajt gradimo tako da nadogradnja bude jednostavna.',
  },
  {
    q: 'Koliko traje isporuka?',
    a: 'Starter: 2–3 sedmice. Growth: 4–5 sedmica. Full Partnership: 5–6 sedmica za izradu, zatim počinje 6 mjeseci aktivnog upravljanja.',
  },
  {
    q: 'Da li su cijene fiksne ili se mijenjaju po projektu?',
    a: 'Ovo su fiksni paketi za tipične projekte. Ako vaše preduzeće ima specifične zahtjeve izvan gore navedenog, napravit ćemo ponudu nakon besplatne konsultacije.',
  },
];

export function PricingBS() {
  return (
    <main className="min-h-screen">
      <FaqSchema id="cijene" faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Transparentne cijene</p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Jasni paketi.<br />Bez iznenađenja.
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              Cijena izrade web stranice kod nas je fiksna i jasna od prvog dana. Svaki paket
              uključuje web dizajn, copywriting, podešavanje performansi i osnovni SEO.
              Odaberite koliko duboko želite ići.
            </p>
            <p className="mt-5 text-base font-semibold text-zinc-800">
              Svaki sajt je{' '}
              <span className="underline decoration-blue-600 decoration-2 underline-offset-4">
                ručno izrađen od nule
              </span>{' '}
              — bez AI-generisanih templeta, bez page buildera koji ćete prerasti.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, i) => (
              <motion.div key={pkg.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl border p-8 flex flex-col gap-6 ${
                  pkg.highlight
                    ? 'bg-zinc-950 border-zinc-800 shadow-2xl'
                    : 'bg-white border-zinc-200 hover:border-zinc-300 hover:shadow-lg transition-all'
                }`}>
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest flex items-center gap-1">
                      <StarIcon className="w-3 h-3" /> Najpopularnije
                    </span>
                  </div>
                )}

                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${pkg.highlight ? 'text-blue-400' : 'text-blue-600'}`}>
                    Paket {pkg.id}
                  </p>
                  <h2 className={`text-2xl font-bold mb-1 ${pkg.highlight ? 'text-white' : 'text-zinc-950'}`}>{pkg.name}</h2>
                  <p className={`text-sm ${pkg.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>{pkg.tagline}</p>
                </div>

                <div>
                  <div className={`text-5xl font-bold tracking-tight ${pkg.highlight ? 'text-white' : 'text-zinc-950'}`}>
                    {pkg.price}
                  </div>
                  <p className={`text-sm mt-2 leading-relaxed ${pkg.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {pkg.description}
                  </p>
                </div>

                {/* firme.ba bonus */}
                <div className={`flex items-start gap-3 rounded-xl p-4 ${pkg.highlight ? 'bg-blue-600/20 border border-blue-500/30' : 'bg-blue-50 border border-blue-200'}`}>
                  <ZapIcon className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? 'text-blue-400' : 'text-blue-600'}`} />
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${pkg.highlight ? 'text-blue-400' : 'text-blue-600'}`}>
                      Uključeni bonus
                    </p>
                    <p className={`text-sm font-semibold ${pkg.highlight ? 'text-white' : 'text-zinc-950'}`}>
                      {pkg.bonus.label}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.highlight ? 'bg-blue-600' : 'bg-blue-50'}`}>
                        <CheckIcon className={`w-3 h-3 ${pkg.highlight ? 'text-white' : 'text-blue-600'}`} />
                      </div>
                      <span className={`text-sm leading-snug ${pkg.highlight ? 'text-zinc-300' : 'text-zinc-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/bs/kontakt"
                  className={`group w-full text-center py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    pkg.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-zinc-950 text-white hover:bg-zinc-800'
                  }`}>
                  {pkg.cta}
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center text-sm text-zinc-500 mt-8">
            Niste sigurni koji paket odgovara? <Link href="/bs/kontakt" className="text-blue-600 font-medium hover:underline">Zakažite besplatnu konsultaciju →</Link>
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl font-bold text-zinc-950 mb-12 text-center">
            Često postavljana pitanja
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
                <h3 className="font-semibold text-zinc-950 mb-2">{faq.q}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Spremi za početak?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Recite nam o svom projektu i preporučit ćemo pravi paket.
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
