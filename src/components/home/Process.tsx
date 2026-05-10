'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SearchIcon, PenToolIcon, CodeIcon, RocketIcon, ArrowRightIcon } from 'lucide-react';

export function Process() {
  const steps = [
    { number: '01', icon: SearchIcon, title: 'Discover', description: 'We dive deep into your business goals, target audience, and project requirements.' },
    { number: '02', icon: PenToolIcon, title: 'Design', description: 'Our designers craft beautiful, user-centered interfaces that align with your brand.' },
    { number: '03', icon: CodeIcon, title: 'Build', description: 'We develop your solution using cutting-edge technologies and best practices.' },
    { number: '04', icon: RocketIcon, title: 'Launch', description: 'We deploy your project and provide ongoing support to ensure success.' },
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
            Our process
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            A proven approach to delivering exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative">
              {/* Connecting line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-zinc-200" />
              )}
              <div className="relative bg-white p-8 rounded-2xl border border-zinc-200 hover:border-blue-600 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-5xl font-bold text-blue-600/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-zinc-950 mb-3">{step.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{step.description}</p>
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
            href="/process"
            className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
            View our full process
            <ArrowRightIcon className="ml-1 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
