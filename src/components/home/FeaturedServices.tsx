'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { services } from '../../data/services';

// Lead with what actually sets us apart, not just the services every agency
// lists. Descriptions come from the services data so they can't drift.
const FEATURED_SLUGS = [
  'web-development',
  'seo-optimization',
  'wordpress-development',
  'custom-plugin-development',
  'directory-marketplace-development',
  'ecommerce-development',
];

export function FeaturedServices() {
  const featured = FEATURED_SLUGS.map((slug) =>
    services.find((s) => s.slug === slug)
  ).filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
            What we do
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            From marketing sites to custom plugins and directory platforms —
            built in-house, not outsourced.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-8 bg-white border border-zinc-200 rounded-2xl hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/5 transition-all flex flex-col">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-zinc-600 mb-6 leading-relaxed text-sm flex-1">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all text-sm">
                  Learn more
                  <ArrowRightIcon className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
            All services <ArrowRightIcon className="ml-1 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
