'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { services } from '../data/services';

export function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              Services that drive results
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              From concept to launch and beyond, we provide comprehensive
              digital solutions tailored to your business needs. Our expert team
              delivers exceptional quality across every service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block bg-white p-8 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/5 transition-all h-full">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-zinc-950 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                      Learn more about {service.title}
                      <ArrowRightIcon className="ml-1 w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Recap */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
              How we work
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              A collaborative approach that ensures your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {['Discovery', 'Strategy', 'Execution', 'Growth'].map((phase, index) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-950">{phase}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/process"
              className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
              View our full process
              <ArrowRightIcon className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Let's discuss your project
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Ready to get started? Contact us today for a free consultation.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
              Start a project
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
