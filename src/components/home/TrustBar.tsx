'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function TrustBar() {
  const points = [
    { title: 'Hand-coded', detail: 'No AI templates, no page builders you outgrow' },
    { title: 'SEO from day one', detail: 'Built to be found, not optimised as an afterthought' },
    { title: 'Fixed pricing', detail: 'You know the cost before we start' },
    { title: 'You own everything', detail: 'Domain, hosting and source code stay yours' },
  ];

  return (
    <section className="py-16 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center">
              <div className="text-lg lg:text-xl font-bold text-zinc-950 mb-2">
                {point.title}
              </div>
              <div className="text-sm text-zinc-500 leading-relaxed">{point.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
