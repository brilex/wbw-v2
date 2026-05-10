'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { QuoteIcon, StarIcon, ArrowRightIcon } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: 'WBW transformed our online presence completely. The attention to detail and technical expertise is unmatched. They delivered ahead of schedule and the results have exceeded our expectations.',
      author: 'Sarah Chen', role: 'CEO', company: 'TechFlow', rating: 5,
    },
    {
      quote: 'Working with WBW was seamless from start to finish. They delivered a beautiful, high-performing website that has dramatically improved our conversion rates. Highly recommended.',
      author: 'Michael Rodriguez', role: 'Marketing Director', company: 'Innovate Labs', rating: 5,
    },
    {
      quote: 'The team at WBW brought our vision to life with incredible design and flawless execution. Their process is transparent and collaborative — exactly what we needed.',
      author: 'Emily Watson', role: 'Founder', company: 'Nexus Digital', rating: 5,
    },
    {
      quote: 'Beyond just building a website, WBW became a strategic partner. They understood our business and translated that into a digital experience that truly represents our brand.',
      author: 'David Park', role: 'CMO', company: 'Quantum Finance', rating: 5,
    },
    {
      quote: 'The performance improvements alone paid for the project ten times over. Our team continues to be impressed by the quality and ongoing support we receive.',
      author: 'Jessica Lee', role: 'VP Engineering', company: 'LearnHub', rating: 5,
    },
    {
      quote: "Truly world-class work. WBW combines design sensibility with technical excellence in a way I haven't seen from other agencies. They're our go-to partner now.",
      author: 'Marcus Thompson', role: 'Founder', company: 'Zenith Studio', rating: 5,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-zinc-950 mb-6">
              What our clients say
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We measure our success by the success of our clients. Here's what
              they have to say about working with us.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-zinc-100">
            {[
              { value: '4.9/5', label: 'Average rating' },
              { value: '98%', label: 'Client retention' },
              { value: '120+', label: 'Projects delivered' },
              { value: '45+', label: 'Happy clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg transition-all flex flex-col">
                <QuoteIcon className="w-10 h-10 text-blue-600 mb-6" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-blue-600 fill-blue-600" />
                  ))}
                </div>

                <p className="text-zinc-700 mb-6 leading-relaxed flex-1">
                  "{testimonial.quote}"
                </p>
                <div className="pt-6 border-t border-zinc-100">
                  <p className="font-semibold text-zinc-950">{testimonial.author}</p>
                  <p className="text-sm text-zinc-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
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
              Join our happy clients
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Let's create something exceptional together.
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
