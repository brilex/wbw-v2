import React from 'react';
import Link from 'next/link';
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from 'lucide-react';

export function Footer() {
  const services = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'E-commerce', path: '/services/ecommerce-development' },
    { name: 'SEO Optimization', path: '/services/seo-optimization' },
  ];

  const company = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Process', path: '/process' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold tracking-tight text-zinc-950">
                WBW
              </span>
              <div className="w-2 h-2 rounded-full bg-blue-600" />
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Building exceptional digital experiences for forward-thinking
              companies.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-sm text-zinc-600 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-sm text-zinc-600 hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-950 mb-4">
              Get in touch
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-zinc-600">info@webuildsites.net</li>
              <li className="text-sm text-zinc-600">+1 (555) 123-4567</li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-blue-600 transition-colors"
                aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-blue-600 transition-colors"
                aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a
                href="mailto:info@webuildsites.net"
                className="text-zinc-600 hover:text-blue-600 transition-colors"
                aria-label="Email">
                <MailIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-200">
          <p className="text-sm text-zinc-500 text-center">
            © {new Date().getFullYear()} WBW Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
