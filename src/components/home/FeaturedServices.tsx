'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CodeIcon, PaletteIcon, ShoppingCartIcon, ArrowRightIcon } from 'lucide-react';

export function FeaturedServices() {
  const services = [
    {
      icon: CodeIcon,
      title: 'Web Development',
      slug: 'web-development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and scalability.',
    },
    {
      icon: PaletteIcon,
      title: 'UI/UX Design',
      slug: 'ui-ux-design',
      description: 'Beautiful, intuitive interfaces that delight users and drive engagement through thoughtful design.',
    },
    {
      icon: ShoppingCartIcon,
      title: 'E-commerce',
      slug: 'ecommerce-development',
      description: 'Complete e-commerce solutions that convert visitors into customers with seamless shopping experiences.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
            What we do best
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-white border border-zinc-200 rounded-2xl hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/5 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-950 mb-3">{service.title}</h3>
              <p className="text-zinc-600 mb-6 leading-relaxed">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-blue-600 font-medium hover:gap-2 transition-all">
                Learn more
                <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
