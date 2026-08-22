import React from 'react';
import Link from 'next/link';
import { LinkedinIcon, MailIcon } from 'lucide-react';

export function FooterBS() {
  const services = [
    { name: 'Izrada web stranica', path: '/bs/usluge/web-development' },
    { name: 'UI/UX Dizajn', path: '/bs/usluge/ui-ux-design' },
    { name: 'E-commerce', path: '/bs/usluge/ecommerce-development' },
    { name: 'SEO optimizacija', path: '/bs/usluge/seo-optimization' },
    { name: 'Izrada web stranica Sarajevo', path: '/bs/izrada-web-stranica-sarajevo' },
    { name: 'Izrada web stranica Tuzla', path: '/bs/izrada-web-stranica-tuzla' },
  ];

  const company = [
    { name: 'O nama', path: '/bs/o-nama' },
    { name: 'Naš rad', path: '/bs/rad' },
    { name: 'Proces', path: '/bs/proces' },
    { name: 'Blog', path: '/bs/blog' },
    { name: 'Cijene', path: '/bs/cijene' },
    { name: 'Recenzije', path: '/bs/recenzije' },
    { name: 'Kontakt', path: '/bs/kontakt' },
  ];

  return (
    <footer className="bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold tracking-tight text-zinc-950">WBW</span>
              <div className="w-2 h-2 rounded-full bg-blue-600" />
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Gradimo iznimna digitalna iskustva za napredna preduzeća.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 mb-4">Usluge</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-sm text-zinc-600 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 mb-4">Kompanija</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-sm text-zinc-600 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 mb-4">Kontaktirajte nas</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-zinc-600">info@webuildsites.net</li>
              <li className="text-sm text-zinc-600">+387 62 827 306</li>
            </ul>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/armin-sehic-046394b8/" target="_blank" rel="noopener noreferrer"
                className="text-zinc-600 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:info@webuildsites.net"
                className="text-zinc-600 hover:text-blue-600 transition-colors" aria-label="Email">
                <MailIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200">
          <p className="text-sm text-zinc-500 text-center">
            © {new Date().getFullYear()} WBW Agencija. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
