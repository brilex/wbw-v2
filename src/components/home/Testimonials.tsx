'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { QuoteIcon, ArrowRightIcon } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: 'WBW transformed our online presence completely. The attention to detail and technical expertise is unmatched.',
      author: 'Sarah Chen', role: 'CEO', company: 'TechFlow',
    },
    {
      quote: 'Working with WBW was seamless. They delivered a beautiful, high-performing website ahead of schedule.',
      author: 'Michael Rodriguez', role: 'Marketing Director', company: 'Innovate Labs',
    },
    {
      quote: 'The team at WBW brought our vision to life with incredible design and flawless execution. Highly recommended.',
      author: 'Emily Watson', role: 'Founder', company: 'Nexus Digital',
    },
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
            Client testimonials
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg transition-all">
              <QuoteIcon className="w-10 h-10 text-blue-600 mb-6" />
              <p className="text-zinc-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-zinc-950">{testimonial.author}</p>
                <p className="text-sm text-zinc-600">{testimonial.role}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12">
          <Link
            href="/testimonials"
            className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
            Read all testimonials
            <ArrowRightIcon className="ml-1 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
