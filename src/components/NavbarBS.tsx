'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { servicesBS } from '../data/services-bs';
import { industriesBS } from '../data/industries-bs';

export function NavbarBS() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const pathname = usePathname();

  const trailingLinks = [
    { name: 'Rad', path: '/bs/rad' },
    { name: 'Proces', path: '/bs/proces' },
    { name: 'Blog', path: '/blog' },
    { name: 'O nama', path: '/bs/o-nama' },
    { name: 'Kontakt', path: '/bs/kontakt' },
  ];

  const isActive = (path: string) => pathname === path;
  const isServicesActive = pathname.startsWith('/bs/usluge');
  const isIndustriesActive = pathname.startsWith('/bs/industrije');

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/bs" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold tracking-tight text-zinc-950">WBW</span>
            <div className="w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/bs"
              className={`text-sm font-medium transition-colors ${isActive('/bs') ? 'text-blue-600' : 'text-zinc-600 hover:text-zinc-950'}`}>
              Naslovna
            </Link>

            {/* Usluge dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}>
              <Link
                href="/bs/usluge"
                className={`flex items-center text-sm font-medium transition-colors ${isServicesActive ? 'text-blue-600' : 'text-zinc-600 hover:text-zinc-950'}`}>
                Usluge
                <ChevronDownIcon className={`ml-1 w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-80">
                    <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-2 overflow-hidden">
                      <Link
                        href="/bs/usluge"
                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group">
                        <div className="text-sm font-semibold text-zinc-950 group-hover:text-blue-600 transition-colors">
                          Sve usluge
                        </div>
                        <div className="text-xs text-zinc-500 mt-0.5">Pogledajte sve što nudimo</div>
                      </Link>
                      <div className="my-2 border-t border-zinc-100" />
                      {services.map((service) => {
                        const bsService = servicesBS.find((s) => s.slug === service.slug);
                        const Icon = service.icon;
                        return (
                          <Link
                            key={service.slug}
                            href={`/bs/usluge/${service.slug}`}
                            className="flex items-center px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group">
                            <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                              <Icon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-zinc-950 group-hover:text-blue-600 transition-colors">
                                {bsService?.title ?? service.title}
                              </div>
                              <div className="text-xs text-zinc-500 mt-0.5">
                                {bsService?.tagline ?? service.tagline}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Industrije mega-menu */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}>
              <Link
                href="/bs/industrije"
                className={`flex items-center text-sm font-medium transition-colors ${isIndustriesActive ? 'text-blue-600' : 'text-zinc-600 hover:text-zinc-950'}`}>
                Industrije
                <ChevronDownIcon className={`ml-1 w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </Link>

              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px]">
                    <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 p-3 overflow-hidden">
                      <div className="px-3 py-2 mb-2 border-b border-zinc-100">
                        <Link href="/bs/industrije" className="flex items-center justify-between group">
                          <div>
                            <div className="text-sm font-semibold text-zinc-950 group-hover:text-blue-600 transition-colors">
                              Rad po industrijama
                            </div>
                            <div className="text-xs text-zinc-500 mt-0.5">
                              Prilagođena stručnost za svaki sektor
                            </div>
                          </div>
                          <span className="text-xs font-medium text-blue-600 group-hover:underline">
                            Vidi sve
                          </span>
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-1">
                        {industries.map((industry) => {
                          const bsIndustry = industriesBS.find((i) => i.slug === industry.slug);
                          const Icon = industry.icon;
                          return (
                            <Link
                              key={industry.slug}
                              href={`/bs/industrije/${industry.slug}`}
                              className="flex items-center px-3 py-2.5 rounded-lg hover:bg-zinc-50 transition-colors group">
                              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                                <Icon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                              </div>
                              <span className="text-sm font-medium text-zinc-700 group-hover:text-blue-600 transition-colors leading-tight">
                                {bsIndustry?.title ?? industry.title}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {trailingLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-blue-600' : 'text-zinc-600 hover:text-zinc-950'}`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/bs/kontakt"
              className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              Pokreni projekt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-600 hover:text-zinc-950"
            aria-label="Otvori meni">
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-zinc-100 bg-white max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-4 space-y-2">
              <Link
                href="/bs"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-medium ${isActive('/bs') ? 'text-blue-600' : 'text-zinc-600'}`}>
                Naslovna
              </Link>

              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center justify-between w-full py-2 text-base font-medium ${isServicesActive ? 'text-blue-600' : 'text-zinc-600'}`}>
                  Usluge
                  <ChevronDownIcon className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden">
                      <div className="pl-4 pt-2 pb-2 space-y-2 border-l-2 border-zinc-100 ml-2">
                        <Link href="/bs/usluge" onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-sm font-semibold text-zinc-950">
                          Sve usluge
                        </Link>
                        {services.map((service) => {
                          const bsService = servicesBS.find((s) => s.slug === service.slug);
                          return (
                            <Link key={service.slug} href={`/bs/usluge/${service.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm text-zinc-600 hover:text-blue-600 transition-colors">
                              {bsService?.title ?? service.title}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className={`flex items-center justify-between w-full py-2 text-base font-medium ${isIndustriesActive ? 'text-blue-600' : 'text-zinc-600'}`}>
                  Industrije
                  <ChevronDownIcon className={`w-5 h-5 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden">
                      <div className="pl-4 pt-2 pb-2 space-y-2 border-l-2 border-zinc-100 ml-2">
                        <Link href="/bs/industrije" onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-sm font-semibold text-zinc-950">
                          Sve industrije
                        </Link>
                        {industries.map((industry) => {
                          const bsIndustry = industriesBS.find((i) => i.slug === industry.slug);
                          return (
                            <Link key={industry.slug} href={`/bs/industrije/${industry.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1.5 text-sm text-zinc-600 hover:text-blue-600 transition-colors leading-snug">
                              {bsIndustry?.title ?? industry.title}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {trailingLinks.map((link) => (
                <Link key={link.path} href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium ${isActive(link.path) ? 'text-blue-600' : 'text-zinc-600'}`}>
                  {link.name}
                </Link>
              ))}

              <Link href="/bs/kontakt" onClick={() => setMobileMenuOpen(false)}
                className="block w-full mt-4 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl text-center">
                Pokreni projekt
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
