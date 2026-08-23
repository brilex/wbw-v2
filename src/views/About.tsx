'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TargetIcon, HeartIcon, ZapIcon, ArrowRightIcon } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: TargetIcon,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that drive your business forward.',
    },
    {
      icon: HeartIcon,
      title: 'Client-Focused',
      description: 'Your success is our success. We build lasting partnerships based on trust.',
    },
    {
      icon: ZapIcon,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, using cutting-edge technologies and best practices.',
    },
  ];


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
              Building digital excellence since 2016
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed mb-8">
              WBW is a web development studio founded in Bosnia &amp; Herzegovina,
              specialising in custom WordPress and Next.js builds for businesses
              that need more than a template. Every project is handled personally
              — from design to deployment to SEO.
            </p>
            <p className="text-xl text-zinc-600 leading-relaxed">
              We've helped companies across the region grow their search traffic
              by up to 968%, land their first online customers within a week of
              launch, and replace generic templates with websites that actually
              convert visitors into leads.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mb-4">
              Our values
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">{value.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
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
              Let's work together
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Ready to start your next project? Get in touch and let's create something amazing.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl">
              Contact us
              <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
