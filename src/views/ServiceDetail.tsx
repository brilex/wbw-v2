'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon } from 'lucide-react';
import { getServiceBySlug, services } from '../data/services';

interface Props {
  slug: string;
}

export function ServiceDetail({ slug }: Props) {
  const service = getServiceBySlug(slug)!;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_40%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors mb-8">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            All services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
              {service.tagline}
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              {service.longDescription}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center">
                Start a project
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 bg-white border-2 border-zinc-200 text-zinc-950 font-semibold rounded-xl hover:border-zinc-300 transition-colors inline-flex items-center justify-center">
                See our work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
              What's included
            </h2>
            <p className="text-xl text-zinc-600">
              Everything you need to deliver an outstanding result.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + Tech */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-950 mb-6">
                Deliverables
              </h2>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                Every engagement comes with clear, comprehensive deliverables.
              </p>
              <ul className="space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-950 mb-6">
                Technologies
              </h2>
              <p className="text-zinc-600 mb-8 leading-relaxed">
                We work with industry-leading tools and frameworks.
              </p>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-zinc-100 text-zinc-800 font-medium rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-12 text-center">
            Frequently asked
          </motion.h2>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200">
                <h3 className="text-lg font-semibold text-zinc-950 mb-3">
                  {faq.question}
                </h3>
                <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950">
              Related services
            </h2>
            <Link
              href="/services"
              className="hidden md:inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
              View all
              <ArrowRightIcon className="ml-1 w-5 h-5" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((s, index) => {
              const RelatedIcon = s.icon;
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group block p-8 bg-white border border-zinc-200 rounded-2xl hover:border-blue-600 hover:shadow-lg transition-all h-full">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <RelatedIcon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed">
                      {s.description}
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's talk about your {service.title.toLowerCase()} project.
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
